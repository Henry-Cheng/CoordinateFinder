var request = require("request");
var fs = require('fs');
var parseString = require('xml2js').parseString;
//var exec = require('child_process').exec;
var eval = require('eval');

const topNum = 100;
const fraserRankingURI = "http://ontario.compareschoolrankings.org";
const fraserRankingSecondaryPath = "/secondary/SchoolsByRankLocationName.aspx";

request(fraserRankingURI + fraserRankingSecondaryPath, function(error, response, body) {

    var xmlContent = body.replace(/\n|\r/g, "");

    var startingTab = "<!-- School List -->";
    var endingTab = "</table>";

    var matches = xmlContent.match(new RegExp(startingTab + "(.*)" + endingTab));
    var rankingTable = matches[1];

    var lastSecondTableCloseTab = rankingTable.indexOf("</table>", rankingTable.length - 1000); // remove extra closing tags at the end
    rankingTable = rankingTable.substr(0, lastSecondTableCloseTab+8);
    rankingTable = rankingTable.replace(" \& ", " ");

    
    parseString(rankingTable, function (err, result) {
        var table2dArray = [];
        // 700+ schools in ranking order
        for (row = 0; row < Math.min(topNum, result.table.tr.length); row++) {
            var tablerow = [];
            var schoolLink = "";
            // 8 fields
            for (column = 0; column < result.table.tr[0].td.length - 1; column++) {
                if (row == 0) {
                    tablerow.push(result.table.tr[row].td[column].a[0].b[0].font[0]._); // field name
                } else {
                    if (column == 3) { // school name needs special handling
                        tablerow.push(result.table.tr[row].td[column].a[0]._);
                        schoolLink = result.table.tr[row].td[column].a[0].$.href;
                    } else {
                        tablerow.push(result.table.tr[row].td[column]._);
                    }
                }    
            }
            // push the school link to current row
            if (row == 0) {
                tablerow.push("link");
                tablerow.push("path");
                tablerow.push("lableName");
                tablerow.push("lat");
                tablerow.push("lon");
            } else {
                tablerow.push(fraserRankingURI + schoolLink);
                tablerow.push(schoolLink);
                tablerow.push("(" + tablerow[0].substring(0, tablerow[0].indexOf("/")) + ") " + tablerow[3]);
            }
            table2dArray.push(tablerow);
        }
        // get school address
        getSchoolLocation(table2dArray[1][7], function(schoolLocations) {
            for (schoolIndex = 1; schoolIndex < table2dArray.length; schoolIndex++) {
                var schoolLocation = schoolLocations.slMapData.filter(function(school){ return school.sURL==table2dArray[schoolIndex][8];});
                table2dArray[schoolIndex].push(schoolLocation[0].lat);
                table2dArray[schoolIndex].push(schoolLocation[0].lon);
            }
            // conver 2d array to csv format
            writeToFile("Ontario_Ranking.csv", toCsvFormat(table2dArray));
        });
    });
});

function toCsvFormat(input) {
    return input.map(row => row.join(',')).join('\n')
}

function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, function(err) { 
        if(err) {
            return console.log(err);
        }
        console.log("File " + fileName + " was saved!");
    }); 
}

function getSchoolLocation(url, callback) {
    request(url, function(error, response, body) {
        writeToFile("School_Detail.xml", body);

        let bodyContent = body;
        var mapDataScript = body.substring(
            body.indexOf("function SchoolMapData"), 
            bodyContent.substring(bodyContent.lastIndexOf("new SchoolMapData"), bodyContent.length).indexOf(";") 
            + bodyContent.lastIndexOf("new SchoolMapData") + 1
        );
        mapDataScript = mapDataScript.concat('exports.slMapData = slMapData');
        writeToFile("School_Location.js", mapDataScript);

        var schoolLocation = eval(mapDataScript); // execute the script downloaded from url
        callback(schoolLocation);
    });
}