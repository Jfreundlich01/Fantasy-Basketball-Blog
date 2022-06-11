/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
const mongoose = require('./connection.js')
const Player = require('./playersM.js')

///////////////////////////////////////////
// Seed Code
/////////////////////////////////////////
const players = [
    {
      "firstName": "Precious",
      "lastName": "Achiuwa",
      "playerId": 1630173,
      "teamId": 1610612748
    },
    {
      "firstName": "Jaylen",
      "lastName": "Adams",
      "playerId": 1629121,
      "teamId": 0
    },
    {
      "firstName": "Steven",
      "lastName": "Adams",
      "playerId": 203500,
      "teamId": 1610612740
    },
    {
      "firstName": "Bam",
      "lastName": "Adebayo",
      "playerId": 1628389,
      "teamId": 1610612748
    },
    {
      "firstName": "LaMarcus",
      "lastName": "Aldridge",
      "playerId": 200746,
      "teamId": 0
    },
    {
      "firstName": "Ty-Shon",
      "lastName": "Alexander",
      "playerId": 1630234,
      "teamId": 1610612756
    },
    {
      "firstName": "Nickeil",
      "lastName": "Alexander-Walker",
      "playerId": 1629638,
      "teamId": 1610612740
    },
    {
      "firstName": "Grayson",
      "lastName": "Allen",
      "playerId": 1628960,
      "teamId": 1610612763
    },
    {
      "firstName": "Jarrett",
      "lastName": "Allen",
      "playerId": 1628386,
      "teamId": 1610612739
    },
    {
      "firstName": "Al-Farouq",
      "lastName": "Aminu",
      "playerId": 202329,
      "teamId": 1610612741
    },
    {
      "firstName": "Kyle",
      "lastName": "Anderson",
      "playerId": 203937,
      "teamId": 1610612763
    },
    {
      "firstName": "Giannis",
      "lastName": "Antetokounmpo",
      "playerId": 203507,
      "teamId": 1610612749
    },
    {
      "firstName": "Kostas",
      "lastName": "Antetokounmpo",
      "playerId": 1628961,
      "teamId": 1610612747
    },
    {
      "firstName": "Thanasis",
      "lastName": "Antetokounmpo",
      "playerId": 203648,
      "teamId": 1610612749
    },
    {
      "firstName": "Carmelo",
      "lastName": "Anthony",
      "playerId": 2546,
      "teamId": 1610612757
    },
    {
      "firstName": "Cole",
      "lastName": "Anthony",
      "playerId": 1630175,
      "teamId": 1610612753
    },
    {
      "firstName": "OG",
      "lastName": "Anunoby",
      "playerId": 1628384,
      "teamId": 1610612761
    },
    {
      "firstName": "Ryan",
      "lastName": "Arcidiacono",
      "playerId": 1627853,
      "teamId": 1610612741
    },
    {
      "firstName": "Trevor",
      "lastName": "Ariza",
      "playerId": 2772,
      "teamId": 1610612748
    },
    {
      "firstName": "D.J.",
      "lastName": "Augustin",
      "playerId": 201571,
      "teamId": 1610612745
    },
    {
      "firstName": "Deni",
      "lastName": "Avdija",
      "playerId": 1630166,
      "teamId": 1610612764
    },
    {
      "firstName": "Deandre",
      "lastName": "Ayton",
      "playerId": 1629028,
      "teamId": 1610612756
    },
    {
      "firstName": "Udoka",
      "lastName": "Azubuike",
      "playerId": 1628962,
      "teamId": 1610612762
    },
    {
      "firstName": "Dwayne",
      "lastName": "Bacon",
      "playerId": 1628407,
      "teamId": 1610612753
    },
    {
      "firstName": "Marvin",
      "lastName": "Bagley III",
      "playerId": 1628963,
      "teamId": 1610612758
    },
    {
      "firstName": "LaMelo",
      "lastName": "Ball",
      "playerId": 1630163,
      "teamId": 1610612766
    },
    {
      "firstName": "Lonzo",
      "lastName": "Ball",
      "playerId": 1628366,
      "teamId": 1610612740
    },
    {
      "firstName": "Mo",
      "lastName": "Bamba",
      "playerId": 1628964,
      "teamId": 1610612753
    },
    {
      "firstName": "Desmond",
      "lastName": "Bane",
      "playerId": 1630217,
      "teamId": 1610612763
    },
    {
      "firstName": "Harrison",
      "lastName": "Barnes",
      "playerId": 203084,
      "teamId": 1610612758
    },
    {
      "firstName": "RJ",
      "lastName": "Barrett",
      "playerId": 1629628,
      "teamId": 1610612752
    },
    {
      "firstName": "Will",
      "lastName": "Barton",
      "playerId": 203115,
      "teamId": 1610612743
    },
    {
      "firstName": "Keita",
      "lastName": "Bates-Diop",
      "playerId": 1628966,
      "teamId": 1610612759
    },
    {
      "firstName": "Nicolas",
      "lastName": "Batum",
      "playerId": 201587,
      "teamId": 1610612746
    },
    {
      "firstName": "Aron",
      "lastName": "Baynes",
      "playerId": 203382,
      "teamId": 1610612761
    },
    {
      "firstName": "Kent",
      "lastName": "Bazemore",
      "playerId": 203145,
      "teamId": 1610612744
    },
    {
      "firstName": "Darius",
      "lastName": "Bazley",
      "playerId": 1629647,
      "teamId": 1610612760
    },
    {
      "firstName": "Bradley",
      "lastName": "Beal",
      "playerId": 203078,
      "teamId": 1610612764
    },
    {
      "firstName": "Malik",
      "lastName": "Beasley",
      "playerId": 1627736,
      "teamId": 1610612750
    },
    {
      "firstName": "Jordan",
      "lastName": "Bell",
      "playerId": 1628395,
      "teamId": 1610612744
    },
    {
      "firstName": "DeAndre'",
      "lastName": "Bembry",
      "playerId": 1627761,
      "teamId": 1610612761
    },
    {
      "firstName": "Davis",
      "lastName": "Bertans",
      "playerId": 202722,
      "teamId": 1610612764
    },
    {
      "firstName": "Patrick",
      "lastName": "Beverley",
      "playerId": 201976,
      "teamId": 1610612746
    },
    {
      "firstName": "Saddiq",
      "lastName": "Bey",
      "playerId": 1630180,
      "teamId": 1610612765
    },
    {
      "firstName": "Tyler",
      "lastName": "Bey",
      "playerId": 1630189,
      "teamId": 1610612742
    },
    {
      "firstName": "Khem",
      "lastName": "Birch",
      "playerId": 203920,
      "teamId": 1610612761
    },
    {
      "firstName": "Goga",
      "lastName": "Bitadze",
      "playerId": 1629048,
      "teamId": 1610612754
    },
    {
      "firstName": "Bismack",
      "lastName": "Biyombo",
      "playerId": 202687,
      "teamId": 1610612766
    },
    {
      "firstName": "Nemanja",
      "lastName": "Bjelica",
      "playerId": 202357,
      "teamId": 1610612748
    },
    {
      "firstName": "Eric",
      "lastName": "Bledsoe",
      "playerId": 202339,
      "teamId": 1610612740
    },
    {
      "firstName": "Keljin",
      "lastName": "Blevins",
      "playerId": 1629833,
      "teamId": 1610612757
    },
    {
      "firstName": "Bogdan",
      "lastName": "Bogdanovic",
      "playerId": 203992,
      "teamId": 1610612737
    },
    {
      "firstName": "Bojan",
      "lastName": "Bogdanovic",
      "playerId": 202711,
      "teamId": 1610612762
    },
    {
      "firstName": "Bol",
      "lastName": "Bol",
      "playerId": 1629626,
      "teamId": 1610612743
    },
    {
      "firstName": "Marques",
      "lastName": "Bolden",
      "playerId": 1629716,
      "teamId": 0
    },
    {
      "firstName": "Jordan",
      "lastName": "Bone",
      "playerId": 1629648,
      "teamId": 0
    },
    {
      "firstName": "Isaac",
      "lastName": "Bonga",
      "playerId": 1629067,
      "teamId": 1610612764
    },
    {
      "firstName": "Devin",
      "lastName": "Booker",
      "playerId": 1626164,
      "teamId": 1610612756
    },
    {
      "firstName": "Chris",
      "lastName": "Boucher",
      "playerId": 1628449,
      "teamId": 1610612761
    },
    {
      "firstName": "Brian",
      "lastName": "Bowen II",
      "playerId": 1628968,
      "teamId": 0
    },
    {
      "firstName": "Avery",
      "lastName": "Bradley",
      "playerId": 202340,
      "teamId": 1610612745
    },
    {
      "firstName": "Tony",
      "lastName": "Bradley",
      "playerId": 1628396,
      "teamId": 1610612760
    },
    {
      "firstName": "Jarrell",
      "lastName": "Brantley",
      "playerId": 1629714,
      "teamId": 1610612762
    },
    {
      "firstName": "Ignas",
      "lastName": "Brazdeikis",
      "playerId": 1629649,
      "teamId": 1610612753
    },
    {
      "firstName": "Mikal",
      "lastName": "Bridges",
      "playerId": 1628969,
      "teamId": 1610612756
    },
    {
      "firstName": "Miles",
      "lastName": "Bridges",
      "playerId": 1628970,
      "teamId": 1610612766
    },
    {
      "firstName": "Amida",
      "lastName": "Brimah",
      "playerId": 1628578,
      "teamId": 1610612754
    },
    {
      "firstName": "Oshae",
      "lastName": "Brissett",
      "playerId": 1629052,
      "teamId": 1610612754
    },
    {
      "firstName": "Malcolm",
      "lastName": "Brogdon",
      "playerId": 1627763,
      "teamId": 1610612754
    },
    {
      "firstName": "Armoni",
      "lastName": "Brooks",
      "playerId": 1629717,
      "teamId": 1610612745
    },
    {
      "firstName": "Dillon",
      "lastName": "Brooks",
      "playerId": 1628415,
      "teamId": 1610612763
    },
    {
      "firstName": "Bruce",
      "lastName": "Brown",
      "playerId": 1628971,
      "teamId": 1610612751
    },
    {
      "firstName": "Jaylen",
      "lastName": "Brown",
      "playerId": 1627759,
      "teamId": 1610612738
    },
    {
      "firstName": "Moses",
      "lastName": "Brown",
      "playerId": 1629650,
      "teamId": 1610612760
    },
    {
      "firstName": "Sterling",
      "lastName": "Brown",
      "playerId": 1628425,
      "teamId": 1610612745
    },
    {
      "firstName": "Charlie",
      "lastName": "Brown Jr.",
      "playerId": 1629718,
      "teamId": 1610612760
    },
    {
      "firstName": "Troy",
      "lastName": "Brown Jr.",
      "playerId": 1628972,
      "teamId": 1610612741
    },
    {
      "firstName": "Jalen",
      "lastName": "Brunson",
      "playerId": 1628973,
      "teamId": 1610612742
    },
    {
      "firstName": "Elijah",
      "lastName": "Bryant",
      "playerId": 1629091,
      "teamId": 1610612749
    },
    {
      "firstName": "Thomas",
      "lastName": "Bryant",
      "playerId": 1628418,
      "teamId": 1610612764
    },
    {
      "firstName": "Reggie",
      "lastName": "Bullock",
      "playerId": 203493,
      "teamId": 1610612752
    },
    {
      "firstName": "Trey",
      "lastName": "Burke",
      "playerId": 203504,
      "teamId": 1610612742
    },
    {
      "firstName": "Alec",
      "lastName": "Burks",
      "playerId": 202692,
      "teamId": 1610612752
    },
    {
      "firstName": "Jimmy",
      "lastName": "Butler",
      "playerId": 202710,
      "teamId": 1610612748
    },
    {
      "firstName": "Bruno",
      "lastName": "Caboclo",
      "playerId": 203998,
      "teamId": 0
    },
    {
      "firstName": "Devontae",
      "lastName": "Cacok",
      "playerId": 1629719,
      "teamId": 1610612747
    },
    {
      "firstName": "Kentavious",
      "lastName": "Caldwell-Pope",
      "playerId": 203484,
      "teamId": 1610612747
    },
    {
      "firstName": "Facundo",
      "lastName": "Campazzo",
      "playerId": 1630267,
      "teamId": 1610612743
    },
    {
      "firstName": "Vlatko",
      "lastName": "Cancar",
      "playerId": 1628427,
      "teamId": 1610612743
    },
    {
      "firstName": "Devin",
      "lastName": "Cannady",
      "playerId": 1629962,
      "teamId": 0
    },
    {
      "firstName": "Clint",
      "lastName": "Capela",
      "playerId": 203991,
      "teamId": 1610612737
    },
    {
      "firstName": "Vernon",
      "lastName": "Carey Jr.",
      "playerId": 1630176,
      "teamId": 1610612766
    },
    {
      "firstName": "Jevon",
      "lastName": "Carter",
      "playerId": 1628975,
      "teamId": 1610612756
    },
    {
      "firstName": "Wendell",
      "lastName": "Carter Jr.",
      "playerId": 1628976,
      "teamId": 1610612753
    },
    {
      "firstName": "Michael",
      "lastName": "Carter-Williams",
      "playerId": 203487,
      "teamId": 1610612753
    },
    {
      "firstName": "Alex",
      "lastName": "Caruso",
      "playerId": 1627936,
      "teamId": 1610612747
    },
    {
      "firstName": "Willie",
      "lastName": "Cauley-Stein",
      "playerId": 1626161,
      "teamId": 1610612742
    },
    {
      "firstName": "Chris",
      "lastName": "Chiozza",
      "playerId": 1629185,
      "teamId": 1610612751
    },
    {
      "firstName": "Marquese",
      "lastName": "Chriss",
      "playerId": 1627737,
      "teamId": 0
    },
    {
      "firstName": "Gary",
      "lastName": "Clark",
      "playerId": 1629109,
      "teamId": 1610612755
    },
    {
      "firstName": "Brandon",
      "lastName": "Clarke",
      "playerId": 1629634,
      "teamId": 1610612763
    },
    {
      "firstName": "Jordan",
      "lastName": "Clarkson",
      "playerId": 203903,
      "teamId": 1610612762
    },
    {
      "firstName": "Nicolas",
      "lastName": "Claxton",
      "playerId": 1629651,
      "teamId": 1610612751
    },
    {
      "firstName": "Amir",
      "lastName": "Coffey",
      "playerId": 1629599,
      "teamId": 1610612746
    },
    {
      "firstName": "John",
      "lastName": "Collins",
      "playerId": 1628381,
      "teamId": 1610612737
    },
    {
      "firstName": "Zach",
      "lastName": "Collins",
      "playerId": 1628380,
      "teamId": 1610612757
    },
    {
      "firstName": "Mike",
      "lastName": "Conley",
      "playerId": 201144,
      "teamId": 1610612762
    },
    {
      "firstName": "Pat",
      "lastName": "Connaughton",
      "playerId": 1626192,
      "teamId": 1610612749
    },
    {
      "firstName": "Quinn",
      "lastName": "Cook",
      "playerId": 1626188,
      "teamId": 0
    },
    {
      "firstName": "Tyler",
      "lastName": "Cook",
      "playerId": 1629076,
      "teamId": 1610612765
    },
    {
      "firstName": "DeMarcus",
      "lastName": "Cousins",
      "playerId": 202326,
      "teamId": 1610612746
    },
    {
      "firstName": "Robert",
      "lastName": "Covington",
      "playerId": 203496,
      "teamId": 1610612757
    },
    {
      "firstName": "Torrey",
      "lastName": "Craig",
      "playerId": 1628470,
      "teamId": 1610612756
    },
    {
      "firstName": "Jae",
      "lastName": "Crowder",
      "playerId": 203109,
      "teamId": 1610612756
    },
    {
      "firstName": "Jarrett",
      "lastName": "Culver",
      "playerId": 1629633,
      "teamId": 1610612750
    },
    {
      "firstName": "Seth",
      "lastName": "Curry",
      "playerId": 203552,
      "teamId": 1610612755
    },
    {
      "firstName": "Stephen",
      "lastName": "Curry",
      "playerId": 201939,
      "teamId": 1610612744
    },
    {
      "firstName": "Nate",
      "lastName": "Darling",
      "playerId": 1630268,
      "teamId": 1610612766
    },
    {
      "firstName": "Anthony",
      "lastName": "Davis",
      "playerId": 203076,
      "teamId": 1610612747
    },
    {
      "firstName": "Ed",
      "lastName": "Davis",
      "playerId": 202334,
      "teamId": 1610612750
    },
    {
      "firstName": "Terence",
      "lastName": "Davis",
      "playerId": 1629056,
      "teamId": 1610612758
    },
    {
      "firstName": "DeMar",
      "lastName": "DeRozan",
      "playerId": 201942,
      "teamId": 1610612759
    },
    {
      "firstName": "Gabriel",
      "lastName": "Deck",
      "playerId": 1630466,
      "teamId": 1610612760
    },
    {
      "firstName": "Dewayne",
      "lastName": "Dedmon",
      "playerId": 203473,
      "teamId": 1610612748
    },
    {
      "firstName": "Matthew",
      "lastName": "Dellavedova",
      "playerId": 203521,
      "teamId": 1610612739
    },
    {
      "firstName": "Donte",
      "lastName": "DiVincenzo",
      "playerId": 1628978,
      "teamId": 1610612749
    },
    {
      "firstName": "Mamadi",
      "lastName": "Diakite",
      "playerId": 1629603,
      "teamId": 1610612749
    },
    {
      "firstName": "Hamidou",
      "lastName": "Diallo",
      "playerId": 1628977,
      "teamId": 1610612765
    },
    {
      "firstName": "Gorgui",
      "lastName": "Dieng",
      "playerId": 203476,
      "teamId": 1610612759
    },
    {
      "firstName": "Spencer",
      "lastName": "Dinwiddie",
      "playerId": 203915,
      "teamId": 1610612751
    },
    {
      "firstName": "Luka",
      "lastName": "Doncic",
      "playerId": 1629029,
      "teamId": 1610612742
    },
    {
      "firstName": "Luguentz",
      "lastName": "Dort",
      "playerId": 1629652,
      "teamId": 1610612760
    },
    {
      "firstName": "Damyean",
      "lastName": "Dotson",
      "playerId": 1628422,
      "teamId": 1610612739
    },
    {
      "firstName": "Devon",
      "lastName": "Dotson",
      "playerId": 1629653,
      "teamId": 1610612741
    },
    {
      "firstName": "Sekou",
      "lastName": "Doumbouya",
      "playerId": 1629635,
      "teamId": 1610612765
    },
    {
      "firstName": "PJ",
      "lastName": "Dozier",
      "playerId": 1628408,
      "teamId": 1610612743
    },
    {
      "firstName": "Goran",
      "lastName": "Dragic",
      "playerId": 201609,
      "teamId": 1610612748
    },
    {
      "firstName": "Andre",
      "lastName": "Drummond",
      "playerId": 203083,
      "teamId": 1610612747
    },
    {
      "firstName": "Jared",
      "lastName": "Dudley",
      "playerId": 201162,
      "teamId": 1610612747
    },
    {
      "firstName": "Kris",
      "lastName": "Dunn",
      "playerId": 1627739,
      "teamId": 1610612737
    },
    {
      "firstName": "Kevin",
      "lastName": "Durant",
      "playerId": 201142,
      "teamId": 1610612751
    },
    {
      "firstName": "Anthony",
      "lastName": "Edwards",
      "playerId": 1630162,
      "teamId": 1610612750
    },
    {
      "firstName": "Carsen",
      "lastName": "Edwards",
      "playerId": 1629035,
      "teamId": 1610612738
    },
    {
      "firstName": "CJ",
      "lastName": "Elleby",
      "playerId": 1629604,
      "teamId": 1610612757
    },
    {
      "firstName": "Henry",
      "lastName": "Ellenson",
      "playerId": 1627740,
      "teamId": 0
    },
    {
      "firstName": "Wayne",
      "lastName": "Ellington",
      "playerId": 201961,
      "teamId": 1610612765
    },
    {
      "firstName": "Joel",
      "lastName": "Embiid",
      "playerId": 203954,
      "teamId": 1610612755
    },
    {
      "firstName": "James",
      "lastName": "Ennis III",
      "playerId": 203516,
      "teamId": 1610612753
    },
    {
      "firstName": "Drew",
      "lastName": "Eubanks",
      "playerId": 1629234,
      "teamId": 1610612759
    },
    {
      "firstName": "Dante",
      "lastName": "Exum",
      "playerId": 203957,
      "teamId": 1610612745
    },
    {
      "firstName": "Tacko",
      "lastName": "Fall",
      "playerId": 1629605,
      "teamId": 1610612738
    },
    {
      "firstName": "Derrick",
      "lastName": "Favors",
      "playerId": 202324,
      "teamId": 1610612762
    },
    {
      "firstName": "Cristiano",
      "lastName": "Felicio",
      "playerId": 1626245,
      "teamId": 1610612741
    },
    {
      "firstName": "Terrance",
      "lastName": "Ferguson",
      "playerId": 1628390,
      "teamId": 0
    },
    {
      "firstName": "Bruno",
      "lastName": "Fernando",
      "playerId": 1628981,
      "teamId": 1610612737
    },
    {
      "firstName": "Yogi",
      "lastName": "Ferrell",
      "playerId": 1627812,
      "teamId": 1610612746
    },
    {
      "firstName": "Dorian",
      "lastName": "Finney-Smith",
      "playerId": 1627827,
      "teamId": 1610612742
    },
    {
      "firstName": "Malik",
      "lastName": "Fitts",
      "playerId": 1630238,
      "teamId": 0
    },
    {
      "firstName": "Malachi",
      "lastName": "Flynn",
      "playerId": 1630201,
      "teamId": 1610612761
    },
    {
      "firstName": "Bryn",
      "lastName": "Forbes",
      "playerId": 1627854,
      "teamId": 1610612749
    },
    {
      "firstName": "Trent",
      "lastName": "Forrest",
      "playerId": 1630235,
      "teamId": 1610612762
    },
    {
      "firstName": "Evan",
      "lastName": "Fournier",
      "playerId": 203095,
      "teamId": 1610612738
    },
    {
      "firstName": "De'Aaron",
      "lastName": "Fox",
      "playerId": 1628368,
      "teamId": 1610612758
    },
    {
      "firstName": "Robert",
      "lastName": "Franks",
      "playerId": 1629606,
      "teamId": 0
    },
    {
      "firstName": "Tim",
      "lastName": "Frazier",
      "playerId": 204025,
      "teamId": 1610612763
    },
    {
      "firstName": "Markelle",
      "lastName": "Fultz",
      "playerId": 1628365,
      "teamId": 1610612753
    },
    {
      "firstName": "Wenyen",
      "lastName": "Gabriel",
      "playerId": 1629117,
      "teamId": 1610612740
    },
    {
      "firstName": "Daniel",
      "lastName": "Gafford",
      "playerId": 1629655,
      "teamId": 1610612764
    },
    {
      "firstName": "Danilo",
      "lastName": "Gallinari",
      "playerId": 201568,
      "teamId": 1610612737
    },
    {
      "firstName": "Langston",
      "lastName": "Galloway",
      "playerId": 204038,
      "teamId": 1610612756
    },
    {
      "firstName": "Darius",
      "lastName": "Garland",
      "playerId": 1629636,
      "teamId": 1610612739
    },
    {
      "firstName": "Marc",
      "lastName": "Gasol",
      "playerId": 201188,
      "teamId": 1610612747
    },
    {
      "firstName": "Rudy",
      "lastName": "Gay",
      "playerId": 200752,
      "teamId": 1610612759
    },
    {
      "firstName": "Paul",
      "lastName": "George",
      "playerId": 202331,
      "teamId": 1610612746
    },
    {
      "firstName": "Taj",
      "lastName": "Gibson",
      "playerId": 201959,
      "teamId": 1610612752
    },
    {
      "firstName": "Harry",
      "lastName": "Giles III",
      "playerId": 1628385,
      "teamId": 1610612757
    },
    {
      "firstName": "Shai",
      "lastName": "Gilgeous-Alexander",
      "playerId": 1628983,
      "teamId": 1610612760
    },
    {
      "firstName": "Anthony",
      "lastName": "Gill",
      "playerId": 1630264,
      "teamId": 1610612764
    },
    {
      "firstName": "Freddie",
      "lastName": "Gillespie",
      "playerId": 1630273,
      "teamId": 1610612761
    },
    {
      "firstName": "Rudy",
      "lastName": "Gobert",
      "playerId": 203497,
      "teamId": 1610612762
    },
    {
      "firstName": "Brandon",
      "lastName": "Goodwin",
      "playerId": 1629164,
      "teamId": 1610612737
    },
    {
      "firstName": "Aaron",
      "lastName": "Gordon",
      "playerId": 203932,
      "teamId": 1610612743
    },
    {
      "firstName": "Eric",
      "lastName": "Gordon",
      "playerId": 201569,
      "teamId": 1610612745
    },
    {
      "firstName": "Devonte'",
      "lastName": "Graham",
      "playerId": 1628984,
      "teamId": 1610612766
    },
    {
      "firstName": "Jerami",
      "lastName": "Grant",
      "playerId": 203924,
      "teamId": 1610612765
    },
    {
      "firstName": "Danny",
      "lastName": "Green",
      "playerId": 201980,
      "teamId": 1610612755
    },
    {
      "firstName": "Draymond",
      "lastName": "Green",
      "playerId": 203110,
      "teamId": 1610612744
    },
    {
      "firstName": "JaMychal",
      "lastName": "Green",
      "playerId": 203210,
      "teamId": 1610612743
    },
    {
      "firstName": "Javonte",
      "lastName": "Green",
      "playerId": 1629750,
      "teamId": 1610612741
    },
    {
      "firstName": "Jeff",
      "lastName": "Green",
      "playerId": 201145,
      "teamId": 1610612751
    },
    {
      "firstName": "Josh",
      "lastName": "Green",
      "playerId": 1630182,
      "teamId": 1610612742
    },
    {
      "firstName": "Blake",
      "lastName": "Griffin",
      "playerId": 201933,
      "teamId": 1610612751
    },
    {
      "firstName": "Kyle",
      "lastName": "Guy",
      "playerId": 1629657,
      "teamId": 1610612758
    },
    {
      "firstName": "Rui",
      "lastName": "Hachimura",
      "playerId": 1629060,
      "teamId": 1610612764
    },
    {
      "firstName": "Ashton",
      "lastName": "Hagans",
      "playerId": 1630204,
      "teamId": 0
    },
    {
      "firstName": "Tyrese",
      "lastName": "Haliburton",
      "playerId": 1630169,
      "teamId": 1610612758
    },
    {
      "firstName": "Donta",
      "lastName": "Hall",
      "playerId": 1629743,
      "teamId": 1610612753
    },
    {
      "firstName": "Josh",
      "lastName": "Hall",
      "playerId": 1630221,
      "teamId": 1610612760
    },
    {
      "firstName": "R.J.",
      "lastName": "Hampton",
      "playerId": 1630181,
      "teamId": 1610612753
    },
    {
      "firstName": "Tim",
      "lastName": "Hardaway Jr.",
      "playerId": 203501,
      "teamId": 1610612742
    },
    {
      "firstName": "James",
      "lastName": "Harden",
      "playerId": 201935,
      "teamId": 1610612751
    },
    {
      "firstName": "Maurice",
      "lastName": "Harkless",
      "playerId": 203090,
      "teamId": 1610612758
    },
    {
      "firstName": "Jared",
      "lastName": "Harper",
      "playerId": 1629607,
      "teamId": 1610612752
    },
    {
      "firstName": "Montrezl",
      "lastName": "Harrell",
      "playerId": 1626149,
      "teamId": 1610612747
    },
    {
      "firstName": "Gary",
      "lastName": "Harris",
      "playerId": 203914,
      "teamId": 1610612753
    },
    {
      "firstName": "Jalen",
      "lastName": "Harris",
      "playerId": 1630223,
      "teamId": 1610612761
    },
    {
      "firstName": "Joe",
      "lastName": "Harris",
      "playerId": 203925,
      "teamId": 1610612751
    },
    {
      "firstName": "Tobias",
      "lastName": "Harris",
      "playerId": 202699,
      "teamId": 1610612755
    },
    {
      "firstName": "Shaquille",
      "lastName": "Harrison",
      "playerId": 1627885,
      "teamId": 1610612743
    },
    {
      "firstName": "Josh",
      "lastName": "Hart",
      "playerId": 1628404,
      "teamId": 1610612740
    },
    {
      "firstName": "Isaiah",
      "lastName": "Hartenstein",
      "playerId": 1628392,
      "teamId": 1610612739
    },
    {
      "firstName": "Udonis",
      "lastName": "Haslem",
      "playerId": 2617,
      "teamId": 1610612748
    },
    {
      "firstName": "Jaxson",
      "lastName": "Hayes",
      "playerId": 1629637,
      "teamId": 1610612740
    },
    {
      "firstName": "Killian",
      "lastName": "Hayes",
      "playerId": 1630165,
      "teamId": 1610612765
    },
    {
      "firstName": "Gordon",
      "lastName": "Hayward",
      "playerId": 202330,
      "teamId": 1610612766
    },
    {
      "firstName": "Juancho",
      "lastName": "Hernangomez",
      "playerId": 1627823,
      "teamId": 1610612750
    },
    {
      "firstName": "Willy",
      "lastName": "Hernangomez",
      "playerId": 1626195,
      "teamId": 1610612740
    },
    {
      "firstName": "Tyler",
      "lastName": "Herro",
      "playerId": 1629639,
      "teamId": 1610612748
    },
    {
      "firstName": "Buddy",
      "lastName": "Hield",
      "playerId": 1627741,
      "teamId": 1610612758
    },
    {
      "firstName": "George",
      "lastName": "Hill",
      "playerId": 201588,
      "teamId": 1610612755
    },
    {
      "firstName": "Solomon",
      "lastName": "Hill",
      "playerId": 203524,
      "teamId": 1610612737
    },
    {
      "firstName": "Nate",
      "lastName": "Hinton",
      "playerId": 1630207,
      "teamId": 1610612742
    },
    {
      "firstName": "Jaylen",
      "lastName": "Hoard",
      "playerId": 1629658,
      "teamId": 1610612760
    },
    {
      "firstName": "Aaron",
      "lastName": "Holiday",
      "playerId": 1628988,
      "teamId": 1610612754
    },
    {
      "firstName": "Jrue",
      "lastName": "Holiday",
      "playerId": 201950,
      "teamId": 1610612749
    },
    {
      "firstName": "Justin",
      "lastName": "Holiday",
      "playerId": 203200,
      "teamId": 1610612754
    },
    {
      "firstName": "Rondae",
      "lastName": "Hollis-Jefferson",
      "playerId": 1626178,
      "teamId": 1610612757
    },
    {
      "firstName": "Richaun",
      "lastName": "Holmes",
      "playerId": 1626158,
      "teamId": 1610612758
    },
    {
      "firstName": "Rodney",
      "lastName": "Hood",
      "playerId": 203918,
      "teamId": 1610612761
    },
    {
      "firstName": "Al",
      "lastName": "Horford",
      "playerId": 201143,
      "teamId": 1610612760
    },
    {
      "firstName": "Talen",
      "lastName": "Horton-Tucker",
      "playerId": 1629659,
      "teamId": 1610612747
    },
    {
      "firstName": "Danuel",
      "lastName": "House Jr.",
      "playerId": 1627863,
      "teamId": 1610612745
    },
    {
      "firstName": "Dwight",
      "lastName": "Howard",
      "playerId": 2730,
      "teamId": 1610612755
    },
    {
      "firstName": "Markus",
      "lastName": "Howard",
      "playerId": 1630210,
      "teamId": 1610612743
    },
    {
      "firstName": "Kevin",
      "lastName": "Huerter",
      "playerId": 1628989,
      "teamId": 1610612737
    },
    {
      "firstName": "Elijah",
      "lastName": "Hughes",
      "playerId": 1630190,
      "teamId": 1610612762
    },
    {
      "firstName": "De'Andre",
      "lastName": "Hunter",
      "playerId": 1629631,
      "teamId": 1610612737
    },
    {
      "firstName": "Chandler",
      "lastName": "Hutchison",
      "playerId": 1628990,
      "teamId": 1610612764
    },
    {
      "firstName": "Serge",
      "lastName": "Ibaka",
      "playerId": 201586,
      "teamId": 1610612746
    },
    {
      "firstName": "Andre",
      "lastName": "Iguodala",
      "playerId": 2738,
      "teamId": 1610612748
    },
    {
      "firstName": "Ersan",
      "lastName": "Ilyasova",
      "playerId": 101141,
      "teamId": 1610612762
    },
    {
      "firstName": "Joe",
      "lastName": "Ingles",
      "playerId": 204060,
      "teamId": 1610612762
    },
    {
      "firstName": "Brandon",
      "lastName": "Ingram",
      "playerId": 1627742,
      "teamId": 1610612740
    },
    {
      "firstName": "Kyrie",
      "lastName": "Irving",
      "playerId": 202681,
      "teamId": 1610612751
    },
    {
      "firstName": "Jonathan",
      "lastName": "Isaac",
      "playerId": 1628371,
      "teamId": 1610612753
    },
    {
      "firstName": "Wes",
      "lastName": "Iwundu",
      "playerId": 1628411,
      "teamId": 1610612740
    },
    {
      "firstName": "Frank",
      "lastName": "Jackson",
      "playerId": 1628402,
      "teamId": 1610612765
    },
    {
      "firstName": "Josh",
      "lastName": "Jackson",
      "playerId": 1628367,
      "teamId": 1610612765
    },
    {
      "firstName": "Justin",
      "lastName": "Jackson",
      "playerId": 1628382,
      "teamId": 1610612749
    },
    {
      "firstName": "Reggie",
      "lastName": "Jackson",
      "playerId": 202704,
      "teamId": 1610612746
    },
    {
      "firstName": "Jaren",
      "lastName": "Jackson Jr.",
      "playerId": 1628991,
      "teamId": 1610612763
    },
    {
      "firstName": "Justin",
      "lastName": "James",
      "playerId": 1629713,
      "teamId": 1610612758
    },
    {
      "firstName": "LeBron",
      "lastName": "James",
      "playerId": 2544,
      "teamId": 1610612747
    },
    {
      "firstName": "Mike",
      "lastName": "James",
      "playerId": 1628455,
      "teamId": 1610612751
    },
    {
      "firstName": "DaQuan",
      "lastName": "Jeffries",
      "playerId": 1629610,
      "teamId": 0
    },
    {
      "firstName": "Ty",
      "lastName": "Jerome",
      "playerId": 1629660,
      "teamId": 1610612760
    },
    {
      "firstName": "Isaiah",
      "lastName": "Joe",
      "playerId": 1630198,
      "teamId": 1610612755
    },
    {
      "firstName": "Alize",
      "lastName": "Johnson",
      "playerId": 1628993,
      "teamId": 1610612751
    },
    {
      "firstName": "Cameron",
      "lastName": "Johnson",
      "playerId": 1629661,
      "teamId": 1610612756
    },
    {
      "firstName": "James",
      "lastName": "Johnson",
      "playerId": 201949,
      "teamId": 1610612740
    },
    {
      "firstName": "Keldon",
      "lastName": "Johnson",
      "playerId": 1629640,
      "teamId": 1610612759
    },
    {
      "firstName": "Stanley",
      "lastName": "Johnson",
      "playerId": 1626169,
      "teamId": 1610612761
    },
    {
      "firstName": "Tyler",
      "lastName": "Johnson",
      "playerId": 204020,
      "teamId": 1610612751
    },
    {
      "firstName": "Nikola",
      "lastName": "Jokic",
      "playerId": 203999,
      "teamId": 1610612743
    },
    {
      "firstName": "Damian",
      "lastName": "Jones",
      "playerId": 1627745,
      "teamId": 1610612758
    },
    {
      "firstName": "Mason",
      "lastName": "Jones",
      "playerId": 1630222,
      "teamId": 0
    },
    {
      "firstName": "Tre",
      "lastName": "Jones",
      "playerId": 1630200,
      "teamId": 1610612759
    },
    {
      "firstName": "Tyus",
      "lastName": "Jones",
      "playerId": 1626145,
      "teamId": 1610612763
    },
    {
      "firstName": "Derrick",
      "lastName": "Jones Jr.",
      "playerId": 1627884,
      "teamId": 1610612757
    },
    {
      "firstName": "DeAndre",
      "lastName": "Jordan",
      "playerId": 201599,
      "teamId": 1610612751
    },
    {
      "firstName": "Cory",
      "lastName": "Joseph",
      "playerId": 202709,
      "teamId": 1610612765
    },
    {
      "firstName": "Mfiondu",
      "lastName": "Kabengele",
      "playerId": 1629662,
      "teamId": 1610612739
    },
    {
      "firstName": "Frank",
      "lastName": "Kaminsky",
      "playerId": 1626163,
      "teamId": 1610612756
    },
    {
      "firstName": "Enes",
      "lastName": "Kanter",
      "playerId": 202683,
      "teamId": 1610612757
    },
    {
      "firstName": "Luke",
      "lastName": "Kennard",
      "playerId": 1628379,
      "teamId": 1610612746
    },
    {
      "firstName": "Louis",
      "lastName": "King",
      "playerId": 1629663,
      "teamId": 1610612758
    },
    {
      "firstName": "Maxi",
      "lastName": "Kleber",
      "playerId": 1628467,
      "teamId": 1610612742
    },
    {
      "firstName": "Nathan",
      "lastName": "Knight",
      "playerId": 1630233,
      "teamId": 1610612737
    },
    {
      "firstName": "Kevin",
      "lastName": "Knox II",
      "playerId": 1628995,
      "teamId": 1610612752
    },
    {
      "firstName": "John",
      "lastName": "Konchar",
      "playerId": 1629723,
      "teamId": 1610612763
    },
    {
      "firstName": "Furkan",
      "lastName": "Korkmaz",
      "playerId": 1627788,
      "teamId": 1610612755
    },
    {
      "firstName": "Luke",
      "lastName": "Kornet",
      "playerId": 1628436,
      "teamId": 1610612738
    },
    {
      "firstName": "Rodions",
      "lastName": "Kurucs",
      "playerId": 1629066,
      "teamId": 0
    },
    {
      "firstName": "Kyle",
      "lastName": "Kuzma",
      "playerId": 1628398,
      "teamId": 1610612747
    },
    {
      "firstName": "Zach",
      "lastName": "LaVine",
      "playerId": 203897,
      "teamId": 1610612741
    },
    {
      "firstName": "Anthony",
      "lastName": "Lamb",
      "playerId": 1630237,
      "teamId": 1610612745
    },
    {
      "firstName": "Jeremy",
      "lastName": "Lamb",
      "playerId": 203087,
      "teamId": 1610612754
    },
    {
      "firstName": "Romeo",
      "lastName": "Langford",
      "playerId": 1629641,
      "teamId": 1610612738
    },
    {
      "firstName": "Jake",
      "lastName": "Layman",
      "playerId": 1627774,
      "teamId": 1610612750
    },
    {
      "firstName": "Caris",
      "lastName": "LeVert",
      "playerId": 1627747,
      "teamId": 1610612754
    },
    {
      "firstName": "T.J.",
      "lastName": "Leaf",
      "playerId": 1628388,
      "teamId": 1610612757
    },
    {
      "firstName": "Jalen",
      "lastName": "Lecque",
      "playerId": 1629665,
      "teamId": 0
    },
    {
      "firstName": "Damion",
      "lastName": "Lee",
      "playerId": 1627814,
      "teamId": 1610612744
    },
    {
      "firstName": "Saben",
      "lastName": "Lee",
      "playerId": 1630240,
      "teamId": 1610612765
    },
    {
      "firstName": "Alex",
      "lastName": "Len",
      "playerId": 203458,
      "teamId": 1610612764
    },
    {
      "firstName": "Kawhi",
      "lastName": "Leonard",
      "playerId": 202695,
      "teamId": 1610612746
    },
    {
      "firstName": "Meyers",
      "lastName": "Leonard",
      "playerId": 203086,
      "teamId": 0
    },
    {
      "firstName": "Kira",
      "lastName": "Lewis Jr.",
      "playerId": 1630184,
      "teamId": 1610612740
    },
    {
      "firstName": "Damian",
      "lastName": "Lillard",
      "playerId": 203081,
      "teamId": 1610612757
    },
    {
      "firstName": "Nassir",
      "lastName": "Little",
      "playerId": 1629642,
      "teamId": 1610612757
    },
    {
      "firstName": "Kevon",
      "lastName": "Looney",
      "playerId": 1626172,
      "teamId": 1610612744
    },
    {
      "firstName": "Brook",
      "lastName": "Lopez",
      "playerId": 201572,
      "teamId": 1610612749
    },
    {
      "firstName": "Robin",
      "lastName": "Lopez",
      "playerId": 201577,
      "teamId": 1610612764
    },
    {
      "firstName": "Didi",
      "lastName": "Louzada",
      "playerId": 1629712,
      "teamId": 1610612740
    },
    {
      "firstName": "Kevin",
      "lastName": "Love",
      "playerId": 201567,
      "teamId": 1610612739
    },
    {
      "firstName": "Kyle",
      "lastName": "Lowry",
      "playerId": 200768,
      "teamId": 1610612761
    },
    {
      "firstName": "Timothe",
      "lastName": "Luwawu-Cabarrot",
      "playerId": 1627789,
      "teamId": 1610612751
    },
    {
      "firstName": "Trey",
      "lastName": "Lyles",
      "playerId": 1626168,
      "teamId": 1610612759
    },
    {
      "firstName": "Will",
      "lastName": "Magnay",
      "playerId": 1630266,
      "teamId": 0
    },
    {
      "firstName": "Thon",
      "lastName": "Maker",
      "playerId": 1627748,
      "teamId": 0
    },
    {
      "firstName": "Theo",
      "lastName": "Maledon",
      "playerId": 1630177,
      "teamId": 1610612760
    },
    {
      "firstName": "Karim",
      "lastName": "Mane",
      "playerId": 1630211,
      "teamId": 0
    },
    {
      "firstName": "Terance",
      "lastName": "Mann",
      "playerId": 1629611,
      "teamId": 1610612746
    },
    {
      "firstName": "Nico",
      "lastName": "Mannion",
      "playerId": 1630185,
      "teamId": 1610612744
    },
    {
      "firstName": "Boban",
      "lastName": "Marjanovic",
      "playerId": 1626246,
      "teamId": 1610612742
    },
    {
      "firstName": "Lauri",
      "lastName": "Markkanen",
      "playerId": 1628374,
      "teamId": 1610612741
    },
    {
      "firstName": "Naji",
      "lastName": "Marshall",
      "playerId": 1630230,
      "teamId": 1610612740
    },
    {
      "firstName": "Caleb",
      "lastName": "Martin",
      "playerId": 1628997,
      "teamId": 1610612766
    },
    {
      "firstName": "Cody",
      "lastName": "Martin",
      "playerId": 1628998,
      "teamId": 1610612766
    },
    {
      "firstName": "Jeremiah",
      "lastName": "Martin",
      "playerId": 1629725,
      "teamId": 1610612739
    },
    {
      "firstName": "Kelan",
      "lastName": "Martin",
      "playerId": 1629103,
      "teamId": 1610612754
    },
    {
      "firstName": "Kenyon",
      "lastName": "Martin Jr.",
      "playerId": 1630231,
      "teamId": 1610612745
    },
    {
      "firstName": "Frank",
      "lastName": "Mason",
      "playerId": 1628412,
      "teamId": 0
    },
    {
      "firstName": "Garrison",
      "lastName": "Mathews",
      "playerId": 1629726,
      "teamId": 1610612764
    },
    {
      "firstName": "Dakota",
      "lastName": "Mathias",
      "playerId": 1629751,
      "teamId": 0
    },
    {
      "firstName": "Wesley",
      "lastName": "Matthews",
      "playerId": 202083,
      "teamId": 1610612747
    },
    {
      "firstName": "Tyrese",
      "lastName": "Maxey",
      "playerId": 1630178,
      "teamId": 1610612755
    },
    {
      "firstName": "Skylar",
      "lastName": "Mays",
      "playerId": 1630219,
      "teamId": 1610612737
    },
    {
      "firstName": "Patrick",
      "lastName": "McCaw",
      "playerId": 1627775,
      "teamId": 0
    },
    {
      "firstName": "CJ",
      "lastName": "McCollum",
      "playerId": 203468,
      "teamId": 1610612757
    },
    {
      "firstName": "T.J.",
      "lastName": "McConnell",
      "playerId": 204456,
      "teamId": 1610612754
    },
    {
      "firstName": "Jaden",
      "lastName": "McDaniels",
      "playerId": 1630183,
      "teamId": 1610612750
    },
    {
      "firstName": "Jalen",
      "lastName": "McDaniels",
      "playerId": 1629667,
      "teamId": 1610612766
    },
    {
      "firstName": "Doug",
      "lastName": "McDermott",
      "playerId": 203926,
      "teamId": 1610612754
    },
    {
      "firstName": "Sean",
      "lastName": "McDermott",
      "playerId": 1630253,
      "teamId": 1610612763
    },
    {
      "firstName": "JaVale",
      "lastName": "McGee",
      "playerId": 201580,
      "teamId": 1610612743
    },
    {
      "firstName": "Rodney",
      "lastName": "McGruder",
      "playerId": 203585,
      "teamId": 1610612765
    },
    {
      "firstName": "Alfonzo",
      "lastName": "McKinnie",
      "playerId": 1628035,
      "teamId": 1610612747
    },
    {
      "firstName": "Jordan",
      "lastName": "McLaughlin",
      "playerId": 1629162,
      "teamId": 1610612750
    },
    {
      "firstName": "Ben",
      "lastName": "McLemore",
      "playerId": 203463,
      "teamId": 1610612747
    },
    {
      "firstName": "Nicolo",
      "lastName": "Melli",
      "playerId": 1629740,
      "teamId": 1610612742
    },
    {
      "firstName": "De'Anthony",
      "lastName": "Melton",
      "playerId": 1629001,
      "teamId": 1610612763
    },
    {
      "firstName": "Sam",
      "lastName": "Merrill",
      "playerId": 1630241,
      "teamId": 1610612749
    },
    {
      "firstName": "Chimezie",
      "lastName": "Metu",
      "playerId": 1629002,
      "teamId": 1610612758
    },
    {
      "firstName": "Khris",
      "lastName": "Middleton",
      "playerId": 203114,
      "teamId": 1610612749
    },
    {
      "firstName": "Darius",
      "lastName": "Miller",
      "playerId": 203121,
      "teamId": 0
    },
    {
      "firstName": "Patty",
      "lastName": "Mills",
      "playerId": 201988,
      "teamId": 1610612759
    },
    {
      "firstName": "Paul",
      "lastName": "Millsap",
      "playerId": 200794,
      "teamId": 1610612743
    },
    {
      "firstName": "Shake",
      "lastName": "Milton",
      "playerId": 1629003,
      "teamId": 1610612755
    },
    {
      "firstName": "Donovan",
      "lastName": "Mitchell",
      "playerId": 1628378,
      "teamId": 1610612762
    },
    {
      "firstName": "Adam",
      "lastName": "Mokoka",
      "playerId": 1629690,
      "teamId": 1610612741
    },
    {
      "firstName": "Malik",
      "lastName": "Monk",
      "playerId": 1628370,
      "teamId": 1610612766
    },
    {
      "firstName": "E'Twaun",
      "lastName": "Moore",
      "playerId": 202734,
      "teamId": 1610612756
    },
    {
      "firstName": "Ja",
      "lastName": "Morant",
      "playerId": 1629630,
      "teamId": 1610612763
    },
    {
      "firstName": "Juwan",
      "lastName": "Morgan",
      "playerId": 1629752,
      "teamId": 1610612762
    },
    {
      "firstName": "Markieff",
      "lastName": "Morris",
      "playerId": 202693,
      "teamId": 1610612747
    },
    {
      "firstName": "Monte",
      "lastName": "Morris",
      "playerId": 1628420,
      "teamId": 1610612743
    },
    {
      "firstName": "Marcus",
      "lastName": "Morris Sr.",
      "playerId": 202694,
      "teamId": 1610612746
    },
    {
      "firstName": "Mychal",
      "lastName": "Mulder",
      "playerId": 1628539,
      "teamId": 1610612744
    },
    {
      "firstName": "Dejounte",
      "lastName": "Murray",
      "playerId": 1627749,
      "teamId": 1610612759
    },
    {
      "firstName": "Jamal",
      "lastName": "Murray",
      "playerId": 1627750,
      "teamId": 1610612743
    },
    {
      "firstName": "Mike",
      "lastName": "Muscala",
      "playerId": 203488,
      "teamId": 1610612760
    },
    {
      "firstName": "Svi",
      "lastName": "Mykhailiuk",
      "playerId": 1629004,
      "teamId": 1610612760
    },
    {
      "firstName": "Abdel",
      "lastName": "Nader",
      "playerId": 1627846,
      "teamId": 1610612756
    },
    {
      "firstName": "Larry",
      "lastName": "Nance Jr.",
      "playerId": 1626204,
      "teamId": 1610612739
    },
    {
      "firstName": "Aaron",
      "lastName": "Nesmith",
      "playerId": 1630174,
      "teamId": 1610612738
    },
    {
      "firstName": "Raul",
      "lastName": "Neto",
      "playerId": 203526,
      "teamId": 1610612764
    },
    {
      "firstName": "Georges",
      "lastName": "Niang",
      "playerId": 1627777,
      "teamId": 1610612762
    },
    {
      "firstName": "Zeke",
      "lastName": "Nnaji",
      "playerId": 1630192,
      "teamId": 1610612743
    },
    {
      "firstName": "Nerlens",
      "lastName": "Noel",
      "playerId": 203457,
      "teamId": 1610612752
    },
    {
      "firstName": "Jaylen",
      "lastName": "Nowell",
      "playerId": 1629669,
      "teamId": 1610612750
    },
    {
      "firstName": "Frank",
      "lastName": "Ntilikina",
      "playerId": 1628373,
      "teamId": 1610612752
    },
    {
      "firstName": "Kendrick",
      "lastName": "Nunn",
      "playerId": 1629134,
      "teamId": 1610612748
    },
    {
      "firstName": "James",
      "lastName": "Nunnally",
      "playerId": 203263,
      "teamId": 1610612740
    },
    {
      "firstName": "Jusuf",
      "lastName": "Nurkic",
      "playerId": 203994,
      "teamId": 1610612757
    },
    {
      "firstName": "David",
      "lastName": "Nwaba",
      "playerId": 1628021,
      "teamId": 1610612745
    },
    {
      "firstName": "Jordan",
      "lastName": "Nwora",
      "playerId": 1629670,
      "teamId": 1610612749
    },
    {
      "firstName": "Royce",
      "lastName": "O'Neale",
      "playerId": 1626220,
      "teamId": 1610612762
    },
    {
      "firstName": "Semi",
      "lastName": "Ojeleye",
      "playerId": 1628400,
      "teamId": 1610612738
    },
    {
      "firstName": "Jahlil",
      "lastName": "Okafor",
      "playerId": 1626143,
      "teamId": 1610612765
    },
    {
      "firstName": "Chuma",
      "lastName": "Okeke",
      "playerId": 1629643,
      "teamId": 1610612753
    },
    {
      "firstName": "Josh",
      "lastName": "Okogie",
      "playerId": 1629006,
      "teamId": 1610612750
    },
    {
      "firstName": "Onyeka",
      "lastName": "Okongwu",
      "playerId": 1630168,
      "teamId": 1610612737
    },
    {
      "firstName": "Isaac",
      "lastName": "Okoro",
      "playerId": 1630171,
      "teamId": 1610612739
    },
    {
      "firstName": "KZ",
      "lastName": "Okpala",
      "playerId": 1629644,
      "teamId": 1610612748
    },
    {
      "firstName": "Victor",
      "lastName": "Oladipo",
      "playerId": 203506,
      "teamId": 1610612748
    },
    {
      "firstName": "Cameron",
      "lastName": "Oliver",
      "playerId": 1628419,
      "teamId": 1610612745
    },
    {
      "firstName": "Kelly",
      "lastName": "Olynyk",
      "playerId": 203482,
      "teamId": 1610612745
    },
    {
      "firstName": "Miye",
      "lastName": "Oni",
      "playerId": 1629671,
      "teamId": 1610612762
    },
    {
      "firstName": "Cedi",
      "lastName": "Osman",
      "playerId": 1626224,
      "teamId": 1610612739
    },
    {
      "firstName": "Daniel",
      "lastName": "Oturu",
      "playerId": 1630187,
      "teamId": 1610612746
    },
    {
      "firstName": "Kelly",
      "lastName": "Oubre Jr.",
      "playerId": 1626162,
      "teamId": 1610612744
    },
    {
      "firstName": "Jabari",
      "lastName": "Parker",
      "playerId": 203953,
      "teamId": 1610612738
    },
    {
      "firstName": "Eric",
      "lastName": "Paschall",
      "playerId": 1629672,
      "teamId": 1610612744
    },
    {
      "firstName": "Anzejs",
      "lastName": "Pasecniks",
      "playerId": 1628394,
      "teamId": 0
    },
    {
      "firstName": "Patrick",
      "lastName": "Patterson",
      "playerId": 202335,
      "teamId": 1610612746
    },
    {
      "firstName": "Justin",
      "lastName": "Patton",
      "playerId": 1628383,
      "teamId": 0
    },
    {
      "firstName": "Chris",
      "lastName": "Paul",
      "playerId": 101108,
      "teamId": 1610612756
    },
    {
      "firstName": "Cameron",
      "lastName": "Payne",
      "playerId": 1626166,
      "teamId": 1610612756
    },
    {
      "firstName": "Elfrid",
      "lastName": "Payton",
      "playerId": 203901,
      "teamId": 1610612752
    },
    {
      "firstName": "Gary",
      "lastName": "Payton II",
      "playerId": 1627780,
      "teamId": 0
    },
    {
      "firstName": "Norvel",
      "lastName": "Pelle",
      "playerId": 203658,
      "teamId": 1610612752
    },
    {
      "firstName": "Reggie",
      "lastName": "Perry",
      "playerId": 1629617,
      "teamId": 1610612751
    },
    {
      "firstName": "Theo",
      "lastName": "Pinson",
      "playerId": 1629033,
      "teamId": 1610612752
    },
    {
      "firstName": "Mason",
      "lastName": "Plumlee",
      "playerId": 203486,
      "teamId": 1610612765
    },
    {
      "firstName": "Jakob",
      "lastName": "Poeltl",
      "playerId": 1627751,
      "teamId": 1610612759
    },
    {
      "firstName": "Vincent",
      "lastName": "Poirier",
      "playerId": 1629738,
      "teamId": 0
    },
    {
      "firstName": "Aleksej",
      "lastName": "Pokusevski",
      "playerId": 1630197,
      "teamId": 1610612760
    },
    {
      "firstName": "Jordan",
      "lastName": "Poole",
      "playerId": 1629673,
      "teamId": 1610612744
    },
    {
      "firstName": "Jontay",
      "lastName": "Porter",
      "playerId": 1629007,
      "teamId": 1610612763
    },
    {
      "firstName": "Kevin",
      "lastName": "Porter Jr.",
      "playerId": 1629645,
      "teamId": 1610612745
    },
    {
      "firstName": "Michael",
      "lastName": "Porter Jr.",
      "playerId": 1629008,
      "teamId": 1610612743
    },
    {
      "firstName": "Otto",
      "lastName": "Porter Jr.",
      "playerId": 203490,
      "teamId": 1610612753
    },
    {
      "firstName": "Bobby",
      "lastName": "Portis",
      "playerId": 1626171,
      "teamId": 1610612749
    },
    {
      "firstName": "Kristaps",
      "lastName": "Porzingis",
      "playerId": 204001,
      "teamId": 1610612742
    },
    {
      "firstName": "Dwight",
      "lastName": "Powell",
      "playerId": 203939,
      "teamId": 1610612742
    },
    {
      "firstName": "Norman",
      "lastName": "Powell",
      "playerId": 1626181,
      "teamId": 1610612757
    },
    {
      "firstName": "Taurean",
      "lastName": "Prince",
      "playerId": 1627752,
      "teamId": 1610612739
    },
    {
      "firstName": "Payton",
      "lastName": "Pritchard",
      "playerId": 1630202,
      "teamId": 1610612738
    },
    {
      "firstName": "Immanuel",
      "lastName": "Quickley",
      "playerId": 1630193,
      "teamId": 1610612752
    },
    {
      "firstName": "Jahmi'us",
      "lastName": "Ramsey",
      "playerId": 1630186,
      "teamId": 1610612758
    },
    {
      "firstName": "Chasson",
      "lastName": "Randle",
      "playerId": 1626184,
      "teamId": 1610612753
    },
    {
      "firstName": "Julius",
      "lastName": "Randle",
      "playerId": 203944,
      "teamId": 1610612752
    },
    {
      "firstName": "Cam",
      "lastName": "Reddish",
      "playerId": 1629629,
      "teamId": 1610612737
    },
    {
      "firstName": "JJ",
      "lastName": "Redick",
      "playerId": 200755,
      "teamId": 1610612742
    },
    {
      "firstName": "Paul",
      "lastName": "Reed",
      "playerId": 1630194,
      "teamId": 1610612755
    },
    {
      "firstName": "Naz",
      "lastName": "Reid",
      "playerId": 1629675,
      "teamId": 1610612750
    },
    {
      "firstName": "Cameron",
      "lastName": "Reynolds",
      "playerId": 1629244,
      "teamId": 1610612745
    },
    {
      "firstName": "Nick",
      "lastName": "Richards",
      "playerId": 1630208,
      "teamId": 1610612766
    },
    {
      "firstName": "Josh",
      "lastName": "Richardson",
      "playerId": 1626196,
      "teamId": 1610612742
    },
    {
      "firstName": "Grant",
      "lastName": "Riller",
      "playerId": 1630203,
      "teamId": 1610612766
    },
    {
      "firstName": "Austin",
      "lastName": "Rivers",
      "playerId": 203085,
      "teamId": 1610612743
    },
    {
      "firstName": "Andre",
      "lastName": "Roberson",
      "playerId": 203460,
      "teamId": 0
    },
    {
      "firstName": "Duncan",
      "lastName": "Robinson",
      "playerId": 1629130,
      "teamId": 1610612748
    },
    {
      "firstName": "Jerome",
      "lastName": "Robinson",
      "playerId": 1629010,
      "teamId": 0
    },
    {
      "firstName": "Justin",
      "lastName": "Robinson",
      "playerId": 1629620,
      "teamId": 0
    },
    {
      "firstName": "Mitchell",
      "lastName": "Robinson",
      "playerId": 1629011,
      "teamId": 1610612752
    },
    {
      "firstName": "Glenn",
      "lastName": "Robinson III",
      "playerId": 203922,
      "teamId": 0
    },
    {
      "firstName": "Isaiah",
      "lastName": "Roby",
      "playerId": 1629676,
      "teamId": 1610612760
    },
    {
      "firstName": "Rajon",
      "lastName": "Rondo",
      "playerId": 200765,
      "teamId": 1610612746
    },
    {
      "firstName": "Derrick",
      "lastName": "Rose",
      "playerId": 201565,
      "teamId": 1610612752
    },
    {
      "firstName": "Terrence",
      "lastName": "Ross",
      "playerId": 203082,
      "teamId": 1610612753
    },
    {
      "firstName": "Terry",
      "lastName": "Rozier",
      "playerId": 1626179,
      "teamId": 1610612766
    },
    {
      "firstName": "Ricky",
      "lastName": "Rubio",
      "playerId": 201937,
      "teamId": 1610612750
    },
    {
      "firstName": "D'Angelo",
      "lastName": "Russell",
      "playerId": 1626156,
      "teamId": 1610612750
    },
    {
      "firstName": "Domantas",
      "lastName": "Sabonis",
      "playerId": 1627734,
      "teamId": 1610612754
    },
    {
      "firstName": "Luka",
      "lastName": "Samanic",
      "playerId": 1629677,
      "teamId": 1610612759
    },
    {
      "firstName": "JaKarr",
      "lastName": "Sampson",
      "playerId": 203960,
      "teamId": 1610612754
    },
    {
      "firstName": "Dario",
      "lastName": "Saric",
      "playerId": 203967,
      "teamId": 1610612756
    },
    {
      "firstName": "Tomas",
      "lastName": "Satoransky",
      "playerId": 203107,
      "teamId": 1610612741
    },
    {
      "firstName": "Dennis",
      "lastName": "Schroder",
      "playerId": 203471,
      "teamId": 1610612747
    },
    {
      "firstName": "Mike",
      "lastName": "Scott",
      "playerId": 203118,
      "teamId": 1610612755
    },
    {
      "firstName": "Jay",
      "lastName": "Scrubb",
      "playerId": 1630206,
      "teamId": 1610612746
    },
    {
      "firstName": "Collin",
      "lastName": "Sexton",
      "playerId": 1629012,
      "teamId": 1610612739
    },
    {
      "firstName": "Landry",
      "lastName": "Shamet",
      "playerId": 1629013,
      "teamId": 1610612751
    },
    {
      "firstName": "Iman",
      "lastName": "Shumpert",
      "playerId": 202697,
      "teamId": 0
    },
    {
      "firstName": "Pascal",
      "lastName": "Siakam",
      "playerId": 1627783,
      "teamId": 1610612761
    },
    {
      "firstName": "Chris",
      "lastName": "Silva",
      "playerId": 1629735,
      "teamId": 0
    },
    {
      "firstName": "Ben",
      "lastName": "Simmons",
      "playerId": 1627732,
      "teamId": 1610612755
    },
    {
      "firstName": "Anfernee",
      "lastName": "Simons",
      "playerId": 1629014,
      "teamId": 1610612757
    },
    {
      "firstName": "Deividas",
      "lastName": "Sirvydis",
      "playerId": 1629686,
      "teamId": 1610612765
    },
    {
      "firstName": "Alen",
      "lastName": "Smailagic",
      "playerId": 1629346,
      "teamId": 1610612744
    },
    {
      "firstName": "Marcus",
      "lastName": "Smart",
      "playerId": 203935,
      "teamId": 1610612738
    },
    {
      "firstName": "Ish",
      "lastName": "Smith",
      "playerId": 202397,
      "teamId": 1610612764
    },
    {
      "firstName": "Jalen",
      "lastName": "Smith",
      "playerId": 1630188,
      "teamId": 1610612756
    },
    {
      "firstName": "Dennis",
      "lastName": "Smith Jr.",
      "playerId": 1628372,
      "teamId": 1610612765
    },
    {
      "firstName": "Tony",
      "lastName": "Snell",
      "playerId": 203503,
      "teamId": 1610612737
    },
    {
      "firstName": "Ray",
      "lastName": "Spalding",
      "playerId": 1629034,
      "teamId": 0
    },
    {
      "firstName": "Cassius",
      "lastName": "Stanley",
      "playerId": 1630199,
      "teamId": 1610612754
    },
    {
      "firstName": "Lamar",
      "lastName": "Stevens",
      "playerId": 1630205,
      "teamId": 1610612739
    },
    {
      "firstName": "Isaiah",
      "lastName": "Stewart",
      "playerId": 1630191,
      "teamId": 1610612765
    },
    {
      "firstName": "Max",
      "lastName": "Strus",
      "playerId": 1629622,
      "teamId": 1610612748
    },
    {
      "firstName": "Edmond",
      "lastName": "Sumner",
      "playerId": 1628410,
      "teamId": 1610612754
    },
    {
      "firstName": "Jae'Sean",
      "lastName": "Tate",
      "playerId": 1630256,
      "teamId": 1610612745
    },
    {
      "firstName": "Jayson",
      "lastName": "Tatum",
      "playerId": 1628369,
      "teamId": 1610612738
    },
    {
      "firstName": "Jeff",
      "lastName": "Teague",
      "playerId": 201952,
      "teamId": 1610612749
    },
    {
      "firstName": "Garrett",
      "lastName": "Temple",
      "playerId": 202066,
      "teamId": 1610612741
    },
    {
      "firstName": "Tyrell",
      "lastName": "Terry",
      "playerId": 1630179,
      "teamId": 1610612742
    },
    {
      "firstName": "Daniel",
      "lastName": "Theis",
      "playerId": 1628464,
      "teamId": 1610612741
    },
    {
      "firstName": "Brodric",
      "lastName": "Thomas",
      "playerId": 1630271,
      "teamId": 1610612739
    },
    {
      "firstName": "Isaiah",
      "lastName": "Thomas",
      "playerId": 202738,
      "teamId": 0
    },
    {
      "firstName": "Khyri",
      "lastName": "Thomas",
      "playerId": 1629017,
      "teamId": 1610612745
    },
    {
      "firstName": "Matt",
      "lastName": "Thomas",
      "playerId": 1629744,
      "teamId": 1610612762
    },
    {
      "firstName": "Klay",
      "lastName": "Thompson",
      "playerId": 202691,
      "teamId": 1610612744
    },
    {
      "firstName": "Tristan",
      "lastName": "Thompson",
      "playerId": 202684,
      "teamId": 1610612738
    },
    {
      "firstName": "Sindarius",
      "lastName": "Thornwell",
      "playerId": 1628414,
      "teamId": 1610612753
    },
    {
      "firstName": "Matisse",
      "lastName": "Thybulle",
      "playerId": 1629680,
      "teamId": 1610612755
    },
    {
      "firstName": "Killian",
      "lastName": "Tillie",
      "playerId": 1629681,
      "teamId": 1610612763
    },
    {
      "firstName": "Xavier",
      "lastName": "Tillman",
      "playerId": 1630214,
      "teamId": 1610612763
    },
    {
      "firstName": "Anthony",
      "lastName": "Tolliver",
      "playerId": 201229,
      "teamId": 1610612755
    },
    {
      "firstName": "Obi",
      "lastName": "Toppin",
      "playerId": 1630167,
      "teamId": 1610612752
    },
    {
      "firstName": "Juan",
      "lastName": "Toscano-Anderson",
      "playerId": 1629308,
      "teamId": 1610612744
    },
    {
      "firstName": "Axel",
      "lastName": "Toupane",
      "playerId": 1626253,
      "teamId": 1610612749
    },
    {
      "firstName": "Karl-Anthony",
      "lastName": "Towns",
      "playerId": 1626157,
      "teamId": 1610612750
    },
    {
      "firstName": "Gary",
      "lastName": "Trent Jr.",
      "playerId": 1629018,
      "teamId": 1610612761
    },
    {
      "firstName": "P.J.",
      "lastName": "Tucker",
      "playerId": 200782,
      "teamId": 1610612749
    },
    {
      "firstName": "Rayjon",
      "lastName": "Tucker",
      "playerId": 1629730,
      "teamId": 1610612755
    },
    {
      "firstName": "Myles",
      "lastName": "Turner",
      "playerId": 1626167,
      "teamId": 1610612754
    },
    {
      "firstName": "Jonas",
      "lastName": "Valanciunas",
      "playerId": 202685,
      "teamId": 1610612763
    },
    {
      "firstName": "Denzel",
      "lastName": "Valentine",
      "playerId": 1627756,
      "teamId": 1610612741
    },
    {
      "firstName": "Fred",
      "lastName": "VanVleet",
      "playerId": 1627832,
      "teamId": 1610612761
    },
    {
      "firstName": "Jarred",
      "lastName": "Vanderbilt",
      "playerId": 1629020,
      "teamId": 1610612750
    },
    {
      "firstName": "Anderson",
      "lastName": "Varejao",
      "playerId": 2760,
      "teamId": 1610612739
    },
    {
      "firstName": "Devin",
      "lastName": "Vassell",
      "playerId": 1630170,
      "teamId": 1610612759
    },
    {
      "firstName": "Luca",
      "lastName": "Vildoza",
      "playerId": 1630492,
      "teamId": 1610612752
    },
    {
      "firstName": "Gabe",
      "lastName": "Vincent",
      "playerId": 1629216,
      "teamId": 1610612748
    },
    {
      "firstName": "Noah",
      "lastName": "Vonleh",
      "playerId": 203943,
      "teamId": 0
    },
    {
      "firstName": "Nikola",
      "lastName": "Vucevic",
      "playerId": 202696,
      "teamId": 1610612741
    },
    {
      "firstName": "Dean",
      "lastName": "Wade",
      "playerId": 1629731,
      "teamId": 1610612739
    },
    {
      "firstName": "Moritz",
      "lastName": "Wagner",
      "playerId": 1629021,
      "teamId": 1610612753
    },
    {
      "firstName": "Kemba",
      "lastName": "Walker",
      "playerId": 202689,
      "teamId": 1610612738
    },
    {
      "firstName": "Lonnie",
      "lastName": "Walker IV",
      "playerId": 1629022,
      "teamId": 1610612759
    },
    {
      "firstName": "John",
      "lastName": "Wall",
      "playerId": 202322,
      "teamId": 1610612745
    },
    {
      "firstName": "Brad",
      "lastName": "Wanamaker",
      "playerId": 202954,
      "teamId": 1610612766
    },
    {
      "firstName": "T.J.",
      "lastName": "Warren",
      "playerId": 203933,
      "teamId": 1610612754
    },
    {
      "firstName": "P.J.",
      "lastName": "Washington",
      "playerId": 1629023,
      "teamId": 1610612766
    },
    {
      "firstName": "Yuta",
      "lastName": "Watanabe",
      "playerId": 1629139,
      "teamId": 1610612761
    },
    {
      "firstName": "Tremont",
      "lastName": "Waters",
      "playerId": 1629682,
      "teamId": 1610612738
    },
    {
      "firstName": "Paul",
      "lastName": "Watson",
      "playerId": 1628778,
      "teamId": 1610612761
    },
    {
      "firstName": "Quinndary",
      "lastName": "Weatherspoon",
      "playerId": 1629683,
      "teamId": 1610612759
    },
    {
      "firstName": "Russell",
      "lastName": "Westbrook",
      "playerId": 201566,
      "teamId": 1610612764
    },
    {
      "firstName": "Coby",
      "lastName": "White",
      "playerId": 1629632,
      "teamId": 1610612741
    },
    {
      "firstName": "Derrick",
      "lastName": "White",
      "playerId": 1628401,
      "teamId": 1610612759
    },
    {
      "firstName": "Hassan",
      "lastName": "Whiteside",
      "playerId": 202355,
      "teamId": 1610612758
    },
    {
      "firstName": "Greg",
      "lastName": "Whittington",
      "playerId": 204222,
      "teamId": 0
    },
    {
      "firstName": "Andrew",
      "lastName": "Wiggins",
      "playerId": 203952,
      "teamId": 1610612744
    },
    {
      "firstName": "Grant",
      "lastName": "Williams",
      "playerId": 1629684,
      "teamId": 1610612738
    },
    {
      "firstName": "Kenrich",
      "lastName": "Williams",
      "playerId": 1629026,
      "teamId": 1610612760
    },
    {
      "firstName": "Lou",
      "lastName": "Williams",
      "playerId": 101150,
      "teamId": 1610612737
    },
    {
      "firstName": "Patrick",
      "lastName": "Williams",
      "playerId": 1630172,
      "teamId": 1610612741
    },
    {
      "firstName": "Robert",
      "lastName": "Williams III",
      "playerId": 1629057,
      "teamId": 1610612738
    },
    {
      "firstName": "Zion",
      "lastName": "Williamson",
      "playerId": 1629627,
      "teamId": 1610612740
    },
    {
      "firstName": "D.J.",
      "lastName": "Wilson",
      "playerId": 1628391,
      "teamId": 1610612745
    },
    {
      "firstName": "Dylan",
      "lastName": "Windler",
      "playerId": 1629685,
      "teamId": 1610612739
    },
    {
      "firstName": "Justise",
      "lastName": "Winslow",
      "playerId": 1626159,
      "teamId": 1610612763
    },
    {
      "firstName": "Cassius",
      "lastName": "Winston",
      "playerId": 1630216,
      "teamId": 1610612764
    },
    {
      "firstName": "James",
      "lastName": "Wiseman",
      "playerId": 1630164,
      "teamId": 1610612744
    },
    {
      "firstName": "Christian",
      "lastName": "Wood",
      "playerId": 1626174,
      "teamId": 1610612745
    },
    {
      "firstName": "Robert",
      "lastName": "Woodard II",
      "playerId": 1630218,
      "teamId": 1610612758
    },
    {
      "firstName": "Delon",
      "lastName": "Wright",
      "playerId": 1626153,
      "teamId": 1610612758
    },
    {
      "firstName": "Thaddeus",
      "lastName": "Young",
      "playerId": 201152,
      "teamId": 1610612741
    },
    {
      "firstName": "Trae",
      "lastName": "Young",
      "playerId": 1629027,
      "teamId": 1610612737
    },
    {
      "firstName": "Omer",
      "lastName": "Yurtseven",
      "playerId": 1630209,
      "teamId": 1610612748
    },
    {
      "firstName": "Cody",
      "lastName": "Zeller",
      "playerId": 203469,
      "teamId": 1610612766
    },
    {
      "firstName": "Ivica",
      "lastName": "Zubac",
      "playerId": 1627826,
      "teamId": 1610612746
    }
  ]

  const playerSeed = []
  
  players.forEach(player =>{
      p = {
          name: `${player.firstName} ${player.lastName}`
        }
        playerSeed.push(p)
    })
// Save the connection in a variable
const db = mongoose.connection

//Make sure code is not run till on
db.on("open", () =>{

    // Delete all Players
    Player.deleteMany({}).then((data) => {
      // Seed Starter Players
      Player.create(playerSeed)
      .then((data) => {
       //log the new players to confirm their creation
       console.log(playerSeed)
       db.close();
      })
      .catch((error) => {
          console.log(error)
          db.close();
      });
    });
});