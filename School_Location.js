function SchoolMapData(sCode, lat, lon, sURL, sShortName, sPubOrInd, sRating, sAddToCompare, pinColor, pinDot)
    {
        this.sCode = sCode;
        this.lat = lat;
        this.lon = lon;
        this.sURL = sURL;
        this.sShortName = sShortName;
        this.sPubOrInd = sPubOrInd;
        this.sRating = sRating;
        this.sAddToCompare = sAddToCompare;
        this.pinColor = pinColor;
        this.pinDot = pinDot;
    }

    var slMapData = [];
        
      
    slMapData[0] = new SchoolMapData("663048", 52.289619,-81.641739, "/secondary/Francine_J._Wesley_Secondary_School/Kashechewan/Report_Card.aspx", "Francine J. Wesley", "First Nation","0.0", "Add", "red", "");
      
    slMapData[1] = new SchoolMapData("663492", 51.81469,-93.999748, "/secondary/Eenchokay_Birchstick_School/Pikangikum/Report_Card.aspx", "Eenchokay Birchstick", "First Nation","0.4", "Add", "red", "");
      
    slMapData[2] = new SchoolMapData("663530", 53.0715995,-93.3473597, "/secondary/Thomas_Fiddler_Memorial_School/Sandy_Lake/Report_Card.aspx", "Thomas Fiddler Memorial", "First Nation","0.0", "Add", "red", "");
      
    slMapData[3] = new SchoolMapData("663662", 45.8146104,-81.7138558, "/secondary/Wasse-Abin_Wikwemikong_High_School/Wikwemikong/Report_Card.aspx", "Wasse-Abin Wikwemikong", "First Nation","3.9", "Add", "red", "");
      
    slMapData[4] = new SchoolMapData("665401", 43.5205497,-79.6512774, "/secondary/ISNA_High_School/Mississauga/Report_Card.aspx", "ISNA", "Private","8.6", "Add", "green", "");
      
    slMapData[5] = new SchoolMapData("665670", 43.604759,-79.586173, "/secondary/Al-Risala_Academy/Mississauga/Report_Card.aspx", "Al-Risala", "Private","4.5", "Add", "orange", "");
      
    slMapData[6] = new SchoolMapData("668541", 43.62485,-79.65898, "/secondary/Safa_%5bamp%5d_Marwa_Islamic_School/Mississauga/Report_Card.aspx", "Safa & Marwa", "Private","3.1", "Add", "red", "");
      
    slMapData[7] = new SchoolMapData("668651", 46.185116,-82.825747, "/secondary/Everest_Academy/Thornhill/Report_Card.aspx", "Everest", "Private","3.5", "Add", "red", "");
      
    slMapData[8] = new SchoolMapData("683922", 43.213629,-79.8281219, "/secondary/%c3%89SAC_M%c3%a8re-Teresa/Hamilton/Report_Card.aspx", "Mère-Teresa", "Catholic","5.0", "Add", "orange", "");
      
    slMapData[9] = new SchoolMapData("685011", 46.3180916,-79.4661474, "/secondary/%c3%89cole_secondaire_catholique_Algonquin/North_Bay/Report_Card.aspx", "Algonquin", "Catholic","4.6", "Add", "orange", "");
      
    slMapData[10] = new SchoolMapData("685550", 43.6967068,-79.5207018, "/secondary/Archbishop_Romero_Catholic_Secondary_School/Toronto/Report_Card.aspx", "Archbishop Romero", "Catholic","4.7", "Add", "orange", "");
      
    slMapData[11] = new SchoolMapData("685984", 43.8953001,-78.9652366, "/secondary/All_Saints_Catholic_Secondary_School/Whitby/Report_Card.aspx", "All Saints", "Catholic","6.4", "Add", "yellow", "");
      
    slMapData[12] = new SchoolMapData("687111", 48.3751374,-89.2594158, "/secondary/St_Patrick_High_School/Thunder_Bay/Report_Card.aspx", "St Patrick", "Catholic","5.8", "Add", "orange", "");
      
    slMapData[13] = new SchoolMapData("687308", 43.7229554,-79.6524409, "/secondary/Ascension_of_Our_Lord_Secondary_School/Mississauga/Report_Card.aspx", "Ascension of Our Lord", "Catholic","5.8", "Add", "orange", "");
      
    slMapData[14] = new SchoolMapData("688088", 43.1214603,-80.2990433, "/secondary/Assumption_College_School/Brantford/Report_Card.aspx", "Assumption", "Catholic","6.3", "Add", "yellow", "");
      
    slMapData[15] = new SchoolMapData("688231", 43.3489074,-79.7847411, "/secondary/Assumption_Roman_Catholic_Secondary_School/Burlington/Report_Card.aspx", "Assumption", "Catholic","7.0", "Add", "yellow", "");
      
    slMapData[16] = new SchoolMapData("688363", 42.2940676,-83.0620242, "/secondary/Assumption_College/Windsor/Report_Card.aspx", "Assumption", "Catholic","6.9", "Add", "yellow", "");
      
    slMapData[17] = new SchoolMapData("689181", 45.4430685,-75.5962998, "/secondary/Lester_B_Pearson_Catholic_High_School/Gloucester/Report_Card.aspx", "Lester B Pearson", "Catholic","4.2", "Add", "orange", "");
      
    slMapData[18] = new SchoolMapData("689203", 45.3412193,-75.7915268, "/secondary/St_Paul_High_School/Ottawa/Report_Card.aspx", "St Paul", "Catholic","6.6", "Add", "yellow", "");
      
    slMapData[19] = new SchoolMapData("689351", 46.6572921,-80.9667015, "/secondary/Bishop_Alexander_Carter_Catholic_Secondary_School/Hanmer/Report_Card.aspx", "Bishop Alexander Carter", "Catholic","5.5", "Add", "orange", "");
      
    slMapData[20] = new SchoolMapData("689360", 43.6340868,-79.5058003, "/secondary/Bishop_Allen_Academy/Toronto/Report_Card.aspx", "Bishop Allen", "Catholic","7.1", "Add", "yellow", "");
      
    slMapData[21] = new SchoolMapData("689386", 43.2014844,-79.9959883, "/secondary/Bishop_Tonnos_Catholic_Secondary_School/Ancaster/Report_Card.aspx", "Bishop Tonnos", "Catholic","7.3", "Add", "yellow", "");
      
    slMapData[22] = new SchoolMapData("689661", 43.494028,-80.196376, "/secondary/Bishop_Macdonell_Catholic_Secondary_School/Guelph/Report_Card.aspx", "Bishop Macdonell", "Catholic","7.6", "Add", "green", "");
      
    slMapData[23] = new SchoolMapData("689726", 43.5317417,-79.8622333, "/secondary/Bishop_Paul_Francis_Reding_Secondary_School/Milton/Report_Card.aspx", "Bishop Paul Francis Reding", "Catholic","7.6", "Add", "green", "");
      
    slMapData[24] = new SchoolMapData("689750", 43.2162372,-79.784695, "/secondary/Bishop_Ryan_Catholic_Secondary_School/Hamilton/Report_Card.aspx", "Bishop Ryan", "Catholic","5.9", "Add", "orange", "");
      
    slMapData[25] = new SchoolMapData("689831", 43.6572776,-79.4336496, "/secondary/St_Mary's_Catholic_Secondary_School/Toronto/Report_Card.aspx", "St Mary's", "Catholic","6.2", "Add", "yellow", "");
      
    slMapData[26] = new SchoolMapData("689939", 45.8182891,-77.1187537, "/secondary/Bishop_Smith_Catholic_High_School/Pembroke/Report_Card.aspx", "Bishop Smith", "Catholic","7.3", "Add", "yellow", "");
      
    slMapData[27] = new SchoolMapData("690694", 43.7199054,-79.7806265, "/secondary/Notre_Dame_Catholic_Secondary_School/Brampton/Report_Card.aspx", "Notre Dame", "Catholic","6.8", "Add", "yellow", "");
      
    slMapData[28] = new SchoolMapData("690791", 43.1983077,-79.5807158, "/secondary/Blessed_Trinity_Secondary_School/Grimsby/Report_Card.aspx", "Blessed Trinity", "Catholic","6.9", "Add", "yellow", "");
      
    slMapData[29] = new SchoolMapData("690961", 43.8022248,-79.4008813, "/secondary/Brebeuf_College_School/Toronto/Report_Card.aspx", "Brebeuf", "Catholic","5.8", "Add", "orange", "");
      
    slMapData[30] = new SchoolMapData("691356", 43.8932295,-79.2587512, "/secondary/St._Brother_Andr%c3%a9_Catholic_High_School/Markham/Report_Card.aspx", "St. Brother André", "Catholic","7.0", "Add", "yellow", "");
      
    slMapData[31] = new SchoolMapData("691798", 43.6564037,-79.4518593, "/secondary/Bishop_Marrocco%2fThomas_Merton_Catholic_Secondary_S/Toronto/Report_Card.aspx", "Bishop Marrocco/Thomas Merton", "Catholic","4.4", "Add", "orange", "");
      
    slMapData[32] = new SchoolMapData("691950", 43.652247,-79.441138, "/secondary/%c3%89SC_Saint-Fr%c3%a8re-Andr%c3%a9/Toronto/Report_Card.aspx", "Saint-Frère-André", "Catholic","7.3", "Add", "yellow", "");
      
    slMapData[33] = new SchoolMapData("694134", 43.2206119,-79.7452315, "/secondary/Cardinal_Newman_Catholic_Secondary_School/Stoney_Creek/Report_Card.aspx", "Cardinal Newman", "Catholic","7.1", "Add", "yellow", "");
      
    slMapData[34] = new SchoolMapData("694193", 43.7179914,-79.2402847, "/secondary/Cardinal_Newman_Catholic_School/Toronto/Report_Card.aspx", "Cardinal Newman", "Catholic","5.5", "Add", "orange", "");
      
    slMapData[35] = new SchoolMapData("694452", 42.0426534,-82.6159312, "/secondary/Cardinal_Carter_Catholic/Leamington/Report_Card.aspx", "Cardinal Carter", "Catholic","7.4", "Add", "yellow", "");
      
    slMapData[36] = new SchoolMapData("694550", 43.7638789,-79.4087661, "/secondary/Cardinal_Carter_Academy_for_the_Arts/Toronto/Report_Card.aspx", "Cardinal Carter-Arts", "Catholic","8.7", "Add", "green", "");
      
    slMapData[37] = new SchoolMapData("694827", 45.314714,-75.8339869, "/secondary/Coll%c3%a8ge_catholique_Franco-Ouest/Nepean/Report_Card.aspx", "Franco-Ouest", "Catholic","6.3", "Add", "yellow", "");
      
    slMapData[38] = new SchoolMapData("695050", 45.3161434,-75.0883916, "/secondary/%c3%89cole_secondaire_catholique_de_Casselman/Casselman/Report_Card.aspx", "de Casselman", "Catholic","5.3", "Add", "orange", "");
      
    slMapData[39] = new SchoolMapData("695343", 43.2528432,-79.8486007, "/secondary/Cathedral_High_School/Hamilton/Report_Card.aspx", "Cathedral", "Catholic","3.4", "Add", "red", "");
      
    slMapData[40] = new SchoolMapData("695734", 42.9868785,-81.2385198, "/secondary/Catholic_Central_High_School/London/Report_Card.aspx", "Catholic Central", "Catholic","5.0", "Add", "orange", "");
      
    slMapData[41] = new SchoolMapData("695947", 43.7099944,-79.4942371, "/secondary/Chaminade_College_School/Toronto/Report_Card.aspx", "Chaminade", "Catholic","6.5", "Add", "yellow", "");
      
    slMapData[42] = new SchoolMapData("695955", 45.4434893,-75.6295139, "/secondary/Coll%c3%a8ge_Catholique_Samuel-Genest/Ottawa/Report_Card.aspx", "Samuel-Genest", "Catholic","5.6", "Add", "orange", "");
      
    slMapData[43] = new SchoolMapData("696021", 45.8330776,-77.1482075, "/secondary/%c3%89cole_secondaire_catholique_Jeanne-Lajoie%2c_pavillo/Pembroke/Report_Card.aspx", "Jeanne-Lajoie", "Catholic","8.2", "Add", "green", "");
      
    slMapData[44] = new SchoolMapData("696048", 46.577723,-81.197684, "/secondary/%c3%89cole_secondaire_Catholique_Champlain/Chelmsford/Report_Card.aspx", "Champlain", "Catholic","6.2", "Add", "yellow", "");
      
    slMapData[45] = new SchoolMapData("696056", 43.5527405,-79.7455265, "/secondary/St._Joan_of_Arc_Catholic_Secondary_School/Mississauga/Report_Card.aspx", "St. Joan of Arc", "Catholic","6.7", "Add", "yellow", "");
      
    slMapData[46] = new SchoolMapData("696392", 43.485947,-79.857193, "/secondary/Jean_Vanier_Catholic_Secondary_School/Milton/Report_Card.aspx", "Jean Vanier", "Catholic","7.3", "Add", "yellow", "");
      
    slMapData[47] = new SchoolMapData("697125", 43.6505867,-79.9090841, "/secondary/Christ_the_King_Catholic_Secondary_School/Georgetown/Report_Card.aspx", "Christ the King", "Catholic","7.3", "Add", "yellow", "");
      
    slMapData[48] = new SchoolMapData("698725", 49.4177785,-82.404388, "/secondary/%c3%89cole_secondaire_Cit%c3%a9_des_Jeunes/Kapuskasing/Report_Card.aspx", "Cité des Jeunes", "Catholic","7.1", "Add", "yellow", "");
      
    slMapData[49] = new SchoolMapData("698989", 46.4982628,-80.9938043, "/secondary/Coll%c3%a8ge_Notre-Dame/Sudbury/Report_Card.aspx", "Collège Notre-Dame", "Catholic","4.8", "Add", "orange", "");
      
    slMapData[50] = new SchoolMapData("700088", 42.297582,-83.0191673, "/secondary/Catholic_Central/Windsor/Report_Card.aspx", "Catholic Central", "Catholic","5.0", "Add", "orange", "");
      
    slMapData[51] = new SchoolMapData("701718", 48.443584,-89.228692, "/secondary/%c3%89cole_secondaire_catholique_de_La_V%c3%a9rendrye/Thunder_Bay/Report_Card.aspx", "de la Verendrye", "Catholic","5.5", "Add", "orange", "");
      
    slMapData[52] = new SchoolMapData("702935", 43.7100756,-79.4574553, "/secondary/Dante_Alighieri_Academy/Toronto/Report_Card.aspx", "Dante Alighieri", "Catholic","4.9", "Add", "orange", "");
      
    slMapData[53] = new SchoolMapData("703796", 43.1394445,-79.2387927, "/secondary/Denis_Morris_High_School/St_Catharines/Report_Card.aspx", "Denis Morris", "Catholic","6.7", "Add", "yellow", "");
      
    slMapData[54] = new SchoolMapData("703923", 43.8577892,-79.0194918, "/secondary/Archbishop_Denis_O'Connor_Catholic_High_School/Ajax/Report_Card.aspx", "Archbishop Denis O'Connor", "Catholic","5.6", "Add", "orange", "");
      
    slMapData[55] = new SchoolMapData("704253", 42.9801821,-81.609826, "/secondary/Holy_Cross_Catholic_Secondary_School/Strathroy/Report_Card.aspx", "Holy Cross", "Catholic","5.7", "Add", "orange", "");
      
    slMapData[56] = new SchoolMapData("704261", 44.279145,-78.356338, "/secondary/Holy_Cross_Catholic_Secondary_School/Peterborough/Report_Card.aspx", "Holy Cross", "Catholic","6.4", "Add", "yellow", "");
      
    slMapData[57] = new SchoolMapData("704300", 43.4723986,-79.723601, "/secondary/Holy_Trinity_Catholic_Secondary_School/Oakville/Report_Card.aspx", "Holy Trinity", "Catholic","6.3", "Add", "yellow", "");
      
    slMapData[58] = new SchoolMapData("704717", 42.277285,-83.019615, "/secondary/%c3%89cole_secondaire_catholique_E.J.Lajeunesse/Windsor/Report_Card.aspx", "E.J.Lajeunesse", "Catholic","6.1", "Add", "yellow", "");
      
    slMapData[59] = new SchoolMapData("704873", 45.478963,-75.530061, "/secondary/St_Matthew_High_School/Orl%c3%a9ans/Report_Card.aspx", "St Matthew", "Catholic","7.8", "Add", "green", "");
      
    slMapData[60] = new SchoolMapData("704920", 45.2722176,-75.2741667, "/secondary/%c3%89cole_secondaire_catholique_Embrun/Embrun/Report_Card.aspx", "Embrun", "Catholic","7.2", "Add", "yellow", "");
      
    slMapData[61] = new SchoolMapData("705004", 46.186254,-82.964822, "/secondary/%c3%89cole_secondaire_catholique_Jeunesse-Nord/Blind_River/Report_Card.aspx", "Jeunesse-Nord", "Catholic","3.8", "Add", "red", "");
      
    slMapData[62] = new SchoolMapData("705020", 48.148907,-80.031185, "/secondary/%c3%89cole_secondaire_Jean-Vanier/Kirkland_Lake/Report_Card.aspx", "Jean-Vanier", "Catholic","4.5", "Add", "orange", "");
      
    slMapData[63] = new SchoolMapData("705110", 46.499138,-80.9873002, "/secondary/%c3%89cole_secondaire_du_Sacr%c3%a9-Coeur/Sudbury/Report_Card.aspx", "Sacré-Coeur", "Catholic","4.7", "Add", "orange", "");
      
    slMapData[64] = new SchoolMapData("705233", 45.3997752,-75.642336, "/secondary/%c3%89cole_secondaire_catholique_Franco-Cit%c3%a9/Ottawa/Report_Card.aspx", "Franco-Cité", "Catholic","6.4", "Add", "yellow", "");
      
    slMapData[65] = new SchoolMapData("705314", 45.4679496,-75.4574738, "/secondary/%c3%89cole_secondaire_catholique_B%c3%a9atrice-Desloges/Orl%c3%a9ans/Report_Card.aspx", "Béatrice-Desloges", "Catholic","7.6", "Add", "green", "");
      
    slMapData[66] = new SchoolMapData("705357", 43.9650249,-79.4501923, "/secondary/%c3%89SC_Renaissance/Aurora/Report_Card.aspx", "Renaissance", "Catholic","7.5", "Add", "yellow", "");
      
    slMapData[67] = new SchoolMapData("705438", 43.148444,-80.7168727, "/secondary/%c3%89cole_secondaire_catholique_Notre-Dame/Woodstock/Report_Card.aspx", "Notre-Dame", "Catholic","0.0", "Add", "red", "");
      
    slMapData[68] = new SchoolMapData("706477", 43.9183785,-78.958631, "/secondary/%c3%89SC_Saint-Charles-Garnier/Whitby/Report_Card.aspx", "Saint-Charles-Garnier", "Catholic","7.0", "Add", "yellow", "");
      
    slMapData[69] = new SchoolMapData("706523", 42.3219514,-82.9742616, "/secondary/F_J_Brennan_Catholic/Windsor/Report_Card.aspx", "F J Brennan", "Catholic","7.7", "Add", "green", "");
      
    slMapData[70] = new SchoolMapData("706809", 43.8492323,-79.2795886, "/secondary/Father_Michael_McGivney_Catholic_Academy_High_Scho/Markham/Report_Card.aspx", "Father Michael McGivney", "Catholic","8.0", "Add", "green", "");
      
    slMapData[71] = new SchoolMapData("706957", 43.5831652,-79.636297, "/secondary/Father_Michael_Goetz_Secondary_School/Mississauga/Report_Card.aspx", "Father Michael Goetz", "Catholic","6.2", "Add", "yellow", "");
      
    slMapData[72] = new SchoolMapData("707015", 42.3919204,-82.2945544, "/secondary/%c3%89cole_secondaire_catholique_%c3%89cole_secondaire_de_Pa/Pain_Court/Report_Card.aspx", "Pain Court", "Catholic","4.0", "Add", "red", "");
      
    slMapData[73] = new SchoolMapData("707589", 43.7468043,-79.5836764, "/secondary/Father_Henry_Carr_Catholic_Secondary_School/Toronto/Report_Card.aspx", "Father Henry Carr", "Catholic","5.6", "Add", "orange", "");
      
    slMapData[74] = new SchoolMapData("707708", 43.8065812,-79.2742223, "/secondary/Francis_Libermann_Catholic_High_School/Toronto/Report_Card.aspx", "Francis Libermann", "Catholic","6.6", "Add", "yellow", "");
      
    slMapData[75] = new SchoolMapData("708500", 43.015268,-81.2316321, "/secondary/%c3%89cole_secondaire_catholique_%c3%89cole_secondaire_Monse/London/Report_Card.aspx", "Monseigneur-Bruyère", "Catholic","7.0", "Add", "yellow", "");
      
    slMapData[76] = new SchoolMapData("710083", 43.9115708,-78.9347723, "/secondary/Father_Leo_J_Austin_Catholic_Secondary_School/Whitby/Report_Card.aspx", "Father Leo J Austin", "Catholic","6.9", "Add", "yellow", "");
      
    slMapData[77] = new SchoolMapData("710660", 46.3723649,-79.9282508, "/secondary/%c3%89cole_secondaire_Franco-Cit%c3%a9/Sturgeon_Falls/Report_Card.aspx", "Franco-Cité", "Catholic","5.3", "Add", "orange", "");
      
    slMapData[78] = new SchoolMapData("710903", 45.465981,-75.52414, "/secondary/%c3%89cole_secondaire_catholique_Garneau/Gloucester/Report_Card.aspx", "Garneau", "Catholic","7.2", "Add", "yellow", "");
      
    slMapData[79] = new SchoolMapData("711098", 44.10738,-79.578705, "/secondary/Holy_Trinity_High_School/Bradford/Report_Card.aspx", "Holy Trinity", "Catholic","5.3", "Add", "orange", "");
      
    slMapData[80] = new SchoolMapData("711110", 49.6865049,-83.667038, "/secondary/%c3%89cole_secondaire_Hearst/Hearst/Report_Card.aspx", "Hearst", "Catholic","7.4", "Add", "yellow", "");
      
    slMapData[81] = new SchoolMapData("713740", 45.6068701,-74.6254454, "/secondary/%c3%89cole_secondaire_catholique_r%c3%a9gionale_de_Hawkesbur/Hawkesbury/Report_Card.aspx", "Hawkesbury", "Catholic","4.6", "Add", "orange", "");
      
    slMapData[82] = new SchoolMapData("715190", 45.054748,-74.66068, "/secondary/Holy_Trinity_Catholic_Secondary_School/Cornwall/Report_Card.aspx", "Holy Trinity", "Catholic","5.9", "Add", "orange", "");
      
    slMapData[83] = new SchoolMapData("715247", 43.2023046,-79.218401, "/secondary/Holy_Cross_Secondary_School/St_Catharines/Report_Card.aspx", "Holy Cross", "Catholic","6.5", "Add", "yellow", "");
      
    slMapData[84] = new SchoolMapData("715298", 44.257301,-76.6370525, "/secondary/Holy_Cross_Catholic_Secondary_School/Kingston/Report_Card.aspx", "Holy Cross", "Catholic","6.3", "Add", "yellow", "");
      
    slMapData[85] = new SchoolMapData("715824", 42.2764573,-83.0334547, "/secondary/Holy_Names_High_School/Windsor/Report_Card.aspx", "Holy Names", "Catholic","7.8", "Add", "green", "");
      
    slMapData[86] = new SchoolMapData("718114", 43.7329555,-79.7167226, "/secondary/Holy_Name_of_Mary_Secondary_School/Brampton/Report_Card.aspx", "Holy Name of Mary", "Catholic","7.5", "Add", "yellow", "");
      
    slMapData[87] = new SchoolMapData("720232", 42.8622803,-80.2711588, "/secondary/Holy_Trinity_Catholic_High_School/Simcoe/Report_Card.aspx", "Holy Trinity", "Catholic","7.1", "Add", "yellow", "");
      
    slMapData[88] = new SchoolMapData("720240", 43.8978466,-78.7717314, "/secondary/Holy_Trinity_Catholic_Secondary_School/Courtice/Report_Card.aspx", "Holy Trinity", "Catholic","6.3", "Add", "yellow", "");
      
    slMapData[89] = new SchoolMapData("720488", 43.7692524,-79.6077588, "/secondary/Holy_Cross_Catholic_Academy_High_School/Woodbridge/Report_Card.aspx", "Holy Cross", "Catholic","4.3", "Add", "orange", "");
      
    slMapData[90] = new SchoolMapData("721085", 45.4112097,-75.6792858, "/secondary/Immaculata_High_School/Ottawa/Report_Card.aspx", "Immaculata", "Catholic","6.7", "Add", "yellow", "");
      
    slMapData[91] = new SchoolMapData("722790", 43.5220671,-79.6493601, "/secondary/Iona_Secondary_School/Mississauga/Report_Card.aspx", "Iona", "Catholic","7.0", "Add", "yellow", "");
      
    slMapData[92] = new SchoolMapData("723096", 43.7626766,-79.4935372, "/secondary/James_Cardinal_McGuigan_Catholic_High_School/Toronto/Report_Card.aspx", "James Cardinal McGuigan", "Catholic","5.1", "Add", "orange", "");
      
    slMapData[93] = new SchoolMapData("723428", 43.7378088,-79.2595052, "/secondary/Jean_Vanier_Catholic_Secondary_School/Toronto/Report_Card.aspx", "Jean Vanier", "Catholic","5.2", "Add", "orange", "");
      
    slMapData[94] = new SchoolMapData("723630", 44.4899744,-80.2074703, "/secondary/Jean_Vanier_Catholic_High_School/Collingwood/Report_Card.aspx", "Jean Vanier", "Catholic","5.0", "Add", "orange", "");
      
    slMapData[95] = new SchoolMapData("724157", 49.069739,-81.015418, "/secondary/%c3%89cole_catholique_Nouveau_Regard_-_Pavillon_Jeunesse_Nord/Cochrane/Report_Card.aspx", "Nouveau Regard - Jeunesse Nord", "Catholic","3.6", "Add", "red", "");
      
    slMapData[96] = new SchoolMapData("724513", 43.0081831,-81.2099757, "/secondary/John_Paul_II_Catholic_Secondary_School/London/Report_Card.aspx", "John Paul II", "Catholic","5.5", "Add", "orange", "");
      
    slMapData[97] = new SchoolMapData("724564", 43.6123036,-79.6210677, "/secondary/John_Cabot_Catholic_Secondary_School/Mississauga/Report_Card.aspx", "John Cabot", "Catholic","6.8", "Add", "yellow", "");
      
    slMapData[98] = new SchoolMapData("724742", 45.3081958,-75.8998052, "/secondary/Holy_Trinity_Catholic_High_School/Kanata/Report_Card.aspx", "Holy Trinity", "Catholic","8.6", "Add", "green", "");
      
    slMapData[99] = new SchoolMapData("724777", 45.3223521,-75.9249758, "/secondary/All_Saints_Catholic_High_School/Kanata/Report_Card.aspx", "All Saints", "Catholic","7.9", "Add", "green", "");
      
    slMapData[100] = new SchoolMapData("725684", 45.0228317,-74.7134564, "/secondary/%c3%89cole_secondaire_catholique_La_Citadelle/Cornwall/Report_Card.aspx", "La Citadelle", "Catholic","6.1", "Add", "yellow", "");
      
    slMapData[101] = new SchoolMapData("726087", 42.8963345,-79.242824, "/secondary/Lakeshore_Catholic_High_School/Port_Colborne/Report_Card.aspx", "Lakeshore", "Catholic","6.1", "Add", "yellow", "");
      
    slMapData[102] = new SchoolMapData("728055", 43.7406216,-79.4096304, "/secondary/Loretto_Abbey_Catholic_Secondary_School/Toronto/Report_Card.aspx", "Loretto Abbey", "Catholic","7.1", "Add", "yellow", "");
      
    slMapData[103] = new SchoolMapData("728063", 43.6761016,-79.4434692, "/secondary/Loretto_College_School/Toronto/Report_Card.aspx", "Loretto", "Catholic","4.0", "Add", "red", "");
      
    slMapData[104] = new SchoolMapData("728330", 45.5449197,-75.2923989, "/secondary/%c3%89cole_secondaire_catholique_L'Escale/Rockland/Report_Card.aspx", "L'Escale", "Catholic","7.4", "Add", "yellow", "");
      
    slMapData[105] = new SchoolMapData("728632", 43.96402,-79.453916, "/secondary/Cardinal_Carter_Secondary_School/Aurora/Report_Card.aspx", "Cardinal Carter", "Catholic","7.1", "Add", "yellow", "");
      
    slMapData[106] = new SchoolMapData("728772", 42.314367,-82.86314, "/secondary/%c3%89cole_secondaire_catholique_l'Essor/Tecumseh/Report_Card.aspx", "l'Essor", "Catholic","5.3", "Add", "orange", "");
      
    slMapData[107] = new SchoolMapData("729019", 43.728316,-79.4777464, "/secondary/Madonna_Catholic_Secondary_School/Toronto/Report_Card.aspx", "Madonna", "Catholic","5.3", "Add", "orange", "");
      
    slMapData[108] = new SchoolMapData("730653", 43.7069565,-79.4099081, "/secondary/Marshall_McLuhan_Catholic_Secondary_School/Toronto/Report_Card.aspx", "Marshall McLuhan", "Catholic","6.1", "Add", "yellow", "");
      
    slMapData[109] = new SchoolMapData("730882", 43.8138313,-79.3027108, "/secondary/Mary_Ward_Catholic_Secondary_School/Toronto/Report_Card.aspx", "Mary Ward", "Catholic","6.9", "Add", "yellow", "");
      
    slMapData[110] = new SchoolMapData("730963", 46.4972774,-80.9944084, "/secondary/Marymount_Academy_Catholic_School/Sudbury/Report_Card.aspx", "Marymount", "Catholic","8.3", "Add", "green", "");
      
    slMapData[111] = new SchoolMapData("731820", 43.6599913,-79.5831033, "/secondary/Michael_Power%2fSt_Joseph_High_School/Toronto/Report_Card.aspx", "Michael Power/St Joseph", "Catholic","7.0", "Add", "yellow", "");
      
    slMapData[112] = new SchoolMapData("731951", 43.5959025,-79.5159478, "/secondary/Father_John_Redmond_Catholic_Secondary_School/Toronto/Report_Card.aspx", "Father John Redmond", "Catholic","7.9", "Add", "green", "");
      
    slMapData[113] = new SchoolMapData("732320", 43.3426205,-80.2914664, "/secondary/Monsignor_Doyle_Catholic_Secondary_School/Cambridge/Report_Card.aspx", "Monsignor Doyle", "Catholic","5.4", "Add", "orange", "");
      
    slMapData[114] = new SchoolMapData("732443", 43.7215905,-79.5714551, "/secondary/Monsignor_Percy_Johnson_Catholic_High_School/Toronto/Report_Card.aspx", "Monsignor Percy Johnson", "Catholic","4.3", "Add", "orange", "");
      
    slMapData[115] = new SchoolMapData("733024", 43.8087352,-79.2142627, "/secondary/Blessed_Mother_Teresa_Catholic_Secondary_School/Toronto/Report_Card.aspx", "Blessed Mother Teresa", "Catholic","5.8", "Add", "orange", "");
      
    slMapData[116] = new SchoolMapData("733032", 43.0488514,-81.253265, "/secondary/Mother_Teresa_Catholic_Secondary_School/London/Report_Card.aspx", "Mother Teresa", "Catholic","7.9", "Add", "green", "");
      
    slMapData[117] = new SchoolMapData("733067", 45.2504439,-75.3542182, "/secondary/St._Thomas_Aquinas_Catholic_High_School/Russell/Report_Card.aspx", "St. Thomas Aquinas", "Catholic","7.9", "Add", "green", "");
      
    slMapData[118] = new SchoolMapData("733288", 45.283463,-75.744857, "/secondary/Mother_Teresa_High_School/Nepean/Report_Card.aspx", "Mother Teresa", "Catholic","7.2", "Add", "yellow", "");
      
    slMapData[119] = new SchoolMapData("733458", 43.7857927,-79.4236565, "/secondary/%c3%89SC_Monseigneur-de-Charbonnel/Toronto/Report_Card.aspx", "Monseigneur-de-Charbonnel", "Catholic","5.9", "Add", "orange", "");
      
    slMapData[120] = new SchoolMapData("734080", 43.6805065,-79.2838853, "/secondary/Neil_McNeil_High_School/Toronto/Report_Card.aspx", "Neil McNeil", "Catholic","7.0", "Add", "yellow", "");
      
    slMapData[121] = new SchoolMapData("735060", 43.879705,-78.8428971, "/secondary/Monsignor_John_Pereyma_Catholic_Secondary_School/Oshawa/Report_Card.aspx", "Monsignor John Pereyma", "Catholic","5.4", "Add", "orange", "");
      
    slMapData[122] = new SchoolMapData("736163", 42.3182249,-82.9116501, "/secondary/St_Joseph's/Windsor/Report_Card.aspx", "St Joseph's", "Catholic","6.8", "Add", "yellow", "");
      
    slMapData[123] = new SchoolMapData("736457", 45.1421917,-76.1582563, "/secondary/Notre_Dame_Catholic_High_School/Carleton_Place/Report_Card.aspx", "Notre Dame", "Catholic","6.6", "Add", "yellow", "");
      
    slMapData[124] = new SchoolMapData("738050", 43.8829885,-79.0281786, "/secondary/Notre_Dame_Catholic_Secondary_School/Ajax/Report_Card.aspx", "Notre Dame", "Catholic","6.3", "Add", "yellow", "");
      
    slMapData[125] = new SchoolMapData("738115", 43.6808546,-79.2929805, "/secondary/Notre_Dame_Catholic_High_School/Toronto/Report_Card.aspx", "Notre Dame", "Catholic","7.7", "Add", "green", "");
      
    slMapData[126] = new SchoolMapData("738271", 43.3794171,-79.8320339, "/secondary/Notre_Dame_Roman_Catholic_Secondary_School/Burlington/Report_Card.aspx", "Notre Dame", "Catholic","6.5", "Add", "yellow", "");
      
    slMapData[127] = new SchoolMapData("740195", 42.9995632,-79.2463012, "/secondary/Notre_Dame_College_School/Welland/Report_Card.aspx", "Notre Dame", "Catholic","6.2", "Add", "yellow", "");
      
    slMapData[128] = new SchoolMapData("740390", 44.3956099,-79.7165693, "/secondary/%c3%89SC_Nouvelle-Alliance/Barrie/Report_Card.aspx", "Nouvelle-Alliance", "Catholic","5.4", "Add", "orange", "");
      
    slMapData[129] = new SchoolMapData("740454", 48.4851714,-81.3403337, "/secondary/O'Gorman_High_School/Timmins/Report_Card.aspx", "O'Gorman", "Catholic","3.7", "Add", "red", "");
      
    slMapData[130] = new SchoolMapData("741310", 43.9107395,-78.8911173, "/secondary/Monsignor_Paul_Dwyer_Catholic_High_School/Oshawa/Report_Card.aspx", "Monsignor Paul Dwyer", "Catholic","5.1", "Add", "orange", "");
      
    slMapData[131] = new SchoolMapData("742333", 43.5730695,-79.7738828, "/secondary/Our_Lady_of_Mount_Carmel_Secondary_School/Mississauga/Report_Card.aspx", "Our Lady of Mount Carmel", "Catholic","7.9", "Add", "green", "");
      
    slMapData[132] = new SchoolMapData("745529", 43.5488041,-80.2680115, "/secondary/Our_Lady_of_Lourdes_Catholic_School/Guelph/Report_Card.aspx", "Our Lady of Lourdes", "Catholic","7.8", "Add", "green", "");
      
    slMapData[133] = new SchoolMapData("748528", 44.2132409,-79.4604468, "/secondary/Our_Lady_of_the_Lake_Catholic_College_High_School/Keswick/Report_Card.aspx", "Our Lady of the Lake", "Catholic","5.0", "Add", "orange", "");
      
    slMapData[134] = new SchoolMapData("749813", 43.7877653,-79.6822526, "/secondary/Cardinal_Ambrozic_Catholic_Secondary_School/Brampton/Report_Card.aspx", "Cardinal Ambrozic", "Catholic","7.4", "Add", "yellow", "");
      
    slMapData[135] = new SchoolMapData("750085", 44.2694915,-76.5234065, "/secondary/%c3%89cole_secondaire_catholique_Marie-Rivier/Kingston/Report_Card.aspx", "Marie-Rivier", "Catholic","8.9", "Add", "green", "");
      
    slMapData[136] = new SchoolMapData("751073", 43.4240994,-80.3801306, "/secondary/%c3%89SC_P%c3%a8re-Ren%c3%a9-de-Galin%c3%a9e/Cambridge/Report_Card.aspx", "Père-René-de-Galinée", "Catholic","7.0", "Add", "yellow", "");
      
    slMapData[137] = new SchoolMapData("751103", 44.6367612,-79.4271442, "/secondary/Patrick_Fogarty_Secondary_School/Orillia/Report_Card.aspx", "Patrick Fogarty", "Catholic","6.4", "Add", "yellow", "");
      
    slMapData[138] = new SchoolMapData("751430", 43.6242712,-79.6264392, "/secondary/Philip_Pocock_Catholic_Secondary_School/Mississauga/Report_Card.aspx", "Philip Pocock", "Catholic","7.3", "Add", "yellow", "");
      
    slMapData[139] = new SchoolMapData("751502", 45.4206395,-75.2093214, "/secondary/St_Francis_Xavier_Catholic_High_School/Hammond/Report_Card.aspx", "St Francis Xavier", "Catholic","7.4", "Add", "yellow", "");
      
    slMapData[140] = new SchoolMapData("751537", 43.7903066,-79.1979798, "/secondary/Pope_John_Paul_II_Catholic_Secondary_School/Toronto/Report_Card.aspx", "Pope John Paul II", "Catholic","6.5", "Add", "yellow", "");
      
    slMapData[141] = new SchoolMapData("751898", 43.1599708,-80.288933, "/secondary/St_John's_College/Brantford/Report_Card.aspx", "St John's", "Catholic","6.3", "Add", "yellow", "");
      
    slMapData[142] = new SchoolMapData("752720", 45.535648,-74.999573, "/secondary/%c3%89cole_secondaire_catholique_de_Plantagenet/Plantagenet/Report_Card.aspx", "Plantagenet", "Catholic","6.8", "Add", "yellow", "");
      
    slMapData[143] = new SchoolMapData("752827", 42.8998142,-81.2051193, "/secondary/Regina_Mundi_College/London/Report_Card.aspx", "Regina Mundi", "Catholic","4.0", "Add", "red", "");
      
    slMapData[144] = new SchoolMapData("752908", 45.3515498,-74.7229846, "/secondary/%c3%89cole_secondaire_catholique_Le_Relais/Alexandria/Report_Card.aspx", "Le Relais", "Catholic","5.4", "Add", "orange", "");
      
    slMapData[145] = new SchoolMapData("752932", 44.2438328,-76.4951427, "/secondary/Regiopolis%2fNotre-Dame_Catholic_High_School/Kingston/Report_Card.aspx", "Regiopolis/Notre-Dame", "Catholic","7.2", "Add", "yellow", "");
      
    slMapData[146] = new SchoolMapData("753009", 43.4406861,-80.5488781, "/secondary/Resurrection_Catholic_Secondary_School/Kitchener/Report_Card.aspx", "Resurrection", "Catholic","7.6", "Add", "green", "");
      
    slMapData[147] = new SchoolMapData("753211", 43.8787291,-79.8550873, "/secondary/Robert_F_Hall_Catholic_Secondary_School/Caledon_East/Report_Card.aspx", "Robert F Hall", "Catholic","7.0", "Add", "yellow", "");
      
    slMapData[148] = new SchoolMapData("756709", 44.0570459,-79.4389968, "/secondary/Sacred_Heart_Catholic_High_School/Newmarket/Report_Card.aspx", "Sacred Heart", "Catholic","7.3", "Add", "yellow", "");
      
    slMapData[149] = new SchoolMapData("758231", 45.273199,-75.897589, "/secondary/%c3%89S_C_Paul-Desmarais/Ottawa/Report_Card.aspx", "Paul-Desmarais", "Catholic","7.7", "Add", "green", "");
      
    slMapData[150] = new SchoolMapData("759430", 44.115708,-81.1857736, "/secondary/Sacred_Heart_High_School/Walkerton/Report_Card.aspx", "Sacred Heart", "Catholic","6.3", "Add", "yellow", "");
      
    slMapData[151] = new SchoolMapData("759970", 45.2641044,-75.9105301, "/secondary/Sacred_Heart_High_School/Stittsville/Report_Card.aspx", "Sacred Heart", "Catholic","7.7", "Add", "green", "");
      
    slMapData[152] = new SchoolMapData("761182", 43.3417174,-79.8024073, "/secondary/Corpus_Christi_Catholic_Secondary_School_Secondary/Burlington/Report_Card.aspx", "Corpus Christi", "Catholic","7.3", "Add", "yellow", "");
      
    slMapData[153] = new SchoolMapData("761710", 43.1173295,-79.1107679, "/secondary/Saint_Paul_High_School/Niagara_Falls/Report_Card.aspx", "Saint Paul", "Catholic","6.4", "Add", "yellow", "");
      
    slMapData[154] = new SchoolMapData("763602", 43.016604,-81.322979, "/secondary/St._Andre_Bessette_Secondary_School/London/Report_Card.aspx", "St. Andre Bessette", "Catholic","7.0", "Add", "yellow", "");
      
    slMapData[155] = new SchoolMapData("763659", 46.3211918,-79.4572241, "/secondary/St_Joseph-Scollard_Hall_Secondary_School/North_Bay/Report_Card.aspx", "St Joseph-Scollard Hall", "Catholic","6.6", "Add", "yellow", "");
      
    slMapData[156] = new SchoolMapData("763772", 43.7507857,-79.3165243, "/secondary/Senator_O'Connor_College_School/Toronto/Report_Card.aspx", "Senator O'Connor", "Catholic","5.6", "Add", "orange", "");
      
    slMapData[157] = new SchoolMapData("764914", 45.3275969,-75.7801519, "/secondary/St_Joseph_High_School/Nepean/Report_Card.aspx", "St Joseph", "Catholic","8.3", "Add", "green", "");
      
    slMapData[158] = new SchoolMapData("765708", 43.8763537,-79.3584267, "/secondary/St_Augustine_Catholic_High_School/Markham/Report_Card.aspx", "St Augustine", "Catholic","8.8", "Add", "green", "");
      
    slMapData[159] = new SchoolMapData("767255", 43.5562418,-79.7191697, "/secondary/St_Aloysius_Gonzaga_Secondary_School/Mississauga/Report_Card.aspx", "St Aloysius Gonzaga", "Catholic","8.2", "Add", "green", "");
      
    slMapData[160] = new SchoolMapData("771473", 46.5944577,-81.0091456, "/secondary/%c3%89cole_secondaire_catholique_l'Horizon/Val_Caron/Report_Card.aspx", "l'Horizon", "Catholic","4.1", "Add", "orange", "");
      
    slMapData[161] = new SchoolMapData("771520", 42.3092405,-82.8885235, "/secondary/St_Anne/Tecumseh/Report_Card.aspx", "St Anne", "Catholic","8.0", "Add", "green", "");
      
    slMapData[162] = new SchoolMapData("771686", 43.617305,-81.539327, "/secondary/St_Anne's_Catholic_School/Clinton/Report_Card.aspx", "St Anne's", "Catholic","6.6", "Add", "yellow", "");
      
    slMapData[163] = new SchoolMapData("773050", 44.025096,-79.803761, "/secondary/St_Thomas_Aquinas_Catholic_Secondary_School/Tottenham/Report_Card.aspx", "St Thomas Aquinas", "Catholic","5.9", "Add", "orange", "");
      
    slMapData[164] = new SchoolMapData("773662", 43.07011,-79.143984, "/secondary/Saint_Michael_High_School/Niagara_Falls/Report_Card.aspx", "Saint Michael", "Catholic","7.2", "Add", "yellow", "");
      
    slMapData[165] = new SchoolMapData("775606", 43.6581437,-79.7662804, "/secondary/St_Augustine_Secondary_School/Brampton/Report_Card.aspx", "St Augustine", "Catholic","5.7", "Add", "orange", "");
      
    slMapData[166] = new SchoolMapData("776076", 46.517534,-84.3358708, "/secondary/St_Mary's_College/Sault_Ste._Marie/Report_Card.aspx", "St Mary's", "Catholic","5.0", "Add", "orange", "");
      
    slMapData[167] = new SchoolMapData("776360", 43.7268432,-79.5332766, "/secondary/St_Basil_The_Great_College/Toronto/Report_Card.aspx", "St Basil The Great", "Catholic","5.8", "Add", "orange", "");
      
    slMapData[168] = new SchoolMapData("776599", 44.5750797,-80.9350404, "/secondary/St_Mary's_High_School/Owen_Sound/Report_Card.aspx", "St Mary's", "Catholic","5.0", "Add", "orange", "");
      
    slMapData[169] = new SchoolMapData("776726", 43.3750829,-80.304357, "/secondary/St_Benedict_Catholic_Secondary_School/Cambridge/Report_Card.aspx", "St Benedict", "Catholic","5.7", "Add", "orange", "");
      
    slMapData[170] = new SchoolMapData("777196", 46.4357858,-80.9842629, "/secondary/St_Benedict_Catholic_Secondary_School/Sudbury/Report_Card.aspx", "St Benedict", "Catholic","7.8", "Add", "green", "");
      
    slMapData[171] = new SchoolMapData("782017", 42.9983057,-79.2422054, "/secondary/%c3%89SC_Jean-Vanier/Welland/Report_Card.aspx", "Jean-Vanier", "Catholic","6.1", "Add", "yellow", "");
      
    slMapData[172] = new SchoolMapData("783358", 46.516034,-80.9261049, "/secondary/St_Charles_College/Sudbury/Report_Card.aspx", "St Charles", "Catholic","6.0", "Add", "yellow", "");
      
    slMapData[173] = new SchoolMapData("784979", 43.6720551,-79.8061672, "/secondary/St._Roch_Catholic_Secondary_School/Brampton/Report_Card.aspx", "St. Roch", "Catholic","7.2", "Add", "yellow", "");
      
    slMapData[174] = new SchoolMapData("786217", 43.4849929,-80.5283806, "/secondary/St_David_Catholic_Secondary_School/Waterloo/Report_Card.aspx", "St David", "Catholic","7.0", "Add", "yellow", "");
      
    slMapData[175] = new SchoolMapData("786691", 45.0478623,-79.2965566, "/secondary/St_Dominic_Catholic_Secondary_School/Bracebridge/Report_Card.aspx", "St Dominic", "Catholic","5.9", "Add", "orange", "");
      
    slMapData[176] = new SchoolMapData("788112", 43.8021893,-79.4577221, "/secondary/St_Elizabeth_Catholic_High_School/Thornhill/Report_Card.aspx", "St Elizabeth", "Catholic","6.8", "Add", "yellow", "");
      
    slMapData[177] = new SchoolMapData("788511", 43.6935306,-79.8300389, "/secondary/St_Edmund_Campion_Secondary_School/Brampton/Report_Card.aspx", "St  Edmund Campion", "Catholic","6.9", "Add", "yellow", "");
      
    slMapData[178] = new SchoolMapData("790001", 43.6141907,-79.7449101, "/secondary/%c3%89SC_Sainte-Famille/Mississauga/Report_Card.aspx", "Sainte-Famille", "Catholic","6.9", "Add", "yellow", "");
      
    slMapData[179] = new SchoolMapData("790818", 43.1938063,-79.2522171, "/secondary/St_Francis_Secondary_School/St_Catharines/Report_Card.aspx", "St Francis", "Catholic","6.7", "Add", "yellow", "");
      
    slMapData[180] = new SchoolMapData("791601", 42.980066,-82.354935, "/secondary/%c3%89cole_secondaire_catholique_%c3%89cole_secondaire_Saint/Sarnia/Report_Card.aspx", "Saint-François-Xavier", "Catholic","4.2", "Add", "orange", "");
      
    slMapData[181] = new SchoolMapData("792594", 43.6118635,-79.666343, "/secondary/St_Francis_Xavier_Secondary_School/Mississauga/Report_Card.aspx", "St Francis Xavier", "Catholic","7.6", "Add", "green", "");
      
    slMapData[182] = new SchoolMapData("798010", 43.4459497,-79.7335712, "/secondary/St_Ignatius_of_Loyola_Secondary_School/Oakville/Report_Card.aspx", "St Ignatius of Loyola", "Catholic","7.5", "Add", "yellow", "");
      
    slMapData[183] = new SchoolMapData("798118", 43.5440929,-79.6872638, "/secondary/Loyola_Catholic_Secondary_School/Mississauga/Report_Card.aspx", "Loyola", "Catholic","6.5", "Add", "yellow", "");
      
    slMapData[184] = new SchoolMapData("798193", 48.4525,-89.1951209, "/secondary/St_Ignatius_High_School/Thunder_Bay/Report_Card.aspx", "St Ignatius", "Catholic","6.7", "Add", "yellow", "");
      
    slMapData[185] = new SchoolMapData("798690", 43.5591187,-80.2339026, "/secondary/St_James_Catholic_School/Guelph/Report_Card.aspx", "St James", "Catholic","5.7", "Add", "orange", "");
      
    slMapData[186] = new SchoolMapData("799912", 43.8345411,-79.5610464, "/secondary/St_Jean_de_Brebeuf/Woodbridge/Report_Card.aspx", "St Jean de Brebeuf", "Catholic","6.2", "Add", "yellow", "");
      
    slMapData[187] = new SchoolMapData("800430", 43.2020459,-79.8632569, "/secondary/St_Jean_de_Brebeuf_Secondary_School/Hamilton/Report_Card.aspx", "St Jean de Brebeuf", "Catholic","5.9", "Add", "orange", "");
      
    slMapData[188] = new SchoolMapData("801259", 43.8601338,-79.5196181, "/secondary/St_Joan_of_Arc_Catholic_High_School/Maple/Report_Card.aspx", "St Joan of Arc", "Catholic","5.2", "Add", "orange", "");
      
    slMapData[189] = new SchoolMapData("801275", 44.3401531,-79.7158487, "/secondary/St_Joan_of_Arc_High_School/Barrie/Report_Card.aspx", "St Joan of Arc", "Catholic","5.6", "Add", "orange", "");
      
    slMapData[190] = new SchoolMapData("803065", 44.886532,-76.017052, "/secondary/St._Luke_Catholic_High_School/Smiths_Falls/Report_Card.aspx", "St. Luke Catholic", "Catholic","0.0", "Add", "red", "");
      
    slMapData[191] = new SchoolMapData("804800", 44.8866795,-76.2492547, "/secondary/St_John_Catholic_High_School/Perth/Report_Card.aspx", "St John", "Catholic","7.0", "Add", "yellow", "");
      
    slMapData[192] = new SchoolMapData("806277", 45.0345379,-74.7499772, "/secondary/St_Joseph's_Secondary_School/Cornwall/Report_Card.aspx", "St Joseph's", "Catholic","6.2", "Add", "yellow", "");
      
    slMapData[193] = new SchoolMapData("806919", 43.589546,-79.700382, "/secondary/St_Joseph_Secondary_School/Mississauga/Report_Card.aspx", "St Joseph", "Catholic","7.0", "Add", "yellow", "");
      
    slMapData[194] = new SchoolMapData("809020", 45.3795913,-75.7559302, "/secondary/Notre_Dame_High_School/Ottawa/Report_Card.aspx", "Notre Dame", "Catholic","4.9", "Add", "orange", "");
      
    slMapData[195] = new SchoolMapData("810916", 42.7533889,-81.167289, "/secondary/St_Joseph's_High_School/St_Thomas/Report_Card.aspx", "St Joseph's", "Catholic","5.6", "Add", "orange", "");
      
    slMapData[196] = new SchoolMapData("811780", 43.9635972,-79.4554787, "/secondary/St_Maximilian_Kolbe_High_School/Aurora/Report_Card.aspx", "St Maximilian Kolbe", "Catholic","6.5", "Add", "yellow", "");
      
    slMapData[197] = new SchoolMapData("813389", 44.4130395,-79.6854361, "/secondary/St_Joseph's_Separate_School/Barrie/Report_Card.aspx", "St Joseph's", "Catholic","5.3", "Add", "orange", "");
      
    slMapData[198] = new SchoolMapData("814954", 43.6639508,-79.389133, "/secondary/St_Joseph's_College_School/Toronto/Report_Card.aspx", "St Joseph's", "Catholic","7.4", "Add", "yellow", "");
      
    slMapData[199] = new SchoolMapData("814962", 45.4639043,-76.6697805, "/secondary/St_Joseph's_High_School/Renfrew/Report_Card.aspx", "St Joseph's", "Catholic","9.0", "Add", "green", "");
      
    slMapData[200] = new SchoolMapData("815160", 43.7967845,-79.3945048, "/secondary/St_Josephs_Morrow_Park_High_School/Toronto/Report_Card.aspx", "St Josephs Morrow Park", "Catholic","6.0", "Add", "yellow", "");
      
    slMapData[201] = new SchoolMapData("816132", 45.3770022,-75.6608692, "/secondary/St_Patrick's_High_School/Ottawa/Report_Card.aspx", "St Patrick's", "Catholic","5.3", "Add", "orange", "");
      
    slMapData[202] = new SchoolMapData("821381", 43.623769,-79.7119896, "/secondary/St_Marcellinus_Secondary_School/Mississauga/Report_Card.aspx", "St Marcellinus", "Catholic","8.6", "Add", "green", "");
      
    slMapData[203] = new SchoolMapData("822507", 47.513081,-79.677437, "/secondary/%c3%89cole_secondaire_Sainte-Marie/New_Liskeard/Report_Card.aspx", "Sainte-Marie", "Catholic","6.2", "Add", "yellow", "");
      
    slMapData[204] = new SchoolMapData("822655", 43.7545337,-79.7816443, "/secondary/St_Marguerite_d'Youville_Secondary_School/Brampton/Report_Card.aspx", "St Marguerite d'Youville", "Catholic","6.6", "Add", "yellow", "");
      
    slMapData[205] = new SchoolMapData("823953", 43.5571027,-79.6358238, "/secondary/St_Martin_Secondary_School/Mississauga/Report_Card.aspx", "St Martin", "Catholic","6.8", "Add", "yellow", "");
      
    slMapData[206] = new SchoolMapData("824593", 44.598672,-75.69653, "/secondary/St_Mary's_High_School/Brockville/Report_Card.aspx", "St Mary's", "Catholic","7.1", "Add", "yellow", "");
      
    slMapData[207] = new SchoolMapData("826278", 43.8377572,-79.1237427, "/secondary/St_Mary_Catholic_Secondary_School/Pickering/Report_Card.aspx", "St Mary", "Catholic","6.3", "Add", "yellow", "");
      
    slMapData[208] = new SchoolMapData("827401", 43.2528408,-79.9290833, "/secondary/St_Mary's_Separate_School/Hamilton/Report_Card.aspx", "St Mary's", "Catholic","7.2", "Add", "yellow", "");
      
    slMapData[209] = new SchoolMapData("830410", 43.9820894,-78.1701576, "/secondary/St._Mary_Secondary_School/Cobourg/Report_Card.aspx", "St Mary", "Catholic","6.0", "Add", "yellow", "");
      
    slMapData[210] = new SchoolMapData("831190", 43.1128509,-80.7466222, "/secondary/St_Mary's_High_School/Woodstock/Report_Card.aspx", "St Mary's", "Catholic","6.5", "Add", "yellow", "");
      
    slMapData[211] = new SchoolMapData("832103", 43.419279,-80.468116, "/secondary/St_Mary's_High_School/Kitchener/Report_Card.aspx", "St Mary's", "Catholic","6.1", "Add", "yellow", "");
      
    slMapData[212] = new SchoolMapData("832480", 45.0225523,-75.6506757, "/secondary/St_Michael_High_School/Kemptville/Report_Card.aspx", "St Michael", "Catholic","8.9", "Add", "green", "");
      
    slMapData[213] = new SchoolMapData("832545", 43.387335,-80.995417, "/secondary/St_Michael_Catholic_Secondary_School/Stratford/Report_Card.aspx", "St Michael", "Catholic","6.5", "Add", "yellow", "");
      
    slMapData[214] = new SchoolMapData("832670", 45.2689119,-75.7337222, "/secondary/%c3%89cole_secondaire_catholique_Pierre-Savard/Nepean/Report_Card.aspx", "Pierre-Savard", "Catholic","6.0", "Add", "yellow", "");
      
    slMapData[215] = new SchoolMapData("834718", 43.655026,-79.3778025, "/secondary/St_Michael's_Choir_(Sr)_School/Toronto/Report_Card.aspx", "St Michael's Choir", "Catholic","9.4", "Added", "green", "_black_dot");
      
    slMapData[216] = new SchoolMapData("835099", 44.167895,-77.38269, "/secondary/Nicholson_Catholic_College/Belleville/Report_Card.aspx", "Nicholson", "Catholic","6.8", "Add", "yellow", "");
      
    slMapData[217] = new SchoolMapData("836788", 42.978003,-82.3864656, "/secondary/St_Patrick's_Catholic_Secondary_School/Sarnia/Report_Card.aspx", "St Patrick's", "Catholic","6.8", "Add", "yellow", "");
      
    slMapData[218] = new SchoolMapData("838268", 43.6783441,-79.329241, "/secondary/St_Patrick_Catholic_Secondary_School/Toronto/Report_Card.aspx", "St Patrick", "Catholic","6.8", "Add", "yellow", "");
      
    slMapData[219] = new SchoolMapData("841358", 44.0943591,-77.5974249, "/secondary/St_Paul_Catholic_Secondary_School/Trenton/Report_Card.aspx", "St Paul", "Catholic","6.6", "Add", "yellow", "");
      
    slMapData[220] = new SchoolMapData("841730", 43.5768346,-79.5707961, "/secondary/St_Paul_Secondary_School/Mississauga/Report_Card.aspx", "St Paul", "Catholic","7.5", "Add", "yellow", "");
      
    slMapData[221] = new SchoolMapData("843296", 45.473831,-75.4779821, "/secondary/St_Peter_High_School/Orl%c3%a9ans/Report_Card.aspx", "St Peter", "Catholic","7.3", "Add", "yellow", "");
      
    slMapData[222] = new SchoolMapData("843510", 45.279654,-75.68706, "/secondary/St._Francis_Xavier_(9-12)_Catholic_School/Gloucester/Report_Card.aspx", "St Francis Xavier", "Catholic","7.6", "Add", "green", "");
      
    slMapData[223] = new SchoolMapData("844012", 44.3546967,-79.6413908, "/secondary/St_Peter's_Secondary_School/Barrie/Report_Card.aspx", "St Peter's", "Catholic","5.5", "Add", "orange", "");
      
    slMapData[224] = new SchoolMapData("845361", 44.309793,-78.344826, "/secondary/St._Peter's_Secondary_School/Peterborough/Report_Card.aspx", "St Peter's", "Catholic","6.8", "Add", "yellow", "");
      
    slMapData[225] = new SchoolMapData("846435", 45.435302,-75.504314, "/secondary/%c3%89S_C_Mer_Bleue/Orl%c3%a9ans/Report_Card.aspx", "Mer Bleue", "Catholic","6.0", "Add", "yellow", "");
      
    slMapData[226] = new SchoolMapData("847313", 45.3644357,-75.7124251, "/secondary/St_Pius_X_High_School/Ottawa/Report_Card.aspx", "St Pius X", "Catholic","6.3", "Add", "yellow", "");
      
    slMapData[227] = new SchoolMapData("849626", 43.8379902,-79.3805789, "/secondary/St_Robert_Catholic_High_School/Thornhill/Report_Card.aspx", "St Robert", "Catholic","9.2", "Add", "green", "");
      
    slMapData[228] = new SchoolMapData("849901", 43.797252,-79.563107, "/secondary/Father_Bressani_Catholic_High_School/Woodbridge/Report_Card.aspx", "Father Bressani", "Catholic","6.8", "Add", "yellow", "");
      
    slMapData[229] = new SchoolMapData("850888", 43.6838369,-79.7506767, "/secondary/Cardinal_Leger_Secondary_School/Brampton/Report_Card.aspx", "Cardinal Leger", "Catholic","6.2", "Add", "yellow", "");
      
    slMapData[230] = new SchoolMapData("851116", 43.9141141,-78.6927039, "/secondary/St._Stephen's_Secondary_School/Bowmanville/Report_Card.aspx", "St Stephen's", "Catholic","7.1", "Add", "yellow", "");
      
    slMapData[231] = new SchoolMapData("851752", 44.191579,-77.3803517, "/secondary/St_Theresa_Catholic_Secondary_School/Belleville/Report_Card.aspx", "St Theresa", "Catholic","5.6", "Add", "orange", "");
      
    slMapData[232] = new SchoolMapData("852546", 43.8954727,-79.4654877, "/secondary/St_Therese_of_Lisieux_Catholic_High_School/Richmond_Hill/Report_Card.aspx", "St Therese of Lisieux", "Catholic","9.1", "Add", "green", "");
      
    slMapData[233] = new SchoolMapData("852775", 44.7400594,-79.8706434, "/secondary/St_Theresa's_Separate_School/Midland/Report_Card.aspx", "St Theresa's", "Catholic","5.8", "Add", "orange", "");
      
    slMapData[234] = new SchoolMapData("854212", 43.4366634,-79.6811464, "/secondary/St_Thomas_Aquinas_Roman_Catholic_Secondary_School/Oakville/Report_Card.aspx", "St Thomas Aquinas", "Catholic","6.9", "Add", "yellow", "");
      
    slMapData[235] = new SchoolMapData("854280", 42.970241,-81.33462, "/secondary/St_Thomas_Aquinas_Secondary_School/London/Report_Card.aspx", "St Thomas Aquinas", "Catholic","7.1", "Add", "yellow", "");
      
    slMapData[236] = new SchoolMapData("854530", 43.7386498,-79.7125999, "/secondary/St_Thomas_Aquinas_Secondary_School/Brampton/Report_Card.aspx", "St Thomas Aquinas", "Catholic","5.4", "Add", "orange", "");
      
    slMapData[237] = new SchoolMapData("855006", 44.3304232,-78.7418215, "/secondary/St._Thomas_Aquinas_Catholic_Secondary_School/Lindsay/Report_Card.aspx", "St Thomas Aquinas", "Catholic","5.8", "Add", "orange", "");
      
    slMapData[238] = new SchoolMapData("855685", 43.2147504,-79.9197913, "/secondary/St_Thomas_More_Catholic_Secondary_School/Hamilton/Report_Card.aspx", "St Thomas More", "Catholic","5.6", "Add", "orange", "");
      
    slMapData[239] = new SchoolMapData("855949", 44.611397,-75.717994, "/secondary/%c3%89cole_secondaire_catholique_Acad%c3%a9mie_cath._Ange-Ga/Brockville/Report_Card.aspx", "Ange-Gabriel", "Catholic","9.1", "Add", "green", "");
      
    slMapData[240] = new SchoolMapData("864170", 42.221143,-83.0025643, "/secondary/St_Thomas_of_Villanova/LaSalle/Report_Card.aspx", "St Thomas of Villanova", "Catholic","7.9", "Add", "green", "");
      
    slMapData[241] = new SchoolMapData("864331", 45.2449002,-75.6475611, "/secondary/St_Mark_High_School/Manotick/Report_Card.aspx", "St Mark", "Catholic","7.6", "Add", "green", "");
      
    slMapData[242] = new SchoolMapData("864366", 42.4066293,-82.1930529, "/secondary/Ursuline_College_(The_Pines)_Catholic_Secondary_Sc/Chatham/Report_Card.aspx", "Ursuline (The Pines)", "Catholic","6.1", "Add", "yellow", "");
      
    slMapData[243] = new SchoolMapData("864471", 49.7820552,-94.4580946, "/secondary/St_Thomas_Aquinas_High_School/Kenora/Report_Card.aspx", "St Thomas Aquinas", "Catholic","6.3", "Add", "yellow", "");
      
    slMapData[244] = new SchoolMapData("864570", 43.8942774,-79.7512837, "/secondary/St._Michael_Catholic_Secondary_School/Bolton/Report_Card.aspx", "St. Michael", "Catholic","6.6", "Add", "yellow", "");
      
    slMapData[245] = new SchoolMapData("864650", 48.4738062,-81.3318759, "/secondary/%c3%89cole_secondaire_Theriault/Timmins/Report_Card.aspx", "Theriault", "Catholic","5.5", "Add", "orange", "");
      
    slMapData[246] = new SchoolMapData("865368", 43.43735,-79.772942, "/secondary/%c3%89SC_Sainte-Trinit%c3%a9/Oakville/Report_Card.aspx", "Sainte-Trinité", "Catholic","7.8", "Add", "green", "");
      
    slMapData[247] = new SchoolMapData("874888", 43.9618582,-79.4688292, "/secondary/Jean_Vanier_Catholic_High_School/Richmond_Hill/Report_Card.aspx", "Jean Vanier", "Catholic","7.0", "Add", "yellow", "");
      
    slMapData[248] = new SchoolMapData("876623", 43.3721,-80.97939, "/secondary/Nancy_Campbell_Academy/Stratford/Report_Card.aspx", "Nancy Campbell", "Private","4.3", "Add", "orange", "");
      
    slMapData[249] = new SchoolMapData("881389", 43.8464844,-79.707436, "/secondary/Wali_ul_Asr_School_-_Central_Campus/Caledon/Report_Card.aspx", "Wali ul Asr", "Private","8.9", "Add", "green", "");
      
    slMapData[250] = new SchoolMapData("890073", 43.0316787,-81.2486966, "/secondary/A_B_Lucas_Secondary_School/London/Report_Card.aspx", "A B Lucas", "Public","7.1", "Add", "yellow", "");
      
    slMapData[251] = new SchoolMapData("890200", 43.1227267,-79.1019949, "/secondary/A_N_Myer_Secondary_School/Niagara_Falls/Report_Card.aspx", "A N Myer", "Public","7.6", "Add", "green", "");
      
    slMapData[252] = new SchoolMapData("890227", 43.80526,-79.36651, "/secondary/A_Y_Jackson_Secondary_School/Toronto/Report_Card.aspx", "A Y Jackson", "Public","8.2", "Add", "green", "");
      
    slMapData[253] = new SchoolMapData("890243", 45.2945478,-75.8817608, "/secondary/A.Y._Jackson_Secondary_School/Kanata/Report_Card.aspx", "A.Y. Jackson", "Public","7.8", "Add", "green", "");
      
    slMapData[254] = new SchoolMapData("890332", 43.642566,-80.033501, "/secondary/Acton_District_High_School/Acton/Report_Card.aspx", "Acton", "Public","6.4", "Add", "yellow", "");
      
    slMapData[255] = new SchoolMapData("890464", 44.3285805,-78.3224929, "/secondary/Adam_Scott_Collegiate_and_Vocational_Institute/Peterborough/Report_Card.aspx", "Adam Scott", "Public","5.0", "Add", "orange", "");
      
    slMapData[256] = new SchoolMapData("890596", 44.817544,-77.185598, "/secondary/North_Addington_Education_Centre/Cloyne/Report_Card.aspx", "North Addington", "Public","1.4", "Add", "red", "");
      
    slMapData[257] = new SchoolMapData("890723", 43.7872613,-79.2792964, "/secondary/Agincourt_Collegiate_Institute/Toronto/Report_Card.aspx", "Agincourt", "Public","8.0", "Add", "green", "");
      
    slMapData[258] = new SchoolMapData("890855", 43.845089,-79.013991, "/secondary/Ajax_High_School/Ajax/Report_Card.aspx", "Ajax", "Public","4.7", "Add", "orange", "");
      
    slMapData[259] = new SchoolMapData("890861", 42.968455,-82.402433, "/secondary/Great_Lakes_SS/Sarnia/Report_Card.aspx", "Great Lakes", "Public","4.5", "Add", "orange", "");
      
    slMapData[260] = new SchoolMapData("890880", 43.8087145,-79.270978, "/secondary/Albert_Campbell_Collegiate_Institute/Toronto/Report_Card.aspx", "Albert Campbell", "Public","6.3", "Add", "yellow", "");
      
    slMapData[261] = new SchoolMapData("890987", 43.3046578,-79.8534772, "/secondary/Aldershot_High_School/Burlington/Report_Card.aspx", "Aldershot", "Public","7.3", "Add", "yellow", "");
      
    slMapData[262] = new SchoolMapData("891274", 43.0001259,-82.3608959, "/secondary/Alexander_Mackenzie_Secondary_School/Sarnia/Report_Card.aspx", "Alexander Mackenzie", "Public","1.3", "Add", "red", "");
      
    slMapData[263] = new SchoolMapData("891347", 46.34592,-83.924187, "/secondary/Central_Algoma_Secondary_School/Desbarats/Report_Card.aspx", "Central Algoma", "Public","5.3", "Add", "orange", "");
      
    slMapData[264] = new SchoolMapData("891630", 45.226314,-76.194523, "/secondary/Almonte_District_High_School/Almonte/Report_Card.aspx", "Almonte", "Public","4.7", "Add", "orange", "");
      
    slMapData[265] = new SchoolMapData("891894", 43.2166071,-80.0064875, "/secondary/Ancaster_High_School/Ancaster/Report_Card.aspx", "Ancaster", "Public","7.1", "Add", "yellow", "");
      
    slMapData[266] = new SchoolMapData("892025", 43.887834,-78.923949, "/secondary/Anderson_Collegiate_and_Vocational_Institute/Whitby/Report_Card.aspx", "Anderson", "Public","6.6", "Add", "yellow", "");
      
    slMapData[267] = new SchoolMapData("892203", 43.606073,-79.604657, "/secondary/Applewood_Heights_Secondary_School/Mississauga/Report_Card.aspx", "Applewood Heights", "Public","6.8", "Add", "yellow", "");
      
    slMapData[268] = new SchoolMapData("892416", 45.438431,-76.3540092, "/secondary/Arnprior_District_High_School/Arnprior/Report_Card.aspx", "Arnprior", "Public","7.0", "Add", "yellow", "");
      
    slMapData[269] = new SchoolMapData("892483", 43.8014351,-79.2746655, "/secondary/Delphi_Secondary_Alternative_School/Toronto/Report_Card.aspx", "Delphi Alternative", "Public","7.0", "Add", "yellow", "");
      
    slMapData[270] = new SchoolMapData("892670", 42.7799816,-81.1889147, "/secondary/Arthur_Voaden_Secondary_School/St_Thomas/Report_Card.aspx", "Arthur Voaden", "Public","2.2", "Add", "red", "");
      
    slMapData[271] = new SchoolMapData("892807", 44.6026805,-75.9828703, "/secondary/Athens_District_High_School/Athens/Report_Card.aspx", "Athens", "Public","4.3", "Add", "orange", "");
      
    slMapData[272] = new SchoolMapData("892939", 48.763014,-91.613631, "/secondary/Atikokan_High_School/Atikokan/Report_Card.aspx", "Atikokan", "Public","6.1", "Add", "yellow", "");
      
    slMapData[273] = new SchoolMapData("892998", 43.9962336,-79.4832134, "/secondary/Aurora_High_School/Aurora/Report_Card.aspx", "Aurora", "Public","8.0", "Add", "green", "");
      
    slMapData[274] = new SchoolMapData("893064", 44.1726633,-79.8912813, "/secondary/Banting_Memorial_District_High_School/Alliston/Report_Card.aspx", "Banting Memorial", "Public","7.5", "Add", "yellow", "");
      
    slMapData[275] = new SchoolMapData("893323", 44.400314,-79.6883909, "/secondary/Barrie_North_Collegiate_Institute/Barrie/Report_Card.aspx", "Barrie North", "Public","6.2", "Add", "yellow", "");
      
    slMapData[276] = new SchoolMapData("893455", 43.2143919,-79.842127, "/secondary/Barton_Secondary_School/Hamilton/Report_Card.aspx", "Barton", "Public","3.4", "Add", "red", "");
      
    slMapData[277] = new SchoolMapData("893675", 43.398365,-79.819124, "/secondary/Dr._Frank_J._Hayden_Secondary_School/Burlington/Report_Card.aspx", "Dr. Frank J. Hayden", "Public","7.6", "Add", "green", "");
      
    slMapData[278] = new SchoolMapData("893773", 44.248386,-76.5782011, "/secondary/Bayridge_Secondary_School/Kingston/Report_Card.aspx", "Bayridge", "Public","6.6", "Add", "yellow", "");
      
    slMapData[279] = new SchoolMapData("893803", 44.178524,-77.364391, "/secondary/Bayside_Secondary_School/Belleville/Report_Card.aspx", "Bayside", "Public","6.5", "Add", "yellow", "");
      
    slMapData[280] = new SchoolMapData("893978", 43.8784008,-79.4151077, "/secondary/Bayview_Secondary_School/Richmond_Hill/Report_Card.aspx", "Bayview", "Public","9.0", "Add", "green", "");
      
    slMapData[281] = new SchoolMapData("894060", 44.3300071,-79.736791, "/secondary/Bear_Creek_Secondary_School/Barrie/Report_Card.aspx", "Bear Creek", "Public","6.4", "Add", "yellow", "");
      
    slMapData[282] = new SchoolMapData("894109", 43.1688166,-79.4732009, "/secondary/Beamsville_District_Secondary_School/Beamsville/Report_Card.aspx", "Beamsville", "Public","5.1", "Add", "orange", "");
      
    slMapData[283] = new SchoolMapData("894230", 49.7757564,-94.4626313, "/secondary/Beaver_Brae_Secondary_School/Kenora/Report_Card.aspx", "Beaver Brae", "Public","5.1", "Add", "orange", "");
      
    slMapData[284] = new SchoolMapData("894362", 45.3270611,-75.8082744, "/secondary/Bell_High_School/Nepean/Report_Card.aspx", "Bell", "Public","6.3", "Add", "yellow", "");
      
    slMapData[285] = new SchoolMapData("894621", 43.7540326,-79.2659131, "/secondary/Bendale_Business_%5bamp%5d_Technical_Institute/Toronto/Report_Card.aspx", "Bendale", "Public","0.0", "Add", "red", "");
      
    slMapData[286] = new SchoolMapData("894672", 43.889344,-79.3127998, "/secondary/Pierre_Elliott_Trudeau_High_School/Markham/Report_Card.aspx", "Pierre Elliott Trudeau", "Public","8.7", "Add", "green", "");
      
    slMapData[287] = new SchoolMapData("895016", 43.6969707,-79.263767, "/secondary/Birchmount_Park_Collegiate_Institute/Toronto/Report_Card.aspx", "Birchmount Park", "Public","4.4", "Add", "orange", "");
      
    slMapData[288] = new SchoolMapData("895148", 42.3289567,-81.9752995, "/secondary/Blenheim_District_High_School/Blenheim/Report_Card.aspx", "Blenheim", "Public","5.1", "Add", "orange", "");
      
    slMapData[289] = new SchoolMapData("895237", 46.610608,-81.018896, "/secondary/Confederation_Secondary_School/Val_Caron/Report_Card.aspx", "Confederation", "Public","4.1", "Add", "orange", "");
      
    slMapData[290] = new SchoolMapData("895270", 46.1883775,-82.9466214, "/secondary/W_C_Eaket_Secondary_School/Blind_River/Report_Card.aspx", "W C Eaket", "Public","4.7", "Add", "orange", "");
      
    slMapData[291] = new SchoolMapData("895407", 43.659627,-79.436637, "/secondary/Bloor_Collegiate_Institute/Toronto/Report_Card.aspx", "Bloor", "Public","8.7", "Add", "green", "");
      
    slMapData[292] = new SchoolMapData("895458", 43.475564,-80.500581, "/secondary/Bluevale_Collegiate_Institute/Waterloo/Report_Card.aspx", "Bluevale", "Public","7.4", "Add", "yellow", "");
      
    slMapData[293] = new SchoolMapData("895539", 43.9138369,-78.6816372, "/secondary/Bowmanville_High_School/Bowmanville/Report_Card.aspx", "Bowmanville", "Public","6.3", "Add", "yellow", "");
      
    slMapData[294] = new SchoolMapData("895660", 45.064579,-79.319656, "/secondary/Bracebridge_and_Muskoka_Lakes_Secondary_School/Bracebridge/Report_Card.aspx", "Bracebridge and Muskoka Lakes", "Public","7.3", "Add", "yellow", "");
      
    slMapData[295] = new SchoolMapData("895792", 44.1141601,-79.5803242, "/secondary/Bradford_District_High_School/Bradford/Report_Card.aspx", "Bradford", "Public","6.9", "Add", "yellow", "");
      
    slMapData[296] = new SchoolMapData("895920", 43.714405,-79.707044, "/secondary/Bramalea_Secondary_School/Brampton/Report_Card.aspx", "Bramalea", "Public","4.7", "Add", "orange", "");
      
    slMapData[297] = new SchoolMapData("896055", 43.668712,-79.748544, "/secondary/Brampton_Centennial_Secondary_School/Brampton/Report_Card.aspx", "Brampton Centennial", "Public","6.4", "Add", "yellow", "");
      
    slMapData[298] = new SchoolMapData("896187", 43.142996,-80.273505, "/secondary/Brantford_Collegiate_Institute_and_Vocational_Scho/Brantford/Report_Card.aspx", "Brantford", "Public","5.7", "Add", "orange", "");
      
    slMapData[299] = new SchoolMapData("896446", 44.3439727,-79.0664447, "/secondary/Brock_High_School/Cannington/Report_Card.aspx", "Brock", "Public","4.8", "Add", "orange", "");
      
    slMapData[300] = new SchoolMapData("896578", 44.5956634,-75.6819981, "/secondary/Brockville_Collegiate_Institute/Brockville/Report_Card.aspx", "Brockville", "Public","6.6", "Add", "yellow", "");
      
    slMapData[301] = new SchoolMapData("896705", 45.371797,-75.684658, "/secondary/Brookfield_High_School/Ottawa/Report_Card.aspx", "Brookfield", "Public","5.4", "Add", "orange", "");
      
    slMapData[302] = new SchoolMapData("896889", 43.8783581,-79.4416764, "/secondary/%c3%89cole_secondaire_Norval-Morrisseau/Richmond_Hill/Report_Card.aspx", "Norval-Morrisseau", "Public","6.7", "Add", "yellow", "");
      
    slMapData[303] = new SchoolMapData("896969", 44.98498,-81.24789, "/secondary/Bruce_Peninsula_District_School/Lion's_Head/Report_Card.aspx", "Bruce Peninsula", "Public","5.0", "Add", "orange", "");
      
    slMapData[304] = new SchoolMapData("897353", 43.3292241,-79.8048344, "/secondary/Burlington_Central_High_School/Burlington/Report_Card.aspx", "Burlington Central", "Public","5.8", "Add", "orange", "");
      
    slMapData[305] = new SchoolMapData("897744", 43.7595981,-79.4996068, "/secondary/C_W_Jefferys_Collegiate_Institute/Toronto/Report_Card.aspx", "C W Jefferys", "Public","5.9", "Add", "orange", "");
      
    slMapData[306] = new SchoolMapData("897876", 45.14453,-74.573402, "/secondary/Charlottenburgh_and_Lancaster_District_High_School/Williamstown/Report_Card.aspx", "Charlottenburgh and Lancaster", "Public","7.9", "Add", "green", "");
      
    slMapData[307] = new SchoolMapData("898007", 43.063538,-79.9563904, "/secondary/McKinnon_Park_Secondary_School/Caledonia/Report_Card.aspx", "McKinnon Park", "Public","4.7", "Add", "orange", "");
      
    slMapData[308] = new SchoolMapData("898090", 43.4452093,-80.4814516, "/secondary/Cameron_Heights_Collegiate_Institute/Kitchener/Report_Card.aspx", "Cameron Heights", "Public","7.0", "Add", "yellow", "");
      
    slMapData[309] = new SchoolMapData("898260", 44.308472,-77.800269, "/secondary/Campbellford_District_High_School/Campbellford/Report_Card.aspx", "Campbellford", "Public","5.6", "Add", "orange", "");
      
    slMapData[310] = new SchoolMapData("898285", 43.8432403,-79.568309, "/secondary/Tommy_Douglas_Secondary_School/Woodbridge/Report_Card.aspx", "Tommy Douglas", "Public","7.2", "Add", "yellow", "");
      
    slMapData[311] = new SchoolMapData("898317", 45.387678,-75.626, "/secondary/Canterbury_High_School/Ottawa/Report_Card.aspx", "Canterbury", "Public","7.7", "Add", "green", "");
      
    slMapData[312] = new SchoolMapData("898520", 45.1324697,-76.1490482, "/secondary/Carleton_Place_High_School/Carleton_Place/Report_Card.aspx", "Carleton Place", "Public","6.5", "Add", "yellow", "");
      
    slMapData[313] = new SchoolMapData("898910", 43.6742,-79.365261, "/secondary/Rosedale_Heights_School_of_the_Arts/Toronto/Report_Card.aspx", "Rosedale Heights-Arts", "Public","8.0", "Add", "green", "");
      
    slMapData[314] = new SchoolMapData("899003", 43.5760409,-79.5752132, "/secondary/Cawthra_Park_Secondary_School/Mississauga/Report_Card.aspx", "Cawthra Park", "Public","7.8", "Add", "green", "");
      
    slMapData[315] = new SchoolMapData("899046", 42.9567663,-79.8586901, "/secondary/Cayuga_Secondary_School/Cayuga/Report_Card.aspx", "Cayuga", "Public","6.1", "Add", "yellow", "");
      
    slMapData[316] = new SchoolMapData("899178", 43.7577056,-79.2247082, "/secondary/Cedarbrae_Collegiate_Institute/Toronto/Report_Card.aspx", "Cedarbrae", "Public","2.8", "Add", "red", "");
      
    slMapData[317] = new SchoolMapData("899275", 44.1560527,-77.4044635, "/secondary/Centennial_Secondary_School/Belleville/Report_Card.aspx", "Centennial", "Public","5.8", "Add", "orange", "");
      
    slMapData[318] = new SchoolMapData("899283", 43.5218906,-80.2464761, "/secondary/Centennial_Collegiate_and_Vocational_Institute/Guelph/Report_Card.aspx", "Centennial", "Public","7.9", "Add", "green", "");
      
    slMapData[319] = new SchoolMapData("899305", 42.7705109,-81.174461, "/secondary/Central_Elgin_Collegiate_Institute/St_Thomas/Report_Card.aspx", "Central Elgin", "Public","7.3", "Add", "yellow", "");
      
    slMapData[320] = new SchoolMapData("899437", 43.6567392,-79.4209955, "/secondary/Central_Commerce_Collegiate_Institute/Toronto/Report_Card.aspx", "Central Commerce", "Public","3.6", "Add", "red", "");
      
    slMapData[321] = new SchoolMapData("899569", 43.6166305,-81.5336247, "/secondary/Central_Huron_Secondary_School/Clinton/Report_Card.aspx", "Central Huron", "Public","5.3", "Add", "orange", "");
      
    slMapData[322] = new SchoolMapData("899828", 43.697687,-79.752178, "/secondary/Central_Peel_Secondary_School/Brampton/Report_Card.aspx", "Central Peel", "Public","5.8", "Add", "orange", "");
      
    slMapData[323] = new SchoolMapData("900087", 43.6615767,-79.4097488, "/secondary/Central_Technical_School/Toronto/Report_Card.aspx", "Central", "Public","3.1", "Add", "red", "");
      
    slMapData[324] = new SchoolMapData("900214", 44.0819572,-80.207786, "/secondary/Centre_Dufferin_District_High_School/Shelburne/Report_Card.aspx", "Centre Dufferin", "Public","6.0", "Add", "yellow", "");
      
    slMapData[325] = new SchoolMapData("900478", 44.505221,-77.4726529, "/secondary/Centre_Hastings_Secondary_School/Madoc/Report_Card.aspx", "Centre Hastings", "Public","4.2", "Add", "orange", "");
      
    slMapData[326] = new SchoolMapData("900494", 45.2774919,-75.7435825, "/secondary/Longfields_Davidson_Heights_Secondary_School/Nepean/Report_Card.aspx", "Longfields Davidson Heights", "Public","7.7", "Add", "green", "");
      
    slMapData[327] = new SchoolMapData("901037", 43.8600225,-79.13289, "/secondary/%c3%89cole_secondaire_Pickering/Pickering/Report_Card.aspx", "Pickering", "Public","6.6", "Add", "yellow", "");
      
    slMapData[328] = new SchoolMapData("901121", 46.5698237,-81.195611, "/secondary/Chelmsford_Valley_District_Composite_School/Chelmsford/Report_Card.aspx", "Chelmsford Valley", "Public","2.5", "Add", "red", "");
      
    slMapData[329] = new SchoolMapData("901253", 44.2953699,-81.0900132, "/secondary/Chesley_District_High_School/Chesley/Report_Card.aspx", "Chesley", "Public","6.3", "Add", "yellow", "");
      
    slMapData[330] = new SchoolMapData("901342", 43.736153,-79.72781, "/secondary/Chinguacousy_Secondary_School/Brampton/Report_Card.aspx", "Chinguacousy", "Public","7.3", "Add", "yellow", "");
      
    slMapData[331] = new SchoolMapData("901385", 46.3210332,-79.4496887, "/secondary/Chippewa_Secondary_School/North_Bay/Report_Card.aspx", "Chippewa", "Public","7.1", "Add", "yellow", "");
      
    slMapData[332] = new SchoolMapData("901439", 43.435023,-79.75514, "/secondary/Garth_Webb_Secondary_School/Oakville/Report_Card.aspx", "Garth Webb", "Public","8.5", "Add", "green", "");
      
    slMapData[333] = new SchoolMapData("901474", 43.635757,-79.397191, "/secondary/City_School/Toronto/Report_Card.aspx", "City School", "Public","1.5", "Add", "red", "");
      
    slMapData[334] = new SchoolMapData("901512", 43.9444381,-78.5320107, "/secondary/Clarke_High_School/Newcastle/Report_Card.aspx", "Clarke", "Public","7.3", "Add", "yellow", "");
      
    slMapData[335] = new SchoolMapData("901539", 44.1140811,-77.5560828, "/secondary/%c3%89cole_secondaire_publique_Marc-Garneau/Trenton/Report_Card.aspx", "Marc-Garneau", "Public","8.1", "Add", "green", "");
      
    slMapData[336] = new SchoolMapData("901644", 42.9986411,-81.172823, "/secondary/Clarke_Road_Secondary_School/London/Report_Card.aspx", "Clarke Road", "Public","3.8", "Add", "red", "");
      
    slMapData[337] = new SchoolMapData("901660", 43.506052,-79.645248, "/secondary/Clarkson_Secondary_School/Mississauga/Report_Card.aspx", "Clarkson", "Public","6.4", "Add", "yellow", "");
      
    slMapData[338] = new SchoolMapData("901687", 43.9124173,-78.7087979, "/secondary/Clarington_Central_Secondary_School/Bowmanville/Report_Card.aspx", "Clarington Central", "Public","5.2", "Add", "orange", "");
      
    slMapData[339] = new SchoolMapData("902292", 49.0625,-81.0249599, "/secondary/Cochrane_High_School/Cochrane/Report_Card.aspx", "Cochrane", "Public","0.0", "Add", "red", "");
      
    slMapData[340] = new SchoolMapData("902299", 42.282747,-82.881811, "/secondary/Tecumseh_Vista_Academy_-_Secondary/Tecumseh/Report_Card.aspx", "Tecumseh Vista", "Public","7.7", "Add", "green", "");
      
    slMapData[341] = new SchoolMapData("902420", 43.1246623,-80.7452662, "/secondary/College_Avenue_Secondary_School/Woodstock/Report_Card.aspx", "College Avenue", "Public","3.6", "Add", "red", "");
      
    slMapData[342] = new SchoolMapData("902462", 43.521901,-80.247917, "/secondary/College_Heights_Secondary_School/Guelph/Report_Card.aspx", "College Heights", "Public","2.5", "Add", "red", "");
      
    slMapData[343] = new SchoolMapData("902551", 44.4885096,-80.2147373, "/secondary/Collingwood_Collegiate_Institute/Collingwood/Report_Card.aspx", "Collingwood", "Public","6.6", "Add", "yellow", "");
      
    slMapData[344] = new SchoolMapData("902586", 45.4309439,-75.620036, "/secondary/Colonel_By_Secondary_School/Gloucester/Report_Card.aspx", "Colonel By", "Public","9.1", "Add", "green", "");
      
    slMapData[345] = new SchoolMapData("902636", 44.2966682,-79.8104327, "/secondary/Nottawasaga_Pines_Secondary_School/Angus/Report_Card.aspx", "Nottawasaga Pines", "Public","6.3", "Add", "yellow", "");
      
    slMapData[346] = new SchoolMapData("902747", 45.893886,-77.256165, "/secondary/Valour_JK_to_12_School_-_Secondary_School/Petawawa/Report_Card.aspx", "Valour", "Public","6.3", "Add", "yellow", "");
      
    slMapData[347] = new SchoolMapData("902810", 45.0228143,-74.7285142, "/secondary/Cornwall_Collegiate_and_Vocational_School/Cornwall/Report_Card.aspx", "Cornwall", "Public","3.6", "Add", "red", "");
      
    slMapData[348] = new SchoolMapData("903078", 43.9162204,-78.7800739, "/secondary/Courtice_Secondary_School/Courtice/Report_Card.aspx", "Courtice", "Public","7.0", "Add", "yellow", "");
      
    slMapData[349] = new SchoolMapData("903337", 44.287156,-78.382044, "/secondary/Crestwood_Secondary_School/Peterborough/Report_Card.aspx", "Crestwood", "Public","6.3", "Add", "yellow", "");
      
    slMapData[350] = new SchoolMapData("903469", 43.6823974,-79.3327565, "/secondary/Danforth_Collegiate_Institute_and_Technical_School/Toronto/Report_Card.aspx", "Danforth", "Public","4.8", "Add", "orange", "");
      
    slMapData[351] = new SchoolMapData("903590", 43.7529449,-79.2580813, "/secondary/David_and_Mary_Thomson_Collegiate_Institute/Toronto/Report_Card.aspx", "David and Mary Thomson", "Public","3.2", "Add", "red", "");
      
    slMapData[352] = new SchoolMapData("903728", 42.8511611,-80.4925115, "/secondary/Delhi_District_Secondary_School/Delhi/Report_Card.aspx", "Delhi", "Public","5.7", "Add", "orange", "");
      
    slMapData[353] = new SchoolMapData("903850", 43.2410539,-79.813991, "/secondary/Delta_Secondary_School/Hamilton/Report_Card.aspx", "Delta", "Public","2.0", "Add", "red", "");
      
    slMapData[354] = new SchoolMapData("904040", 43.8687788,-79.4487719, "/secondary/Alexander_MacKenzie_High_School/Richmond_Hill/Report_Card.aspx", "Alexander MacKenzie", "Public","6.8", "Add", "yellow", "");
      
    slMapData[355] = new SchoolMapData("904112", 43.7353744,-79.3402532, "/secondary/Don_Mills_Collegiate_Institute/Toronto/Report_Card.aspx", "Don Mills", "Public","7.2", "Add", "yellow", "");
      
    slMapData[356] = new SchoolMapData("904203", 43.758154,-79.770531, "/secondary/Louise_Arbour_Secondary_School/Brampton/Report_Card.aspx", "Louise Arbour", "Public","6.4", "Add", "yellow", "");
      
    slMapData[357] = new SchoolMapData("904392", 43.8941597,-78.9645899, "/secondary/Donald_A_Wilson_Secondary_School/Whitby/Report_Card.aspx", "Donald A. Wilson", "Public","7.3", "Add", "yellow", "");
      
    slMapData[358] = new SchoolMapData("904503", 42.987484,-81.062722, "/secondary/Lord_Dorchester_Secondary_School/Dorchester/Report_Card.aspx", "Lord Dorchester", "Public","7.1", "Add", "yellow", "");
      
    slMapData[359] = new SchoolMapData("904635", 43.7297705,-79.4796232, "/secondary/Downsview_Secondary_School/Toronto/Report_Card.aspx", "Downsview", "Public","2.6", "Add", "red", "");
      
    slMapData[360] = new SchoolMapData("904767", 46.097172,-77.493889, "/secondary/MacKenzie_High_School/Deep_River/Report_Card.aspx", "MacKenzie", "Public","7.0", "Add", "yellow", "");
      
    slMapData[361] = new SchoolMapData("904945", 45.440418,-75.570155, "/secondary/%c3%89cole_secondaire_publique_Louis-Riel/Gloucester/Report_Card.aspx", "Louis-Riel", "Public","7.2", "Add", "yellow", "");
      
    slMapData[362] = new SchoolMapData("904970", 44.0684299,-79.4764614, "/secondary/Dr_John_M_Denison_Secondary_School/Newmarket/Report_Card.aspx", "Dr John M Denison", "Public","6.2", "Add", "yellow", "");
      
    slMapData[363] = new SchoolMapData("905020", 43.990665,-79.4643277, "/secondary/Dr_G_W_Williams_Secondary_School/Aurora/Report_Card.aspx", "Dr G W Williams", "Public","7.2", "Add", "yellow", "");
      
    slMapData[364] = new SchoolMapData("905283", 49.7820104,-92.8323243, "/secondary/Dryden_High_School/Dryden/Report_Card.aspx", "Dryden", "Public","4.6", "Add", "orange", "");
      
    slMapData[365] = new SchoolMapData("905674", 43.821489,-79.120292, "/secondary/Dunbarton_High_School/Pickering/Report_Card.aspx", "Dunbarton", "Public","6.4", "Add", "yellow", "");
      
    slMapData[366] = new SchoolMapData("906069", 42.9050239,-79.6280801, "/secondary/Dunnville_Secondary_School/Dunnville/Report_Card.aspx", "Dunnville", "Public","4.3", "Add", "orange", "");
      
    slMapData[367] = new SchoolMapData("906328", 43.0434318,-79.3143449, "/secondary/E_L_Crossley_Secondary_School/Fonthill/Report_Card.aspx", "E L Crossley", "Public","8.2", "Add", "green", "");
      
    slMapData[368] = new SchoolMapData("906450", 43.7701083,-79.4049833, "/secondary/Earl_Haig_Secondary_School/Toronto/Report_Card.aspx", "Earl Haig", "Public","8.2", "Add", "green", "");
      
    slMapData[369] = new SchoolMapData("906484", 45.3212058,-75.8999048, "/secondary/Earl_of_March_Secondary_School/Kanata/Report_Card.aspx", "Earl of March", "Public","8.2", "Add", "green", "");
      
    slMapData[370] = new SchoolMapData("906514", 45.4814313,-75.5409821, "/secondary/Cairine_Wilson_Secondary_School/Ottawa/Report_Card.aspx", "Cairine Wilson", "Public","6.8", "Add", "yellow", "");
      
    slMapData[371] = new SchoolMapData("906565", 43.9116,-78.837053, "/secondary/Eastdale_Collegiate_and_Vocational_Institute/Oshawa/Report_Card.aspx", "Eastdale", "Public","5.4", "Add", "orange", "");
      
    slMapData[372] = new SchoolMapData("906581", 42.7731327,-80.9906644, "/secondary/East_Elgin_Secondary_School/Aylmer/Report_Card.aspx", "East Elgin", "Public","4.1", "Add", "orange", "");
      
    slMapData[373] = new SchoolMapData("906719", 44.0333333,-77.7333333, "/secondary/East_Northumberland_Secondary_School/Brighton/Report_Card.aspx", "East Northumberland", "Public","5.7", "Add", "orange", "");
      
    slMapData[374] = new SchoolMapData("906736", 43.7174202,-79.4398119, "/secondary/John_Polanyi_Collegiate_Institute/Toronto/Report_Card.aspx", "John Polanyi", "Public","4.3", "Add", "orange", "");
      
    slMapData[375] = new SchoolMapData("906840", 43.694161,-79.3279512, "/secondary/East_York_Collegiate_Institute/Toronto/Report_Card.aspx", "East York", "Public","3.8", "Add", "red", "");
      
    slMapData[376] = new SchoolMapData("906972", 42.9861438,-79.226038, "/secondary/Eastdale_Secondary_School/Welland/Report_Card.aspx", "Eastdale", "Public","4.3", "Add", "orange", "");
      
    slMapData[377] = new SchoolMapData("907308", 43.2654145,-79.89528, "/secondary/%c3%89cole_secondaire_Georges-P-Vanier/Hamilton/Report_Card.aspx", "Georges-P-Vanier", "Public","3.4", "Add", "red", "");
      
    slMapData[378] = new SchoolMapData("907383", 44.406002,-79.6631868, "/secondary/Eastview_Secondary_School/Barrie/Report_Card.aspx", "Eastview", "Public","7.5", "Add", "yellow", "");
      
    slMapData[379] = new SchoolMapData("907421", 45.3524464,-75.7241672, "/secondary/%c3%89cole_secondaire_publique_Deslauriers/Nepean/Report_Card.aspx", "Deslauriers", "Public","5.0", "Add", "orange", "");
      
    slMapData[380] = new SchoolMapData("907430", 45.4345044,-75.6853239, "/secondary/%c3%89cole_secondaire_publique_De_La_Salle/Ottawa/Report_Card.aspx", "De La Salle", "Public","8.5", "Add", "green", "");
      
    slMapData[381] = new SchoolMapData("907448", 46.659002,-80.944835, "/secondary/%c3%89cole_secondaire_Hanmer/Hanmer/Report_Card.aspx", "Hanmer", "Public","1.9", "Add", "red", "");
      
    slMapData[382] = new SchoolMapData("907464", 45.0193684,-74.7004431, "/secondary/%c3%89cole_secondaire_publique_L'H%c3%a9ritage/Cornwall/Report_Card.aspx", "L'Héritage", "Public","6.5", "Add", "yellow", "");
      
    slMapData[383] = new SchoolMapData("907472", 44.24237,-76.52591, "/secondary/%c3%89cole_secondaire_publique_Mille-Iles/Kingston/Report_Card.aspx", "Mille-Iles", "Public","6.0", "Add", "yellow", "");
      
    slMapData[384] = new SchoolMapData("907499", 43.4382874,-80.4586627, "/secondary/Eastwood_Collegiate_Institute/Kitchener/Report_Card.aspx", "Eastwood", "Public","5.2", "Add", "orange", "");
      
    slMapData[385] = new SchoolMapData("907553", 42.9889,-79.2235, "/secondary/%c3%89cole_secondaire_Conf%c3%a9d%c3%a9ration/Welland/Report_Card.aspx", "Confédération", "Public","9.1", "Add", "green", "");
      
    slMapData[386] = new SchoolMapData("907570", 46.5214689,-80.9907315, "/secondary/%c3%89cole_secondaire_Macdonald-Cartier/Sudbury/Report_Card.aspx", "Macdonald-Cartier", "Public","3.7", "Add", "red", "");
      
    slMapData[387] = new SchoolMapData("907588", 43.7529878,-79.3706305, "/secondary/%c3%89cole_secondaire_%c3%89tienne-Br%c3%bbl%c3%a9/Toronto/Report_Card.aspx", "Étienne-Brûlé", "Public","4.4", "Add", "orange", "");
      
    slMapData[388] = new SchoolMapData("907642", 43.6260821,-79.7623274, "/secondary/%c3%89cole_secondaire_Jeunes_sans_fronti%c3%a8res/Brampton/Report_Card.aspx", "Jeunes sans frontières", "Public","7.2", "Add", "yellow", "");
      
    slMapData[389] = new SchoolMapData("907677", 43.1919264,-79.2521185, "/secondary/Eden_High_School/St_Catharines/Report_Card.aspx", "Eden", "Public","7.6", "Add", "green", "");
      
    slMapData[390] = new SchoolMapData("908010", 46.376033,-82.661026, "/secondary/Elliot_Lake_Secondary_School/Elliot_Lake/Report_Card.aspx", "Elliot Lake", "Public","5.3", "Add", "orange", "");
      
    slMapData[391] = new SchoolMapData("908142", 43.5935426,-80.5608383, "/secondary/Elmira_District_Secondary_School/Elmira/Report_Card.aspx", "Elmira", "Public","8.5", "Add", "green", "");
      
    slMapData[392] = new SchoolMapData("908274", 44.583569,-79.866209, "/secondary/Elmvale_District_High_School/Elmvale/Report_Card.aspx", "Elmvale", "Public","5.6", "Add", "orange", "");
      
    slMapData[393] = new SchoolMapData("908665", 43.7463373,-79.5411448, "/secondary/Emery_Collegiate_Institute/Toronto/Report_Card.aspx", "Emery", "Public","1.5", "Add", "red", "");
      
    slMapData[394] = new SchoolMapData("908819", 43.82404,-79.5679231, "/secondary/Emily_Carr_Secondary_School/Woodbridge/Report_Card.aspx", "Emily Carr", "Public","6.8", "Add", "yellow", "");
      
    slMapData[395] = new SchoolMapData("908924", 47.824632,-79.873187, "/secondary/Englehart_High_School/Englehart/Report_Card.aspx", "Englehart", "Public","3.3", "Add", "red", "");
      
    slMapData[396] = new SchoolMapData("909050", 43.7776774,-80.0671125, "/secondary/Erin_District_High_School/Erin/Report_Card.aspx", "Erin", "Public","8.1", "Add", "green", "");
      
    slMapData[397] = new SchoolMapData("909092", 43.537536,-79.665793, "/secondary/Erindale_Secondary_School/Mississauga/Report_Card.aspx", "Erindale", "Public","6.2", "Add", "yellow", "");
      
    slMapData[398] = new SchoolMapData("909181", 44.276991,-76.718271, "/secondary/Ernestown_Secondary_School/Odessa/Report_Card.aspx", "Ernestown", "Public","4.6", "Add", "orange", "");
      
    slMapData[399] = new SchoolMapData("909319", 46.262595,-81.769479, "/secondary/Espanola_High_School/Espanola/Report_Card.aspx", "Espanola", "Public","5.0", "Add", "orange", "");
      
    slMapData[400] = new SchoolMapData("909440", 42.1786862,-82.826834, "/secondary/Essex_District_High_School/Essex/Report_Card.aspx", "Essex", "Public","6.2", "Add", "yellow", "");
      
    slMapData[401] = new SchoolMapData("909572", 43.6502753,-79.5212688, "/secondary/Etobicoke_Collegiate_Institute/Toronto/Report_Card.aspx", "Etobicoke", "Public","7.7", "Add", "green", "");
      
    slMapData[402] = new SchoolMapData("909602", 43.6307552,-79.5044105, "/secondary/Etobicoke_School_of_the_Arts/Toronto/Report_Card.aspx", "Etobicoke-Arts", "Public","8.6", "Add", "green", "");
      
    slMapData[403] = new SchoolMapData("909673", 43.665877,-79.789297, "/secondary/David_Suzuki_Secondary_School/Brampton/Report_Card.aspx", "David Suzuki", "Public","5.3", "Add", "orange", "");
      
    slMapData[404] = new SchoolMapData("909700", 44.53101,-78.74011, "/secondary/Fenelon_Falls_Secondary_School/Fenelon_Falls/Report_Card.aspx", "Fenelon Falls", "Public","4.6", "Add", "orange", "");
      
    slMapData[405] = new SchoolMapData("909831", 43.7035723,-80.3584802, "/secondary/Centre_Wellington_District_High_School/Fergus/Report_Card.aspx", "Centre Wellington", "Public","6.9", "Add", "yellow", "");
      
    slMapData[406] = new SchoolMapData("910058", 43.699586,-79.826499, "/secondary/Fletcher's_Meadow_Secondary_School/Brampton/Report_Card.aspx", "Fletcher's Meadow", "Public","5.7", "Add", "orange", "");
      
    slMapData[407] = new SchoolMapData("910228", 43.1445448,-81.9752995, "/secondary/North_Lambton_Secondary_School/Forest/Report_Card.aspx", "North Lambton", "Public","6.0", "Add", "yellow", "");
      
    slMapData[408] = new SchoolMapData("910350", 43.4248545,-80.5204452, "/secondary/Forest_Heights_Collegiate_Institute/Kitchener/Report_Card.aspx", "Forest Heights", "Public","4.8", "Add", "orange", "");
      
    slMapData[409] = new SchoolMapData("910481", 43.7019868,-79.4209542, "/secondary/Forest_Hill_Collegiate_Institute/Toronto/Report_Card.aspx", "Forest Hill", "Public","7.9", "Add", "green", "");
      
    slMapData[410] = new SchoolMapData("910554", 43.015268,-81.2316321, "/secondary/%c3%89cole_secondaire_Gabriel-Dumont/London/Report_Card.aspx", "Gabriel-Dumont", "Public","5.4", "Add", "orange", "");
      
    slMapData[411] = new SchoolMapData("910740", 42.9254419,-78.9149129, "/secondary/Fort_Erie_Secondary_School/Fort_Erie/Report_Card.aspx", "Fort Erie", "Public","5.0", "Add", "orange", "");
      
    slMapData[412] = new SchoolMapData("910872", 48.6103358,-93.4274886, "/secondary/Fort_Frances_High_School/Fort_Frances/Report_Card.aspx", "Fort Frances", "Public","4.7", "Add", "orange", "");
      
    slMapData[413] = new SchoolMapData("911135", 44.237143,-76.5838514, "/secondary/Frontenac_Secondary_School/Kingston/Report_Card.aspx", "Frontenac", "Public","7.1", "Add", "yellow", "");
      
    slMapData[414] = new SchoolMapData("911291", 43.860645,-78.84611, "/secondary/G_L_Roberts_Collegiate_and_Vocational_Institute/Oshawa/Report_Card.aspx", "G L Roberts", "Public","5.0", "Add", "orange", "");
      
    slMapData[415] = new SchoolMapData("911399", 43.3683292,-80.3169124, "/secondary/Galt_Collegiate_and_Vocational_Institute/Cambridge/Report_Card.aspx", "Galt", "Public","5.8", "Add", "orange", "");
      
    slMapData[416] = new SchoolMapData("911526", 44.3311175,-76.1568228, "/secondary/Gananoque_Secondary_School/Gananoque/Report_Card.aspx", "Gananoque", "Public","4.6", "Add", "orange", "");
      
    slMapData[417] = new SchoolMapData("911780", 42.106852,-83.110229, "/secondary/General_Amherst_High_School/Amherstburg/Report_Card.aspx", "General Amherst", "Public","7.7", "Add", "green", "");
      
    slMapData[418] = new SchoolMapData("912174", 43.6851461,-79.4728816, "/secondary/George_Harvey_Collegiate_Institute/Toronto/Report_Card.aspx", "George Harvey", "Public","6.3", "Add", "yellow", "");
      
    slMapData[419] = new SchoolMapData("912301", 43.7635444,-79.3418138, "/secondary/George_S_Henry_Academy/Toronto/Report_Card.aspx", "George S Henry", "Public","4.3", "Add", "orange", "");
      
    slMapData[420] = new SchoolMapData("912360", 43.787376,-79.35321, "/secondary/Georges_Vanier_Secondary_School/Toronto/Report_Card.aspx", "Georges Vanier", "Public","4.4", "Add", "orange", "");
      
    slMapData[421] = new SchoolMapData("912433", 43.6511958,-79.9210189, "/secondary/Georgetown_District_High_School/Georgetown/Report_Card.aspx", "Georgetown", "Public","7.2", "Add", "yellow", "");
      
    slMapData[422] = new SchoolMapData("912565", 49.727562,-86.952221, "/secondary/Geraldton_Composite_School/Geraldton/Report_Card.aspx", "Geraldton", "Public","2.7", "Add", "red", "");
      
    slMapData[423] = new SchoolMapData("912662", 45.4677012,-75.4462952, "/secondary/%c3%89cole_secondaire_publique_Gis%c3%a8le-Lalonde/Orl%c3%a9ans/Report_Card.aspx", "Gisèle-Lalonde", "Public","7.8", "Add", "green", "");
      
    slMapData[424] = new SchoolMapData("912697", 45.4010591,-75.699465, "/secondary/Glebe_Collegiate_Institute/Ottawa/Report_Card.aspx", "Glebe", "Public","7.1", "Add", "yellow", "");
      
    slMapData[425] = new SchoolMapData("912824", 42.7358529,-81.6692532, "/secondary/Glencoe_District_High_School/Glencoe/Report_Card.aspx", "Glencoe", "Public","3.4", "Add", "red", "");
      
    slMapData[426] = new SchoolMapData("912956", 42.8684832,-80.7408702, "/secondary/Glendale_High_School/Tillsonburg/Report_Card.aspx", "Glendale", "Public","5.3", "Add", "orange", "");
      
    slMapData[427] = new SchoolMapData("913081", 43.225568,-79.780773, "/secondary/Glendale_Secondary_School/Hamilton/Report_Card.aspx", "Glendale", "Public","4.4", "Add", "orange", "");
      
    slMapData[428] = new SchoolMapData("913189", 43.625933,-79.593343, "/secondary/Glenforest_Secondary_School/Mississauga/Report_Card.aspx", "Glenforest", "Public","7.5", "Add", "yellow", "");
      
    slMapData[429] = new SchoolMapData("913219", 45.3150405,-74.6398745, "/secondary/Glengarry_District_High_School/Alexandria/Report_Card.aspx", "Glengarry", "Public","6.6", "Add", "yellow", "");
      
    slMapData[430] = new SchoolMapData("913340", 43.3469222,-80.3066243, "/secondary/Glenview_Park_Secondary_School/Cambridge/Report_Card.aspx", "Glenview Park", "Public","5.3", "Add", "orange", "");
      
    slMapData[431] = new SchoolMapData("913472", 45.4309439,-75.620036, "/secondary/Gloucester_High_School/Gloucester/Report_Card.aspx", "Gloucester", "Public","5.3", "Add", "orange", "");
      
    slMapData[432] = new SchoolMapData("913600", 43.7348837,-81.7109572, "/secondary/Goderich_District_Collegiate_Institute/Goderich/Report_Card.aspx", "Goderich", "Public","5.1", "Add", "orange", "");
      
    slMapData[433] = new SchoolMapData("913715", 43.4360228,-79.7350294, "/secondary/Abbey_Park_High_School/Oakville/Report_Card.aspx", "Abbey Park", "Public","9.2", "Add", "green", "");
      
    slMapData[434] = new SchoolMapData("913863", 43.586373,-79.571444, "/secondary/Gordon_Graydon_Memorial_Secondary_School/Mississauga/Report_Card.aspx", "Gordon Graydon", "Public","7.7", "Add", "green", "");
      
    slMapData[435] = new SchoolMapData("914010", 43.2017574,-79.2346273, "/secondary/Governor_Simcoe_Secondary_School/St_Catharines/Report_Card.aspx", "Governor Simcoe", "Public","6.6", "Add", "yellow", "");
      
    slMapData[436] = new SchoolMapData("914070", 43.4574469,-80.4382428, "/secondary/Grand_River_Collegiate_Institute/Kitchener/Report_Card.aspx", "Grand River", "Public","6.1", "Add", "yellow", "");
      
    slMapData[437] = new SchoolMapData("914380", 44.917709,-79.376564, "/secondary/Gravenhurst_High_School/Gravenhurst/Report_Card.aspx", "Gravenhurst", "Public","7.3", "Add", "yellow", "");
      
    slMapData[438] = new SchoolMapData("914444", 44.25738,-80.543284, "/secondary/Grey_Highlands_Secondary_School/Flesherton/Report_Card.aspx", "Grey Highlands", "Public","4.8", "Add", "orange", "");
      
    slMapData[439] = new SchoolMapData("914517", 43.1945138,-79.569143, "/secondary/Grimsby_Secondary_School/Grimsby/Report_Card.aspx", "Grimsby", "Public","7.4", "Add", "yellow", "");
      
    slMapData[440] = new SchoolMapData("914723", 43.46053,-79.693424, "/secondary/%c3%89cole_secondaire_Ga%c3%a9tan_Gervais/Oakville/Report_Card.aspx", "Gaétan Gervais", "Public","7.0", "Add", "yellow", "");
      
    slMapData[441] = new SchoolMapData("914770", 43.5426164,-80.2583643, "/secondary/Guelph_Collegiate_and_Vocational_Institute/Guelph/Report_Card.aspx", "Guelph", "Public","7.4", "Add", "yellow", "");
      
    slMapData[442] = new SchoolMapData("914908", 42.9878771,-81.2349102, "/secondary/H_B_Beal_Secondary_School/London/Report_Card.aspx", "H B Beal", "Public","4.5", "Add", "orange", "");
      
    slMapData[443] = new SchoolMapData("915033", 42.962071,-80.051762, "/secondary/Hagersville_Secondary_School/Hagersville/Report_Card.aspx", "Hagersville", "Public","5.5", "Add", "orange", "");
      
    slMapData[444] = new SchoolMapData("915297", 45.043457,-78.522789, "/secondary/Haliburton_Highland_Secondary_School/Haliburton/Report_Card.aspx", "Haliburton Highland", "Public","4.7", "Add", "orange", "");
      
    slMapData[445] = new SchoolMapData("915424", 48.4420791,-89.2516935, "/secondary/Hammarskjold_High_School/Thunder_Bay/Report_Card.aspx", "Hammarskjold", "Public","5.7", "Add", "orange", "");
      
    slMapData[446] = new SchoolMapData("915556", 44.1485472,-81.0319963, "/secondary/John_Diefenbaker_Secondary_School/Hanover/Report_Card.aspx", "John Diefenbaker", "Public","6.7", "Add", "yellow", "");
      
    slMapData[447] = new SchoolMapData("915688", 43.6607703,-79.4134646, "/secondary/Harbord_Collegiate_Institute/Toronto/Report_Card.aspx", "Harbord", "Public","7.2", "Add", "yellow", "");
      
    slMapData[448] = new SchoolMapData("916269", 43.717413,-79.788002, "/secondary/Heart_Lake_Secondary_School/Brampton/Report_Card.aspx", "Heart Lake", "Public","5.0", "Add", "orange", "");
      
    slMapData[449] = new SchoolMapData("916331", 43.872721,-78.944427, "/secondary/Henry_Street_High_School/Whitby/Report_Card.aspx", "Henry Street", "Public","7.0", "Add", "yellow", "");
      
    slMapData[450] = new SchoolMapData("916579", 43.259468,-79.978278, "/secondary/Highland_Secondary_School/Dundas/Report_Card.aspx", "Highland", "Public","6.6", "Add", "yellow", "");
      
    slMapData[451] = new SchoolMapData("916854", 45.3992257,-75.6383388, "/secondary/Hillcrest_High_School/Ottawa/Report_Card.aspx", "Hillcrest", "Public","5.5", "Add", "orange", "");
      
    slMapData[452] = new SchoolMapData("917249", 42.2970259,-83.0220806, "/secondary/Hon_W_C_Kennedy_Secondary_School/Windsor/Report_Card.aspx", "Hon W C Kennedy", "Public","4.6", "Add", "orange", "");
      
    slMapData[453] = new SchoolMapData("917559", 43.8876665,-79.7363444, "/secondary/Humberview_Secondary_School/Bolton/Report_Card.aspx", "The Humberview", "Public","6.0", "Add", "yellow", "");
      
    slMapData[454] = new SchoolMapData("917630", 43.6596346,-79.4695753, "/secondary/Humberside_Collegiate_Institute/Toronto/Report_Card.aspx", "Humberside", "Public","8.1", "Add", "green", "");
      
    slMapData[455] = new SchoolMapData("917761", 45.322781,-79.213539, "/secondary/Huntsville_High_School/Huntsville/Report_Card.aspx", "Huntsville", "Public","5.8", "Add", "orange", "");
      
    slMapData[456] = new SchoolMapData("917893", 44.0644334,-79.4455607, "/secondary/Huron_Heights_Secondary_School/Newmarket/Report_Card.aspx", "Huron Heights", "Public","6.2", "Add", "yellow", "");
      
    slMapData[457] = new SchoolMapData("917931", 43.392163,-80.4663151, "/secondary/Huron_Heights_Secondary_School/Kitchener/Report_Card.aspx", "Huron Heights", "Public","6.7", "Add", "yellow", "");
      
    slMapData[458] = new SchoolMapData("918024", 43.1402981,-80.7389279, "/secondary/Huron_Park_Secondary_School/Woodstock/Report_Card.aspx", "Huron Park", "Public","5.9", "Add", "orange", "");
      
    slMapData[459] = new SchoolMapData("918130", 44.360268,-78.71608, "/secondary/I_E_Weldon_Secondary_School/Lindsay/Report_Card.aspx", "I E Weldon", "Public","7.4", "Add", "yellow", "");
      
    slMapData[460] = new SchoolMapData("918156", 43.044076,-80.8895149, "/secondary/Ingersoll_District_Collegiate_Institute/Ingersoll/Report_Card.aspx", "Ingersoll District", "Public","5.5", "Add", "orange", "");
      
    slMapData[461] = new SchoolMapData("918253", 44.3617543,-79.6849919, "/secondary/Innisdale_Secondary_School/Barrie/Report_Card.aspx", "Innisdale", "Public","6.0", "Add", "yellow", "");
      
    slMapData[462] = new SchoolMapData("918288", 48.768533,-80.6817883, "/secondary/Iroquois_Falls_Secondary_School/Iroquois_Falls/Report_Card.aspx", "Iroquois Falls", "Public","3.1", "Add", "red", "");
      
    slMapData[463] = new SchoolMapData("918296", 48.768533,-80.6817883, "/secondary/%c3%89cole_secondaire_publique_l'Alliance/Iroquois_Falls/Report_Card.aspx", "L'Alliance-publique", "Public","2.1", "Add", "red", "");
      
    slMapData[464] = new SchoolMapData("918300", 43.488553,-79.6982053, "/secondary/Iroquois_Ridge_High_School/Oakville/Report_Card.aspx", "Iroquois Ridge", "Public","8.6", "Add", "green", "");
      
    slMapData[465] = new SchoolMapData("918407", 43.783648,-79.676869, "/secondary/Castlebrooke_Secondary_School/Brampton/Report_Card.aspx", "Castlebrooke", "Public","6.4", "Add", "yellow", "");
      
    slMapData[466] = new SchoolMapData("918415", 44.850989,-75.31629, "/secondary/Seaway_District_High_School/Iroquois/Report_Card.aspx", "Seaway", "Public","5.4", "Add", "orange", "");
      
    slMapData[467] = new SchoolMapData("918423", 43.883355,-79.028138, "/secondary/J_Clarke_Richardson_Collegiate/Ajax/Report_Card.aspx", "J Clarke Richardson", "Public","6.7", "Add", "yellow", "");
      
    slMapData[468] = new SchoolMapData("918440", 43.674177,-79.719799, "/secondary/Turner_Fenton_Secondary_School/Brampton/Report_Card.aspx", "Turner Fenton", "Public","6.7", "Add", "yellow", "");
      
    slMapData[469] = new SchoolMapData("918547", 43.6662388,-79.3782795, "/secondary/Jarvis_Collegiate_Institute/Toronto/Report_Card.aspx", "Jarvis", "Public","4.2", "Add", "orange", "");
      
    slMapData[470] = new SchoolMapData("918555", 43.417403,-80.315105, "/secondary/Jacob_Hespeler_Secondary_School/Cambridge/Report_Card.aspx", "Jacob Hespeler", "Public","6.1", "Add", "yellow", "");
      
    slMapData[471] = new SchoolMapData("918598", 49.2787,-81.634744, "/secondary/Northern_Lights_Secondary_School/Moosonee/Report_Card.aspx", "Northern Lights", "Public","0.0", "Add", "red", "");
      
    slMapData[472] = new SchoolMapData("918679", 43.5620664,-80.2465086, "/secondary/John_F_Ross_Collegiate_and_Vocational_Institute/Guelph/Report_Card.aspx", "John F Ross", "Public","7.9", "Add", "green", "");
      
    slMapData[473] = new SchoolMapData("918806", 42.29298,-83.056732, "/secondary/Westview_Freedom_Academy_Secondary_School/Windsor/Report_Card.aspx", "Westview Freedom Academy", "Public","3.3", "Add", "red", "");
      
    slMapData[474] = new SchoolMapData("918830", 43.5595593,-79.7155271, "/secondary/John_Fraser_Secondary_School/Mississauga/Report_Card.aspx", "John Fraser", "Public","8.7", "Add", "green", "");
      
    slMapData[475] = new SchoolMapData("918938", 42.3831625,-82.1758035, "/secondary/John_McGregor_Secondary_School/Chatham/Report_Card.aspx", "John McGregor", "Public","5.5", "Add", "orange", "");
      
    slMapData[476] = new SchoolMapData("918954", 45.280857,-75.760176, "/secondary/John_McCrae_Secondary_School/Nepean/Report_Card.aspx", "John McCrae", "Public","8.6", "Add", "green", "");
      
    slMapData[477] = new SchoolMapData("918997", 43.662235,-79.3776488, "/secondary/Coll%c3%a8ge_fran%c3%a7ais_secondaire/Toronto/Report_Card.aspx", "Collège Français", "Public","7.7", "Add", "green", "");
      
    slMapData[478] = new SchoolMapData("919063", 49.4198592,-82.4352702, "/secondary/Kapuskasing_District_High_School/Kapuskasing/Report_Card.aspx", "Kapuskasing", "Public","5.1", "Add", "orange", "");
      
    slMapData[479] = new SchoolMapData("919195", 44.2787501,-78.3263916, "/secondary/Kenner_Collegiate_and_Vocational_Institute/Peterborough/Report_Card.aspx", "Kenner", "Public","4.9", "Add", "orange", "");
      
    slMapData[480] = new SchoolMapData("919233", 44.2228551,-79.4539504, "/secondary/Keswick_High_School/Keswick/Report_Card.aspx", "Keswick", "Public","5.0", "Add", "orange", "");
      
    slMapData[481] = new SchoolMapData("919322", 42.421141,-82.1910104, "/secondary/Chatham-Kent_Secondary_School/Chatham/Report_Card.aspx", "Chatham-Kent", "Public","5.9", "Add", "orange", "");
      
    slMapData[482] = new SchoolMapData("919454", 44.147535,-81.548639, "/secondary/Kincardine_District_Secondary_School/Kincardine/Report_Card.aspx", "Kincardine", "Public","5.0", "Add", "orange", "");
      
    slMapData[483] = new SchoolMapData("919586", 43.9318638,-79.5138364, "/secondary/King_City_Secondary_School/King_City/Report_Card.aspx", "King City", "Public","6.0", "Add", "yellow", "");
      
    slMapData[484] = new SchoolMapData("919977", 44.2295818,-76.498412, "/secondary/Kingston_Collegiate_and_Vocational_Institute/Kingston/Report_Card.aspx", "Kingston", "Public","7.3", "Add", "yellow", "");
      
    slMapData[485] = new SchoolMapData("920100", 42.0384486,-82.7319491, "/secondary/Kingsville_District_High_School_District_High_Scho/Kingsville/Report_Card.aspx", "Kingsville", "Public","7.1", "Add", "yellow", "");
      
    slMapData[486] = new SchoolMapData("920231", 43.6847885,-79.5611574, "/secondary/Kipling_Collegiate_Institute/Toronto/Report_Card.aspx", "Kipling", "Public","2.8", "Add", "red", "");
      
    slMapData[487] = new SchoolMapData("920363", 48.1490495,-80.0209309, "/secondary/Kirkland_Lake_District_Composite_Secondary_School/Kirkland_Lake/Report_Card.aspx", "Kirkland Lake", "Public","5.3", "Add", "orange", "");
      
    slMapData[488] = new SchoolMapData("920495", 43.4558138,-80.507356, "/secondary/Kitchener_Waterloo_Collegiate_and_Vocational_Schoo/Kitchener/Report_Card.aspx", "Kitchener Waterloo", "Public","6.5", "Add", "yellow", "");
      
    slMapData[489] = new SchoolMapData("920533", 46.5424202,-84.3821202, "/secondary/Korah_Collegiate_Institute/Sault_Ste._Marie/Report_Card.aspx", "Korah", "Public","5.9", "Add", "orange", "");
      
    slMapData[490] = new SchoolMapData("920576", 43.8015352,-79.318651, "/secondary/L'Amoreaux_Collegiate_Institute/Toronto/Report_Card.aspx", "L'Amoreaux", "Public","5.9", "Add", "orange", "");
      
    slMapData[491] = new SchoolMapData("920592", 44.2299,-76.4805, "/secondary/La_Salle_Secondary_School/Kingston/Report_Card.aspx", "La Salle", "Public","6.5", "Add", "yellow", "");
      
    slMapData[492] = new SchoolMapData("920622", 46.523899,-80.940435, "/secondary/Lasalle_Secondary_School/Sudbury/Report_Card.aspx", "Lasalle", "Public","5.8", "Add", "orange", "");
      
    slMapData[493] = new SchoolMapData("921092", 43.6008844,-79.5180919, "/secondary/Lakeshore_Collegiate_Institute/Toronto/Report_Card.aspx", "Lakeshore", "Public","4.5", "Add", "orange", "");
      
    slMapData[494] = new SchoolMapData("921408", 42.8806452,-82.0850273, "/secondary/Lambton_Central_Collegiate_and_Vocational_Institut/Petrolia/Report_Card.aspx", "Lambton Central", "Public","6.9", "Add", "yellow", "");
      
    slMapData[495] = new SchoolMapData("921530", 42.5957647,-82.1793403, "/secondary/Lambton_Kent_Composite_School/Dresden/Report_Card.aspx", "Lambton Kent", "Public","5.3", "Add", "orange", "");
      
    slMapData[496] = new SchoolMapData("921661", 43.8372411,-79.4393162, "/secondary/Langstaff_Secondary_School/Richmond_Hill/Report_Card.aspx", "Langstaff", "Public","7.8", "Add", "green", "");
      
    slMapData[497] = new SchoolMapData("921750", 43.1840146,-79.2256762, "/secondary/Laura_Secord_Secondary_School/St_Catharines/Report_Card.aspx", "Laura Secord", "Public","7.2", "Add", "yellow", "");
      
    slMapData[498] = new SchoolMapData("922056", 43.7217975,-79.408449, "/secondary/Lawrence_Park_Collegiate_Institute/Toronto/Report_Card.aspx", "Lawrence Park", "Public","8.5", "Add", "green", "");
      
    slMapData[499] = new SchoolMapData("922188", 42.0513578,-82.607137, "/secondary/Leamington_District_Secondary_School/Leamington/Report_Card.aspx", "Leamington", "Public","6.6", "Add", "yellow", "");
      
    slMapData[500] = new SchoolMapData("922315", 43.7113,-79.3709918, "/secondary/Leaside_High_School/Toronto/Report_Card.aspx", "Leaside", "Public","8.4", "Add", "green", "");
      
    slMapData[501] = new SchoolMapData("922498", 43.8048602,-79.2260794, "/secondary/Lester_B_Pearson_Collegiate_Institute/Toronto/Report_Card.aspx", "Lester B Pearson", "Public","5.3", "Add", "orange", "");
      
    slMapData[502] = new SchoolMapData("922501", 43.3726921,-79.8086158, "/secondary/Lester_B._Pearson/Burlington/Report_Card.aspx", "Lester B Pearson", "Public","7.9", "Add", "green", "");
      
    slMapData[503] = new SchoolMapData("922838", 44.352856,-78.746857, "/secondary/Lindsay_Collegiate_and_Vocational_Institute/Lindsay/Report_Card.aspx", "Lindsay", "Public","5.7", "Add", "orange", "");
      
    slMapData[504] = new SchoolMapData("922870", 48.479624,-81.37856, "/secondary/%c3%89cole_secondaire_Renaissance/Timmins/Report_Card.aspx", "Renaissance", "Public","2.8", "Add", "red", "");
      
    slMapData[505] = new SchoolMapData("922960", 45.420854,-75.688001, "/secondary/Lisgar_Collegiate_Institute/Ottawa/Report_Card.aspx", "Lisgar", "Public","8.0", "Add", "green", "");
      
    slMapData[506] = new SchoolMapData("923095", 43.7268594,-80.9469615, "/secondary/Listowel_District_Secondary_School/Listowel/Report_Card.aspx", "Listowel", "Public","6.4", "Add", "yellow", "");
      
    slMapData[507] = new SchoolMapData("923354", 46.436449,-81.142405, "/secondary/Lively_District_Secondary_School/Lively/Report_Card.aspx", "Lively", "Public","5.3", "Add", "orange", "");
      
    slMapData[508] = new SchoolMapData("923486", 46.449497,-80.989945, "/secondary/Lo-Ellen_Park_Secondary_School/Sudbury/Report_Card.aspx", "Lo-Ellen Park", "Public","6.6", "Add", "yellow", "");
      
    slMapData[509] = new SchoolMapData("923613", 46.464922,-81.003885, "/secondary/Lockerby_Composite_School/Sudbury/Report_Card.aspx", "Lockerby", "Public","7.4", "Add", "yellow", "");
      
    slMapData[510] = new SchoolMapData("923745", 42.9883864,-81.2438771, "/secondary/London_Central_Secondary_School/London/Report_Card.aspx", "London Central", "Public","8.9", "Add", "green", "");
      
    slMapData[511] = new SchoolMapData("923877", 42.9694929,-81.2438999, "/secondary/London_South_Secondary_School/London/Report_Card.aspx", "London South", "Public","5.6", "Add", "orange", "");
      
    slMapData[512] = new SchoolMapData("924008", 43.532051,-79.622589, "/secondary/Lorne_Park_Secondary_School/Mississauga/Report_Card.aspx", "Lorne Park", "Public","7.8", "Add", "green", "");
      
    slMapData[513] = new SchoolMapData("924130", 44.2381061,-76.5208109, "/secondary/Loyalist_Collegiate_and_Vocational_Institute/Kingston/Report_Card.aspx", "Loyalist", "Public","5.6", "Add", "orange", "");
      
    slMapData[514] = new SchoolMapData("924393", 43.3642726,-79.8227058, "/secondary/M_M_Robinson_High_School/Burlington/Report_Card.aspx", "M M Robinson", "Public","5.7", "Add", "orange", "");
      
    slMapData[515] = new SchoolMapData("924431", 45.4811146,-77.6738219, "/secondary/Madawaska_Valley_District_High_School/Barry's_Bay/Report_Card.aspx", "Madawaska Valley", "Public","4.2", "Add", "orange", "");
      
    slMapData[516] = new SchoolMapData("924520", 43.6829799,-79.2938459, "/secondary/Malvern_Collegiate_Institute/Toronto/Report_Card.aspx", "Malvern", "Public","8.0", "Add", "green", "");
      
    slMapData[517] = new SchoolMapData("924652", 49.117218,-85.842307, "/secondary/Manitouwadge_High_School/Manitouwadge/Report_Card.aspx", "Manitouwadge", "Public","0.0", "Add", "red", "");
      
    slMapData[518] = new SchoolMapData("924679", 45.832342,-82.161727, "/secondary/Manitoulin_Secondary_School/M'Chigeeng/Report_Card.aspx", "Manitoulin", "Public","4.4", "Add", "orange", "");
      
    slMapData[519] = new SchoolMapData("924784", 48.71671,-86.381978, "/secondary/Marathon_High_School/Marathon/Report_Card.aspx", "Marathon", "Public","4.0", "Add", "red", "");
      
    slMapData[520] = new SchoolMapData("924849", 43.8765607,-79.2891283, "/secondary/Markville_Secondary_School/Markham/Report_Card.aspx", "Markville", "Public","8.9", "Add", "green", "");
      
    slMapData[521] = new SchoolMapData("924911", 43.8801258,-79.2529718, "/secondary/Markham_District_High_School/Markham/Report_Card.aspx", "Markham", "Public","7.0", "Add", "yellow", "");
      
    slMapData[522] = new SchoolMapData("925136", 43.6724239,-79.5621484, "/secondary/Martingrove_Collegiate_Institute/Toronto/Report_Card.aspx", "Martingrove", "Public","6.6", "Add", "yellow", "");
      
    slMapData[523] = new SchoolMapData("925179", 46.316655,-78.703586, "/secondary/F_J_McElligott_Secondary_School/Mattawa/Report_Card.aspx", "F J McElligott", "Public","4.0", "Add", "red", "");
      
    slMapData[524] = new SchoolMapData("925326", 44.32693,-79.714454, "/secondary/%c3%89cole_secondaire_Rom%c3%a9o_Dallaire/Barrie/Report_Card.aspx", "Roméo Dallaire", "Public","7.3", "Add", "yellow", "");
      
    slMapData[525] = new SchoolMapData("925349", 43.77234,-79.781842, "/secondary/Mayfield_Secondary_School/Caledon/Report_Card.aspx", "Mayfield", "Public","6.7", "Add", "yellow", "");
      
    slMapData[526] = new SchoolMapData("925365", 45.8158206,-77.0934063, "/secondary/Fellowes_High_School/Pembroke/Report_Card.aspx", "Fellowes", "Public","4.3", "Add", "orange", "");
      
    slMapData[527] = new SchoolMapData("925403", 45.428593,-75.646553, "/secondary/Ottawa_Technical_Learning_Centre/Ottawa/Report_Card.aspx", "Ottawa Technical", "Public","1.6", "Add", "red", "");
      
    slMapData[528] = new SchoolMapData("925438", 44.6019579,-80.585403, "/secondary/Georgian_Bay_Secondary_School/Meaford/Report_Card.aspx", "Georgian Bay", "Public","7.4", "Add", "yellow", "");
      
    slMapData[529] = new SchoolMapData("925535", 43.624739,-79.708112, "/secondary/Mississauga_Secondary_School/Mississauga/Report_Card.aspx", "Mississauga", "Public","6.3", "Add", "yellow", "");
      
    slMapData[530] = new SchoolMapData("925551", 43.577999,-79.759788, "/secondary/Meadowvale_Secondary_School/Mississauga/Report_Card.aspx", "Meadowvale", "Public","6.6", "Add", "yellow", "");
      
    slMapData[531] = new SchoolMapData("925560", 43.0515758,-81.2908718, "/secondary/Medway_High_School/Arva/Report_Card.aspx", "Medway", "Public","6.4", "Add", "yellow", "");
      
    slMapData[532] = new SchoolMapData("925691", 45.3601476,-75.7353988, "/secondary/Merivale_High_School/Nepean/Report_Card.aspx", "Merivale", "Public","7.6", "Add", "green", "");
      
    slMapData[533] = new SchoolMapData("926086", 47.992733,-84.77576, "/secondary/Michipicoten_High_School/Wawa/Report_Card.aspx", "Michipicoten", "Public","5.2", "Add", "orange", "");
      
    slMapData[534] = new SchoolMapData("926140", 43.8477988,-79.2679668, "/secondary/Middlefield_Collegiate_Institute/Markham/Report_Card.aspx", "Middlefield", "Public","8.1", "Add", "green", "");
      
    slMapData[535] = new SchoolMapData("926736", 43.5077593,-79.8696839, "/secondary/Milton_District_High_School/Milton/Report_Card.aspx", "Milton", "Public","7.6", "Add", "green", "");
      
    slMapData[536] = new SchoolMapData("926817", 43.861835,-79.303356, "/secondary/Milliken_Mills_High_School/Unionville/Report_Card.aspx", "Milliken Mills", "Public","7.5", "Add", "yellow", "");
      
    slMapData[537] = new SchoolMapData("927120", 43.4749655,-81.1891463, "/secondary/Mitchell_District_High_School/Mitchell/Report_Card.aspx", "Mitchell", "Public","6.1", "Add", "yellow", "");
      
    slMapData[538] = new SchoolMapData("927252", 44.1750218,-77.3524346, "/secondary/Moira_Secondary_School/Belleville/Report_Card.aspx", "Moira", "Public","4.0", "Add", "red", "");
      
    slMapData[539] = new SchoolMapData("927384", 43.6794312,-79.3240898, "/secondary/Monarch_Park_Collegiate_Institute/Toronto/Report_Card.aspx", "Monarch Park", "Public","6.1", "Add", "yellow", "");
      
    slMapData[540] = new SchoolMapData("927430", 43.0252198,-81.2181152, "/secondary/Montcalm_Secondary_School/London/Report_Card.aspx", "Montcalm", "Public","1.6", "Add", "red", "");
      
    slMapData[541] = new SchoolMapData("927724", 44.3047675,-79.5565109, "/secondary/Nantyr_Shores_Secondary_School/Innisfil/Report_Card.aspx", "Nantyr Shores", "Public","6.4", "Add", "yellow", "");
      
    slMapData[542] = new SchoolMapData("927902", 44.2485078,-76.960268, "/secondary/Napanee_District_Secondary_School/Napanee/Report_Card.aspx", "Napanee", "Public","4.9", "Add", "orange", "");
      
    slMapData[543] = new SchoolMapData("928151", 44.743729,-79.8993, "/secondary/Georgian_Bay_District_SS/Midland/Report_Card.aspx", "Georgian Bay District", "Public","4.4", "Add", "orange", "");
      
    slMapData[544] = new SchoolMapData("928160", 43.3570659,-79.7655102, "/secondary/Nelson_High_School/Burlington/Report_Card.aspx", "Nelson", "Public","8.2", "Add", "green", "");
      
    slMapData[545] = new SchoolMapData("928291", 45.383436,-75.759286, "/secondary/Nepean_High_School/Ottawa/Report_Card.aspx", "Nepean", "Public","8.4", "Add", "green", "");
      
    slMapData[546] = new SchoolMapData("928682", 44.0469947,-79.4353569, "/secondary/Newmarket_High_School/Newmarket/Report_Card.aspx", "Newmarket", "Public","8.3", "Add", "green", "");
      
    slMapData[547] = new SchoolMapData("928810", 43.7929102,-79.4271838, "/secondary/Newtonbrook_Secondary_School/Toronto/Report_Card.aspx", "Newtonbrook", "Public","4.6", "Add", "orange", "");
      
    slMapData[548] = new SchoolMapData("929336", 48.940792,-88.261797, "/secondary/Nipigon_Red_Rock_District_High_School/Red_Rock/Report_Card.aspx", "Nipigon Red Rock", "Public","4.1", "Add", "orange", "");
      
    slMapData[549] = new SchoolMapData("929468", 43.7468253,-79.5838537, "/secondary/North_Albion_Collegiate_Institute/Toronto/Report_Card.aspx", "North Albion", "Public","4.2", "Add", "orange", "");
      
    slMapData[550] = new SchoolMapData("929590", 45.0858707,-75.2410609, "/secondary/North_Dundas_District_High_School/Chesterville/Report_Card.aspx", "North Dundas", "Public","6.4", "Add", "yellow", "");
      
    slMapData[551] = new SchoolMapData("929727", 42.2906132,-82.7118941, "/secondary/Belle_River_District_High_School/Belle_River/Report_Card.aspx", "Belle River", "Public","6.6", "Add", "yellow", "");
      
    slMapData[552] = new SchoolMapData("929859", 45.016537,-75.64575, "/secondary/North_Grenville_District_High_School/Kemptville/Report_Card.aspx", "North Grenville", "Public","6.6", "Add", "yellow", "");
      
    slMapData[553] = new SchoolMapData("929980", 45.0942099,-77.860961, "/secondary/North_Hastings_High_School/Bancroft/Report_Card.aspx", "North Hastings", "Public","3.3", "Add", "red", "");
      
    slMapData[554] = new SchoolMapData("930113", 43.1995994,-81.6692532, "/secondary/North_Middlesex_District_High_School/Parkhill/Report_Card.aspx", "North Middlesex", "Public","5.2", "Add", "orange", "");
      
    slMapData[555] = new SchoolMapData("930144", 45.2786109,-75.8603766, "/secondary/%c3%89cole_secondaire_publique_Maurice-Lapointe/Kanata/Report_Card.aspx", "Maurice-Lapointe", "Public","7.9", "Add", "green", "");
      
    slMapData[556] = new SchoolMapData("930245", 43.1683538,-80.2620286, "/secondary/North_Park_Collegiate_and_Vocational_School/Brantford/Report_Card.aspx", "North Park", "Public","6.1", "Add", "yellow", "");
      
    slMapData[557] = new SchoolMapData("930348", 44.78551,-76.679008, "/secondary/Granite_Ridge_Education_Centre_Secondary_School/Sharbot_Lake/Report_Card.aspx", "Granite Ridge", "Public","4.6", "Add", "orange", "");
      
    slMapData[558] = new SchoolMapData("930504", 43.7083596,-79.3970735, "/secondary/North_Toronto_Collegiate_Institute/Toronto/Report_Card.aspx", "North Toronto", "Public","8.5", "Add", "green", "");
      
    slMapData[559] = new SchoolMapData("930636", 42.9969514,-82.375167, "/secondary/Northern_Collegiate_Institute_and_Vocational_Schoo/Sarnia/Report_Card.aspx", "Northern", "Public","7.8", "Add", "green", "");
      
    slMapData[560] = new SchoolMapData("930660", 43.7209366,-79.7476815, "/secondary/North_Park_Secondary_School/Brampton/Report_Card.aspx", "North Park", "Public","7.0", "Add", "yellow", "");
      
    slMapData[561] = new SchoolMapData("930679", 43.733854,-79.730428, "/secondary/Judith_Nyman_Secondary_School/Brampton/Report_Card.aspx", "Judith Nyman", "Public","0.0", "Add", "red", "");
      
    slMapData[562] = new SchoolMapData("930768", 43.7097264,-79.3906113, "/secondary/Northern_Secondary_School/Toronto/Report_Card.aspx", "Northern", "Public","7.6", "Add", "green", "");
      
    slMapData[563] = new SchoolMapData("931020", 43.773755,-79.446137, "/secondary/Northview_Heights_Secondary_School/Toronto/Report_Card.aspx", "Northview Heights", "Public","6.5", "Add", "yellow", "");
      
    slMapData[564] = new SchoolMapData("931284", 43.8608481,-80.8322428, "/secondary/Norwell_District_Secondary_School/Palmerston/Report_Card.aspx", "Norwell", "Public","6.0", "Add", "yellow", "");
      
    slMapData[565] = new SchoolMapData("931543", 44.3823,-77.979913, "/secondary/Norwood_District_High_School/Norwood/Report_Card.aspx", "Norwood", "Public","4.5", "Add", "orange", "");
      
    slMapData[566] = new SchoolMapData("931934", 42.9756466,-81.3203942, "/secondary/Oakridge_Secondary_School/London/Report_Card.aspx", "Oakridge", "Public","7.2", "Add", "yellow", "");
      
    slMapData[567] = new SchoolMapData("932060", 43.4731152,-79.6557367, "/secondary/Oakville_Trafalgar_High_School/Oakville/Report_Card.aspx", "Oakville Trafalgar", "Public","8.9", "Add", "green", "");
      
    slMapData[568] = new SchoolMapData("932191", 43.6794641,-79.4358759, "/secondary/Oakwood_Collegiate_Institute/Toronto/Report_Card.aspx", "Oakwood", "Public","3.2", "Add", "red", "");
      
    slMapData[569] = new SchoolMapData("932329", 43.905686,-78.867052, "/secondary/O'Neill_Collegiate_and_Vocational_Institute/Oshawa/Report_Card.aspx", "O'Neill", "Public","6.2", "Add", "yellow", "");
      
    slMapData[570] = new SchoolMapData("932345", 43.944647,-78.851663, "/secondary/Maxwell_Heights_Secondary_School/Oshawa/Report_Card.aspx", "Maxwell Heights", "Public","7.0", "Add", "yellow", "");
      
    slMapData[571] = new SchoolMapData("932434", 45.517632,-76.920827, "/secondary/Opeongo_High_School/Douglas/Report_Card.aspx", "Opeongo", "Public","6.3", "Add", "yellow", "");
      
    slMapData[572] = new SchoolMapData("932450", 43.9237182,-80.1019469, "/secondary/Orangeville_District_Secondary_School/Orangeville/Report_Card.aspx", "Orangeville", "Public","6.7", "Add", "yellow", "");
      
    slMapData[573] = new SchoolMapData("932507", 43.221252,-79.710026, "/secondary/Orchard_Park_Secondary_School/Stoney_Creek/Report_Card.aspx", "Orchard Park", "Public","6.9", "Add", "yellow", "");
      
    slMapData[574] = new SchoolMapData("932710", 45.228534,-75.471144, "/secondary/Osgoode_Township_High_School/Metcalfe/Report_Card.aspx", "Osgoode Township", "Public","7.3", "Add", "yellow", "");
      
    slMapData[575] = new SchoolMapData("933198", 43.7098733,-79.3345852, "/secondary/Marc_Garneau_Collegiate_Institute/Toronto/Report_Card.aspx", "Marc Garneau", "Public","6.5", "Add", "yellow", "");
      
    slMapData[576] = new SchoolMapData("933346", 43.8975164,-79.2798697, "/secondary/Bur_Oak_Secondary_School/Markham/Report_Card.aspx", "Bur Oak", "Public","8.4", "Add", "green", "");
      
    slMapData[577] = new SchoolMapData("933490", 43.2028658,-80.3857597, "/secondary/Paris_District_High_School/Paris/Report_Card.aspx", "Paris", "Public","5.7", "Add", "orange", "");
      
    slMapData[578] = new SchoolMapData("933759", 43.6398019,-79.4369848, "/secondary/Parkdale_Collegiate_Institute/Toronto/Report_Card.aspx", "Parkdale", "Public","5.3", "Add", "orange", "");
      
    slMapData[579] = new SchoolMapData("934275", 45.3540199,-80.0360773, "/secondary/Parry_Sound_High_School/Parry_Sound/Report_Card.aspx", "Parry Sound", "Public","5.4", "Add", "orange", "");
      
    slMapData[580] = new SchoolMapData("934402", 43.1404561,-80.2405762, "/secondary/Pauline_Johnson_Collegiate_and_Vocational_School/Brantford/Report_Card.aspx", "Pauline Johnson", "Public","3.4", "Add", "red", "");
      
    slMapData[581] = new SchoolMapData("934852", 44.7616783,-79.9394523, "/secondary/%c3%89cole_secondaire_Le_Caron/Penetanguishene/Report_Card.aspx", "Le Caron", "Public","4.5", "Add", "orange", "");
      
    slMapData[582] = new SchoolMapData("934991", 43.967074,-78.958196, "/secondary/Brooklin_High_School/Whitby/Report_Card.aspx", "Brooklin", "Public","7.4", "Add", "yellow", "");
      
    slMapData[583] = new SchoolMapData("935050", 44.9042587,-76.2503177, "/secondary/Perth_and_District_Collegiate_Institute/Perth/Report_Card.aspx", "Perth and District", "Public","6.0", "Add", "yellow", "");
      
    slMapData[584] = new SchoolMapData("935244", 43.668198,-79.825438, "/secondary/Jean_Augustine_SS/Brampton/Report_Card.aspx", "Jean Augustine", "Public","5.0", "Add", "orange", "");
      
    slMapData[585] = new SchoolMapData("935310", 43.859709,-79.057535, "/secondary/Pickering_High_School/Ajax/Report_Card.aspx", "Pickering", "Public","6.7", "Add", "yellow", "");
      
    slMapData[586] = new SchoolMapData("935360", 43.852026,-79.097582, "/secondary/Pine_Ridge_Secondary_School/Pickering/Report_Card.aspx", "Pine Ridge", "Public","4.9", "Add", "orange", "");
      
    slMapData[587] = new SchoolMapData("935425", 45.546911,-75.2874373, "/secondary/Rockland_District_High_School/Rockland/Report_Card.aspx", "Rockland", "Public","4.8", "Add", "orange", "");
      
    slMapData[588] = new SchoolMapData("935455", 43.1383398,-79.2584672, "/secondary/DSBN_Academy/St_Catharines/Report_Card.aspx", "DSBN Academy", "Public","5.2", "Add", "orange", "");
      
    slMapData[589] = new SchoolMapData("935700", 42.8882936,-79.2547108, "/secondary/Port_Colborne_High_School/Port_Colborne/Report_Card.aspx", "Port Colborne", "Public","5.8", "Add", "orange", "");
      
    slMapData[590] = new SchoolMapData("935832", 43.562473,-79.58982, "/secondary/Port_Credit_Secondary_School/Mississauga/Report_Card.aspx", "Port Credit", "Public","7.5", "Add", "yellow", "");
      
    slMapData[591] = new SchoolMapData("936090", 43.957638,-78.3038941, "/secondary/Port_Hope_High_School/Port_Hope/Report_Card.aspx", "Port Hope", "Public","4.4", "Add", "orange", "");
      
    slMapData[592] = new SchoolMapData("936227", 44.1026492,-78.9545513, "/secondary/Port_Perry_High_School/Port_Perry/Report_Card.aspx", "Port Perry", "Public","6.8", "Add", "yellow", "");
      
    slMapData[593] = new SchoolMapData("936480", 43.3917645,-80.3652774, "/secondary/Preston_High_School/Cambridge/Report_Card.aspx", "Preston", "Public","7.1", "Add", "yellow", "");
      
    slMapData[594] = new SchoolMapData("936618", 44.008942,-77.137522, "/secondary/Prince_Edward_Collegiate_Institute/Picton/Report_Card.aspx", "Prince Edward", "Public","4.7", "Add", "orange", "");
      
    slMapData[595] = new SchoolMapData("936871", 50.1080341,-91.9333965, "/secondary/Queen_Elizabeth_District_High_School/Sioux_Lookout/Report_Card.aspx", "Queen Elizabeth", "Public","2.6", "Add", "red", "");
      
    slMapData[596] = new SchoolMapData("937134", 44.1757304,-77.3951331, "/secondary/Quinte_Secondary_School/Belleville/Report_Card.aspx", "Quinte", "Public","4.3", "Add", "orange", "");
      
    slMapData[597] = new SchoolMapData("937266", 43.7219525,-79.2364199, "/secondary/R_H_King_Academy/Toronto/Report_Card.aspx", "R H King", "Public","7.7", "Add", "green", "");
      
    slMapData[598] = new SchoolMapData("937525", 43.908062,-78.890115, "/secondary/R._S._McLaughlin_Collegiate_and_Vocational_Institute/Oshawa/Report_Card.aspx", "R. S. McLaughlin", "Public","7.0", "Add", "yellow", "");
      
    slMapData[599] = new SchoolMapData("937592", 43.8113309,-79.320198, "/secondary/Dr_Norman_Bethune_Collegiate_Institute/Toronto/Report_Card.aspx", "Dr Norman Bethune", "Public","7.7", "Add", "green", "");
      
    slMapData[600] = new SchoolMapData("937657", 48.7190491,-94.5669743, "/secondary/Rainy_River_High_School/Rainy_River/Report_Card.aspx", "Rainy River", "Public","4.5", "Add", "orange", "");
      
    slMapData[601] = new SchoolMapData("937665", 43.3706363,-79.7499714, "/secondary/Robert_Bateman_High_School/Burlington/Report_Card.aspx", "Robert Bateman", "Public","6.0", "Add", "yellow", "");
      
    slMapData[602] = new SchoolMapData("937673", 45.2668329,-75.3638671, "/secondary/Russell_High_School/Russell/Report_Card.aspx", "Russel High", "Public","5.3", "Add", "orange", "");
      
    slMapData[603] = new SchoolMapData("937789", 51.015221,-93.818584, "/secondary/Red_Lake_District_High_School/Red_Lake/Report_Card.aspx", "Red Lake", "Public","6.6", "Add", "yellow", "");
      
    slMapData[604] = new SchoolMapData("937916", 45.4704634,-76.6864864, "/secondary/Renfrew_Collegiate_Institute/Renfrew/Report_Card.aspx", "Renfrew", "Public","6.0", "Add", "yellow", "");
      
    slMapData[605] = new SchoolMapData("938009", 43.588495,-79.685628, "/secondary/Rick_Hansen_Secondary_School/Mississauga/Report_Card.aspx", "Rick Hansen", "Public","7.1", "Add", "yellow", "");
      
    slMapData[606] = new SchoolMapData("938106", 43.9034639,-79.4407804, "/secondary/Richmond_Hill_High_School/Richmond_Hill/Report_Card.aspx", "Richmond Hill", "Public","8.7", "Add", "green", "");
      
    slMapData[607] = new SchoolMapData("938173", 43.6792407,-79.5387399, "/secondary/Richview_Collegiate_Institute/Toronto/Report_Card.aspx", "Richview", "Public","7.7", "Add", "green", "");
      
    slMapData[608] = new SchoolMapData("938300", 44.615454,-76.210445, "/secondary/Rideau_District_High_School/Elgin/Report_Card.aspx", "Rideau", "Public","7.2", "Add", "yellow", "");
      
    slMapData[609] = new SchoolMapData("938432", 45.434168,-75.642876, "/secondary/Rideau_High_School/Ottawa/Report_Card.aspx", "Rideau", "Public","3.2", "Add", "red", "");
      
    slMapData[610] = new SchoolMapData("938564", 45.376777,-75.6608394, "/secondary/Ridgemont_High_School/Ottawa/Report_Card.aspx", "Ridgemont", "Public","4.2", "Add", "orange", "");
      
    slMapData[611] = new SchoolMapData("938696", 42.439316,-81.88624, "/secondary/Ridgetown_District_High_School/Ridgetown/Report_Card.aspx", "Ridgetown", "Public","5.4", "Add", "orange", "");
      
    slMapData[612] = new SchoolMapData("938823", 42.883425,-79.037496, "/secondary/Ridgeway-Crystal_Beach_High_School/Ridgeway/Report_Card.aspx", "Ridgeway-Crystal Beach", "Public","6.1", "Add", "yellow", "");
      
    slMapData[613] = new SchoolMapData("939080", 43.6697947,-79.3331876, "/secondary/Riverdale_Collegiate_Institute/Toronto/Report_Card.aspx", "Riverdale", "Public","7.0", "Add", "yellow", "");
      
    slMapData[614] = new SchoolMapData("939218", 42.3313925,-82.9378843, "/secondary/Riverside_Secondary_School/Windsor/Report_Card.aspx", "Riverside", "Public","4.9", "Add", "orange", "");
      
    slMapData[615] = new SchoolMapData("939585", 43.8576424,-79.308629, "/secondary/Bill_Crothers_Secondary_School/Unionville/Report_Card.aspx", "Bill Crothers", "Public","8.1", "Add", "green", "");
      
    slMapData[616] = new SchoolMapData("939596", 43.7658453,-79.7464956, "/secondary/Sandalwood_Heights_Secondary_School/Brampton/Report_Card.aspx", "Sandalwood Heights", "Public","5.6", "Add", "orange", "");
      
    slMapData[617] = new SchoolMapData("939609", 43.6641252,-79.4904802, "/secondary/Runnymede_Collegiate_Institute/Toronto/Report_Card.aspx", "Runnymede", "Public","3.9", "Add", "red", "");
      
    slMapData[618] = new SchoolMapData("939730", 43.179837,-79.789255, "/secondary/Saltfleet_High_School/Stoney_Creek/Report_Card.aspx", "Saltfleet", "Public","5.6", "Add", "orange", "");
      
    slMapData[619] = new SchoolMapData("939765", 42.2255669,-83.0606065, "/secondary/Sandwich_Secondary_School/LaSalle/Report_Card.aspx", "Sandwich", "Public","7.0", "Add", "yellow", "");
      
    slMapData[620] = new SchoolMapData("940127", 44.4334615,-81.3832744, "/secondary/Saugeen_District_Secondary_School/Port_Elgin/Report_Card.aspx", "Saugeen", "Public","7.6", "Add", "green", "");
      
    slMapData[621] = new SchoolMapData("940437", 42.9470176,-81.2890598, "/secondary/Saunders_Secondary_School/London/Report_Card.aspx", "Saunders", "Public","4.7", "Add", "orange", "");
      
    slMapData[622] = new SchoolMapData("940518", 43.690226,-79.530598, "/secondary/Scarlett_Heights_Entrepreneurial_Academy/Toronto/Report_Card.aspx", "Scarlett Heights Entrepreneurial", "Public","1.3", "Add", "red", "");
      
    slMapData[623] = new SchoolMapData("940666", 48.785098,-87.102368, "/secondary/Lake_Superior_High_School/Terrace_Bay/Report_Card.aspx", "Lake Superior", "Public","4.4", "Add", "orange", "");
      
    slMapData[624] = new SchoolMapData("941298", 46.4966293,-80.9999438, "/secondary/Sudbury_Secondary_School/Sudbury/Report_Card.aspx", "Sudbury", "Public","5.5", "Add", "orange", "");
      
    slMapData[625] = new SchoolMapData("941328", 43.2273801,-79.8240326, "/secondary/Sherwood_Secondary_School/Hamilton/Report_Card.aspx", "Sherwood", "Public","4.5", "Add", "orange", "");
      
    slMapData[626] = new SchoolMapData("941425", 43.6364945,-79.5804228, "/secondary/Silverthorn_Collegiate_Institute/Toronto/Report_Card.aspx", "Silverthorn", "Public","5.7", "Add", "orange", "");
      
    slMapData[627] = new SchoolMapData("941557", 42.841661,-80.3036983, "/secondary/Simcoe_Composite_School/Simcoe/Report_Card.aspx", "Simcoe", "Public","5.2", "Add", "orange", "");
      
    slMapData[628] = new SchoolMapData("941603", 43.919256,-78.939009, "/secondary/Sinclair_Secondary_School/Whitby/Report_Card.aspx", "Sinclair", "Public","6.6", "Add", "yellow", "");
      
    slMapData[629] = new SchoolMapData("941719", 43.2312997,-79.9237051, "/secondary/Sir_Allan_MacNab_Secondary_School/Hamilton/Report_Card.aspx", "Sir Allan MacNab", "Public","4.5", "Add", "orange", "");
      
    slMapData[630] = new SchoolMapData("941743", 43.0025892,-81.304222, "/secondary/Sir_Frederick_Banting_Secondary_School/London/Report_Card.aspx", "Sir Frederick Banting", "Public","6.6", "Add", "yellow", "");
      
    slMapData[631] = new SchoolMapData("941883", 43.2600843,-79.8729921, "/secondary/Sir_John_A_Macdonald_Secondary_School/Hamilton/Report_Card.aspx", "Sir John A Macdonald", "Public","1.9", "Add", "red", "");
      
    slMapData[632] = new SchoolMapData("941948", 43.7876593,-79.3230204, "/secondary/Sir_John_A_Macdonald_Collegiate_Institute/Toronto/Report_Card.aspx", "Sir John A Macdonald", "Public","7.7", "Add", "green", "");
      
    slMapData[633] = new SchoolMapData("941972", 43.7786791,-79.1409002, "/secondary/Sir_Oliver_Mowat_Collegiate_Institute/Toronto/Report_Card.aspx", "Sir Oliver Mowat", "Public","5.9", "Add", "orange", "");
      
    slMapData[634] = new SchoolMapData("942006", 43.4699201,-80.5955285, "/secondary/Sir_John_A_Macdonald_Secondary_School/Waterloo/Report_Card.aspx", "Sir John A Macdonald", "Public","7.4", "Add", "yellow", "");
      
    slMapData[635] = new SchoolMapData("942014", 45.332705,-75.779967, "/secondary/Sir_Robert_Borden_High_School/Nepean/Report_Card.aspx", "Sir Robert Borden", "Public","7.2", "Add", "yellow", "");
      
    slMapData[636] = new SchoolMapData("942162", 42.9469116,-81.2048001, "/secondary/Sir_Wilfrid_Laurier_Secondary_School/London/Report_Card.aspx", "Sir Wilfrid Laurier", "Public","4.5", "Add", "orange", "");
      
    slMapData[637] = new SchoolMapData("942200", 43.7478511,-79.1973017, "/secondary/Sir_Wilfrid_Laurier_Collegiate_Institute/Toronto/Report_Card.aspx", "Sir Wilfrid Laurier", "Public","5.3", "Add", "orange", "");
      
    slMapData[638] = new SchoolMapData("942332", 45.47251,-75.494698, "/secondary/Sir_Wilfrid_Laurier_Secondary_School/Orl%c3%a9ans/Report_Card.aspx", "Sir Wilfrid Laurier", "Public","6.9", "Add", "yellow", "");
      
    slMapData[639] = new SchoolMapData("942340", 44.0314065,-79.4808247, "/secondary/Sir_William_Mulock_Secondary_School/Newmarket/Report_Card.aspx", "Sir William Mulock", "Public","6.9", "Add", "yellow", "");
      
    slMapData[640] = new SchoolMapData("942405", 48.3901017,-89.2787371, "/secondary/Sir_Winston_Churchill_Collegiate_and_Vocational_In/Thunder_Bay/Report_Card.aspx", "Sir Winston Churchill", "Public","6.4", "Add", "yellow", "");
      
    slMapData[641] = new SchoolMapData("942448", 43.2368245,-79.794118, "/secondary/Sir_Winston_Churchill_Secondary_School/Hamilton/Report_Card.aspx", "Sir Winston Churchill", "Public","3.0", "Add", "red", "");
      
    slMapData[642] = new SchoolMapData("942464", 43.1405205,-79.2278385, "/secondary/Sir_Winston_Churchill_Secondary_School/St_Catharines/Report_Card.aspx", "Sir Winston Churchill", "Public","6.6", "Add", "yellow", "");
      
    slMapData[643] = new SchoolMapData("942596", 44.8822571,-76.013489, "/secondary/Smiths_Falls_District_Collegiate_Institute/Smiths_Falls/Report_Card.aspx", "Smiths Falls", "Public","2.8", "Add", "red", "");
      
    slMapData[644] = new SchoolMapData("942855", 45.1852118,-75.8274516, "/secondary/South_Carleton_High_School/Richmond/Report_Card.aspx", "South Carleton", "Public","7.9", "Add", "green", "");
      
    slMapData[645] = new SchoolMapData("942952", 45.347532,-75.765454, "/secondary/Sir_Guy_Carleton_Secondary_School/Nepean/Report_Card.aspx", "Sir Guy Carleton", "Public","3.3", "Add", "red", "");
      
    slMapData[646] = new SchoolMapData("942987", 44.715409,-75.518911, "/secondary/South_Grenville_District_High_School/Prescott/Report_Card.aspx", "South Grenville", "Public","4.2", "Add", "orange", "");
      
    slMapData[647] = new SchoolMapData("943118", 43.3659872,-81.3894297, "/secondary/South_Huron_District_High_School/Exeter/Report_Card.aspx", "South Huron", "Public","6.8", "Add", "yellow", "");
      
    slMapData[648] = new SchoolMapData("943240", 43.094687,-79.548565, "/secondary/South_Lincoln_High_School/Smithville/Report_Card.aspx", "South Lincoln", "Public","7.2", "Add", "yellow", "");
      
    slMapData[649] = new SchoolMapData("943509", 48.48522,-81.2085029, "/secondary/Roland_Michener_Secondary_School/South_Porcupine/Report_Card.aspx", "Roland Michener", "Public","5.1", "Add", "orange", "");
      
    slMapData[650] = new SchoolMapData("943630", 45.842461,-79.376617, "/secondary/Almaguin_Highlands_Secondary_School/South_River/Report_Card.aspx", "Almaguin Highlands", "Public","3.8", "Add", "red", "");
      
    slMapData[651] = new SchoolMapData("943894", 43.350234,-80.336323, "/secondary/Southwood_Secondary_School/Cambridge/Report_Card.aspx", "Southwood", "Public","6.5", "Add", "yellow", "");
      
    slMapData[652] = new SchoolMapData("943916", 43.738903,-79.771857, "/secondary/Harold_M._Brathwaite_Secondary_School/Brampton/Report_Card.aspx", "Harold M. Brathwaite", "Public","6.7", "Add", "yellow", "");
      
    slMapData[653] = new SchoolMapData("944157", 43.1663646,-79.245591, "/secondary/St_Catharines_Collegiate_Institute_and_Vocational_/St_Catharines/Report_Card.aspx", "St Catharines", "Public","5.3", "Add", "orange", "");
      
    slMapData[654] = new SchoolMapData("944670", 45.0290959,-74.6981214, "/secondary/St_Lawrence_High_School/Cornwall/Report_Card.aspx", "St Lawrence", "Public","3.0", "Add", "red", "");
      
    slMapData[655] = new SchoolMapData("944807", 43.2587209,-81.1414968, "/secondary/St_Marys_District_Collegiate_and_Vocational_Instit/St_Marys/Report_Card.aspx", "St Marys", "Public","5.3", "Add", "orange", "");
      
    slMapData[656] = new SchoolMapData("944939", 42.7566414,-81.1945911, "/secondary/Parkside_Collegiate_Institute/St_Thomas/Report_Card.aspx", "Parkside", "Public","5.5", "Add", "orange", "");
      
    slMapData[657] = new SchoolMapData("945064", 43.0907365,-79.0978268, "/secondary/Stamford_Collegiate/Niagara_Falls/Report_Card.aspx", "Stamford", "Public","6.2", "Add", "yellow", "");
      
    slMapData[658] = new SchoolMapData("945196", 44.4198892,-80.0886769, "/secondary/Stayner_Collegiate_Institute/Stayner/Report_Card.aspx", "Stayner", "Public","5.9", "Add", "orange", "");
      
    slMapData[659] = new SchoolMapData("945250", 43.7851786,-79.3014579, "/secondary/Stephen_Leacock_Collegiate_Institute/Toronto/Report_Card.aspx", "Stephen Leacock", "Public","6.7", "Add", "yellow", "");
      
    slMapData[660] = new SchoolMapData("945455", 43.9666873,-79.2358676, "/secondary/Stouffville_District_Secondary_School/Stouffville/Report_Card.aspx", "Stouffville", "Public","7.0", "Add", "yellow", "");
      
    slMapData[661] = new SchoolMapData("945508", 43.8359982,-79.4661478, "/secondary/Stephen_Lewis_Secondary_School/Thornhill/Report_Card.aspx", "Stephen Lewis", "Public","7.8", "Add", "green", "");
      
    slMapData[662] = new SchoolMapData("945587", 43.3705462,-80.9869581, "/secondary/Stratford_Central_Secondary_School/Stratford/Report_Card.aspx", "Stratford Central", "Public","7.8", "Add", "green", "");
      
    slMapData[663] = new SchoolMapData("945714", 43.3853421,-80.9922805, "/secondary/Stratford_Northwestern_Secondary_School/Stratford/Report_Card.aspx", "Stratford Northwestern", "Public","6.0", "Add", "yellow", "");
      
    slMapData[664] = new SchoolMapData("945846", 42.9801821,-81.609826, "/secondary/Strathroy_District_Collegiate_Institute/Strathroy/Report_Card.aspx", "Strathroy District", "Public","6.0", "Add", "yellow", "");
      
    slMapData[665] = new SchoolMapData("945978", 43.580257,-79.718927, "/secondary/Streetsville_Secondary_School/Mississauga/Report_Card.aspx", "Streetsville", "Public","7.4", "Add", "yellow", "");
      
    slMapData[666] = new SchoolMapData("946109", 46.3738648,-79.9200915, "/secondary/Northern_Secondary_School/Sturgeon_Falls/Report_Card.aspx", "Northern", "Public","2.5", "Add", "red", "");
      
    slMapData[667] = new SchoolMapData("946362", 44.3018641,-79.3617805, "/secondary/Sutton_District_High_School/Sutton_West/Report_Card.aspx", "Sutton", "Public","3.4", "Add", "red", "");
      
    slMapData[668] = new SchoolMapData("946494", 44.4070406,-76.5949769, "/secondary/Sydenham_High_School/Sydenham/Report_Card.aspx", "Sydenham", "Public","6.2", "Add", "yellow", "");
      
    slMapData[669] = new SchoolMapData("946648", 45.1805784,-74.9288926, "/secondary/Tagwi_Secondary_School/Avonmore/Report_Card.aspx", "Tagwi", "Public","5.6", "Add", "orange", "");
      
    slMapData[670] = new SchoolMapData("946940", 47.513081,-79.677437, "/secondary/Timiskaming_District_Secondary_School/New_Liskeard/Report_Card.aspx", "Timiskaming District", "Public","5.7", "Add", "orange", "");
      
    slMapData[671] = new SchoolMapData("947180", 43.0037336,-79.2659963, "/secondary/Centennial_Secondary_School/Welland/Report_Card.aspx", "Centennial", "Public","7.7", "Add", "green", "");
      
    slMapData[672] = new SchoolMapData("947253", 43.9062487,-80.1239825, "/secondary/Westside_Secondary_School/Orangeville/Report_Card.aspx", "Westside", "Public","6.2", "Add", "yellow", "");
      
    slMapData[673] = new SchoolMapData("947407", 43.7269972,-79.5607844, "/secondary/Thistletown_Collegiate_Institute/Toronto/Report_Card.aspx", "Thistletown", "Public","5.0", "Add", "orange", "");
      
    slMapData[674] = new SchoolMapData("947539", 43.4203014,-79.6956635, "/secondary/Thomas_A_Blakelock_High_School/Oakville/Report_Card.aspx", "Thomas A Blakelock", "Public","8.0", "Add", "green", "");
      
    slMapData[675] = new SchoolMapData("947563", 44.3269933,-78.3101419, "/secondary/Thomas_A_Stewart_Secondary_School/Peterborough/Report_Card.aspx", "Thomas A Stewart", "Public","5.0", "Add", "orange", "");
      
    slMapData[676] = new SchoolMapData("947792", 43.8079236,-79.4196587, "/secondary/Thornhill_Secondary_School/Thornhill/Report_Card.aspx", "Thornhill", "Public","7.9", "Add", "green", "");
      
    slMapData[677] = new SchoolMapData("947814", 43.828175,-79.4033633, "/secondary/Thornlea_Secondary_School/Thornhill/Report_Card.aspx", "Thornlea", "Public","7.5", "Add", "yellow", "");
      
    slMapData[678] = new SchoolMapData("948055", 43.1296985,-79.1992221, "/secondary/Thorold_Secondary_School/Thorold/Report_Card.aspx", "Thorold", "Public","5.8", "Add", "orange", "");
      
    slMapData[679] = new SchoolMapData("948187", 43.582284,-79.619013, "/secondary/T._L._Kennedy_Secondary_School/Mississauga/Report_Card.aspx", "Thomas L Kennedy", "Public","4.0", "Add", "red", "");
      
    slMapData[680] = new SchoolMapData("948314", 44.6012821,-75.7046528, "/secondary/Thousand_Islands_Secondary_School/Brockville/Report_Card.aspx", "Thousand Islands", "Public","5.0", "Add", "orange", "");
      
    slMapData[681] = new SchoolMapData("948446", 42.2511509,-82.4327649, "/secondary/Tilbury_District_High_School/Tilbury/Report_Card.aspx", "Tilbury", "Public","3.6", "Add", "red", "");
      
    slMapData[682] = new SchoolMapData("948578", 48.4825867,-81.3461539, "/secondary/Timmins_High_and_Vocational_School/Timmins/Report_Card.aspx", "Timmins", "Public","3.0", "Add", "red", "");
      
    slMapData[683] = new SchoolMapData("948705", 44.0959256,-77.5927952, "/secondary/Trenton_High_School/Trenton/Report_Card.aspx", "Trenton", "Public","4.9", "Add", "orange", "");
      
    slMapData[684] = new SchoolMapData("948870", 44.5941279,-79.4341194, "/secondary/Twin_Lakes_Secondary_School/Orillia/Report_Card.aspx", "Twin Lakes", "Public","5.4", "Add", "orange", "");
      
    slMapData[685] = new SchoolMapData("948969", 44.109404,-79.113035, "/secondary/Uxbridge_Secondary_School/Uxbridge/Report_Card.aspx", "Uxbridge", "Public","7.6", "Add", "green", "");
      
    slMapData[686] = new SchoolMapData("949027", 43.6576892,-79.4729511, "/secondary/Ursula_Franklin_Academy/Toronto/Report_Card.aspx", "Ursula Franklin", "Public","9.1", "Add", "green", "");
      
    slMapData[687] = new SchoolMapData("949035", 42.7205567,-80.5993854, "/secondary/Valley_Heights_Secondary_School/Langton/Report_Card.aspx", "Valley Heights", "Public","3.8", "Add", "red", "");
      
    slMapData[688] = new SchoolMapData("949094", 45.530401,-74.646367, "/secondary/Vankleek_Hill_Collegiate_Institute/Vankleek_Hill/Report_Card.aspx", "Vankleek Hill", "Public","4.7", "Add", "orange", "");
      
    slMapData[689] = new SchoolMapData("949140", 43.857503,-79.339281, "/secondary/Unionville_High_School/Unionville/Report_Card.aspx", "Unionville", "Public","8.8", "Add", "green", "");
      
    slMapData[690] = new SchoolMapData("949221", 43.6899303,-79.4357852, "/secondary/Vaughan_Road_Academy/Toronto/Report_Card.aspx", "Vaughan Road", "Public","5.5", "Add", "orange", "");
      
    slMapData[691] = new SchoolMapData("949230", 43.7988492,-79.4666981, "/secondary/Vaughan_Secondary_School/Thornhill/Report_Card.aspx", "Vaughan", "Public","7.1", "Add", "yellow", "");
      
    slMapData[692] = new SchoolMapData("949353", 43.7543128,-79.3205855, "/secondary/Victoria_Park_Collegiate_Institute/Toronto/Report_Card.aspx", "Victoria Park", "Public","7.1", "Add", "yellow", "");
      
    slMapData[693] = new SchoolMapData("949540", 45.6036823,-74.599481, "/secondary/%c3%89cole_secondaire_publique_Le_Sommet/Hawkesbury/Report_Card.aspx", "Le Sommet", "Public","8.6", "Add", "green", "");
      
    slMapData[694] = new SchoolMapData("949612", 42.260281,-83.027893, "/secondary/Vincent_Massey_Secondary_School/Windsor/Report_Card.aspx", "Vincent Massey", "Public","7.9", "Add", "green", "");
      
    slMapData[695] = new SchoolMapData("949744", 43.7158759,-79.2860386, "/secondary/SATEC_%40_W_A_Porter_Collegiate_Institute/Toronto/Report_Card.aspx", "W A Porter", "Public","7.7", "Add", "green", "");
      
    slMapData[696] = new SchoolMapData("950009", 42.3077871,-82.9745574, "/secondary/W_F_Herman_Secondary_School/Windsor/Report_Card.aspx", "W F Herman", "Public","5.3", "Add", "orange", "");
      
    slMapData[697] = new SchoolMapData("950130", 43.753675,-79.461601, "/secondary/William_Lyon_Mackenzie_Collegiate_Institute/Toronto/Report_Card.aspx", "William Lyon Mackenzie", "Public","8.6", "Add", "green", "");
      
    slMapData[698] = new SchoolMapData("950262", 44.115708,-81.1857736, "/secondary/Walkerton_District_Secondary_School/Walkerton/Report_Card.aspx", "Walkerton", "Public","4.9", "Add", "orange", "");
      
    slMapData[699] = new SchoolMapData("950394", 42.317697,-83.006966, "/secondary/Walkerville_Secondary_School/Windsor/Report_Card.aspx", "Walkerville", "Public","6.1", "Add", "yellow", "");
      
    slMapData[700] = new SchoolMapData("950521", 42.5957265,-82.3916281, "/secondary/Wallaceburg_District_Secondary_School/Wallaceburg/Report_Card.aspx", "Wallaceburg", "Public","4.1", "Add", "orange", "");
      
    slMapData[701] = new SchoolMapData("950653", 43.3342441,-79.9082978, "/secondary/Waterdown_District_High_School/Waterdown/Report_Card.aspx", "Waterdown", "Public","6.7", "Add", "yellow", "");
      
    slMapData[702] = new SchoolMapData("950785", 42.9332313,-80.254435, "/secondary/Waterford_District_High_School/Waterford/Report_Card.aspx", "Waterford", "Public","4.7", "Add", "orange", "");
      
    slMapData[703] = new SchoolMapData("950848", 48.449416,-89.2279783, "/secondary/Superior_Collegiate_and_Vocational_Institute/Thunder_Bay/Report_Card.aspx", "Superior CVI", "Public","5.9", "Add", "orange", "");
      
    slMapData[704] = new SchoolMapData("950912", 43.4777284,-80.5299808, "/secondary/Waterloo_Collegiate_Institute/Waterloo/Report_Card.aspx", "Waterloo", "Public","7.9", "Add", "green", "");
      
    slMapData[705] = new SchoolMapData("951048", 43.4012575,-80.6858824, "/secondary/Waterloo-Oxford_District_Secondary_School/Baden/Report_Card.aspx", "Waterloo-Oxford", "Public","6.6", "Add", "yellow", "");
      
    slMapData[706] = new SchoolMapData("951366", 45.4328192,-76.034776, "/secondary/West_Carleton_Secondary_School/Dunrobin/Report_Card.aspx", "West Carleton", "Public","8.7", "Add", "green", "");
      
    slMapData[707] = new SchoolMapData("951404", 43.584988,-79.74756, "/secondary/West_Credit_Secondary_School/Mississauga/Report_Card.aspx", "West Credit", "Public","0.0", "Add", "red", "");
      
    slMapData[708] = new SchoolMapData("951439", 42.603779,-81.606653, "/secondary/West_Elgin_Secondary_School/West_Lorne/Report_Card.aspx", "West Elgin", "Public","4.7", "Add", "orange", "");
      
    slMapData[709] = new SchoolMapData("951463", 46.2779136,-79.43653, "/secondary/West_Ferris_Secondary_School/North_Bay/Report_Card.aspx", "West Ferris", "Public","7.2", "Add", "yellow", "");
      
    slMapData[710] = new SchoolMapData("951560", 43.7766893,-79.1896794, "/secondary/West_Hill_Collegiate_Institute/Toronto/Report_Card.aspx", "West Hill", "Public","4.1", "Add", "orange", "");
      
    slMapData[711] = new SchoolMapData("951692", 44.5640723,-80.958983, "/secondary/Owen_Sound_District_Secondary_School/Owen_Sound/Report_Card.aspx", "Owen Sound", "Public","6.5", "Add", "yellow", "");
      
    slMapData[712] = new SchoolMapData("951714", 43.8397245,-79.5287104, "/secondary/Maple_High_School/Maple/Report_Card.aspx", "Maple", "Public","6.6", "Add", "yellow", "");
      
    slMapData[713] = new SchoolMapData("951749", 43.7283807,-79.5877116, "/secondary/West_Humber_Collegiate_Institute/Toronto/Report_Card.aspx", "West Humber", "Public","5.7", "Add", "orange", "");
      
    slMapData[714] = new SchoolMapData("951820", 43.2603644,-79.9018542, "/secondary/Westdale_Secondary_School/Hamilton/Report_Card.aspx", "Westdale", "Public","6.6", "Add", "yellow", "");
      
    slMapData[715] = new SchoolMapData("951927", 42.1845866,-83.021085, "/secondary/Western_Secondary_School/Amherstburg/Report_Card.aspx", "Western", "Public","0.0", "Add", "red", "");
      
    slMapData[716] = new SchoolMapData("951951", 43.6560194,-79.476616, "/secondary/Western_Technical_%5bamp%5d_Commercial_School/Toronto/Report_Card.aspx", "Western", "Public","4.6", "Add", "orange", "");
      
    slMapData[717] = new SchoolMapData("952087", 48.3726179,-89.2896884, "/secondary/Westgate_Collegiate_and_Vocational_Institute/Thunder_Bay/Report_Card.aspx", "Westgate", "Public","5.8", "Add", "orange", "");
      
    slMapData[718] = new SchoolMapData("952214", 43.0872134,-79.1322841, "/secondary/Westlane_Secondary_School/Niagara_Falls/Report_Card.aspx", "Westlane", "Public","7.0", "Add", "yellow", "");
      
    slMapData[719] = new SchoolMapData("952346", 42.9579428,-81.2760966, "/secondary/Westminster_Secondary_School/London/Report_Card.aspx", "Westminster", "Public","5.0", "Add", "orange", "");
      
    slMapData[720] = new SchoolMapData("952478", 43.2278926,-79.8964654, "/secondary/Westmount_Secondary_School/Hamilton/Report_Card.aspx", "Westmount", "Public","7.5", "Add", "yellow", "");
      
    slMapData[721] = new SchoolMapData("952516", 43.817057,-79.453329, "/secondary/Westmount_Collegiate_Institute/Thornhill/Report_Card.aspx", "Westmount", "Public","8.0", "Add", "green", "");
      
    slMapData[722] = new SchoolMapData("952605", 43.7090836,-79.5114997, "/secondary/Weston_Collegiate_Institute/Toronto/Report_Card.aspx", "Weston", "Public","2.6", "Add", "red", "");
      
    slMapData[723] = new SchoolMapData("952803", 43.652247,-79.441138, "/secondary/%c3%89cole_secondaire_Toronto_Ouest/Toronto/Report_Card.aspx", "Toronto Ouest", "Public","5.5", "Add", "orange", "");
      
    slMapData[724] = new SchoolMapData("952818", 43.7558783,-79.5241975, "/secondary/Westview_Centennial_Secondary_School/Toronto/Report_Card.aspx", "Westview Centennial", "Public","0.9", "Add", "red", "");
      
    slMapData[725] = new SchoolMapData("952885", 43.724458,-79.637862, "/secondary/Lincoln_M._Alexander_Secondary_School/Mississauga/Report_Card.aspx", "Lincoln M Alexander", "Public","2.8", "Add", "red", "");
      
    slMapData[726] = new SchoolMapData("952990", 43.7459889,-79.3057521, "/secondary/Wexford_Collegiate_School_for_the_Arts/Toronto/Report_Card.aspx", "Wexford Collegiate-Arts", "Public","5.4", "Add", "orange", "");
      
    slMapData[727] = new SchoolMapData("953121", 43.464687,-79.7008329, "/secondary/White_Oaks_High_School/Oakville/Report_Card.aspx", "White Oaks", "Public","8.3", "Add", "green", "");
      
    slMapData[728] = new SchoolMapData("953148", 46.529482,-84.256398, "/secondary/White_Pines_Collegiate_and_Vocational_School/Sault_Ste._Marie/Report_Card.aspx", "White Pines", "Public","4.2", "Add", "orange", "");
      
    slMapData[729] = new SchoolMapData("953253", 44.7415789,-81.149681, "/secondary/Peninsula_Shores_District_School/Wiarton/Report_Card.aspx", "Peninsula Shores", "Public","6.3", "Add", "yellow", "");
      
    slMapData[730] = new SchoolMapData("953385", 46.3343329,-79.4529138, "/secondary/Widdifield_Secondary_School/North_Bay/Report_Card.aspx", "Widdifield", "Public","6.3", "Add", "yellow", "");
      
    slMapData[731] = new SchoolMapData("953555", 43.985497,-80.729497, "/secondary/Wellington_Heights_Secondary_School/Mount_Forest/Report_Card.aspx", "Wellington Heights", "Public","6.0", "Add", "yellow", "");
      
    slMapData[732] = new SchoolMapData("953776", 43.895691,-81.318977, "/secondary/F_E_Madill_Secondary_School/Wingham/Report_Card.aspx", "F E Madill", "Public","4.7", "Add", "orange", "");
      
    slMapData[733] = new SchoolMapData("954039", 43.7488664,-79.2780338, "/secondary/Winston_Churchill_Collegiate_Institute/Toronto/Report_Card.aspx", "Winston Churchill", "Public","4.7", "Add", "orange", "");
      
    slMapData[734] = new SchoolMapData("954160", 43.7775421,-79.2268208, "/secondary/Woburn_Collegiate_Institute/Toronto/Report_Card.aspx", "Woburn", "Public","5.6", "Add", "orange", "");
      
    slMapData[735] = new SchoolMapData("954292", 43.7801515,-79.5839071, "/secondary/Woodbridge_College/Woodbridge/Report_Card.aspx", "Woodbridge", "Public","6.3", "Add", "yellow", "");
      
    slMapData[736] = new SchoolMapData("954403", 43.562939,-79.649808, "/secondary/The_Woodlands_Secondary_School/Mississauga/Report_Card.aspx", "The Woodlands", "Public","8.5", "Add", "green", "");
      
    slMapData[737] = new SchoolMapData("954420", 45.362398,-75.779194, "/secondary/Woodroffe_High_School/Ottawa/Report_Card.aspx", "Woodroffe", "Public","3.5", "Add", "red", "");
      
    slMapData[738] = new SchoolMapData("954551", 43.1312925,-80.7575066, "/secondary/Woodstock_Collegiate_Institute/Woodstock/Report_Card.aspx", "Woodstock", "Public","4.9", "Add", "orange", "");
      
    slMapData[739] = new SchoolMapData("954683", 43.6899594,-79.4760752, "/secondary/York_Memorial_Collegiate_Institute/Toronto/Report_Card.aspx", "York Memorial", "Public","4.6", "Add", "orange", "");
      
    slMapData[740] = new SchoolMapData("958050", 46.5395568,-84.334906, "/secondary/Superior_Heights_Collegiate_and_Vocational_School/Sault_Ste._Marie/Report_Card.aspx", "Superior Heights", "Public","4.5", "Add", "orange", "");
      
    slMapData[741] = new SchoolMapData("961008", 42.289191,-83.047185, "/secondary/%c3%89cole_secondaire_de-Lamothe-Cadillac/Windsor/Report_Card.aspx", "de-Lamothe-Cadillac", "Public","8.4", "Add", "green", "");
      
    slMapData[742] = new SchoolMapData("962646", 43.5574527,-79.742612, "/secondary/Stephen_Lewis_Secondary_School/Mississauga/Report_Card.aspx", "Stephen Lewis", "Public","7.1", "Add", "yellow", "");
      
    slMapData[743] = new SchoolMapData("964809", 43.897188,-79.425916, "/secondary/Richmond_Green_Secondary_School/Richmond_Hill/Report_Card.aspx", "Richmond Green", "Public","7.7", "Add", "green", "");
      
    slMapData[744] = new SchoolMapData("967740", 43.514481,-79.82745, "/secondary/Craig_Kielburger_Secondary_School/Milton/Report_Card.aspx", "Craig Kielburger", "Public","7.2", "Add", "yellow", "");
      
    slMapData[745] = new SchoolMapData("967836", 43.961839,-78.1542698, "/secondary/Cobourg_Collegiate_Institute/Cobourg/Report_Card.aspx", "Cobourg", "Public","5.8", "Add", "orange", "");
      
    slMapData[746] = new SchoolMapData("968729", 44.6120764,-79.4338804, "/secondary/Orillia_Secondary_School/Orillia/Report_Card.aspx", "Orillia", "Public","6.3", "Add", "yellow", "");exports.slMapData = slMapData