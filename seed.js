const playerSeed = [
  {
    id: 553,
    name: 'Lou Williams',
    nba: { start: 2005, pro: 16, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '175',
    college: 'South Gwinnett HS (GA)',
    pos: 'G',
    jersey: 6
  },
  {
    id: 402,
    name: 'Jahlil Okafor',
    nba: { start: 0, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: null, inches: null },
    weight: null,
    college: null,
    pos: null,
    jersey: 14
  },
  {
    id: 564,
    name: 'Delon Wright',
    nba: { start: 2015, pro: 6, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '185',
    college: 'Utah',
    pos: 'G',
    jersey: null
  },
  {
    id: 588,
    name: 'Cat Barber',
    nba: { start: 2021, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: null, inches: null },
    weight: null,
    college: 'North Carolina State',
    pos: null,
    jersey: 5
  },
  {
    id: 329,
    name: 'Timothe Luwawu-Cabarrot',
    nba: { start: 2016, pro: 5, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '215',
    college: 'Mega Basket',
    pos: 'G-F',
    jersey: 7
  },
  {
    id: 761,
    name: 'John Collins',
    nba: { start: 2017, pro: 4, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '226',
    college: 'Wake Forest',
    pos: 'F-C',
    jersey: 20
  },
  {
    id: 738,
    name: 'Jordan Bell',
    nba: { start: 2017, pro: 4, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '216',
    college: 'Oregon',
    pos: 'F',
    jersey: 20
  },
  {
    id: 802,
    name: 'Wes Iwundu',
    nba: { start: 2017, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: null, inches: null },
    weight: null,
    college: 'Kansas State',
    pos: null,
    jersey: 24
  },
  {
    id: 1011,
    name: 'Cameron Oliver',
    nba: { start: 2020, pro: 1, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '239',
    college: 'Nevada',
    pos: 'F',
    jersey: 21
  },
  {
    id: 980,
    name: 'Kevin Huerter',
    nba: { start: 2018, pro: 3, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '198',
    college: 'Maryland',
    pos: 'G-F',
    jersey: 3
  },
  {
    id: 987,
    name: 'Kevin Knox II',
    nba: { start: 2018, pro: 3, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '215',
    college: 'Kentucky',
    pos: 'F',
    jersey: 5
  },
  {
    id: 1046,
    name: 'Trae Young',
    nba: { start: 2018, pro: 3, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '164',
    college: 'Oklahoma',
    pos: 'G',
    jersey: 11
  },
  {
    id: 977,
    name: 'Johnny Hamilton',
    nba: { start: 0, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: null, inches: null },
    weight: null,
    college: null,
    pos: null,
    jersey: 24
  },
  {
    id: 923,
    name: 'DeVaughn Akoon-Purcell',
    nba: { start: 0, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: null, inches: null },
    weight: null,
    college: null,
    pos: null,
    jersey: 44
  },
  {
    id: 2211,
    name: 'Justin Tillman',
    nba: { start: 0, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: null, inches: null },
    weight: null,
    college: null,
    pos: null,
    jersey: 36
  },
  {
    id: 2165,
    name: 'Chris Clemons',
    nba: { start: 0, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: null, inches: null },
    weight: null,
    college: null,
    pos: null,
    jersey: 39
  },
  {
    id: 2579,
    name: 'Javin DeLaurier',
    nba: { start: 0, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '234',
    college: 'Duke',
    pos: 'C',
    jersey: 12
  },
  {
    id: 1948,
    name: 'DaQuan Jeffries',
    nba: { start: 2019, pro: 3, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '225',
    college: 'Tulsa',
    pos: 'G-F',
    jersey: 55
  },
  {
    id: 1889,
    name: 'Cam Reddish',
    nba: { start: 2019, pro: 2, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '217',
    college: 'Duke',
    pos: 'F-G',
    jersey: 21
  },
  {
    id: 1868,
    name: "De'Andre Hunter",
    nba: { start: 2019, pro: 2, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '221',
    college: 'Virginia',
    pos: 'F-G',
    jersey: 12
  },
  {
    id: 1892,
    name: 'Admiral Schofield',
    nba: { start: 2019, pro: 1, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '241',
    college: 'Tennessee',
    pos: 'F',
    jersey: 25
  },
  {
    id: 2388,
    name: 'Jeremiah Martin',
    nba: { start: 2019, pro: 2, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '185',
    college: 'Memphis',
    pos: 'G',
    jersey: 3
  },
  {
    id: 2629,
    name: 'Onyeka Okongwu',
    nba: { start: 2020, pro: 1, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '240',
    college: 'Southern California',
    pos: 'F-C',
    jersey: 17
  },
  {
    id: 2620,
    name: 'Skylar Mays',
    nba: { start: 2020, pro: 1, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '205',
    college: 'Louisiana State',
    pos: 'G',
    jersey: 4
  },
  {
    id: 2979,
    name: 'Nahziah Carter',
    nba: { start: 0, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '205',
    college: 'Washington'
  },
  {
    id: 2800,
    name: 'Sharife Cooper',
    nba: { start: 2021, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '176',
    college: 'Auburn',
    pos: 'G',
    jersey: 2
  },
  {
    id: 2819,
    name: 'Jalen Johnson',
    nba: { start: 2021, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '219',
    college: 'Duke',
    pos: 'F',
    jersey: 1
  },
  {
    id: 2794,
    name: 'Chaundee Brown Jr.',
    nba: { start: 2021, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '215',
    college: 'Michigan',
    pos: 'F',
    jersey: 38
  },
  {
    id: 2890,
    name: 'A.J. Lawson',
    nba: { start: 0, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '180',
    college: 'South Carolina',
    pos: 'G',
    jersey: 5
  },
  {
    id: 3395,
    name: 'Malik Ellison',
    nba: { start: 0, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: null, inches: null },
    weight: null,
    college: null,
    pos: null,
    jersey: 28
  },
  {
    id: 3380,
    name: 'Malcolm Hill',
    nba: { start: 2021, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '220',
    college: 'Illinois',
    pos: 'F',
    jersey: 14
  },
  {
    id: 3382,
    name: 'Ibi Watson-Boye',
    nba: { start: 0, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: null, inches: null },
    weight: null,
    college: null,
    pos: null,
    jersey: 16
  },
  {
    id: 181,
    name: 'Danilo Gallinari',
    nba: { start: 2008, pro: 12, name: "Atlanta Hawks", nickname: "ATL" },
    height: { feets: '6', inches: '6' },
    weight: '236',
    college: 'Olimpia Milano',
    pos: 'F',
    jersey: 8
  },
  {
    id: 497,
    name: 'Lance Stephenson',
    nba: { start: 2010, pro: 9, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '210',
    college: 'Cincinnati',
    pos: 'F',
    jersey: 6
  },
  {
    id: 141,
    name: 'Gorgui Dieng',
    nba: { start: 2013, pro: 8, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '248',
    college: 'Louisville',
    pos: 'C',
    jersey: 10
  },
  {
    id: 239,
    name: 'Solomon Hill',
    nba: { start: 2013, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: null, inches: null },
    weight: null,
    college: 'Arizona',
    pos: null,
    jersey: 99
  },
  {
    id: 372,
    name: 'Eric Moreland',
    nba: { start: 0, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: null, inches: null },
    weight: null,
    college: null,
    pos: null,
    jersey: 25
  },
  {
    id: 92,
    name: 'Clint Capela',
    nba: { start: 2014, pro: 7, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '256',
    college: 'Elan Chalon',
    pos: 'C',
    jersey: 15
  },
  {
    id: 743,
    name: 'Bogdan Bogdanovic',
    nba: { start: 2017, pro: 4, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '225',
    college: 'Fenerbahce',
    pos: 'G',
    jersey: 13
  },
  {
    id: 3006,
    name: 'Juwan Durham',
    nba: { start: 0, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '231',
    college: 'Notre Dame'
  },
  {
    id: 3057,
    name: 'Max Heidegger',
    nba: { start: 0, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '180',
    college: 'California-Santa Barbara'
  },
  {
    id: 3072,
    name: 'Justin Jaworski',
    nba: { start: 0, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '196',
    college: 'Lafayette'
  },
  {
    id: 3263,
    name: 'Ibi Watson',
    nba: { start: 0, pro: 0, name: "Atlanta Hawks", nickname: "ATL"},
    height: { feets: '6', inches: '6' },
    weight: '200',
    college: 'Dayton'
  },  {
      id: 362,
      name: 'CJ Miles',
      nba: { start: 2005, pro: 0, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: null, inches: null },
      weight: null,
      college: 'No College',
      pos: null,
      jersey: 50
    },
    {
      id: 446,
      name: 'Josh Richardson',
      nba: { start: 2015, pro: 6, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '200',
      college: 'Tennessee',
      pos: 'G',
      jersey: 7
    },
    {
      id: 75,
      name: 'Jaylen Brown',
      nba: { start: 2016, pro: 5, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '223',
      college: 'California',
      pos: 'G-F',
      jersey: 7
    },
    {
      id: 597,
      name: 'Zach Auguste',
      nba: { start: 0, pro: 0, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 29
    },
    {
      id: 230,
      name: 'Juancho Hernangomez',
      nba: { start: 2016, pro: 5, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '214',
      college: 'Estudiantes',
      pos: 'F',
      jersey: 41
    },
    {
      id: 609,
      name: 'Ryan Arcidiacono',
      nba: { start: 2017, pro: 4, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '195',
      college: 'Villanova',
      pos: 'G',
      jersey: 51
    },
    {
      id: 882,
      name: 'Jayson Tatum',
      nba: { start: 2017, pro: 4, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '210',
      college: 'Duke',
      pos: 'F-G',
      jersey: null
    },
    {
      id: 806,
      name: 'Justin Jackson',
      nba: { start: 2017, pro: 0, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: null, inches: null },
      weight: null,
      college: 'North Carolina',
      pos: null,
      jersey: 45
    },
    {
      id: 897,
      name: 'Derrick White',
      nba: { start: 2017, pro: 4, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Colorado',
      pos: 'G',
      jersey: 9
    },
    {
      id: 819,
      name: 'Luke Kornet',
      nba: { start: 2017, pro: 4, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '7', inches: '7' },
      weight: '250',
      college: 'Vanderbilt',
      pos: 'C-F',
      jersey: 40
    },
    {
      id: 886,
      name: 'Daniel Theis',
      nba: { start: 2017, pro: 4, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '245',
      college: 'Brose Bamberg',
      pos: 'F-C',
      jersey: 27
    },
    {
      id: 1858,
      name: 'Bruno Fernando',
      nba: { start: 2019, pro: 2, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '240',
      college: 'Maryland',
      pos: 'F-C',
      jersey: 20
    },
    {
      id: 1013,
      name: 'Theo Pinson',
      nba: { start: 2018, pro: 3, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '212',
      college: 'North Carolina',
      pos: 'G-F',
      jersey: 1
    },
    {
      id: 1857,
      name: 'Carsen Edwards',
      nba: { start: 2019, pro: 2, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '5', inches: '5' },
      weight: '200',
      college: 'Purdue',
      pos: 'G',
      jersey: 4
    },
    {
      id: 1045,
      name: 'Robert Williams III',
      nba: { start: 2018, pro: 3, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '237',
      college: 'Texas A&M',
      pos: 'C-F',
      jersey: 44
    },
    {
      id: 1514,
      name: 'Kelan Martin',
      nba: { start: 0, pro: 0, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 4
    },
    {
      id: 1874,
      name: 'Romeo Langford',
      nba: { start: 2019, pro: 2, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '216',
      college: 'Indiana',
      pos: 'G-F',
      jersey: 35
    },
    {
      id: 1920,
      name: 'Dedric Lawson',
      nba: { start: 0, pro: 0, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 17
    },
    {
      id: 1901,
      name: 'Grant Williams',
      nba: { start: 2019, pro: 2,name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '236',
      college: 'Tennessee',
      pos: 'F',
      jersey: 12
    },
    {
      id: 1917,
      name: 'Aric Holman',
      nba: { start: 0, pro: 0, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: 'F-C',
      jersey: 35
    },
    {
      id: 2327,
      name: 'Garrison Mathews',
      nba: { start: 0, pro: 0, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: 'G',
      jersey: 25
    },
    {
      id: 2438,
      name: 'Juwan Morgan',
      nba: { start: 2019, pro: 2,name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '232',
      college: 'Indiana',
      pos: 'F',
      jersey: 16
    },
    {
      id: 2626,
      name: 'Aaron Nesmith',
      nba: { start: 2020, pro: 1,name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'Vanderbilt',
      pos: 'G-F',
      jersey: 26
    },
    {
      id: 2635,
      name: 'Payton Pritchard',
      nba: { start: 2020, pro: 1, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '195',
      college: 'Oregon',
      pos: 'G',
      jersey: 11
    },
    {
      id: 2612,
      name: 'Yam Madar',
      nba: { start: 0, pro: 0, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: 'G',
      jersey: null
    },
    {
      id: 2586,
      name: 'Malik Fitts',
      nba: { start: 2020, pro: 1, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '230',
      college: "St. Mary's College",
      pos: 'F',
      jersey: 8
    },
    {
      id: 2654,
      name: 'Brodric Thomas',
      nba: { start: 2020, pro: 1,name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '185',
      college: 'Truman State',
      pos: 'G',
      jersey: 97
    },
    {
      id: 3195,
      name: 'Matt Ryan',
      nba: { start: 2021, pro: 0,name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'Tennessee-Chattanooga',
      pos: 'F',
      jersey: null
    },
    {
      id: 2812,
      name: 'Sam Hauser',
      nba: { start: 2021, pro: 0, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '217',
      college: 'Virginia',
      pos: 'F',
      jersey: 30
    },
    {
      id: 2791,
      name: 'Juhann Begarin',
      nba: { start: 0, pro: 0, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '185',
      college: 'Paris Basketball',
      pos: 'G',
      jersey: null
    },
    {
      id: 248,
      name: 'Al Horford',
      nba: { start: 2007, pro: 14, name: "Boston Celtics", nickname: "BOS" },
      height: { feets: '6', inches: '6' },
      weight: '240',
      college: 'Florida',
      pos: 'C-F',
      jersey: 42
    },
    {
      id: 12,
      name: 'Al-Farouq Aminu',
      nba: { start: 0, pro: 0, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 72
    },
    {
      id: 291,
      name: 'Enes Freedom',
      nba: { start: 2011, pro: 0,name: "Boston Celtics", nickname: "BOS"},
      height: { feets: null, inches: null },
      weight: null,
      college: '                                   ',
      pos: null,
      jersey: 13
    },
    {
      id: 472,
      name: 'Dennis Schroder',
      nba: { start: 2013, pro: 8,name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '172',
      college: 'Braunschweig',
      pos: 'G',
      jersey: 17
    },
    {
      id: 1012,
      name: 'Norvel Pelle',
      nba: { start: 2019, pro: 0,name: "Boston Celtics", nickname: "BOS"},
      height: { feets: null, inches: null },
      weight: null,
      college: 'Iona',
      pos: null,
      jersey: 5
    },
    {
      id: 496,
      name: 'Nik Stauskas',
      nba: { start: 2014, pro: 5, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '207',
      college: 'Michigan',
      pos: 'G',
      jersey: 13
    },
    {
      id: 486,
      name: 'Marcus Smart',
      nba: { start: 2014, pro: 7, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Oklahoma State',
      pos: 'G',
      jersey: 36
    },
    {
      id: 410,
      name: 'Jabari Parker',
      nba: { start: 2014, pro: 0, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: null, inches: null },
      weight: null,
      college: 'Duke',
      pos: null,
      jersey: 20
    },
    {
      id: 275,
      name: 'Joe Johnson',
      nba: { start: 2001, pro: 0, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: null, inches: null },
      weight: null,
      college: 'Arkansas',
      pos: null,
      jersey: 55
    },
    {
      id: 3252,
      name: 'Arnas Velicka',
      nba: { start: 0, pro: 0, name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '192',
      college: 'Basket Lowen Braunschweig'
    },
    {
      id: 3100,
      name: 'K.J. Lawson',
      nba: { start: 0, pro: 0,name: "Boston Celtics", nickname: "BOS"},
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'Tulane'
    },{
      id: 49,
      name: "DeAndre' Bembry",
      nba: { start: 2016, pro: 0, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: null, inches: null },
      weight: null,
      college: "St. Joseph's (PA)",
      pos: null,
      jersey: 95
    },
    {
      id: 626,
      name: 'Shaquille Harrison',
      nba: { start: 2017, pro: 0, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Tulsa',
      pos: null,
      jersey: 10
    },
    {
      id: 880,
      name: 'Edmond Sumner',
      nba: { start: 0, pro: 0, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 5
    },
    {
      id: 944,
      name: 'Bruce Brown',
      nba: { start: 2018, pro: 3, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '202',
      college: 'Miami',
      pos: 'G-F',
      jersey: 1
    },
    {
      id: 949,
      name: 'Jevon Carter',
      nba: { start: 2018, pro: 3,name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '200',
      college: 'West Virginia',
      pos: 'G',
      jersey: 5
    },
    {
      id: 983,
      name: 'Alize Johnson',
      nba: { start: 2018, pro: 3,name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '212',
      college: 'Missouri State',
      pos: 'F',
      jersey: 24
    },
    {
      id: 970,
      name: 'Wenyen Gabriel',
      nba: { start: 2019, pro: 2, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '205',
      college: 'Kentucky',
      pos: 'F',
      jersey: 35
    },
    {
      id: 1071,
      name: 'Kaiser Gates',
      nba: { start: 0, pro: 0, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '225',
      college: 'Xavier',
      pos: 'F',
      jersey: 30
    },
    {
      id: 2632,
      name: 'Reggie Perry',
      nba: { start: 2020, pro: 1,name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '250',
      college: 'Mississippi State',
      pos: 'F-C',
      jersey: null
    },
    {
      id: 1856,
      name: 'Sekou Doumbouya',
      nba: { start: 2019, pro: 2,name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '230',
      college: 'Limoges',
      pos: 'F',
      jersey: 45
    },
    {
      id: 1854,
      name: 'Nic Claxton',
      nba: { start: 2019, pro: 2,name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'Georgia',
      pos: 'F-C',
      jersey: 33
    },
    {
      id: 1899,
      name: 'Quinndary Weatherspoon',
      nba: { start: 2019, pro: 2, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '205',
      college: 'Mississippi State',
      pos: 'G',
      jersey: 15
    },
    {
      id: 2387,
      name: 'Devontae Cacok',
      nba: { start: 2019, pro: 2,name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '240',
      college: 'North Carolina-Wilmington',
      pos: 'F',
      jersey: 18
    },
    {
      id: 2391,
      name: 'Chris Silva',
      nba: { start: 2019, pro: 2,name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '234',
      college: 'South Carolina',
      pos: 'F',
      jersey: 30
    },
    {
      id: 2572,
      name: 'Jordan Bowden',
      nba: { start: 0, pro: 0, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: 'G',
      jersey: 24
    },
    {
      id: 2848,
      name: "Day'Ron Sharpe",
      nba: { start: 2021, pro: 0,name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '265',
      college: 'North Carolina',
      pos: 'F',
      jersey: 20
    },
    {
      id: 2805,
      name: 'Kessler Edwards',
      nba: { start: 2021, pro: 0,name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '203',
      college: 'Pepperdine',
      pos: 'F',
      jersey: 14
    },
    {
      id: 2855,
      name: 'Cam Thomas',
      nba: { start: 2021, pro: 0, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '210',
      college: 'Louisiana State',
      pos: 'G',
      jersey: 24
    },
    {
      id: 2804,
      name: 'David Duke Jr.',
      nba: { start: 2021, pro: 0, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '204',
      college: 'Providence',
      pos: 'G',
      jersey: 6
    },
    {
      id: 2809,
      name: 'RaiQuan Gray',
      nba: { start: 0, pro: 0,name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '269',
      college: 'Florida State',
      pos: 'F',
      jersey: null
    },
    {
      id: 3181,
      name: 'Brandon Rachal',
      nba: { start: 0, pro: 0, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Tulsa',
      pos: 'G',
      jersey: null
    },
    {
      id: 2866,
      name: 'Marcus Zegarowski',
      nba: { start: 0, pro: 0,name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '181',
      college: 'Creighton',
      pos: 'G',
      jersey: null
    },
    {
      id: 8,
      name: 'LaMarcus Aldridge',
      nba: { start: 2006, pro: 15, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '250',
      college: 'Texas-Austin',
      pos: 'C-F',
      jersey: 21
    },
    {
      id: 366,
      name: 'Paul Millsap',
      nba: { start: 2006, pro: 15,name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '257',
      college: 'Louisiana Tech',
      pos: 'F',
      jersey: 8
    },
    {
      id: 153,
      name: 'Kevin Durant',
      nba: { start: 2007, pro: 13, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '240',
      college: 'Texas-Austin',
      pos: 'F',
      jersey: 7
    },
    {
      id: 146,
      name: 'Goran Dragic',
      nba: { start: 2008, pro: 13, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Union Olimpija',
      pos: 'G',
      jersey: 9
    },
    {
      id: 208,
      name: 'Blake Griffin',
      nba: { start: 2010, pro: 11, name: "Brooklyn Nets", nickname: "BKN"  },
      height: { feets: '6', inches: '6' },
      weight: '250',
      college: 'Oklahoma',
      pos: 'F',
      jersey: 2
    },
    {
      id: 216,
      name: 'James Harden',
      nba: { start: 2009, pro: 12, name: "Brooklyn Nets", nickname: "BKN"  },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Arizona State',
      pos: 'G',
      jersey: 1
    },
    {
      id: 274,
      name: 'James Johnson',
      nba: { start: 2009, pro: 0, name: "Brooklyn Nets", nickname: "BKN"  },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Wake Forest',
      pos: null,
      jersey: 16
    },
    {
      id: 365,
      name: 'Patty Mills',
      nba: { start: 2009, pro: 12, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '180',
      college: "St.Mary's College of California",
      pos: 'G',
      jersey: 8
    },
    {
      id: 261,
      name: 'Kyrie Irving',
      nba: { start: 2011, pro: 10,name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '195',
      college: 'Duke',
      pos: 'G',
      jersey: 11
    },
    {
      id: 297,
      name: 'Brandon Knight',
      nba: { start: 2011, pro: 8, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '182',
      college: 'Kentucky',
      pos: 'G',
      jersey: 20
    },
    {
      id: 147,
      name: 'Andre Drummond',
      nba: { start: 2012, pro: 9, name: "Brooklyn Nets", nickname: "BKN"  },
      height: { feets: '6', inches: '6' },
      weight: '279',
      college: 'Connecticut',
      pos: 'C',
      jersey: null
    },
    {
      id: 160,
      name: 'James Ennis III',
      nba: { start: 2014, pro: 0, name: "Brooklyn Nets", nickname: "BKN"  },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Cal State-Long Beach',
      pos: null,
      jersey: 10
    },
    {
      id: 123,
      name: 'Seth Curry',
      nba: { start: 2013, pro: 7, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '185',
      college: 'Duke',
      pos: 'G',
      jersey: 30
    },
    {
      id: 221,
      name: 'Joe Harris',
      nba: { start: 2014, pro: 7, name: "Brooklyn Nets", nickname: "BKN" },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Virginia',
      pos: 'G-F',
      jersey: 12
    },
    {
      id: 182,
      name: 'Langston Galloway',
      nba: { start: 2014, pro: 0, name: "Brooklyn Nets", nickname: "BKN"  },
      height: { feets: null, inches: null },
      weight: null,
      college: "St. Joseph's (PA)",
      pos: null,
      jersey: 12
    },
    {
      id: 218,
      name: 'Montrezl Harrell',
      nba: { start: 2015, pro: 6, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '240',
      college: 'Louisville',
      pos: 'F-C',
      jersey: 8
    },
    {
      id: 407,
      name: 'Kelly Oubre Jr.',
      nba: { start: 2015, pro: 6, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '203',
      college: 'Kansas',
      pos: 'F-G',
      jersey: 12
    },
    {
      id: 458,
      name: 'Terry Rozier',
      nba: { start: 2015, pro: 6, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Louisville',
      pos: 'G',
      jersey: 3
    },
    {
      id: 802,
      name: 'Wes Iwundu',
      nba: { start: 2017, pro: 0, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Kansas State',
      pos: null,
      jersey: 24
    },
    {
      id: 941,
      name: 'Miles Bridges',
      nba: { start: 2018, pro: 3, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '225',
      college: 'Michigan State',
      pos: 'F',
      jersey: null
    },
    {
      id: 1879,
      name: 'Cody Martin',
      nba: { start: 2019, pro: 2, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '205',
      college: 'Nevada-Reno',
      pos: 'F',
      jersey: 11
    },
    {
      id: 1897,
      name: 'P.J. Washington',
      nba: { start: 2019, pro: 2, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '230',
      college: 'Kentucky',
      pos: 'F',
      jersey: 25
    },
    {
      id: 2567,
      name: 'LiAngelo Ball',
      nba: { start: 0, pro: 0, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: 'G',
      jersey: 34
    },
    {
      id: 1482,
      name: 'Arnoldas Kulboka',
      nba: { start: 2021, pro: 0, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '209',
      college: 'Bilbao',
      pos: 'F',
      jersey: 98
    },
    {
      id: 1880,
      name: 'Jalen McDaniels',
      nba: { start: 2019, pro: 2, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '205',
      college: 'San Diego State',
      pos: 'F-C',
      jersey: 6
    },
    {
      id: 3272,
      name: 'Kenny Williams',
      nba: { start: 0, pro: 0, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '185',
      college: 'North Carolina'
    },
    {
      id: 2566,
      name: 'LaMelo Ball',
      nba: { start: 2020, pro: 1, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '180',
      college: 'Illawarra',
      pos: 'G',
      jersey: 2
    },
    {
      id: 2574,
      name: 'Vernon Carey Jr.',
      nba: { start: 2020, pro: 1, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '270',
      college: 'Duke',
      pos: 'F-C',
      jersey: 22
    },
    {
      id: 2640,
      name: 'Grant Riller',
      nba: { start: 2020, pro: 1, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'College of Charleston',
      pos: 'G',
      jersey: 5
    },
    {
      id: 2639,
      name: 'Nick Richards',
      nba: { start: 2020, pro: 1, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '7', inches: '7' },
      weight: '245',
      college: 'Kentucky',
      pos: 'C',
      jersey: 14
    },
    {
      id: 2645,
      name: 'Xavier Sneed',
      nba: { start: 2021, pro: 0, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'Kansas State',
      pos: 'F',
      jersey: 19
    },
    {
      id: 2823,
      name: 'Kai Jones',
      nba: { start: 2021, pro: 0, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '221',
      college: 'Texas-Austin',
      pos: 'C-F',
      jersey: 23
    },
    {
      id: 2793,
      name: 'James Bouknight',
      nba: { start: 2021, pro: 0, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Connecticut',
      pos: 'G',
      jersey: 5
    },
    {
      id: 2856,
      name: 'JT Thor',
      nba: { start: 2021, pro: 0, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '203',
      college: 'Auburn',
      pos: 'F',
      jersey: 21
    },
    {
      id: 2828,
      name: 'Scottie Lewis',
      nba: { start: 2021, pro: 0, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '185',
      college: 'Florida',
      pos: 'G',
      jersey: 16
    },
    {
      id: 2797,
      name: 'D.J. Carton',
      nba: { start: 0, pro: 0, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '200',
      college: 'Marquette',
      pos: 'G',
      jersey: null
    },
    {
      id: 2990,
      name: 'Jalen Crutcher',
      nba: { start: 0, pro: 0, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '175',
      college: 'Dayton',
      pos: 'G',
      jersey: null
    },
    {
      id: 3376,
      name: 'Cameron McGriff',
      nba: { start: 2021, pro: 0, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Oklahoma State',
      pos: null,
      jersey: 8
    },
    {
      id: 3238,
      name: 'JT Thor',
      nba: { start: 0, pro: 0, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: null, inches: null },
      weight: null,
      college: null
    },
    {
      id: 227,
      name: 'Gordon Hayward',
      nba: { start: 2010, pro: 11, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '225',
      college: 'Butler',
      pos: 'F',
      jersey: 20
    },
    {
      id: 488,
      name: 'Ish Smith',
      nba: { start: 2010, pro: 11, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '175',
      college: 'Wake Forest',
      pos: 'G',
      jersey: 4
    },
    {
      id: 510,
      name: 'Isaiah Thomas',
      nba: { start: 2011, pro: 10, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '5', inches: '5' },
      weight: '185',
      college: 'Washington',
      pos: 'G',
      jersey: 4
    },
    {
      id: 426,
      name: 'Mason Plumlee',
      nba: { start: 2013, pro: 8, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '254',
      college: 'Duke',
      pos: 'F-C',
      jersey: 24
    },
    {
      id: 3110,
      name: 'Denzel Mahoney',
      nba: { start: 0, pro: 0, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Creighton'
    },
    {
      id: 3131,
      name: 'Cameron McGriff',
      nba: { start: 0, pro: 0, name: "Charlotte Hornets", nickname: "CHA" },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Oklahoma State'
    },
    {
      id: 257,
      name: 'Ersan Ilyasova',
      nba: { start: 0, pro: 0, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 77
    },
    {
      id: 276,
      name: 'Stanley Johnson',
      nba: { start: 2015, pro: 6, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '242',
      college: 'Arizona',
      pos: 'F-G',
      jersey: 14
    },
    {
      id: 283,
      name: 'Derrick Jones Jr.',
      nba: { start: 2016, pro: 5, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '210',
      college: 'UNLV',
      pos: 'F',
      jersey: 5
    },
    {
      id: 631,
      name: 'Alex Caruso',
      nba: { start: 2017, pro: 4, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '186',
      college: 'Texas A&M',
      pos: 'G',
      jersey: 6
    },
    {
      id: 835,
      name: 'Alfonzo McKinnie',
      nba: { start: 2017, pro: 0, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Wisc.-Green Bay',
      pos: null,
      jersey: 28
    },
    {
      id: 735,
      name: 'Lonzo Ball',
      nba: { start: 2017, pro: 4, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'UCLA',
      pos: 'G',
      jersey: 2
    },
    {
      id: 738,
      name: 'Jordan Bell',
      nba: { start: 2017, pro: 4, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '216',
      college: 'Oregon',
      pos: 'F',
      jersey: 20
    },
    {
      id: 748,
      name: 'Tony Bradley',
      nba: { start: 2017, pro: 4, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '248',
      college: 'North Carolina',
      pos: 'C-F',
      jersey: 13
    },
    {
      id: 945,
      name: 'Troy Brown Jr.',
      nba: { start: 2018, pro: 3, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'Oregon',
      pos: 'G-F',
      jersey: 7
    },
    {
      id: 983,
      name: 'Alize Johnson',
      nba: { start: 2018, pro: 3, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '212',
      college: 'Missouri State',
      pos: 'F',
      jersey: 24
    },
    {
      id: 1019,
      name: 'Jerome Robinson',
      nba: { start: 2018, pro: 0, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Boston College',
      pos: null,
      jersey: 12
    },
    {
      id: 1028,
      name: 'Omari Spellman',
      nba: { start: 0, pro: 0, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 2
    },
    {
      id: 2166,
      name: 'Tyler Cook',
      nba: { start: 2019, pro: 2, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '245',
      college: 'Iowa',
      pos: 'F',
      jersey: 25
    },
    {
      id: 921,
      name: 'Jaylen Adams',
      nba: { start: 2018, pro: 0, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: null, inches: null },
      weight: null,
      college: 'St. Bonaventure',
      pos: null,
      jersey: 6
    },
    {
      id: 1900,
      name: 'Coby White',
      nba: { start: 2019, pro: 2, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '195',
      college: 'North Carolina',
      pos: 'G',
      jersey: null
    },
    {
      id: 2582,
      name: 'Devon Dotson',
      nba: { start: 2020, pro: 1, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '185',
      college: 'Kansas',
      pos: 'G',
      jersey: 3
    },
    {
      id: 1993,
      name: 'Simisola Shittu',
      nba: { start: 0, pro: 0, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 11
    },
    {
      id: 2423,
      name: 'Matt Thomas',
      nba: { start: 2019, pro: 2, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Iowa State',
      pos: 'G',
      jersey: 21
    },
    {
      id: 2404,
      name: 'Javonte Green',
      nba: { start: 2019, pro: 2, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '205',
      college: 'Radford',
      pos: 'G-F',
      jersey: 24
    },
    {
      id: 2664,
      name: 'Patrick Williams',
      nba: { start: 2020, pro: 1, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'Florida State',
      pos: 'F',
      jersey: 44
    },
    {
      id: 2631,
      name: 'Daniel Oturu',
      nba: { start: 2020, pro: 1, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '240',
      college: 'Minnesota',
      pos: 'C',
      jersey: 10
    },
    {
      id: 2570,
      name: 'Tyler Bey',
      nba: { start: 2020, pro: 1, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'Colorado',
      pos: 'F',
      jersey: 2
    },
    {
      id: 2802,
      name: 'Ayo Dosunmu',
      nba: { start: 2021, pro: 0, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '200',
      college: 'Illinois',
      pos: 'G',
      jersey: 12
    },
    {
      id: 2643,
      name: 'Marko Simonovic',
      nba: { start: 2021, pro: 0, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Mega Basket',
      pos: 'C',
      jersey: 19
    },
    {
      id: 2833,
      name: 'Mac McClung',
      nba: { start: 2021, pro: 0, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '185',
      college: 'Texas Tech',
      pos: 'G',
      jersey: 37
    },
    {
      id: 2992,
      name: 'Ryan Daly',
      nba: { start: 0, pro: 0, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '225',
      college: "St. Joseph's (PA)"
    },
    {
      id: 3237,
      name: 'Ethan Thompson',
      nba: { start: 0, pro: 0, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '195',
      college: 'Oregon State',
      pos: 'G',
      jersey: 15
    },
    {
      id: 3380,
      name: 'Malcolm Hill',
      nba: { start: 2021, pro: 0, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Illinois',
      pos: 'F',
      jersey: 14
    },
    {
      id: 136,
      name: 'DeMar DeRozan',
      nba: { start: 2009, pro: 12, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Southern California',
      pos: 'G-F',
      jersey: 11
    },
    {
      id: 515,
      name: 'Tristan Thompson',
      nba: { start: 2011, pro: 10, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '254',
      college: 'Texas-Austin',
      pos: 'C-F',
      jersey: 3
    },
    {
      id: 534,
      name: 'Nikola Vucevic',
      nba: { start: 2011, pro: 10, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '260',
      college: 'Southern California',
      pos: 'C',
      jersey: 9
    },
    {
      id: 308,
      name: 'Zach LaVine',
      nba: { start: 2014, pro: 7, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '200',
      college: 'UCLA',
      pos: 'G-F',
      jersey: 8
    },
    {
      id: 3115,
      name: 'Sterling Manley',
      nba: { start: 0, pro: 0, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '250',
      college: 'North Carolina'
    },
    {
      id: 2954,
      name: 'Troy Baxter Jr.',
      nba: { start: 0, pro: 0, name: "Chicago Bulls", nickname: "CHI" },
      height: { feets: '6', inches: '6' },
      weight: '200',
      college: 'Morgan State'
    }, {
      id: 17,
      name: 'Justin Anderson',
      nba: { start: 2015, pro: 5, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '231',
      college: 'Virginia',
      pos: 'F-G',
      jersey: 10
    },
    {
      id: 854,
      name: 'Cedi Osman',
      nba: { start: 2017, pro: 4, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '230',
      college: 'Anadolu Efes',
      pos: 'F',
      jersey: 16
    },
    {
      id: 317,
      name: 'Caris LeVert',
      nba: { start: 2016, pro: 5, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '205',
      college: 'Michigan',
      pos: 'G',
      jersey: 3
    },
    {
      id: 526,
      name: 'Denzel Valentine',
      nba: { start: 2016, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Michigan State',
      pos: null,
      jersey: 15
    },
    {
      id: 830,
      name: 'Lauri Markkanen',
      nba: { start: 2017, pro: 4, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '240',
      college: 'Arizona',
      pos: 'F-C',
      jersey: 24
    },
    {
      id: 727,
      name: 'Jarrett Allen',
      nba: { start: 2017, pro: 4, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '243',
      college: 'Texas-Austin',
      pos: 'C',
      jersey: 31
    },
    {
      id: 819,
      name: 'Luke Kornet',
      nba: { start: 2017, pro: 4, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '7', inches: '7' },
      weight: '250',
      college: 'Vanderbilt',
      pos: 'C-F',
      jersey: 40
    },
    {
      id: 1863,
      name: 'Jaylen Hands',
      nba: { start: 0, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: 'G',
      jersey: null
    },
    {
      id: 1057,
      name: 'Malik Newman',
      nba: { start: 2019, pro: 1, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Kansas',
      pos: 'G',
      jersey: 14
    },
    {
      id: 1021,
      name: 'Collin Sexton',
      nba: { start: 2018, pro: 3, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Alabama',
      pos: 'G',
      jersey: 2
    },
    {
      id: 937,
      name: 'Trevon Bluiett',
      nba: { start: 0, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 6
    },
    {
      id: 1063,
      name: 'Brandon Goodwin',
      nba: { start: 2018, pro: 3, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '180',
      college: 'Florida Gulf Coast',
      pos: 'G',
      jersey: null
    },
    {
      id: 2042,
      name: 'Tacko Fall',
      nba: { start: 0, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 99
    },
    {
      id: 1860,
      name: 'Darius Garland',
      nba: { start: 2019, pro: 2, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '192',
      college: 'Vanderbilt',
      pos: 'G',
      jersey: 10
    },
    {
      id: 2160,
      name: 'Moses Brown',
      nba: { start: 0, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: 'C',
      jersey: 6
    },
    {
      id: 1861,
      name: 'Kyle Guy',
      nba: { start: 2019, pro: 2, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '167',
      college: 'Virginia',
      pos: 'G',
      jersey: 5
    },
    {
      id: 1873,
      name: 'Mfiondu Kabengele',
      nba: { start: 2019, pro: 2, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '250',
      college: 'Florida State',
      pos: 'F-C',
      jersey: 27
    },
    {
      id: 1903,
      name: 'Dylan Windler',
      nba: { start: 2020, pro: 1, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '196',
      college: 'Belmont',
      pos: 'G-F',
      jersey: 9
    },
    {
      id: 1869,
      name: 'Justin James',
      nba: { start: 0, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 21
    },
    {
      id: 2392,
      name: 'Dean Wade',
      nba: { start: 2019, pro: 2, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '228',
      college: 'Kansas State',
      pos: 'F-C',
      jersey: 32
    },
    {
      id: 2630,
      name: 'Isaac Okoro',
      nba: { start: 2020, pro: 1, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '225',
      college: 'Auburn',
      pos: 'F-G',
      jersey: 35
    },
    {
      id: 2647,
      name: 'Lamar Stevens',
      nba: { start: 2020, pro: 1, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '230',
      college: 'Penn State',
      pos: 'F',
      jersey: 8
    },
    {
      id: 2654,
      name: 'Brodric Thomas',
      nba: { start: 2020, pro: 1, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '185',
      college: 'Truman State',
      pos: 'G',
      jersey: 97
    },
    {
      id: 2679,
      name: 'Trevon Scott',
      nba: { start: 2021, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Cincinnati',
      pos: null,
      jersey: 15
    },
    {
      id: 3195,
      name: 'Matt Ryan',
      nba: { start: 2021, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'Tennessee-Chattanooga',
      pos: 'F',
      jersey: null
    },
    {
      id: 2835,
      name: 'Evan Mobley',
      nba: { start: 2021, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'Southern California',
      pos: 'C',
      jersey: 4
    },
    {
      id: 2901,
      name: 'RJ Nembhard Jr.',
      nba: { start: 2021, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '200',
      college: 'TCU',
      pos: 'G',
      jersey: 5
    },
    {
      id: 2948,
      name: 'Mitch Ballock',
      nba: { start: 0, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '205',
      college: 'Creighton',
      pos: 'G',
      jersey: null
    },
    {
      id: 3363,
      name: 'Kevin Pangos',
      nba: { start: 2021, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Gonzaga',
      pos: null,
      jersey: 6
    },
    {
      id: 455,
      name: 'Rajon Rondo',
      nba: { start: 2006, pro: 15, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '180',
      college: 'Kentucky',
      pos: 'G',
      jersey: 1
    },
    {
      id: 326,
      name: 'Kevin Love',
      nba: { start: 2008, pro: 13, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '251',
      college: 'UCLA',
      pos: 'F-C',
      jersey: null
    },
    {
      id: 459,
      name: 'Ricky Rubio',
      nba: { start: 2011, pro: 10, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'FC Barcelona',
      pos: 'G',
      jersey: 99
    },
    {
      id: 128,
      name: 'Ed Davis',
      nba: { start: 2010, pro: 11, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '218',
      college: 'North Carolina',
      pos: 'C-F',
      jersey: 21
    },
    {
      id: 179,
      name: 'Tim Frazier',
      nba: { start: 2014, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Penn State',
      pos: null,
      jersey: 12
    },
    {
      id: 3056,
      name: 'Sehmus Hazer',
      nba: { start: 0, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Besiktas Sompo Japan'
    },
    {
      id: 3198,
      name: 'Tre Scott',
      nba: { start: 0, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '225',
      college: 'Cincinnati'
    },
    {
      id: 3251,
      name: 'Chandler Vaudrin',
      nba: { start: 0, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '210',
      college: 'Winthrop'
    },
    {
      id: 2950,
      name: 'James Banks III',
      nba: { start: 0, pro: 0, name: "Cleveland Cavaliers", nickname: "CLE" },
      height: { feets: '6', inches: '6' },
      weight: '250',
      college: 'Georgia Tech'
    },{
      id: 97,
      name: 'Willie Cauley-Stein',
      nba: { start: 2015, pro: 0, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Kentucky',
      pos: null,
      jersey: null
    },
    {
      id: 337,
      name: 'Boban Marjanovic',
      nba: { start: 2015, pro: 6, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '7', inches: '7' },
      weight: '290',
      college: 'Crvena zvezda',
      pos: 'C',
      jersey: 51
    },
    {
      id: 104,
      name: 'Marquese Chriss',
      nba: { start: 2016, pro: 5, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '240',
      college: 'Washington',
      pos: 'F',
      jersey: 35
    },
    {
      id: 175,
      name: 'Dorian Finney-Smith',
      nba: { start: 2016, pro: 5, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Florida',
      pos: 'F',
      jersey: 10
    },
    {
      id: 850,
      name: 'Frank Ntilikina',
      nba: { start: 2017, pro: 4, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '200',
      college: 'Strasbourg IG',
      pos: 'G',
      jersey: 21
    },
    {
      id: 751,
      name: 'Sterling Brown',
      nba: { start: 2017, pro: 4, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '219',
      college: 'Southern Methodist',
      pos: 'G-F',
      jersey: null
    },
    {
      id: 817,
      name: 'Maxi Kleber',
      nba: { start: 2017, pro: 4, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '240',
      college: 'Bayern Munich',
      pos: 'F',
      jersey: 42
    },
    {
      id: 946,
      name: 'Jalen Brunson',
      nba: { start: 2018, pro: 3, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Villanova',
      pos: 'G',
      jersey: 13
    },
    {
      id: 986,
      name: 'George King',
      nba: { start: 2018, pro: 1, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Colorado Boulder',
      pos: 'F-G',
      jersey: 8
    },
    {
      id: 963,
      name: 'Luka Doncic',
      nba: { start: 2018, pro: 3, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '230',
      college: 'Real Madrid',
      pos: 'F-G',
      jersey: 77
    },
    {
      id: 1013,
      name: 'Theo Pinson',
      nba: { start: 2018, pro: 3, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '212',
      college: 'North Carolina',
      pos: 'G-F',
      jersey: 1
    },
    {
      id: 2011,
      name: 'Robert Franks',
      nba: { start: 2020, pro: 1, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '225',
      college: 'Washington State',
      pos: null,
      jersey: null
    },
    {
      id: 2160,
      name: 'Moses Brown',
      nba: { start: 0, pro: 0, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: 'C',
      jersey: 6
    },
    {
      id: 2111,
      name: 'Charlie Brown Jr.',
      nba: { start: 2019, pro: 2, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '199',
      college: "St. Joseph's (PA)",
      pos: 'G',
      jersey: 16
    },
    {
      id: 2439,
      name: 'Tariq Owens',
      nba: { start: 0, pro: 1, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '205',
      college: 'Texas Tech',
      pos: 'F',
      jersey: 41
    },
    {
      id: 2652,
      name: 'Tyrell Terry',
      nba: { start: 2020, pro: 1, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '160',
      college: 'Stanford',
      pos: 'G',
      jersey: 3
    },
    {
      id: 2593,
      name: 'Josh Green',
      nba: { start: 2020, pro: 1, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '200',
      college: 'Arizona',
      pos: 'G',
      jersey: 8
    },
    {
      id: 2672,
      name: 'Nate Hinton',
      nba: { start: 2020, pro: 1, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '210',
      college: 'Houston',
      pos: 'G-F',
      jersey: 14
    },
    {
      id: 2684,
      name: 'Devonte Patterson',
      nba: { start: 0, pro: 0, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: 'F',
      jersey: null
    },
    {
      id: 3278,
      name: 'Moses Wright',
      nba: { start: 2021, pro: 0, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '233',
      college: 'Georgia Tech',
      pos: 'F',
      jersey: 5
    },
    {
      id: 3160,
      name: 'EJ Onu',
      nba: { start: 0, pro: 0, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '240',
      college: 'Shawnee State',
      pos: 'F',
      jersey: null
    },
    {
      id: 2895,
      name: 'JaQuori McLaughlin',
      nba: { start: 2021, pro: 0, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Cal-Santa Barbara',
      pos: 'G',
      jersey: null
    },
    {
      id: 3067,
      name: 'Feron Hunt',
      nba: { start: 2021, pro: 0, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '195',
      college: 'Southern Methodist',
      pos: 'F',
      jersey: 11
    },
    {
      id: 3081,
      name: 'Carlik Jones',
      nba: { start: 2021, pro: 0, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '185',
      college: 'Louisville',
      pos: 'G',
      jersey: null
    },
    {
      id: 2838,
      name: 'Eugene Omoruyi',
      nba: { start: 2021, pro: 0, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '235',
      college: 'Oregon',
      pos: 'F',
      jersey: null
    },
    {
      id: 3203,
      name: 'Devontae Shuler',
      nba: { start: 0, pro: 0, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '185',
      college: 'Mississippi',
      pos: 'G',
      jersey: null
    },
    {
      id: 297,
      name: 'Brandon Knight',
      nba: { start: 2011, pro: 8, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '182',
      college: 'Kentucky',
      pos: 'G',
      jersey: 20
    },
    {
      id: 52,
      name: 'Davis Bertans',
      nba: { start: 2016, pro: 5, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '225',
      college: 'Baskonia',
      pos: 'F',
      jersey: 44
    },
    {
      id: 510,
      name: 'Isaiah Thomas',
      nba: { start: 2011, pro: 10, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '5', inches: '5' },
      weight: '185',
      college: 'Washington',
      pos: 'G',
      jersey: 4
    },
    {
      id: 82,
      name: 'Reggie Bullock',
      nba: { start: 2013, pro: 8, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '205',
      college: 'North Carolina',
      pos: 'G-F',
      jersey: 25
    },
    {
      id: 215,
      name: 'Tim Hardaway Jr.',
      nba: { start: 2013, pro: 8, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '205',
      college: 'Michigan',
      pos: 'G-F',
      jersey: 11
    },
    {
      id: 83,
      name: 'Trey Burke',
      nba: { start: 2013, pro: 8, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '185',
      college: 'Michigan',
      pos: 'G',
      jersey: 3
    },
    {
      id: 142,
      name: 'Spencer Dinwiddie',
      nba: { start: 2014, pro: 7, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'Colorado',
      pos: 'G',
      jersey: 26
    },
    {
      id: 433,
      name: 'Dwight Powell',
      nba: { start: 2014, pro: 7, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '240',
      college: 'Stanford',
      pos: 'F-C',
      jersey: 7
    },
    {
      id: 432,
      name: 'Kristaps Porzingis',
      nba: { start: 2015, pro: 5, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '7', inches: '7' },
      weight: '240',
      college: 'Cajasol Sevilla',
      pos: 'F-C',
      jersey: 6
    },
    {
      id: 3018,
      name: 'LJ Figueroa',
      nba: { start: 0, pro: 0, name: "Dallas Mavericks", nickname: "DAL" },
      height: { feets: '6', inches: '6' },
      weight: '195',
      college: 'Oregon'
    },
    {
      id: 383,
      name: 'Jamal Murray',
      nba: { start: 2016, pro: 5, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'Kentucky',
      pos: 'G',
      jersey: 27
    },
    {
      id: 787,
      name: 'Daniel Hamilton',
      nba: { start: 0, pro: 0, team: 9 },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 5
    },
    {
      id: 1341,
      name: 'Petr Cornelie',
      nba: { start: 0, pro: 0, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: null,
      pos: null,
      jersey: 21
    },
    {
      id: 176,
      name: 'Bryn Forbes',
      nba: { start: 2016, pro: 5, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '205',
      college: 'Michigan State',
      pos: 'G',
      jersey: 6
    },
    {
      id: 1398,
      name: 'Josh Gray',
      nba: { start: 2017, pro: 2, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '180',
      college: 'Louisiana State',
      pos: 'G',
      jersey: 5
    },
    {
      id: 770,
      name: 'P.J. Dozier',
      nba: { start: 2017, pro: 4, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '205',
      college: 'South Carolina',
      pos: 'G-F',
      jersey: null
    },
    {
      id: 845,
      name: 'Monte Morris',
      nba: { start: 2017, pro: 4, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '183',
      college: 'Iowa State',
      pos: 'G',
      jersey: 11
    },
    {
      id: 1312,
      name: 'Vlatko Cancar',
      nba: { start: 0, pro: 0, team: 9 },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: 'F',
      jersey: 31
    },
    {
      id: 865,
      name: 'Davon Reed',
      nba: { start: 2017, pro: 2, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '206',
      college: 'Miami',
      pos: 'G',
      jersey: 9
    },
    {
      id: 1014,
      name: 'Michael Porter Jr.',
      nba: { start: 2019, pro: 2, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '218',
      college: 'Missouri',
      pos: 'F',
      jersey: 1
    },
    {
      id: 2546,
      name: 'Matur Maker',
      nba: { start: 0, pro: 0, team: 9 },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 5
    },
    {
      id: 2077,
      name: 'Zylan Cheatham',
      nba: { start: 2019, pro: 1, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Arizona State',
      pos: 'F',
      jersey: 45
    },
    {
      id: 1849,
      name: 'Bol Bol',
      nba: { start: 2019, pro: 2, team: 9 },
      height: { feets: '7', inches: '7' },
      weight: '220',
      college: 'Oregon',
      pos: 'C-F',
      jersey: 10
    },
    {
      id: 2152,
      name: 'Rayjon Tucker',
      nba: { start: 2019, pro: 2, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '209',
      college: 'Arkansas-Little Rock',
      pos: 'G',
      jersey: 59
    },
    {
      id: 2627,
      name: 'Zeke Nnaji',
      nba: { start: 2020, pro: 1, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '240',
      college: 'Arizona',
      pos: 'F-C',
      jersey: 22
    },
    {
      id: 2601,
      name: 'Markus Howard',
      nba: { start: 2020, pro: 1, team: 9 },
      height: { feets: '5', inches: '5' },
      weight: '175',
      college: 'Marquette',
      pos: 'G',
      jersey: null
    },
    {
      id: 2573,
      name: 'Facundo Campazzo',
      nba: { start: 2020, pro: 1, team: 9 },
      height: { feets: '5', inches: '5' },
      weight: '195',
      college: 'Murcia',
      pos: 'G',
      jersey: 7
    },
    {
      id: 3031,
      name: 'Eugene German',
      nba: { start: 0, pro: 0, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '185',
      college: 'Northern Illinois'
    },
    {
      id: 3195,
      name: 'Matt Ryan',
      nba: { start: 2021, pro: 0, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'Tennessee-Chattanooga',
      pos: 'F',
      jersey: null
    },
    {
      id: 2816,
      name: 'Bones Hyland',
      nba: { start: 2021, pro: 0, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '169',
      college: 'Virginia Commonwealth',
      pos: 'G',
      jersey: 3
    },
    {
      id: 3081,
      name: 'Carlik Jones',
      nba: { start: 2021, pro: 0, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '185',
      college: 'Louisville',
      pos: 'G',
      jersey: null
    },
    {
      id: 3379,
      name: 'Giorgi Bezhanishvili',
      nba: { start: 0, pro: 0, team: 9 },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 17
    },
    {
      id: 207,
      name: 'Jeff Green',
      nba: { start: 2007, pro: 13, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '235',
      college: 'Georgetown',
      pos: 'F',
      jersey: 32
    },
    {
      id: 117,
      name: 'DeMarcus Cousins',
      nba: { start: 2010, pro: 10, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '270',
      college: 'Kentucky',
      pos: 'C',
      jersey: 4
    },
    {
      id: 448,
      name: 'Austin Rivers',
      nba: { start: 2012, pro: 9, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '200',
      college: 'Duke',
      pos: 'G',
      jersey: 25
    },
    {
      id: 38,
      name: 'Will Barton',
      nba: { start: 2012, pro: 9, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '181',
      college: 'Memphis',
      pos: 'G',
      jersey: 5
    },
    {
      id: 206,
      name: 'JaMychal Green',
      nba: { start: 2014, pro: 7, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '227',
      college: 'Alabama',
      pos: 'F-C',
      jersey: null
    },
    {
      id: 160,
      name: 'James Ennis III',
      nba: { start: 2014, pro: 0, team: 9 },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Cal State-Long Beach',
      pos: null,
      jersey: 10
    },
    {
      id: 106,
      name: 'Semaj Christon',
      nba: { start: 2016, pro: 0, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Xavier',
      pos: 'G',
      jersey: 6
    },
    {
      id: 2976,
      name: 'Deonte Burton',
      nba: { start: 0, pro: 2, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '240',
      college: 'Nevada'
    },
    {
      id: 195,
      name: 'Aaron Gordon',
      nba: { start: 2014, pro: 7, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '235',
      college: 'Arizona',
      pos: 'F',
      jersey: 50
    },
    {
      id: 279,
      name: 'Nikola Jokic',
      nba: { start: 2015, pro: 6, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '284',
      college: 'Mega Basket',
      pos: 'C',
      jersey: 15
    },
    {
      id: 56,
      name: 'Tarik Black',
      nba: { start: 2014, pro: 4, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '260',
      college: 'Kansas',
      pos: 'F',
      jersey: 28
    },
    {
      id: 2936,
      name: 'Caleb Agada',
      nba: { start: 0, pro: 0, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '209',
      college: 'Hapoel Beer Sheva'
    },
    {
      id: 2959,
      name: 'Giorgi Bezhanishvili',
      nba: { start: 0, pro: 0, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '235',
      college: 'Illinois'
    },
    {
      id: 2960,
      name: 'Chudier Bile',
      nba: { start: 0, pro: 0, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '195',
      college: 'Georgetown'
    },
    {
      id: 2975,
      name: 'Jason Burnell',
      nba: { start: 0, pro: 0, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Jacksonville State'
    },
    {
      id: 3139,
      name: 'Steffon Mitchell',
      nba: { start: 0, pro: 0, team: 9 },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Boston College'
    },
    {
      id: 331,
      name: 'Trey Lyles',
      nba: { start: 2015, pro: 6, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '234',
      college: 'Kentucky',
      pos: 'F',
      jersey: 41
    },
    {
      id: 138,
      name: 'Cheick Diallo',
      nba: { start: 2016, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Kansas',
      pos: null,
      jersey: null
    },
    {
      id: 805,
      name: 'Josh Jackson',
      nba: { start: 2017, pro: 4, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '207',
      college: 'Kansas',
      pos: 'G-F',
      jersey: 55
    },
    {
      id: 804,
      name: 'Frank Jackson',
      nba: { start: 2018, pro: 3, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '205',
      college: 'Duke',
      pos: 'G',
      jersey: 5
    },
    {
      id: 894,
      name: 'Derrick Walton Jr.',
      nba: { start: 2017, pro: 2, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '185',
      college: 'Michigan',
      pos: 'G',
      jersey: 10
    },
    {
      id: 931,
      name: 'Marvin Bagley III',
      nba: { start: 2018, pro: 3, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '235',
      college: 'Duke',
      pos: 'F',
      jersey: 35
    },
    {
      id: 960,
      name: 'Hamidou Diallo',
      nba: { start: 2018, pro: 3, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '202',
      college: 'Kentucky',
      pos: 'G',
      jersey: 6
    },
    {
      id: 1857,
      name: 'Carsen Edwards',
      nba: { start: 2019, pro: 2, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '5', inches: '5' },
      weight: '200',
      college: 'Purdue',
      pos: 'G',
      jersey: 4
    },
    {
      id: 2166,
      name: 'Tyler Cook',
      nba: { start: 2019, pro: 2, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '245',
      college: 'Iowa',
      pos: 'F',
      jersey: 25
    },
    {
      id: 3401,
      name: 'Trayvon Palmer',
      nba: { start: 2021, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Chicago St.',
      pos: null,
      jersey: 99
    },
    {
      id: 2207,
      name: 'Justin Robinson',
      nba: { start: 2019, pro: 2, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '195',
      college: 'Virginia Tech',
      pos: 'G',
      jersey: 55
    },
    {
      id: 1856,
      name: 'Sekou Doumbouya',
      nba: { start: 2019, pro: 2, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '230',
      college: 'Limoges',
      pos: 'F',
      jersey: 45
    },
    {
      id: 1894,
      name: 'Deividas Sirvydis',
      nba: { start: 2020, pro: 1, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Lietuvos rytas Vilnius',
      pos: 'F-G',
      jersey: 91
    },
    {
      id: 3403,
      name: 'Jaysean Paige',
      nba: { start: 2021, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: null, inches: null },
      weight: null,
      college: 'West Virginia',
      pos: null,
      jersey: 42
    },
    {
      id: 2599,
      name: 'Killian Hayes',
      nba: { start: 2020, pro: 1, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '195',
      college: 'Ratiopharm Ulm',
      pos: 'G',
      jersey: 7
    },
    {
      id: 2569,
      name: 'Saddiq Bey',
      nba: { start: 2020, pro: 1, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'Villanova',
      pos: 'F',
      jersey: 41
    },
    {
      id: 2648,
      name: 'Isaiah Stewart',
      nba: { start: 2020, pro: 1, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '250',
      college: 'Washington',
      pos: 'F-C',
      jersey: 28
    },
    {
      id: 2646,
      name: 'Cassius Stanley',
      nba: { start: 2020, pro: 1, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Duke',
      pos: 'G',
      jersey: 2
    },
    {
      id: 2610,
      name: 'Saben Lee',
      nba: { start: 2020, pro: 1, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '183',
      college: 'Vanderbilt',
      pos: 'G',
      jersey: 38
    },
    {
      id: 3091,
      name: 'Braxton Key',
      nba: { start: 2021, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '225',
      college: 'Virginia',
      pos: 'F',
      jersey: 17
    },
    {
      id: 2807,
      name: 'Luka Garza',
      nba: { start: 2021, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '243',
      college: 'Iowa',
      pos: 'C',
      jersey: 55
    },
    {
      id: 2829,
      name: 'Isaiah Livers',
      nba: { start: 2021, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '232',
      college: 'Michigan',
      pos: 'F',
      jersey: 12
    },
    {
      id: 2801,
      name: 'Cade Cunningham',
      nba: { start: 2021, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Oklahoma State',
      pos: 'G',
      jersey: 2
    },
    {
      id: 2850,
      name: 'Chris Smith',
      nba: { start: 0, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'UCLA',
      pos: 'F',
      jersey: null
    },
    {
      id: 2840,
      name: 'Jamorko Pickett',
      nba: { start: 2021, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '206',
      college: 'Georgetown',
      pos: 'F',
      jersey: 24
    },
    {
      id: 3358,
      name: 'Micah Potter',
      nba: { start: 2021, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: null, inches: null },
      weight: null,
      college: 'Wisconsin',
      pos: null,
      jersey: 19
    },
    {
      id: 3095,
      name: 'Balsa Koprivica',
      nba: { start: 0, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: null, inches: null },
      weight: null,
      college: null
    },
    {
      id: 287,
      name: 'Cory Joseph',
      nba: { start: 2011, pro: 10, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '200',
      college: 'Texas-Austin',
      pos: 'G',
      jersey: 18
    },
    {
      id: 3371,
      name: 'Jared Cunningham',
      nba: { start: 0, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 14
    },
    {
      id: 404,
      name: 'Kelly Olynyk',
      nba: { start: 2013, pro: 8, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '240',
      college: 'Gonzaga',
      pos: 'F-C',
      jersey: 13
    },
    {
      id: 700,
      name: 'Grant Jerrett',
      nba: { start: 0, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 34
    },
    {
      id: 354,
      name: 'Rodney McGruder',
      nba: { start: 2016, pro: 5, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '205',
      college: 'Kansas State',
      pos: 'G',
      jersey: 17
    },
    {
      id: 200,
      name: 'Jerami Grant',
      nba: { start: 2014, pro: 7, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '210',
      college: 'Syracuse',
      pos: 'F',
      jersey: 9
    },
    {
      id: 3025,
      name: 'Blake Francis',
      nba: { start: 0, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '175',
      college: 'Richmond'
    },
    {
      id: 3105,
      name: 'Spencer Littleson',
      nba: { start: 0, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '200',
      college: 'Toledo'
    },
    {
      id: 3172,
      name: 'Jamorko Pickett',
      nba: { start: 0, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '198',
      college: 'Georgetown'
    },
    {
      id: 3228,
      name: 'Anthony Tarke',
      nba: { start: 0, pro: 0, name: "Detroit Pistons", nickname: "DET" },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Coppin State'
    },
    {
      id: 322,
      name: 'Kevon Looney',
      nba: { start: 2015, pro: 6, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '222',
      college: 'UCLA',
      pos: 'F',
      jersey: 5
    },
    {
      id: 593,
      name: 'Gary Payton II',
      nba: { start: 2016, pro: 5, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '195',
      college: 'Oregon State',
      pos: 'G',
      jersey: null
    },
    {
      id: 599,
      name: 'Damion Lee',
      nba: { start: 2017, pro: 4, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '210',
      college: 'Drexel',
      pos: 'G-F',
      jersey: 1
    },
    {
      id: 738,
      name: 'Jordan Bell',
      nba: { start: 2017, pro: 4, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '216',
      college: 'Oregon',
      pos: 'F',
      jersey: 20
    },
    {
      id: 1011,
      name: 'Cameron Oliver',
      nba: { start: 2020, pro: 1, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '239',
      college: 'Nevada',
      pos: 'F',
      jersey: 21
    },
    {
      id: 2201,
      name: 'Mychal Mulder',
      nba: { start: 0, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: 'G',
      jersey: 12
    },
    {
      id: 1069,
      name: 'Chris Chiozza',
      nba: { start: 2018, pro: 3, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '5', inches: '5' },
      weight: '175',
      college: 'Florida',
      pos: 'G',
      jersey: 2
    },
    {
      id: 1934,
      name: 'Juan Toscano-Anderson',
      nba: { start: 0, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: 'F',
      jersey: 95
    },
    {
      id: 1861,
      name: 'Kyle Guy',
      nba: { start: 2019, pro: 2, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '167',
      college: 'Virginia',
      pos: 'G',
      jersey: 5
    },
    {
      id: 1887,
      name: 'Jordan Poole',
      nba: { start: 2019, pro: 2, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '194',
      college: 'Michigan',
      pos: 'G',
      jersey: 3
    },
    {
      id: 1899,
      name: 'Quinndary Weatherspoon',
      nba: { start: 2019, pro: 2, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '205',
      college: 'Mississippi State',
      pos: 'G',
      jersey: 15
    },
    {
      id: 2924,
      name: 'Ryan Taylor',
      nba: { start: 0, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Northwestern'
    },
    {
      id: 2920,
      name: 'Kendall Smith',
      nba: { start: 0, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Oklahoma State'
    },
    {
      id: 2666,
      name: 'James Wiseman',
      nba: { start: 2020, pro: 1, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '7', inches: '7' },
      weight: '240',
      college: 'Memphis',
      pos: 'C',
      jersey: 33
    },
    {
      id: 2827,
      name: 'Jonathan Kuminga',
      nba: { start: 2021, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '225',
      college: 'NBA G League Ignite',
      pos: 'F',
      jersey: null
    },
    {
      id: 2674,
      name: 'Kahlil Whitney',
      nba: { start: 0, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 5
    },
    {
      id: 2940,
      name: 'Derrick Alston Jr.',
      nba: { start: 0, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Boise State',
      pos: 'F',
      jersey: 10
    },
    {
      id: 2603,
      name: 'Justinian Jessup',
      nba: { start: 0, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: 'G',
      jersey: null
    },
    {
      id: 2878,
      name: 'Jeff Dowtin',
      nba: { start: 2021, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '180',
      college: 'Rhode Island',
      pos: 'G',
      jersey: 15
    },
    {
      id: 2906,
      name: 'Elijah Pemberton',
      nba: { start: 0, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '195',
      college: 'Hofstra'
    },
    {
      id: 2892,
      name: 'Selom Mawugbe',
      nba: { start: 0, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '230',
      college: 'Azusa Pacific'
    },
    {
      id: 2836,
      name: 'Moses Moody',
      nba: { start: 2021, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '211',
      college: 'Arkansas',
      pos: 'G',
      jersey: 4
    },
    {
      id: 2895,
      name: 'JaQuori McLaughlin',
      nba: { start: 2021, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '190',
      college: 'Cal-Santa Barbara',
      pos: 'G',
      jersey: null
    },
    {
      id: 2914,
      name: 'Jordan Schakel',
      nba: { start: 2021, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '200',
      college: 'San Diego State',
      pos: 'G',
      jersey: 20
    },
    {
      id: 2913,
      name: 'Colbey Ross',
      nba: { start: 0, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '180',
      college: 'Pepperdine'
    },
    {
      id: 3388,
      name: 'L.J. Figueroa',
      nba: { start: 0, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: null, inches: null },
      weight: null,
      college: null,
      pos: null,
      jersey: 25
    },
    {
      id: 124,
      name: 'Stephen Curry',
      nba: { start: 2009, pro: 12, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '185',
      college: 'Davidson',
      pos: 'G',
      jersey: 30
    },
    {
      id: 68,
      name: 'Avery Bradley',
      nba: { start: 2010, pro: 11, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '180',
      college: 'Texas-Austin',
      pos: 'G',
      jersey: 20
    },
    {
      id: 55,
      name: 'Nemanja Bjelica',
      nba: { start: 2015, pro: 6, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '234',
      college: 'Fenerbahce',
      pos: 'F',
      jersey: 8
    },
    {
      id: 514,
      name: 'Klay Thompson',
      nba: { start: 2011, pro: 8, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Washington State',
      pos: 'G',
      jersey: 11
    },
    {
      id: 204,
      name: 'Draymond Green',
      nba: { start: 2012, pro: 9, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '230',
      college: 'Michigan State',
      pos: 'F',
      jersey: 23
    },
    {
      id: 430,
      name: 'Otto Porter Jr.',
      nba: { start: 2013, pro: 8, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '198',
      college: 'Georgetown',
      pos: 'F',
      jersey: 32
    },
    {
      id: 548,
      name: 'Andrew Wiggins',
      nba: { start: 2014, pro: 7, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '197',
      college: 'Kansas',
      pos: 'F',
      jersey: 22
    },
    {
      id: 182,
      name: 'Langston Galloway',
      nba: { start: 2014, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: null, inches: null },
      weight: null,
      college: "St. Joseph's (PA)",
      pos: null,
      jersey: 12
    },
    {
      id: 2899,
      name: 'Travis Munnings',
      nba: { start: 0, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '200',
      college: 'Louisiana-Monroe'
    },
    {
      id: 2930,
      name: 'Tim Williams',
      nba: { start: 0, pro: 0, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '220',
      college: 'Kentucky'
    },
    {
      id: 256,
      name: 'Andre Iguodala',
      nba: { start: 2004, pro: 17, name: "Golden State Warriors", nickname: "GSW" },
      height: { feets: '6', inches: '6' },
      weight: '215',
      college: 'Arizona',
      pos: 'G-F',
      jersey: 9
    },

{
  id: 17,
  name: 'Justin Anderson',
  nba: { start: 2015, pro: 5, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '231',
  college: 'Virginia',
  pos: 'F-G',
  jersey: 10
},
{
  id: 560,
  name: 'Christian Wood',
  nba: { start: 2015, pro: 5, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '214',
  college: 'UNLV',
  pos: 'F',
  jersey: 35
},
{
  id: 249,
  name: 'Danuel House Jr.',
  nba: { start: 2016, pro: 5, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Texas A&M',
  pos: 'F-G',
  jersey: 25
},
{
  id: 723,
  name: 'David Nwaba',
  nba: { start: 2016, pro: 5, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '219',
  college: 'Cal Poly',
  pos: 'G-F',
  jersey: 2
},
{
  id: 886,
  name: 'Daniel Theis',
  nba: { start: 2017, pro: 4, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '245',
  college: 'Brose Bamberg',
  pos: 'F-C',
  jersey: 27
},
{
  id: 1858,
  name: 'Bruno Fernando',
  nba: { start: 2019, pro: 2, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '240',
  college: 'Maryland',
  pos: 'F-C',
  jersey: 20
},
{
  id: 1033,
  name: 'Khyri Thomas',
  nba: { start: 2018, pro: 3, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'Creighton',
  pos: 'G',
  jersey: 13
},
{
  id: 1888,
  name: 'Kevin Porter Jr.',
  nba: { start: 2019, pro: 2, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '203',
  college: 'Southern California',
  pos: 'G-F',
  jersey: 3
},
{
  id: 1898,
  name: 'Tremont Waters',
  nba: { start: 2019, pro: 2, name: "Rockets", nickname: "HOU" },
  height: { feets: '5', inches: '5' },
  weight: '175',
  college: 'Louisiana State',
  pos: 'G',
  jersey: 51
},
{
  id: 2325,
  name: 'Armoni Brooks',
  nba: { start: 2020, pro: 1, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Houston',
  pos: 'G',
  jersey: 1
},
{
  id: 2327,
  name: 'Garrison Mathews',
  nba: { start: 0, pro: 0, name: "Rockets", nickname: "HOU" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'G',
  jersey: 25
},
{
  id: 3171,
  name: 'Trey Phills',
  nba: { start: 0, pro: 0, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Yale'
},
{
  id: 2570,
  name: 'Tyler Bey',
  nba: { start: 2020, pro: 1, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Colorado',
  pos: 'F',
  jersey: 2
},
{
  id: 2810,
  name: 'Jalen Green',
  nba: { start: 2021, pro: 0, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '186',
  college: 'NBA G League Ignite',
  pos: 'G',
  jersey: null
},
{
  id: 3154,
  name: 'Daishen Nix',
  nba: { start: 2021, pro: 0, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '224',
  college: 'NBA G League Ignite',
  pos: 'G',
  jersey: 15
},
{
  id: 2617,
  name: 'Kenyon Martin Jr.',
  nba: { start: 2020, pro: 1, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'IMG Academy (FL)',
  pos: 'F',
  jersey: 6
},
{
  id: 2609,
  name: 'Anthony Lamb',
  nba: { start: 2020, pro: 1, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '227',
  college: 'Vermont',
  pos: 'F',
  jersey: 33
},
{
  id: 2671,
  name: 'Trevelin Queen',
  nba: { start: 2021, pro: 0, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'New Mexico State',
  pos: 'G',
  jersey: 21
},
{
  id: 2650,
  name: "Jae'Sean Tate",
  nba: { start: 2020, pro: 1, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Ohio State',
  pos: 'F',
  jersey: 8
},
{
  id: 2799,
  name: 'Josh Christopher',
  nba: { start: 2021, pro: 0, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Arizona State',
  pos: 'G',
  jersey: 9
},
{
  id: 2815,
  name: 'Matt Hurt',
  nba: { start: 0, pro: 0, name: "Rockets", nickname: "HOU" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'F',
  jersey: null
},
{
  id: 2847,
  name: 'Alperen Sengun',
  nba: { start: 2021, pro: 0, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '243',
  college: 'Besiktas',
  pos: 'C',
  jersey: 28
},
{
  id: 2806,
  name: 'Usman Garuba',
  nba: { start: 2021, pro: 0, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '229',
  college: 'Real Madrid',
  pos: 'F',
  jersey: 16
},
{
  id: 2884,
  name: 'DeJon Jarreau',
  nba: { start: 2021, pro: 0, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Houston',
  pos: 'G',
  jersey: 33
},
{
  id: 196,
  name: 'Eric Gordon',
  nba: { start: 2008, pro: 13, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Indiana',
  pos: 'G',
  jersey: 10
},
{
  id: 28,
  name: 'D.J. Augustin',
  nba: { start: 2008, pro: 13, name: "Rockets", nickname: "HOU" },
  height: { feets: '5', inches: '5' },
  weight: '183',
  college: 'Texas-Austin',
  pos: 'G',
  jersey: 4
},
{
  id: 539,
  name: 'John Wall',
  nba: { start: 2010, pro: 10, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'Kentucky',
  pos: 'G',
  jersey: 1
},
{
  id: 472,
  name: 'Dennis Schroder',
  nba: { start: 2013, pro: 8, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '172',
  college: 'Braunschweig',
  pos: 'G',
  jersey: 17
},
{
  id: 164,
  name: 'Dante Exum',
  nba: { start: 0, pro: 0, name: "Rockets", nickname: "HOU" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 5
},
{
  id: 3024,
  name: 'Marcus Foster',
  nba: { start: 0, pro: 0, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Creighton'
},
{
  id: 3229,
  name: 'Jalen Tate',
  nba: { start: 0, pro: 0, name: "Rockets", nickname: "HOU" },
  height: { feets: '6', inches: '6' },
  weight: '175',
  college: 'Arkansas'
},

{
  id: 17,
  name: 'Justin Anderson',
  nba: { start: 2015, pro: 5, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '231',
  college: 'Virginia',
  pos: 'F-G',
  jersey: 10
},
{
  id: 522,
  name: 'Myles Turner',
  nba: { start: 2015, pro: 6, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Texas-Austin',
  pos: 'C-F',
  jersey: 33
},
{
  id: 2182,
  name: 'Keifer Sykes',
  nba: { start: 2021, pro: 0, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Wisc.-Green Bay',
  pos: 'G',
  jersey: 28
},
{
  id: 463,
  name: 'Domantas Sabonis',
  nba: { start: 2016, pro: 5, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '240',
  college: 'Gonzaga',
  pos: 'F-C',
  jersey: 10
},
{
  id: 236,
  name: 'Buddy Hield',
  nba: { start: 2016, pro: 5, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Oklahoma',
  pos: 'G',
  jersey: 24
},
{
  id: 317,
  name: 'Caris LeVert',
  nba: { start: 2016, pro: 5, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Michigan',
  pos: 'G',
  jersey: 3
},
{
  id: 71,
  name: 'Malcolm Brogdon',
  nba: { start: 2016, pro: 5, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '229',
  college: 'Virginia',
  pos: 'G',
  jersey: 7
},
{
  id: 893,
  name: 'Tyrone Wallace',
  nba: { start: 2017, pro: 3, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '198',
  college: 'California',
  pos: 'G',
  jersey: 6
},
{
  id: 1963,
  name: 'Gabe York',
  nba: { start: 0, pro: 0, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'G',
  jersey: null
},
{
  id: 880,
  name: 'Edmond Sumner',
  nba: { start: 0, pro: 0, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 5
},
{
  id: 866,
  name: 'Devin Robinson',
  nba: { start: 0, pro: 0, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'F',
  jersey: 11
},
{
  id: 765,
  name: 'Torrey Craig',
  nba: { start: 2017, pro: 4, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '221',
  college: 'South Carolina Upstate',
  pos: 'F',
  jersey: null
},
{
  id: 1418,
  name: 'Terry Henderson',
  nba: { start: 0, pro: 0, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'North Carolina State'
},
{
  id: 1055,
  name: 'Amida Brimah',
  nba: { start: 2020, pro: 1, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Connecticut',
  pos: 'C',
  jersey: 37
},
{
  id: 1848,
  name: 'Goga Bitadze',
  nba: { start: 2019, pro: 2, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '7', inches: '7' },
  weight: '250',
  college: 'Mega Basket',
  pos: 'C-F',
  jersey: 88
},
{
  id: 2110,
  name: 'Oshae Brissett',
  nba: { start: 2019, pro: 2, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'Syracuse',
  pos: 'F-G',
  jersey: 12
},
{
  id: 1514,
  name: 'Kelan Martin',
  nba: { start: 0, pro: 0, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 4
},
{
  id: 1067,
  name: 'BJ Johnson',
  nba: { start: 2018, pro: 2, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'La Salle',
  pos: 'F',
  jersey: 20
},
{
  id: 2108,
  name: 'Bennie Boatwright',
  nba: { start: 0, pro: 0, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '235',
  college: 'USC',
  pos: null,
  jersey: 25
},
{
  id: 2632,
  name: 'Reggie Perry',
  nba: { start: 2020, pro: 1, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Mississippi State',
  pos: 'F-C',
  jersey: null
},
{
  id: 1850,
  name: 'Jordan Bone',
  nba: { start: 2019, pro: 0, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Tennessee',
  pos: null,
  jersey: 23
},
{
  id: 2529,
  name: 'Ahmad Caver',
  nba: { start: 2021, pro: 0, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '174',
  college: 'Old Dominion',
  pos: 'G',
  jersey: null
},
{
  id: 2595,
  name: 'Tyrese Haliburton',
  nba: { start: 2020, pro: 1, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Iowa State',
  pos: 'G',
  jersey: null
},
{
  id: 2644,
  name: 'Jalen Smith',
  nba: { start: 2020, pro: 1, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Maryland',
  pos: 'F-C',
  jersey: 25
},
{
  id: 2646,
  name: 'Cassius Stanley',
  nba: { start: 2020, pro: 1, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Duke',
  pos: 'G',
  jersey: 2
},
{
  id: 2672,
  name: 'Nate Hinton',
  nba: { start: 2020, pro: 1, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'Houston',
  pos: 'G-F',
  jersey: 14
},
{
  id: 2803,
  name: 'Chris Duarte',
  nba: { start: 2021, pro: 0, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Oregon',
  pos: 'G',
  jersey: 3
},
{
  id: 2817,
  name: 'Isaiah Jackson',
  nba: { start: 2021, pro: 0, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Kentucky',
  pos: 'F',
  jersey: 23
},
{
  id: 2884,
  name: 'DeJon Jarreau',
  nba: { start: 2021, pro: 0, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Houston',
  pos: 'G',
  jersey: 33
},
{
  id: 2860,
  name: 'Duane Washington Jr.',
  nba: { start: 2021, pro: 0, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '197',
  college: 'Ohio State',
  pos: 'G',
  jersey: 4
},
{
  id: 2853,
  name: 'Terry Taylor',
  nba: { start: 2021, pro: 0, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Austin Peay',
  pos: 'F',
  jersey: 32
},
{
  id: 459,
  name: 'Ricky Rubio',
  nba: { start: 2011, pro: 10, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'FC Barcelona',
  pos: 'G',
  jersey: 99
},
{
  id: 497,
  name: 'Lance Stephenson',
  nba: { start: 2010, pro: 9, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'Cincinnati',
  pos: 'F',
  jersey: 6
},
{
  id: 515,
  name: 'Tristan Thompson',
  nba: { start: 2011, pro: 10, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '254',
  college: 'Texas-Austin',
  pos: 'C-F',
  jersey: 3
},
{
  id: 1039,
  name: 'Brad Wanamaker',
  nba: { start: 2018, pro: 0, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Pittsburgh',
  pos: null,
  jersey: 22
},
{
  id: 303,
  name: 'Jeremy Lamb',
  nba: { start: 2012, pro: 9, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Connecticut',
  pos: 'G-F',
  jersey: 26
},
{
  id: 243,
  name: 'Justin Holiday',
  nba: { start: 2012, pro: 8, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Washington',
  pos: 'F-G',
  jersey: 9
},
{
  id: 540,
  name: 'T.J. Warren',
  nba: { start: 2014, pro: 7, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'North Carolina State',
  pos: 'F',
  jersey: 1
},
{
  id: 348,
  name: 'T.J. McConnell',
  nba: { start: 2015, pro: 6, name: "Indiana Pacers", nickname: "IND" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Arizona',
  pos: 'G',
  jersey: 9
},
{
  id: 558,
  name: 'Justise Winslow',
  nba: { start: 2015, pro: 6, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '222',
  college: 'Duke',
  pos: 'F-G',
  jersey: 26
},
{
  id: 434,
  name: 'Norman Powell',
  nba: { start: 2015, pro: 6, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'UCLA',
  pos: 'G',
  jersey: 24
},
{
  id: 575,
  name: 'Ivica Zubac',
  nba: { start: 2016, pro: 5, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '7', inches: '7' },
  weight: '240',
  college: 'Mega Basket',
  pos: 'C',
  jersey: 40
},
{
  id: 814,
  name: 'Luke Kennard',
  nba: { start: 2017, pro: 4, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '206',
  college: 'Duke',
  pos: 'G',
  jersey: 5
},
{
  id: 784,
  name: 'Harry Giles III',
  nba: { start: 0, pro: 0, name: "LA Clippers", nickname: "LAC" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 16
},
{
  id: 978,
  name: 'Isaiah Hartenstein',
  nba: { start: 2018, pro: 3, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '7', inches: '7' },
  weight: '250',
  college: 'Zalgiris',
  pos: 'C-F',
  jersey: 55
},
{
  id: 852,
  name: 'Semi Ojeleye',
  nba: { start: 2017, pro: 0, name: "LA Clippers", nickname: "LAC" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Southern Methodist',
  pos: null,
  jersey: 37
},
{
  id: 795,
  name: 'Isaiah Hicks',
  nba: { start: 2017, pro: 2, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'North Carolina',
  pos: 'F',
  jersey: 4
},
{
  id: 986,
  name: 'George King',
  nba: { start: 2018, pro: 1, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Colorado Boulder',
  pos: 'F-G',
  jersey: 8
},
{
  id: 970,
  name: 'Wenyen Gabriel',
  nba: { start: 2019, pro: 2, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Kentucky',
  pos: 'F',
  jersey: 35
},
{
  id: 2115,
  name: 'Amir Coffey',
  nba: { start: 2019, pro: 2, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'Minnesota',
  pos: 'G-F',
  jersey: 7
},
{
  id: 1877,
  name: 'Terance Mann',
  nba: { start: 2019, pro: 2, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Florida State',
  pos: 'G-F',
  jersey: 14
},
{
  id: 2662,
  name: 'Kaleb Wesson',
  nba: { start: 0, pro: 0, name: "LA Clippers", nickname: "LAC" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 43
},
{
  id: 2026,
  name: 'Kerwin Roach',
  nba: { start: 0, pro: 2, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Texas'
},
{
  id: 3396,
  name: 'Xavier Moon',
  nba: { start: 2021, pro: 0, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '165',
  college: 'Morehead State',
  pos: 'G',
  jersey: 15
},
{
  id: 2641,
  name: 'Jay Scrubb',
  nba: { start: 2020, pro: 1, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'John A. Logan',
  pos: 'G',
  jersey: null
},
{
  id: 2586,
  name: 'Malik Fitts',
  nba: { start: 2020, pro: 1, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: "St. Mary's College",
  pos: 'F',
  jersey: 8
},
{
  id: 2588,
  name: 'Jordan Ford',
  nba: { start: 0, pro: 0, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '175',
  college: null,
  pos: 'G',
  jersey: null
},
{
  id: 2792,
  name: 'Brandon Boston Jr.',
  nba: { start: 2021, pro: 0, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '188',
  college: 'Kentucky',
  pos: 'G',
  jersey: 4
},
{
  id: 2820,
  name: 'Keon Johnson',
  nba: { start: 2021, pro: 0, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Tennessee',
  pos: 'G',
  jersey: 6
},
{
  id: 2842,
  name: 'Jason Preston',
  nba: { start: 0, pro: 0, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '181',
  college: 'Ohio',
  pos: 'G',
  jersey: 17
},
{
  id: 3278,
  name: 'Moses Wright',
  nba: { start: 2021, pro: 0, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '233',
  college: 'Georgia Tech',
  pos: 'F',
  jersey: 5
},
{
  id: 255,
  name: 'Serge Ibaka',
  nba: { start: 2009, pro: 12, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '235',
  college: 'Ricoh Manresa',
  pos: 'F',
  jersey: 25
},
{
  id: 40,
  name: 'Nicolas Batum',
  nba: { start: 2008, pro: 13, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Le Mans',
  pos: 'G-F',
  jersey: 33
},
{
  id: 189,
  name: 'Paul George',
  nba: { start: 2010, pro: 11, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Fresno State',
  pos: 'F',
  jersey: 13
},
{
  id: 59,
  name: 'Eric Bledsoe',
  nba: { start: 2010, pro: 11, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '214',
  college: 'Kentucky',
  pos: 'G',
  jersey: 5
},
{
  id: 373,
  name: 'Marcus Morris Sr.',
  nba: { start: 2011, pro: 10, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '218',
  college: 'Kansas',
  pos: 'F',
  jersey: 8
},
{
  id: 314,
  name: 'Kawhi Leonard',
  nba: { start: 2011, pro: 10, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'San Diego State',
  pos: 'F',
  jersey: 2
},
{
  id: 264,
  name: 'Reggie Jackson',
  nba: { start: 2011, pro: 10, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '208',
  college: 'Boston College',
  pos: 'G',
  jersey: 1
},
{
  id: 118,
  name: 'Robert Covington',
  nba: { start: 2013, pro: 8, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '209',
  college: 'Tennessee State',
  pos: 'F',
  jersey: 23
},
{
  id: 160,
  name: 'James Ennis III',
  nba: { start: 2014, pro: 0, name: "LA Clippers", nickname: "LAC" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Cal State-Long Beach',
  pos: null,
  jersey: 10
},
{
  id: 247,
  name: 'Rodney Hood',
  nba: { start: 2014, pro: 7, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '208',
  college: 'Duke',
  pos: 'G-F',
  jersey: 22
},
{
  id: 3014,
  name: 'Lydell Elmore',
  nba: { start: 0, pro: 0, name: "LA Clippers", nickname: "LAC" },
  height: { feets: '6', inches: '6' },
  weight: '189',
  college: 'High Point'
},
{
  id: 276,
  name: 'Stanley Johnson',
  nba: { start: 2015, pro: 6, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '242',
  college: 'Arizona',
  pos: 'F-G',
  jersey: 14
},
{
  id: 842,
  name: 'Malik Monk',
  nba: { start: 2017, pro: 4, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Kentucky',
  pos: 'G',
  jersey: 11
},
{
  id: 1011,
  name: 'Cameron Oliver',
  nba: { start: 2020, pro: 1, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '239',
  college: 'Nevada',
  pos: 'F',
  jersey: 21
},
{
  id: 970,
  name: 'Wenyen Gabriel',
  nba: { start: 2019, pro: 2, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Kentucky',
  pos: 'F',
  jersey: 35
},
{
  id: 1007,
  name: 'Kendrick Nunn',
  nba: { start: 2019, pro: 2, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Oakland',
  pos: 'G',
  jersey: 12
},
{
  id: 1828,
  name: 'Jemerrio Jones',
  nba: { start: 2018, pro: 1, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '175',
  college: 'New Mexico State',
  pos: 'F',
  jersey: 32
},
{
  id: 2207,
  name: 'Justin Robinson',
  nba: { start: 2019, pro: 2, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Virginia Tech',
  pos: 'G',
  jersey: 55
},
{
  id: 1856,
  name: 'Sekou Doumbouya',
  nba: { start: 2019, pro: 2, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Limoges',
  pos: 'F',
  jersey: 45
},
{
  id: 1867,
  name: 'Talen Horton-Tucker',
  nba: { start: 2019, pro: 2, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '234',
  college: 'Iowa State',
  pos: 'G',
  jersey: 5
},
{
  id: 2387,
  name: 'Devontae Cacok',
  nba: { start: 2019, pro: 2, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '240',
  college: 'North Carolina-Wilmington',
  pos: 'F',
  jersey: 18
},
{
  id: 2418,
  name: 'Vic Law',
  nba: { start: 0, pro: 1, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '201',
  college: 'Northwestern',
  pos: 'F',
  jersey: 23
},
{
  id: 2576,
  name: 'Yoeli Childs',
  nba: { start: 0, pro: 0, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 22
},
{
  id: 2605,
  name: 'Mason Jones',
  nba: { start: 2020, pro: 1, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Arkansas',
  pos: 'G',
  jersey: 40
},
{
  id: 2926,
  name: 'Tres Tinkle',
  nba: { start: 0, pro: 0, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Oregon State'
},
{
  id: 2671,
  name: 'Trevelin Queen',
  nba: { start: 2021, pro: 0, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'New Mexico State',
  pos: 'G',
  jersey: 21
},
{
  id: 2591,
  name: 'Romaro Gill',
  nba: { start: 0, pro: 0, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 17
},
{
  id: 2678,
  name: 'Zavier Simpson',
  nba: { start: 2021, pro: 0, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Michigan',
  pos: 'G',
  jersey: 9
},
{
  id: 2787,
  name: 'Joel Ayayi',
  nba: { start: 2021, pro: 0, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Gonzaga',
  pos: 'G',
  jersey: 17
},
{
  id: 2845,
  name: 'Austin Reaves',
  nba: { start: 2021, pro: 0, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '197',
  college: 'Oklahoma',
  pos: 'G',
  jersey: 15
},
{
  id: 2794,
  name: 'Chaundee Brown Jr.',
  nba: { start: 2021, pro: 0, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Michigan',
  pos: 'F',
  jersey: 38
},
{
  id: 2814,
  name: 'Jay Huff',
  nba: { start: 2021, pro: 0, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '7', inches: '7' },
  weight: '240',
  college: 'Virginia',
  pos: 'F',
  jersey: 30
},
{
  id: 2833,
  name: 'Mac McClung',
  nba: { start: 2021, pro: 0, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Texas Tech',
  pos: 'G',
  jersey: 37
},
{
  id: 455,
  name: 'Rajon Rondo',
  nba: { start: 2006, pro: 15, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Kentucky',
  pos: 'G',
  jersey: 1
},
{
  id: 544,
  name: 'Russell Westbrook',
  nba: { start: 2008, pro: 13, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'UCLA',
  pos: 'G',
  jersey: null
},
{
  id: 28,
  name: 'D.J. Augustin',
  nba: { start: 2008, pro: 13, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '5', inches: '5' },
  weight: '183',
  college: 'Texas-Austin',
  pos: 'G',
  jersey: 4
},
{
  id: 286,
  name: 'DeAndre Jordan',
  nba: { start: 2008, pro: 13, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '265',
  college: 'Texas A&M',
  pos: 'C',
  jersey: 9
},
{
  id: 111,
  name: 'Darren Collison',
  nba: { start: 2009, pro: 0, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'UCLA',
  pos: null,
  jersey: 21
},
{
  id: 157,
  name: 'Wayne Ellington',
  nba: { start: 2009, pro: 12, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '207',
  college: 'North Carolina',
  pos: 'G',
  jersey: 2
},
{
  id: 68,
  name: 'Avery Bradley',
  nba: { start: 2010, pro: 11, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Texas-Austin',
  pos: 'G',
  jersey: 20
},
{
  id: 510,
  name: 'Isaiah Thomas',
  nba: { start: 2011, pro: 10, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '5', inches: '5' },
  weight: '185',
  college: 'Washington',
  pos: 'G',
  jersey: 4
},
{
  id: 126,
  name: 'Anthony Davis',
  nba: { start: 2012, pro: 9, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '253',
  college: 'Kentucky',
  pos: 'F-C',
  jersey: 3
},
{
  id: 44,
  name: 'Kent Bazemore',
  nba: { start: 2012, pro: 9, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Old Dominion',
  pos: 'G-F',
  jersey: 9
},
{
  id: 265,
  name: 'LeBron James',
  nba: { start: 2003, pro: 18, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'St. Vincent-St. Mary HS (OH)',
  pos: 'F',
  jersey: 6
},
{
  id: 21,
  name: 'Carmelo Anthony',
  nba: { start: 2003, pro: 18, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '238',
  college: 'Syracuse',
  pos: 'F',
  jersey: 7
},
{
  id: 2879,
  name: 'Jordan Floyd',
  nba: { start: 0, pro: 0, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '170',
  college: 'King'
},
{
  id: 2883,
  name: 'Alan Griffin',
  nba: { start: 0, pro: 0, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Syracuse'
},
{
  id: 3049,
  name: 'Tyler Hagedorn',
  nba: { start: 0, pro: 0, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'South Dakota'
},
{
  id: 250,
  name: 'Dwight Howard',
  nba: { start: 2004, pro: 17, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: '6', inches: '6' },
  weight: '265',
  college: 'SW Atlanta Christian Academy (GA)',
  pos: 'C-F',
  jersey: 39
},
{
  id: 23,
  name: 'Trevor Ariza',
  nba: { start: 2004, pro: 0, name: "Los Angeles Lakers", nickname: "LAL" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'UCLA',
  pos: null,
  jersey: 1
},
{
  id: 285,
  name: 'Tyus Jones',
  nba: { start: 2015, pro: 6, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '196',
  college: 'Duke',
  pos: 'G',
  jersey: 21
},
{
  id: 152,
  name: 'Kris Dunn',
  nba: { start: 2016, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Providence',
  pos: null,
  jersey: 18
},
{
  id: 626,
  name: 'Shaquille Harrison',
  nba: { start: 2017, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Tulsa',
  pos: null,
  jersey: 10
},
{
  id: 749,
  name: 'Dillon Brooks',
  nba: { start: 2017, pro: 4, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Oregon',
  pos: 'G-F',
  jersey: 24
},
{
  id: 843,
  name: 'Ben Moore',
  nba: { start: 0, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'F',
  jersey: 26
},
{
  id: 982,
  name: 'Jaren Jackson Jr.',
  nba: { start: 2018, pro: 3, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '242',
  college: 'Michigan State',
  pos: 'F-C',
  jersey: 13
},
{
  id: 998,
  name: "De'Anthony Melton",
  nba: { start: 2018, pro: 3, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Southern California',
  pos: 'G',
  jersey: null
},
{
  id: 1948,
  name: 'DaQuan Jeffries',
  nba: { start: 2019, pro: 3, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Tulsa',
  pos: 'G-F',
  jersey: 55
},
{
  id: 1881,
  name: 'Ja Morant',
  nba: { start: 2019, pro: 2, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '174',
  college: 'Murray State',
  pos: 'G',
  jersey: 12
},
{
  id: 1855,
  name: 'Jarrett Culver',
  nba: { start: 2019, pro: 2, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Texas Tech',
  pos: 'G-F',
  jersey: 23
},
{
  id: 1853,
  name: 'Brandon Clarke',
  nba: { start: 2019, pro: 2, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Gonzaga',
  pos: 'F',
  jersey: 15
},
{
  id: 2655,
  name: 'Killian Tillie',
  nba: { start: 2020, pro: 1, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Gonzaga',
  pos: 'F-C',
  jersey: 35
},
{
  id: 2177,
  name: 'John Konchar',
  nba: { start: 2019, pro: 2, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'Indiana-Purdue Fort Wayne',
  pos: 'G',
  jersey: 46
},
{
  id: 2405,
  name: 'Dakota Mathias',
  nba: { start: 2020, pro: 1, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Purdue',
  pos: 'G',
  jersey: 33
},
{
  id: 2682,
  name: 'Shaq Buchanan',
  nba: { start: 2021, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Murray State',
  pos: 'G',
  jersey: null
},
{
  id: 2529,
  name: 'Ahmad Caver',
  nba: { start: 2021, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '174',
  college: 'Old Dominion',
  pos: 'G',
  jersey: null
},
{
  id: 2652,
  name: 'Tyrell Terry',
  nba: { start: 2020, pro: 1, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '160',
  college: 'Stanford',
  pos: 'G',
  jersey: 3
},
{
  id: 2656,
  name: 'Xavier Tillman',
  nba: { start: 2020, pro: 1, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '245',
  college: 'Michigan State',
  pos: 'F',
  jersey: 2
},
{
  id: 2568,
  name: 'Desmond Bane',
  nba: { start: 2020, pro: 1, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'TCU',
  pos: 'G',
  jersey: 22
},
{
  id: 2623,
  name: 'Sam Merrill',
  nba: { start: 2020, pro: 1, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Utah State',
  pos: 'G',
  jersey: 25
},
{
  id: 2622,
  name: 'Sean McDermott',
  nba: { start: 2020, pro: 1, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Butler',
  pos: 'F',
  jersey: 30
},
{
  id: 2653,
  name: 'Jon Teske',
  nba: { start: 2021, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '7', inches: '7' },
  weight: '265',
  college: 'Michigan',
  pos: 'C',
  jersey: 15
},
{
  id: 2645,
  name: 'Xavier Sneed',
  nba: { start: 2021, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Kansas State',
  pos: 'F',
  jersey: 19
},
{
  id: 2988,
  name: 'Anthony Cowan Jr.',
  nba: { start: 0, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '170',
  college: 'Maryland'
},
{
  id: 2989,
  name: 'Darnell Cowart',
  nba: { start: 0, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '280',
  college: 'Murray State'
},
{
  id: 2864,
  name: 'Ziaire Williams',
  nba: { start: 2021, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Stanford',
  pos: 'F',
  jersey: 8
},
{
  id: 2815,
  name: 'Matt Hurt',
  nba: { start: 0, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'F',
  jersey: null
},
{
  id: 2841,
  name: 'Yves Pons',
  nba: { start: 2021, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '206',
  college: 'Tennessee',
  pos: 'F',
  jersey: 5
},
{
  id: 2786,
  name: 'Santi Aldama',
  nba: { start: 2021, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Loyola-Maryland',
  pos: 'F-C',
  jersey: 7
},
{
  id: 3264,
  name: 'Romeo Weems',
  nba: { start: 0, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'DePaul',
  pos: 'F',
  jersey: null
},
{
  id: 4,
  name: 'Steven Adams',
  nba: { start: 2013, pro: 8, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '265',
  college: 'Pittsburgh',
  pos: 'C',
  jersey: 4
},
{
  id: 18,
  name: 'Kyle Anderson',
  nba: { start: 2014, pro: 7, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'UCLA',
  pos: 'F-G',
  jersey: 1
},
{
  id: 3196,
  name: 'Olivier Sarr',
  nba: { start: 0, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '7', inches: '7' },
  weight: '243',
  college: 'Kentucky'
},
{
  id: 3259,
  name: 'Keaton Wallace',
  nba: { start: 0, pro: 0, name: "Memphis Grizzlies", nickname: "MEM" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Texas-San Antonio'
},
{
  id: 724,
  name: 'Bam Adebayo',
  nba: { start: 2017, pro: 4, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '255',
  college: 'Kentucky',
  pos: 'C-F',
  jersey: 13
},
{
  id: 2201,
  name: 'Mychal Mulder',
  nba: { start: 0, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'G',
  jersey: 12
},
{
  id: 2242,
  name: 'Caleb Martin',
  nba: { start: 0, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'F',
  jersey: 16
},
{
  id: 996,
  name: 'Brandon McCoy',
  nba: { start: 0, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '7', inches: '7' },
  weight: '250',
  college: null,
  pos: null,
  jersey: 12
},
{
  id: 1018,
  name: 'Duncan Robinson',
  nba: { start: 2018, pro: 3, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Michigan',
  pos: 'F',
  jersey: 55
},
{
  id: 1775,
  name: 'Gabe Vincent',
  nba: { start: 2019, pro: 2, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'California-Santa Barbara',
  pos: 'G',
  jersey: 2
},
{
  id: 1815,
  name: 'Haywood Highsmith',
  nba: { start: 2018, pro: 1, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Wheeling Jesuit',
  pos: 'F',
  jersey: 24
},
{
  id: 2077,
  name: 'Zylan Cheatham',
  nba: { start: 2019, pro: 1, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Arizona State',
  pos: 'F',
  jersey: 45
},
{
  id: 2051,
  name: 'Max Strus',
  nba: { start: 2019, pro: 2, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'DePaul',
  pos: 'G-F',
  jersey: 31
},
{
  id: 1866,
  name: 'Tyler Herro',
  nba: { start: 2019, pro: 2, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Kentucky',
  pos: 'G',
  jersey: 14
},
{
  id: 1884,
  name: 'KZ Okpala',
  nba: { start: 2019, pro: 2, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Stanford',
  pos: 'F-G',
  jersey: 11
},
{
  id: 1861,
  name: 'Kyle Guy',
  nba: { start: 2019, pro: 2, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '167',
  college: 'Virginia',
  pos: 'G',
  jersey: 5
},
{
  id: 1917,
  name: 'Aric Holman',
  nba: { start: 0, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'F-C',
  jersey: 35
},
{
  id: 2391,
  name: 'Chris Silva',
  nba: { start: 2019, pro: 2, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '234',
  college: 'South Carolina',
  pos: 'F',
  jersey: 30
},
{
  id: 2785,
  name: 'Omer Yurtseven',
  nba: { start: 2021, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '275',
  college: 'Georgetown',
  pos: 'C',
  jersey: 77
},
{
  id: 2880,
  name: 'Marcus Garrett',
  nba: { start: 2021, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Kansas',
  pos: 'G',
  jersey: null
},
{
  id: 2922,
  name: 'DJ Stewart',
  nba: { start: 0, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Mississippi State',
  pos: 'G',
  jersey: 18
},
{
  id: 2917,
  name: 'Javonte Smart',
  nba: { start: 2021, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Louisiana State',
  pos: 'G',
  jersey: 15
},
{
  id: 2884,
  name: 'DeJon Jarreau',
  nba: { start: 2021, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Houston',
  pos: 'G',
  jersey: 33
},
{
  id: 2901,
  name: 'RJ Nembhard Jr.',
  nba: { start: 2021, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'TCU',
  pos: 'G',
  jersey: 5
},
{
  id: 2919,
  name: 'Justin Smith',
  nba: { start: 0, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Arkansas'
},
{
  id: 3358,
  name: 'Micah Potter',
  nba: { start: 2021, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Wisconsin',
  pos: null,
  jersey: 19
},
{
  id: 3360,
  name: 'Dru Smith',
  nba: { start: 0, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 12
},
{
  id: 327,
  name: 'Kyle Lowry',
  nba: { start: 2006, pro: 15, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '196',
  college: 'Villanova',
  pos: 'G',
  jersey: 7
},
{
  id: 520,
  name: 'P.J. Tucker',
  nba: { start: 2006, pro: 10, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '245',
  college: 'Texas-Austin',
  pos: 'F',
  jersey: 17
},
{
  id: 759,
  name: 'Mario Chalmers',
  nba: { start: 0, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 15
},
{
  id: 374,
  name: 'Markieff Morris',
  nba: { start: 2011, pro: 10, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '245',
  college: 'Kansas',
  pos: 'F',
  jersey: 8
},
{
  id: 86,
  name: 'Jimmy Butler',
  nba: { start: 2011, pro: 10, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Marquette',
  pos: 'F',
  jersey: 22
},
{
  id: 131,
  name: 'Dewayne Dedmon',
  nba: { start: 2013, pro: 8, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '7', inches: '7' },
  weight: '245',
  college: 'Southern California',
  pos: 'C',
  jersey: 21
},
{
  id: 403,
  name: 'Victor Oladipo',
  nba: { start: 2013, pro: 8, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '213',
  college: 'Indiana',
  pos: 'G',
  jersey: 4
},
{
  id: 496,
  name: 'Nik Stauskas',
  nba: { start: 2014, pro: 5, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '207',
  college: 'Michigan',
  pos: 'G',
  jersey: 13
},
{
  id: 225,
  name: 'Udonis Haslem',
  nba: { start: 2003, pro: 18, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '235',
  college: 'Florida',
  pos: 'F',
  jersey: 40
},
{
  id: 2875,
  name: 'Tyson Carter',
  nba: { start: 0, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '175',
  college: 'Mississippi State'
},
{
  id: 2907,
  name: 'Micah Potter',
  nba: { start: 0, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Wisconsin'
},
{
  id: 2918,
  name: 'Dru Smith',
  nba: { start: 0, pro: 0, name: "Miami Heat", nickname: "MIA" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Missouri'
},

{
  id: 431,
  name: 'Bobby Portis',
  nba: { start: 2015, pro: 6, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Arkansas',
  pos: 'F',
  jersey: 9
},
{
  id: 115,
  name: 'Pat Connaughton',
  nba: { start: 2015, pro: 6, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '209',
  college: 'Notre Dame',
  pos: 'G',
  jersey: 24
},
{
  id: 49,
  name: "DeAndre' Bembry",
  nba: { start: 2016, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: null, inches: null },
  weight: null,
  college: "St. Joseph's (PA)",
  pos: null,
  jersey: 95
},
{
  id: 852,
  name: 'Semi Ojeleye',
  nba: { start: 2017, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Southern Methodist',
  pos: null,
  jersey: 37
},
{
  id: 819,
  name: 'Luke Kornet',
  nba: { start: 2017, pro: 4, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '7', inches: '7' },
  weight: '250',
  college: 'Vanderbilt',
  pos: 'C-F',
  jersey: 40
},
{
  id: 926,
  name: 'Grayson Allen',
  nba: { start: 2018, pro: 3, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '198',
  college: 'Duke',
  pos: 'G',
  jersey: 7
},
{
  id: 949,
  name: 'Jevon Carter',
  nba: { start: 2018, pro: 3, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'West Virginia',
  pos: 'G',
  jersey: 5
},
{
  id: 962,
  name: 'Donte DiVincenzo',
  nba: { start: 2018, pro: 3, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '203',
  college: 'Villanova',
  pos: 'G',
  jersey: null
},
{
  id: 1013,
  name: 'Theo Pinson',
  nba: { start: 2018, pro: 3, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '212',
  college: 'North Carolina',
  pos: 'G-F',
  jersey: 1
},
{
  id: 1308,
  name: 'Elijah Bryant',
  nba: { start: 0, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 6
},
{
  id: 1828,
  name: 'Jemerrio Jones',
  nba: { start: 2018, pro: 1, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '175',
  college: 'New Mexico State',
  pos: 'F',
  jersey: 32
},
{
  id: 2579,
  name: 'Javin DeLaurier',
  nba: { start: 0, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '234',
  college: 'Duke',
  pos: 'C',
  jersey: 12
},
{
  id: 2580,
  name: 'Mamadi Diakite',
  nba: { start: 2020, pro: 1, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '228',
  college: 'Virginia',
  pos: 'F',
  jersey: 12
},
{
  id: 2207,
  name: 'Justin Robinson',
  nba: { start: 2019, pro: 2, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Virginia Tech',
  pos: 'G',
  jersey: 55
},
{
  id: 2034,
  name: 'Lindell Wigginton',
  nba: { start: 0, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'G',
  jersey: 28
},
{
  id: 2628,
  name: 'Jordan Nwora',
  nba: { start: 2020, pro: 1, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Louisville',
  pos: 'F',
  jersey: 13
},
{
  id: 1898,
  name: 'Tremont Waters',
  nba: { start: 2019, pro: 2, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '5', inches: '5' },
  weight: '175',
  college: 'Louisiana State',
  pos: 'G',
  jersey: 51
},
{
  id: 2152,
  name: 'Rayjon Tucker',
  nba: { start: 2019, pro: 2, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '209',
  college: 'Arkansas-Little Rock',
  pos: 'G',
  jersey: 59
},
{
  id: 3183,
  name: 'Brandon Randolph',
  nba: { start: 0, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Arizona'
},
{
  id: 2583,
  name: 'Paul Eboua',
  nba: { start: 0, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 98
},
{
  id: 2624,
  name: 'E.J. Montgomery',
  nba: { start: 0, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 23
},
{
  id: 2878,
  name: 'Jeff Dowtin',
  nba: { start: 2021, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Rhode Island',
  pos: 'G',
  jersey: 15
},
{
  id: 2783,
  name: 'Luca Vildoza',
  nba: { start: 0, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Baskonia',
  pos: 'G',
  jersey: 6
},
{
  id: 2830,
  name: 'Sandro Mamukelashvili',
  nba: { start: 2021, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '240',
  college: 'Seton Hall',
  pos: 'F-C',
  jersey: 54
},
{
  id: 2917,
  name: 'Javonte Smart',
  nba: { start: 2021, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Louisiana State',
  pos: 'G',
  jersey: 15
},
{
  id: 2990,
  name: 'Jalen Crutcher',
  nba: { start: 0, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '175',
  college: 'Dayton',
  pos: 'G',
  jersey: null
},
{
  id: 2824,
  name: 'Georgios Kalaitzakis',
  nba: { start: 2021, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '192',
  college: 'Panathinaikos',
  pos: 'F',
  jersey: 18
},
{
  id: 323,
  name: 'Brook Lopez',
  nba: { start: 2008, pro: 13, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '7', inches: '7' },
  weight: '282',
  college: 'Stanford',
  pos: 'C',
  jersey: 11
},
{
  id: 255,
  name: 'Serge Ibaka',
  nba: { start: 2009, pro: 12, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '235',
  college: 'Ricoh Manresa',
  pos: 'F',
  jersey: 25
},
{
  id: 237,
  name: 'George Hill',
  nba: { start: 2008, pro: 13, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '188',
  college: 'Indiana-Purdue Indianapolis',
  pos: 'G',
  jersey: 3
},
{
  id: 242,
  name: 'Jrue Holiday',
  nba: { start: 2009, pro: 12, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'UCLA',
  pos: 'G',
  jersey: 21
},
{
  id: 341,
  name: 'Wesley Matthews',
  nba: { start: 2009, pro: 12, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Marquette',
  pos: 'G',
  jersey: 23
},
{
  id: 117,
  name: 'DeMarcus Cousins',
  nba: { start: 2010, pro: 10, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '270',
  college: 'Kentucky',
  pos: 'C',
  jersey: 4
},
{
  id: 369,
  name: 'Greg Monroe',
  nba: { start: 2010, pro: 9, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Georgetown',
  pos: 'F-C',
  jersey: 15
},
{
  id: 361,
  name: 'Khris Middleton',
  nba: { start: 2012, pro: 9, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '222',
  college: 'Texas A&M',
  pos: 'F',
  jersey: 22
},
{
  id: 20,
  name: 'Giannis Antetokounmpo',
  nba: { start: 2013, pro: 8, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '242',
  college: 'Filathlitikos',
  pos: 'F',
  jersey: 34
},
{
  id: 2408,
  name: 'Thanasis Antetokounmpo',
  nba: { start: 2015, pro: 3, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '219',
  college: 'Panathinaikos',
  pos: 'F',
  jersey: 43
},
{
  id: 247,
  name: 'Rodney Hood',
  nba: { start: 2014, pro: 7, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '208',
  college: 'Duke',
  pos: 'G-F',
  jersey: 22
},
{
  id: 399,
  name: "Johnny O'Bryant III",
  nba: { start: 0, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 97
},
{
  id: 182,
  name: 'Langston Galloway',
  nba: { start: 2014, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: null, inches: null },
  weight: null,
  college: "St. Joseph's (PA)",
  pos: null,
  jersey: 12
},
{
  id: 3015,
  name: 'Steven Enoch',
  nba: { start: 0, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '260',
  college: 'Louisville'
},
{
  id: 3143,
  name: 'John Mooney',
  nba: { start: 0, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '245',
  college: 'Notre Dame'
},
{
  id: 3218,
  name: 'Mike Smith',
  nba: { start: 0, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '5', inches: '5' },
  weight: '185',
  college: 'Michigan'
},
{
  id: 3247,
  name: 'DMitrik Trice',
  nba: { start: 0, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Wisconsin'
},
{
  id: 3267,
  name: 'Tyree White',
  nba: { start: 0, pro: 0, name: "Milwaukee Bucks", nickname: "MIL" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'ULM'
},
{
  id: 462,
  name: "D'Angelo Russell",
  nba: { start: 2015, pro: 6, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '193',
  college: 'Ohio State',
  pos: 'G',
  jersey: null
},
{
  id: 519,
  name: 'Karl-Anthony Towns',
  nba: { start: 2015, pro: 6, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '248',
  college: 'Kentucky',
  pos: 'C-F',
  jersey: 32
},
{
  id: 837,
  name: 'Malcolm Miller',
  nba: { start: 2017, pro: 3, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'Holy Cross',
  pos: 'G-F',
  jersey: 13
},
{
  id: 46,
  name: 'Malik Beasley',
  nba: { start: 2016, pro: 5, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '187',
  college: 'Florida State',
  pos: 'G',
  jersey: 5
},
{
  id: 437,
  name: 'Taurean Prince',
  nba: { start: 2016, pro: 5, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '218',
  college: 'Baylor',
  pos: 'F',
  jersey: 12
},
{
  id: 310,
  name: 'Jake Layman',
  nba: { start: 2016, pro: 5, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '209',
  college: 'Maryland',
  pos: 'F',
  jersey: 10
},
{
  id: 1572,
  name: 'London Perrantes',
  nba: { start: 2017, pro: 1, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '194',
  college: 'Virginia',
  pos: 'G',
  jersey: 8
},
{
  id: 3194,
  name: 'Cullen Russo',
  nba: { start: 0, pro: 0, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '232',
  college: 'Fresno State'
},
{
  id: 2973,
  name: 'Jared Brownridge',
  nba: { start: 0, pro: 0, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '197',
  college: 'Santa Clara',
  pos: 'G',
  jersey: null
},
{
  id: 1056,
  name: 'Brian Bowen II',
  nba: { start: 2019, pro: 2, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Sydney Kings',
  pos: 'F-G',
  jersey: 10
},
{
  id: 1010,
  name: 'Josh Okogie',
  nba: { start: 2018, pro: 3, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '213',
  college: 'Georgia Tech',
  pos: 'G',
  jersey: 20
},
{
  id: 1036,
  name: 'Jarred Vanderbilt',
  nba: { start: 2018, pro: 3, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '214',
  college: 'Kentucky',
  pos: 'F',
  jersey: 8
},
{
  id: 959,
  name: 'Marcus Derrickson',
  nba: { start: 2018, pro: 1, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Georgetown',
  pos: 'F',
  jersey: 32
},
{
  id: 997,
  name: 'Jordan McLaughlin',
  nba: { start: 2019, pro: 2, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '5', inches: '5' },
  weight: '185',
  college: 'Southern California',
  pos: 'G',
  jersey: 6
},
{
  id: 2157,
  name: 'Kenny Wooten',
  nba: { start: 0, pro: 0, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '235',
  college: 'Oregon',
  pos: null,
  jersey: 7
},
{
  id: 1882,
  name: 'Jaylen Nowell',
  nba: { start: 2019, pro: 2, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '201',
  college: 'Washington',
  pos: 'G',
  jersey: 4
},
{
  id: 2146,
  name: 'Naz Reid',
  nba: { start: 0, pro: 0, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'C-F',
  jersey: 11
},
{
  id: 2152,
  name: 'Rayjon Tucker',
  nba: { start: 2019, pro: 2, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '209',
  college: 'Arkansas-Little Rock',
  pos: 'G',
  jersey: 59
},
{
  id: 2391,
  name: 'Chris Silva',
  nba: { start: 2019, pro: 2, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '234',
  college: 'South Carolina',
  pos: 'F',
  jersey: 30
},
{
  id: 2452,
  name: 'John Egbunu',
  nba: { start: 0, pro: 0, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 15
},
{
  id: 2584,
  name: 'Anthony Edwards',
  nba: { start: 2020, pro: 1, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Georgia',
  pos: 'G',
  jersey: 1
},
{
  id: 2621,
  name: 'Jaden McDaniels',
  nba: { start: 2020, pro: 1, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Washington',
  pos: 'F',
  jersey: 3
},
{
  id: 2571,
  name: 'Leandro Bolmaro',
  nba: { start: 2021, pro: 0, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'FC Barcelona',
  pos: 'F',
  jersey: 9
},
{
  id: 2615,
  name: 'Karim Mane',
  nba: { start: 2020, pro: 0, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 4
},
{
  id: 2607,
  name: 'Nathan Knight',
  nba: { start: 2020, pro: 1, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '253',
  college: 'William & Mary',
  pos: 'F-C',
  jersey: 13
},
{
  id: 2865,
  name: 'McKinley Wright IV',
  nba: { start: 2021, pro: 0, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '5', inches: '5' },
  weight: '192',
  college: 'Colorado',
  pos: 'G',
  jersey: 25
},
{
  id: 3136,
  name: 'Isaiah Miller',
  nba: { start: 0, pro: 0, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '182',
  college: 'North Carolina-Greensboro',
  pos: 'G',
  jersey: null
},
{
  id: 3102,
  name: 'Matt Lewis',
  nba: { start: 0, pro: 0, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '189',
  college: 'James Madison',
  pos: 'G',
  jersey: null
},
{
  id: 53,
  name: 'Patrick Beverley',
  nba: { start: 2012, pro: 9, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Arkansas',
  pos: 'G',
  jersey: 22
},
{
  id: 369,
  name: 'Greg Monroe',
  nba: { start: 2010, pro: 9, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Georgetown',
  pos: 'F-C',
  jersey: 15
},
{
  id: 2962,
  name: 'Kerry Blackshear Jr.',
  nba: { start: 0, pro: 0, name: "Minnesota Timberwolves", nickname: "MIN" },
  height: { feets: '6', inches: '6' },
  weight: '241',
  college: 'Florida'
},{
  id: 231,
  name: 'Willy Hernangomez',
  nba: { start: 2016, pro: 5, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Cajasol Sevilla',
  pos: 'C-F',
  jersey: 9
},
{
  id: 385,
  name: 'Larry Nance Jr.',
  nba: { start: 2015, pro: 6, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '245',
  college: 'Wyoming',
  pos: 'F-C',
  jersey: 22
},
{
  id: 260,
  name: 'Brandon Ingram',
  nba: { start: 2016, pro: 5, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Duke',
  pos: 'F',
  jersey: 14
},
{
  id: 893,
  name: 'Tyrone Wallace',
  nba: { start: 2017, pro: 3, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '198',
  college: 'California',
  pos: 'G',
  jersey: 6
},
{
  id: 2204,
  name: 'Anzejs Pasecniks',
  nba: { start: 2019, pro: 2, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '7', inches: '7' },
  weight: '229',
  college: 'Gran Canaria',
  pos: null,
  jersey: 18
},
{
  id: 791,
  name: 'Josh Hart',
  nba: { start: 2017, pro: 4, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Villanova',
  pos: 'G',
  jersey: 11
},
{
  id: 973,
  name: "Devonte' Graham",
  nba: { start: 2018, pro: 3, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Kansas',
  pos: 'G',
  jersey: 4
},
{
  id: 983,
  name: 'Alize Johnson',
  nba: { start: 2018, pro: 3, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '212',
  college: 'Missouri State',
  pos: 'F',
  jersey: 24
},
{
  id: 953,
  name: 'Gary Clark',
  nba: { start: 2018, pro: 3, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Cincinnati',
  pos: 'F',
  jersey: 12
},
{
  id: 970,
  name: 'Wenyen Gabriel',
  nba: { start: 2019, pro: 2, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Kentucky',
  pos: 'F',
  jersey: 35
},
{
  id: 2077,
  name: 'Zylan Cheatham',
  nba: { start: 2019, pro: 1, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Arizona State',
  pos: 'F',
  jersey: 45
},
{
  id: 2194,
  name: 'Jared Harper',
  nba: { start: 0, pro: 0, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'G',
  jersey: 2
},
{
  id: 1902,
  name: 'Zion Williamson',
  nba: { start: 2019, pro: 2, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '284',
  college: 'Duke',
  pos: 'F',
  jersey: 1
},
{
  id: 1864,
  name: 'Jaxson Hayes',
  nba: { start: 2019, pro: 2, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Texas-Austin',
  pos: 'C-F',
  jersey: 10
},
{
  id: 1845,
  name: 'Nickeil Alexander-Walker',
  nba: { start: 2019, pro: 2, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Virginia Tech',
  pos: 'G',
  jersey: 6
},
{
  id: 1885,
  name: 'Miye Oni',
  nba: { start: 2019, pro: 0, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Yale',
  pos: null,
  jersey: 18
},
{
  id: 1876,
  name: 'Didi Louzada',
  nba: { start: 2020, pro: 1, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '188',
  college: 'Sydney Kings',
  pos: 'G',
  jersey: 35
},
{
  id: 1869,
  name: 'Justin James',
  nba: { start: 0, pro: 0, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 21
},
{
  id: 2466,
  name: 'Daulton Hommes',
  nba: { start: 0, pro: 0, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Point Loma',
  pos: 'F',
  jersey: 34
},
{
  id: 2611,
  name: 'Kira Lewis Jr.',
  nba: { start: 2020, pro: 1, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '170',
  college: 'Alabama',
  pos: 'G',
  jersey: 13
},
{
  id: 2668,
  name: 'Naji Marshall',
  nba: { start: 2020, pro: 1, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Xavier',
  pos: 'F',
  jersey: 8
},
{
  id: 2822,
  name: 'Herbert Jones',
  nba: { start: 2021, pro: 0, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '206',
  college: 'Alabama',
  pos: 'F',
  jersey: 5
},
{
  id: 2837,
  name: 'Trey Murphy III',
  nba: { start: 2021, pro: 0, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '206',
  college: 'Virginia',
  pos: 'F',
  jersey: 25
},
{
  id: 3278,
  name: 'Moses Wright',
  nba: { start: 2021, pro: 0, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '233',
  college: 'Georgia Tech',
  pos: 'F',
  jersey: 5
},
{
  id: 3067,
  name: 'Feron Hunt',
  nba: { start: 2021, pro: 0, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Southern Methodist',
  pos: 'F',
  jersey: 11
},
{
  id: 2941,
  name: 'Jose Alvarado',
  nba: { start: 2021, pro: 0, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '179',
  college: 'Georgia Tech',
  pos: 'G',
  jersey: 15
},
{
  id: 3378,
  name: 'James Banks III',
  nba: { start: 0, pro: 0, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 24
},
{
  id: 3380,
  name: 'Malcolm Hill',
  nba: { start: 2021, pro: 0, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Illinois',
  pos: 'F',
  jersey: 14
},
{
  id: 3151,
  name: 'Trey Murphy',
  nba: { start: 0, pro: 0, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: null, inches: null },
  weight: null,
  college: null
},
{
  id: 507,
  name: 'Garrett Temple',
  nba: { start: 2009, pro: 11, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Louisiana State',
  pos: 'G-F',
  jersey: 41
},
{
  id: 525,
  name: 'Jonas Valanciunas',
  nba: { start: 2012, pro: 9, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '265',
  college: 'Lietuvos rytas Vilnius',
  pos: 'C',
  jersey: 17
},
{
  id: 470,
  name: 'Tomas Satoransky',
  nba: { start: 2016, pro: 5, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'FC Barcelona',
  pos: 'G',
  jersey: 31
},
{
  id: 347,
  name: 'CJ McCollum',
  nba: { start: 2013, pro: 8, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Lehigh',
  pos: 'G',
  jersey: 3
},
{
  id: 492,
  name: 'Tony Snell',
  nba: { start: 2013, pro: 8, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '213',
  college: 'New Mexico',
  pos: 'G',
  jersey: 21
},
{
  id: 2999,
  name: 'David DiLeo',
  nba: { start: 0, pro: 0, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '224',
  college: 'Central Michigan'
},
{
  id: 3059,
  name: 'Malcolm Hill',
  nba: { start: 0, pro: 0, name: "New Orleans Pelicans", nickname: "NOP" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Illinois'
},
{
  id: 594,
  name: 'Wayne Selden',
  nba: { start: 2016, pro: 3, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '232',
  college: 'Kansas',
  pos: 'G',
  jersey: 11
},
{
  id: 609,
  name: 'Ryan Arcidiacono',
  nba: { start: 2017, pro: 4, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Villanova',
  pos: 'G',
  jersey: 51
},
{
  id: 249,
  name: 'Danuel House Jr.',
  nba: { start: 2016, pro: 5, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Texas A&M',
  pos: 'F-G',
  jersey: 25
},
{
  id: 1348,
  name: 'Trey Davis',
  nba: { start: 0, pro: 0, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Massachusetts'
},
{
  id: 855,
  name: 'Justin Patton',
  nba: { start: 2017, pro: 0, name: "New York Knicks", nickname: "NYK" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Creighton',
  pos: null,
  jersey: 26
},
{
  id: 734,
  name: 'Dwayne Bacon',
  nba: { start: 0, pro: 0, name: "New York Knicks", nickname: "NYK" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: null
},
{
  id: 768,
  name: 'Damyean Dotson',
  nba: { start: 2017, pro: 0, name: "New York Knicks", nickname: "NYK" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Houston',
  pos: null,
  jersey: 21
},
{
  id: 987,
  name: 'Kevin Knox II',
  nba: { start: 2018, pro: 3, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Kentucky',
  pos: 'F',
  jersey: 5
},
{
  id: 1020,
  name: 'Mitchell Robinson',
  nba: { start: 2018, pro: 3, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '7', inches: '7' },
  weight: '240',
  college: 'Western Kentucky',
  pos: 'C-F',
  jersey: 23
},
{
  id: 2669,
  name: 'Quinton Rose',
  nba: { start: 0, pro: 0, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Temple',
  pos: 'G-F',
  jersey: null
},
{
  id: 1063,
  name: 'Brandon Goodwin',
  nba: { start: 2018, pro: 3, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Florida Gulf Coast',
  pos: 'G',
  jersey: null
},
{
  id: 1846,
  name: 'RJ Barrett',
  nba: { start: 2019, pro: 2, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '214',
  college: 'Duke',
  pos: 'F-G',
  jersey: 9
},
{
  id: 1889,
  name: 'Cam Reddish',
  nba: { start: 2019, pro: 2, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '217',
  college: 'Duke',
  pos: 'F-G',
  jersey: 21
},
{
  id: 2811,
  name: 'Quentin Grimes',
  nba: { start: 2021, pro: 0, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'Houston',
  pos: 'G',
  jersey: 6
},
{
  id: 2474,
  name: 'Matt Mooney',
  nba: { start: 2019, pro: 1, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '199',
  college: 'Texas Tech',
  pos: 'G',
  jersey: 31
},
{
  id: 2676,
  name: 'Tyler Hall',
  nba: { start: 2021, pro: 0, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '209',
  college: 'Montana State',
  pos: 'G',
  jersey: null
},
{
  id: 2658,
  name: 'Obi Toppin',
  nba: { start: 2020, pro: 1, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Dayton',
  pos: 'F',
  jersey: 1
},
{
  id: 2636,
  name: 'Immanuel Quickley',
  nba: { start: 2020, pro: 1, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Kentucky',
  pos: 'G',
  jersey: 5
},
{
  id: 2783,
  name: 'Luca Vildoza',
  nba: { start: 0, pro: 0, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Baskonia',
  pos: 'G',
  jersey: 6
},
{
  id: 2832,
  name: 'Miles McBride',
  nba: { start: 2021, pro: 0, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'West Virginia',
  pos: 'G',
  jersey: 2
},
{
  id: 2849,
  name: 'Jericho Sims',
  nba: { start: 2021, pro: 0, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Texas-Austin',
  pos: 'C',
  jersey: 45
},
{
  id: 2821,
  name: 'Rokas Jokubaitis',
  nba: { start: 0, pro: 0, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '194',
  college: 'Zalgiris',
  pos: 'G',
  jersey: null
},
{
  id: 3205,
  name: 'Aamir Simms',
  nba: { start: 0, pro: 0, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '245',
  college: 'Clemson',
  pos: 'F',
  jersey: null
},
{
  id: 3067,
  name: 'Feron Hunt',
  nba: { start: 2021, pro: 0, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Southern Methodist',
  pos: 'F',
  jersey: 11
},
{
  id: 3258,
  name: 'MJ Walker',
  nba: { start: 2021, pro: 0, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '213',
  college: 'Florida State',
  pos: 'G',
  jersey: 21
},
{
  id: 3246,
  name: 'Reid Travis',
  nba: { start: 0, pro: 0, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '245',
  college: 'Kentucky'
},
{
  id: 456,
  name: 'Derrick Rose',
  nba: { start: 2008, pro: 12, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Memphis',
  pos: 'G',
  jersey: 4
},
{
  id: 190,
  name: 'Taj Gibson',
  nba: { start: 2009, pro: 12, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '232',
  college: 'Southern California',
  pos: 'F',
  jersey: 67
},
{
  id: 538,
  name: 'Kemba Walker',
  nba: { start: 2011, pro: 10, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '184',
  college: 'Connecticut',
  pos: 'G',
  jersey: 8
},
{
  id: 84,
  name: 'Alec Burks',
  nba: { start: 2011, pro: 10, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '214',
  college: 'Colorado',
  pos: 'G',
  jersey: 18
},
{
  id: 177,
  name: 'Evan Fournier',
  nba: { start: 2012, pro: 9, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Poitiers Basket 86',
  pos: 'G-F',
  jersey: 13
},
{
  id: 394,
  name: 'Nerlens Noel',
  nba: { start: 2014, pro: 7, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Kentucky',
  pos: 'C-F',
  jersey: 3
},
{
  id: 441,
  name: 'Julius Randle',
  nba: { start: 2014, pro: 7, name: "New York Knicks", nickname: "NYK" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Kentucky',
  pos: 'F-C',
  jersey: 30
},{
  id: 899,
  name: 'D.J. Wilson',
  nba: { start: 2017, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Michigan',
  pos: null,
  jersey: 9
},
{
  id: 1668,
  name: 'Paul Watson',
  nba: { start: 0, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'Fresno State',
  pos: null,
  jersey: 8
},
{
  id: 969,
  name: 'Melvin Frazier Jr.',
  nba: { start: 2018, pro: 2, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Tulane',
  pos: 'G-F',
  jersey: 6
},
{
  id: 972,
  name: 'Shai Gilgeous-Alexander',
  nba: { start: 2018, pro: 3, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Kentucky',
  pos: 'G',
  jersey: 2
},
{
  id: 1044,
  name: 'Kenrich Williams',
  nba: { start: 2018, pro: 3, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'TCU',
  pos: 'G-F',
  jersey: 34
},
{
  id: 2580,
  name: 'Mamadi Diakite',
  nba: { start: 2020, pro: 1, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '228',
  college: 'Virginia',
  pos: 'F',
  jersey: 12
},
{
  id: 1847,
  name: 'Darius Bazley',
  nba: { start: 2019, pro: 2, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '208',
  college: 'Princeton HS (OH)',
  pos: 'F',
  jersey: 7
},
{
  id: 2040,
  name: 'Luguentz Dort',
  nba: { start: 0, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'G',
  jersey: 5
},
{
  id: 2125,
  name: 'Jaylen Hoard',
  nba: { start: 2019, pro: 2, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '216',
  college: 'Wake Forest',
  pos: 'F',
  jersey: 8
},
{
  id: 1870,
  name: 'Ty Jerome',
  nba: { start: 2019, pro: 2, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Virginia',
  pos: 'G-F',
  jersey: 16
},
{
  id: 2197,
  name: 'Jalen Lecque',
  nba: { start: 2019, pro: 2, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Brewster Academy (NH)',
  pos: 'G',
  jersey: null
},
{
  id: 1890,
  name: 'Isaiah Roby',
  nba: { start: 2019, pro: 2, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Nebraska-Lincoln',
  pos: 'F',
  jersey: 22
},
{
  id: 2111,
  name: 'Charlie Brown Jr.',
  nba: { start: 2019, pro: 2, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '199',
  college: "St. Joseph's (PA)",
  pos: 'G',
  jersey: 16
},
{
  id: 2614,
  name: 'Theo Maledon',
  nba: { start: 2020, pro: 1, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '175',
  college: 'Asvel',
  pos: 'G',
  jersey: 11
},
{
  id: 2633,
  name: 'Aleksej Pokusevski',
  nba: { start: 2020, pro: 1, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '7', inches: '7' },
  weight: '190',
  college: 'Olympiacos',
  pos: 'F',
  jersey: 17
},
{
  id: 2673,
  name: 'Josh Hall',
  nba: { start: 0, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'F',
  jersey: 15
},
{
  id: 2608,
  name: 'Vit Krejci',
  nba: { start: 2021, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Zaragoza',
  pos: 'G',
  jersey: 27
},
{
  id: 2678,
  name: 'Zavier Simpson',
  nba: { start: 2021, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Michigan',
  pos: 'G',
  jersey: 9
},
{
  id: 3271,
  name: 'Emmitt Williams',
  nba: { start: 0, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Louisiana State'
},
{
  id: 3011,
  name: 'Rob Edwards',
  nba: { start: 2021, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Arizona State',
  pos: 'G',
  jersey: null
},
{
  id: 3404,
  name: 'Lindy Waters III',
  nba: { start: 2021, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Oklahoma State',
  pos: 'F',
  jersey: 12
},
{
  id: 3277,
  name: 'Ryan Woolridge',
  nba: { start: 0, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '175',
  college: 'Gonzaga'
},
{
  id: 2779,
  name: 'Gabriel Deck',
  nba: { start: 2020, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: null, inches: null },
  weight: null,
  college: '                                   ',
  pos: null,
  jersey: 6
},
{
  id: 2846,
  name: 'Jeremiah Robinson-Earl',
  nba: { start: 2021, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '242',
  college: 'Villanova',
  pos: 'F',
  jersey: 50
},
{
  id: 2831,
  name: 'Tre Mann',
  nba: { start: 2021, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '178',
  college: 'Florida',
  pos: 'G',
  jersey: 23
},
{
  id: 2808,
  name: 'Josh Giddey',
  nba: { start: 2021, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'NBA Global Academy',
  pos: 'G',
  jersey: 3
},
{
  id: 2863,
  name: 'Aaron Wiggins',
  nba: { start: 2021, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Maryland',
  pos: 'G',
  jersey: 21
},
{
  id: 2994,
  name: 'Oscar da Silva',
  nba: { start: 0, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Stanford'
},
{
  id: 2824,
  name: 'Georgios Kalaitzakis',
  nba: { start: 2021, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '192',
  college: 'Panathinaikos',
  pos: 'F',
  jersey: 18
},
{
  id: 3399,
  name: 'Olivier Sarr',
  nba: { start: 2021, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Kentucky',
  pos: null,
  jersey: 30
},
{
  id: 169,
  name: 'Derrick Favors',
  nba: { start: 2010, pro: 11, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '265',
  college: 'Georgia Tech',
  pos: 'F',
  jersey: 15
},
{
  id: 384,
  name: 'Mike Muscala',
  nba: { start: 2013, pro: 8, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: '6', inches: '6' },
  weight: '240',
  college: 'Bucknell',
  pos: 'F-C',
  jersey: 33
},
{
  id: 1810,
  name: 'Scotty Hopson',
  nba: { start: 2013, pro: 0, name: "Oklahoma City Thunder", nickname: "OKC" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Tennessee',
  pos: null,
  jersey: 55
},
{
  id: 779,
  name: 'Markelle Fultz',
  nba: { start: 2017, pro: 4, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '209',
  college: 'Washington',
  pos: 'G',
  jersey: 20
},
{
  id: 801,
  name: 'Jonathan Isaac',
  nba: { start: 2017, pro: 3, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Florida State',
  pos: 'F',
  jersey: 1
},
{
  id: 2201,
  name: 'Mychal Mulder',
  nba: { start: 0, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'G',
  jersey: 12
},
{
  id: 1820,
  name: 'Tahjere McCall',
  nba: { start: 0, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 6
},
{
  id: 932,
  name: 'Mo Bamba',
  nba: { start: 2018, pro: 3, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '7', inches: '7' },
  weight: '231',
  college: 'Texas-Austin',
  pos: 'C',
  jersey: 5
},
{
  id: 950,
  name: 'Wendell Carter Jr.',
  nba: { start: 2018, pro: 3, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '270',
  college: 'Duke',
  pos: 'C-F',
  jersey: 34
},
{
  id: 1450,
  name: 'Justin Jackson',
  nba: { start: 0, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Maryland',
  pos: 'F',
  jersey: null
},
{
  id: 995,
  name: 'Yante Maten',
  nba: { start: 2018, pro: 1, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '240',
  college: 'Georgia',
  pos: 'F',
  jersey: 26
},
{
  id: 1037,
  name: 'Moritz Wagner',
  nba: { start: 2018, pro: 3, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '245',
  college: 'Michigan',
  pos: 'F-C',
  jersey: 21
},
{
  id: 1428,
  name: 'D.J. Hogg',
  nba: { start: 0, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Texas A&M'
},
{
  id: 1067,
  name: 'BJ Johnson',
  nba: { start: 2018, pro: 2, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'La Salle',
  pos: 'F',
  jersey: 20
},
{
  id: 1883,
  name: 'Chuma Okeke',
  nba: { start: 2020, pro: 1, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '229',
  college: 'Auburn',
  pos: 'F',
  jersey: 3
},
{
  id: 1852,
  name: 'Ignas Brazdeikis',
  nba: { start: 2019, pro: 2, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '221',
  college: 'Michigan',
  pos: 'F',
  jersey: 17
},
{
  id: 1892,
  name: 'Admiral Schofield',
  nba: { start: 2019, pro: 1, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '241',
  college: 'Tennessee',
  pos: 'F',
  jersey: 25
},
{
  id: 2417,
  name: 'Hassani Gravett',
  nba: { start: 2021, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '187',
  college: 'South Carolina',
  pos: 'G',
  jersey: 12
},
{
  id: 2532,
  name: 'Devin Cannady',
  nba: { start: 2020, pro: 1, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '183',
  college: 'Princeton',
  pos: 'G',
  jersey: 30
},
{
  id: 2563,
  name: 'Cole Anthony',
  nba: { start: 2020, pro: 1, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'North Carolina',
  pos: 'G',
  jersey: 50
},
{
  id: 2597,
  name: 'R.J. Hampton',
  nba: { start: 2020, pro: 1, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '175',
  college: 'New Zealand Breakers',
  pos: 'G',
  jersey: 13
},
{
  id: 2653,
  name: 'Jon Teske',
  nba: { start: 2021, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '7', inches: '7' },
  weight: '265',
  college: 'Michigan',
  pos: 'C',
  jersey: 15
},
{
  id: 2592,
  name: 'Freddie Gillespie',
  nba: { start: 2020, pro: 1, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '245',
  college: 'Baylor',
  pos: 'C',
  jersey: null
},
{
  id: 2878,
  name: 'Jeff Dowtin',
  nba: { start: 2021, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Rhode Island',
  pos: 'G',
  jersey: 15
},
{
  id: 3087,
  name: 'Shakur Juiston',
  nba: { start: 0, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Oregon'
},
{
  id: 3042,
  name: 'Jaire Grayer',
  nba: { start: 0, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'TCU'
},
{
  id: 2858,
  name: 'Franz Wagner',
  nba: { start: 2021, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Michigan',
  pos: 'F',
  jersey: 22
},
{
  id: 2852,
  name: 'Jalen Suggs',
  nba: { start: 2021, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Gonzaga',
  pos: 'G',
  jersey: 4
},
{
  id: 3394,
  name: 'Aleem Ford',
  nba: { start: 2021, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Wisconsin',
  pos: null,
  jersey: 11
},
{
  id: 3374,
  name: 'Jeremiah Tilmon',
  nba: { start: 0, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 23
},
{
  id: 325,
  name: 'Robin Lopez',
  nba: { start: 2008, pro: 13, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '7', inches: '7' },
  weight: '281',
  college: 'Stanford',
  pos: 'C',
  jersey: 33
},
{
  id: 371,
  name: "E'Twaun Moore",
  nba: { start: 2011, pro: 10, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '191',
  college: 'Purdue',
  pos: 'G',
  jersey: 55
},
{
  id: 457,
  name: 'Terrence Ross',
  nba: { start: 2012, pro: 9, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '206',
  college: 'Washington',
  pos: 'G-F',
  jersey: 31
},
{
  id: 95,
  name: 'Michael Carter-Williams',
  nba: { start: 0, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 7
},
{
  id: 2764,
  name: 'Janis Timma',
  nba: { start: 0, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'F',
  jersey: null
},
{
  id: 220,
  name: 'Gary Harris',
  nba: { start: 2014, pro: 7, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'Michigan State',
  pos: 'G',
  jersey: 14
},
{
  id: 179,
  name: 'Tim Frazier',
  nba: { start: 2014, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Penn State',
  pos: null,
  jersey: 12
},
{
  id: 3007,
  name: 'Tahj Eaddy',
  nba: { start: 0, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '6', inches: '6' },
  weight: '165',
  college: 'USC'
},
{
  id: 3134,
  name: 'Asbjorn Midtgaard',
  nba: { start: 0, pro: 0, name: "Orlando Magic", nickname: "ORL" },
  height: { feets: '7', inches: '7' },
  weight: '270',
  college: 'Grand Canyon'
},
{
  id: 97,
  name: 'Willie Cauley-Stein',
  nba: { start: 2015, pro: 0, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Kentucky',
  pos: null,
  jersey: null
},
{
  id: 481,
  name: 'Ben Simmons',
  nba: { start: 2017, pro: 4, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '240',
  college: 'Louisiana State',
  pos: 'G-F',
  jersey: 10
},
{
  id: 391,
  name: 'Georges Niang',
  nba: { start: 2016, pro: 5, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Iowa State',
  pos: 'F',
  jersey: 20
},
{
  id: 818,
  name: 'Furkan Korkmaz',
  nba: { start: 2017, pro: 4, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '202',
  college: 'Anadolu Efes',
  pos: 'G-F',
  jersey: 30
},
{
  id: 626,
  name: 'Shaquille Harrison',
  nba: { start: 2017, pro: 0, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Tulsa',
  pos: null,
  jersey: 10
},
{
  id: 832,
  name: 'Frank Mason',
  nba: { start: 0, pro: 0, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'G',
  jersey: 15
},
{
  id: 1001,
  name: 'Shake Milton',
  nba: { start: 2018, pro: 3, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Southern Methodist',
  pos: 'G-F',
  jersey: 18
},
{
  id: 2634,
  name: 'Myles Powell',
  nba: { start: 2021, pro: 0, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Seton Hall',
  pos: 'G',
  jersey: 5
},
{
  id: 2790,
  name: 'Charles Bassey',
  nba: { start: 2021, pro: 0, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Western Kentucky',
  pos: 'C-F',
  jersey: 23
},
{
  id: 2618,
  name: 'Charles Matthews',
  nba: { start: 0, pro: 0, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 5
},
{
  id: 1896,
  name: 'Matisse Thybulle',
  nba: { start: 2019, pro: 2, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '201',
  college: 'Washington',
  pos: 'G-F',
  jersey: 22
},
{
  id: 2111,
  name: 'Charlie Brown Jr.',
  nba: { start: 2019, pro: 2, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '199',
  college: "St. Joseph's (PA)",
  pos: 'G',
  jersey: 16
},
{
  id: 2152,
  name: 'Rayjon Tucker',
  nba: { start: 2019, pro: 2, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '209',
  college: 'Arkansas-Little Rock',
  pos: 'G',
  jersey: 59
},
{
  id: 2487,
  name: 'Lamar Peters',
  nba: { start: 0, pro: 0, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 3
},
{
  id: 2619,
  name: 'Tyrese Maxey',
  nba: { start: 2020, pro: 1, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Kentucky',
  pos: 'G',
  jersey: null
},
{
  id: 2638,
  name: 'Paul Reed',
  nba: { start: 2020, pro: 1, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'DePaul',
  pos: 'F',
  jersey: 44
},
{
  id: 2839,
  name: 'Filip Petrusev',
  nba: { start: 0, pro: 0, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Gonzaga',
  pos: 'C',
  jersey: null
},
{
  id: 2604,
  name: 'Isaiah Joe',
  nba: { start: 2020, pro: 1, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '165',
  college: 'Arkansas',
  pos: 'G',
  jersey: 7
},
{
  id: 2640,
  name: 'Grant Riller',
  nba: { start: 2020, pro: 1, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'College of Charleston',
  pos: 'G',
  jersey: 5
},
{
  id: 3154,
  name: 'Daishen Nix',
  nba: { start: 2021, pro: 0, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '224',
  college: 'NBA G League Ignite',
  pos: 'G',
  jersey: 15
},
{
  id: 3091,
  name: 'Braxton Key',
  nba: { start: 2021, pro: 0, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Virginia',
  pos: 'F',
  jersey: 17
},
{
  id: 2851,
  name: 'Jaden Springer',
  nba: { start: 2021, pro: 0, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '202',
  college: 'Tennessee',
  pos: 'G',
  jersey: 11
},
{
  id: 2813,
  name: 'Aaron Henry',
  nba: { start: 2021, pro: 0, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'Michigan State',
  pos: 'F',
  jersey: 50
},
{
  id: 2948,
  name: 'Mitch Ballock',
  nba: { start: 0, pro: 0, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Creighton',
  pos: 'G',
  jersey: null
},
{
  id: 366,
  name: 'Paul Millsap',
  nba: { start: 2006, pro: 15, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '257',
  college: 'Louisiana Tech',
  pos: 'F',
  jersey: 8
},
{
  id: 286,
  name: 'DeAndre Jordan',
  nba: { start: 2008, pro: 13, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '265',
  college: 'Texas A&M',
  pos: 'C',
  jersey: 9
},
{
  id: 216,
  name: 'James Harden',
  nba: { start: 2009, pro: 12, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Arizona State',
  pos: 'G',
  jersey: 1
},
{
  id: 203,
  name: 'Danny Green',
  nba: { start: 2009, pro: 12, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'North Carolina',
  pos: 'G',
  jersey: 14
},
{
  id: 222,
  name: 'Tobias Harris',
  nba: { start: 2011, pro: 10, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '226',
  college: 'Tennessee',
  pos: 'F',
  jersey: 12
},
{
  id: 147,
  name: 'Andre Drummond',
  nba: { start: 2012, pro: 9, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '279',
  college: 'Connecticut',
  pos: 'C',
  jersey: null
},
{
  id: 123,
  name: 'Seth Curry',
  nba: { start: 2013, pro: 7, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Duke',
  pos: 'G',
  jersey: 30
},
{
  id: 159,
  name: 'Joel Embiid',
  nba: { start: 2016, pro: 5, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: '7', inches: '7' },
  weight: '280',
  college: 'Kansas',
  pos: 'C-F',
  jersey: 21
},
{
  id: 277,
  name: 'Tyler Johnson',
  nba: { start: 2014, pro: 0, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Fresno State',
  pos: null,
  jersey: 28
},
{
  id: 3305,
  name: 'Devonte Green',
  nba: { start: 0, pro: 0, name: "Philadelphia 76ers", nickname: "PHI" },
  height: { feets: null, inches: null },
  weight: null,
  college: null
},
{
  id: 415,
  name: 'Chris Paul',
  nba: { start: 2005, pro: 16, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '175',
  college: 'Wake Forest',
  pos: 'G',
  jersey: 3
},
{
  id: 290,
  name: 'Frank Kaminsky',
  nba: { start: 2015, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Wisconsin',
  pos: null,
  jersey: 8
},
{
  id: 64,
  name: 'Devin Booker',
  nba: { start: 2015, pro: 6, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '206',
  college: 'Kentucky',
  pos: 'G',
  jersey: 1
},
{
  id: 417,
  name: 'Cameron Payne',
  nba: { start: 2015, pro: 6, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '183',
  college: 'Murray State',
  pos: 'G',
  jersey: 15
},
{
  id: 580,
  name: 'Chasson Randle',
  nba: { start: 0, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 4
},
{
  id: 1831,
  name: 'Michael Frazier',
  nba: { start: 0, pro: 1, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Florida',
  pos: 'G',
  jersey: 21
},
{
  id: 847,
  name: 'Abdel Nader',
  nba: { start: 2017, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Iowa State',
  pos: null,
  jersey: 11
},
{
  id: 3402,
  name: 'Paris Bass',
  nba: { start: 2021, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Detroit Mercy',
  pos: null,
  jersey: 30
},
{
  id: 806,
  name: 'Justin Jackson',
  nba: { start: 2017, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'North Carolina',
  pos: null,
  jersey: 45
},
{
  id: 765,
  name: 'Torrey Craig',
  nba: { start: 2017, pro: 4, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '221',
  college: 'South Carolina Upstate',
  pos: 'F',
  jersey: null
},
{
  id: 2971,
  name: 'Vitto Brown',
  nba: { start: 0, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Wisconsin'
},
{
  id: 940,
  name: 'Mikal Bridges',
  nba: { start: 2018, pro: 3, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '209',
  college: 'Villanova',
  pos: 'F',
  jersey: 25
},
{
  id: 979,
  name: 'Aaron Holiday',
  nba: { start: 2018, pro: 3, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'UCLA',
  pos: 'G',
  jersey: 4
},
{
  id: 981,
  name: 'Chandler Hutchison',
  nba: { start: 2018, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Boise State',
  pos: null,
  jersey: 35
},
{
  id: 1022,
  name: 'Landry Shamet',
  nba: { start: 2018, pro: 3, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Wichita State',
  pos: 'G',
  jersey: 14
},
{
  id: 930,
  name: 'Deandre Ayton',
  nba: { start: 2018, pro: 3, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Arizona',
  pos: 'C',
  jersey: 22
},
{
  id: 1032,
  name: 'Emanuel Terry',
  nba: { start: 2018, pro: 1, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Lincoln Memorial',
  pos: 'F',
  jersey: 10
},
{
  id: 3121,
  name: 'Nate Mason',
  nba: { start: 0, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Minnesota'
},
{
  id: 1871,
  name: 'Cameron Johnson',
  nba: { start: 2019, pro: 2, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'North Carolina',
  pos: 'F',
  jersey: 23
},
{
  id: 2193,
  name: 'Zach Hankins',
  nba: { start: 0, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '245',
  college: 'Xavier'
},
{
  id: 2384,
  name: 'Kyle Alexander',
  nba: { start: 0, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'F-C',
  jersey: 17
},
{
  id: 2444,
  name: 'Justin Simon',
  nba: { start: 0, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 5
},
{
  id: 2644,
  name: 'Jalen Smith',
  nba: { start: 2020, pro: 1, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Maryland',
  pos: 'F-C',
  jersey: 25
},
{
  id: 3086,
  name: 'Tyrique Jones',
  nba: { start: 0, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '239',
  college: 'Xavier'
},
{
  id: 2562,
  name: 'Ty-Shon Alexander',
  nba: { start: 2020, pro: 1, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Creighton',
  pos: 'G',
  jersey: null
},
{
  id: 3258,
  name: 'MJ Walker',
  nba: { start: 2021, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '213',
  college: 'Florida State',
  pos: 'G',
  jersey: 21
},
{
  id: 2859,
  name: 'Ish Wainright',
  nba: { start: 2021, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Baylor',
  pos: 'F',
  jersey: 12
},
{
  id: 3409,
  name: 'Gabriel Lundberg',
  nba: { start: 2021, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '203',
  college: 'CSKA Moscow',
  pos: 'G',
  jersey: 19
},
{
  id: 353,
  name: 'JaVale McGee',
  nba: { start: 2008, pro: 13, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '7', inches: '7' },
  weight: '270',
  college: 'Nevada-Reno',
  pos: 'C-F',
  jersey: null
},
{
  id: 54,
  name: 'Bismack Biyombo',
  nba: { start: 2011, pro: 10, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '255',
  college: 'Baloncesto Fuenlabrada',
  pos: 'C',
  jersey: 18
},
{
  id: 121,
  name: 'Jae Crowder',
  nba: { start: 2012, pro: 9, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '235',
  college: 'Marquette',
  pos: 'F',
  jersey: 99
},
{
  id: 418,
  name: 'Elfrid Payton',
  nba: { start: 2014, pro: 7, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Louisana-Lafayette',
  pos: 'G',
  jersey: 2
},
{
  id: 468,
  name: 'Dario Saric',
  nba: { start: 2016, pro: 5, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Anadolu Efes',
  pos: 'F-C',
  jersey: 20
},
{
  id: 2998,
  name: 'Alpha Diallo',
  nba: { start: 0, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'Providence'
},
{
  id: 3047,
  name: 'Jon Axel Gudmundsson',
  nba: { start: 0, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Davidson'
},
{
  id: 3090,
  name: 'Trey Kell',
  nba: { start: 0, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'San Diego State'
},
{
  id: 3107,
  name: 'Jo Lual-Acuil Jr.',
  nba: { start: 0, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '7', inches: '7' },
  weight: '225',
  college: 'Baylor'
},
{
  id: 3157,
  name: 'Emmanuel Nzekwesi',
  nba: { start: 0, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '240',
  college: 'Oral Roberts'
},
{
  id: 3214,
  name: 'Jaleen Smith',
  nba: { start: 0, pro: 0, name: "Phoenix Suns", nickname: "PHO" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'New Hampshire'
}, {
  id: 378,
  name: 'Emmanuel Mudiay',
  nba: { start: 2015, pro: 5, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Guangdong',
  pos: 'G',
  jersey: 15
},
{
  id: 558,
  name: 'Justise Winslow',
  nba: { start: 2015, pro: 6, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '222',
  college: 'Duke',
  pos: 'F-G',
  jersey: 26
},
{
  id: 434,
  name: 'Norman Powell',
  nba: { start: 2015, pro: 6, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'UCLA',
  pos: 'G',
  jersey: 24
},
{
  id: 581,
  name: 'Quinn Cook',
  nba: { start: 0, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 8
},
{
  id: 385,
  name: 'Larry Nance Jr.',
  nba: { start: 2015, pro: 6, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '245',
  college: 'Wyoming',
  pos: 'F-C',
  jersey: 22
},
{
  id: 104,
  name: 'Marquese Chriss',
  nba: { start: 2016, pro: 5, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '240',
  college: 'Washington',
  pos: 'F',
  jersey: 35
},
{
  id: 152,
  name: 'Kris Dunn',
  nba: { start: 2016, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Providence',
  pos: null,
  jersey: 18
},
{
  id: 876,
  name: 'Dennis Smith Jr.',
  nba: { start: 2017, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'North Carolina State',
  pos: null,
  jersey: 10
},
{
  id: 791,
  name: 'Josh Hart',
  nba: { start: 2017, pro: 4, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Villanova',
  pos: 'G',
  jersey: 11
},
{
  id: 873,
  name: 'Kobi Simmons',
  nba: { start: 0, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'G',
  jersey: 23
},
{
  id: 741,
  name: 'Antonio Blakeney',
  nba: { start: 2017, pro: 2, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '192',
  college: 'Louisiana State',
  pos: 'G',
  jersey: 9
},
{
  id: 769,
  name: 'Milton Doyle',
  nba: { start: 0, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 9
},
{
  id: 834,
  name: 'Erik McCree',
  nba: { start: 2017, pro: 1, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Louisiana Tech',
  pos: 'F',
  jersey: 21
},
{
  id: 986,
  name: 'George King',
  nba: { start: 2018, pro: 1, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Colorado Boulder',
  pos: 'F-G',
  jersey: 8
},
{
  id: 1023,
  name: 'Anfernee Simons',
  nba: { start: 2018, pro: 3, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '181',
  college: 'Edgewater HS (FL)',
  pos: 'G',
  jersey: 1
},
{
  id: 966,
  name: 'Drew Eubanks',
  nba: { start: 2018, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Oregon State',
  pos: null,
  jersey: 24
},
{
  id: 3397,
  name: 'Jarron Cumberland',
  nba: { start: 2021, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Cincinnati',
  pos: null,
  jersey: 34
},
{
  id: 2585,
  name: 'CJ Elleby',
  nba: { start: 2020, pro: 1, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Washington State',
  pos: 'F-G',
  jersey: 16
},
{
  id: 2632,
  name: 'Reggie Perry',
  nba: { start: 2020, pro: 1, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Mississippi State',
  pos: 'F-C',
  jersey: null
},
{
  id: 1875,
  name: 'Nassir Little',
  nba: { start: 2019, pro: 2, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'North Carolina',
  pos: 'F-G',
  jersey: 9
},
{
  id: 1876,
  name: 'Didi Louzada',
  nba: { start: 2020, pro: 1, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '188',
  college: 'Sydney Kings',
  pos: 'G',
  jersey: 35
},
{
  id: 2440,
  name: 'Keljin Blevins',
  nba: { start: 2020, pro: 1, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Montana State',
  pos: 'G',
  jersey: 21
},
{
  id: 2602,
  name: 'Elijah Hughes',
  nba: { start: 2020, pro: 1, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Syracuse',
  pos: 'G',
  jersey: 19
},
{
  id: 3398,
  name: 'Brandon Williams',
  nba: { start: 2021, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Arizona',
  pos: 'G',
  jersey: 8
},
{
  id: 2795,
  name: 'Greg Brown III',
  nba: { start: 2021, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '206',
  college: 'Texas-Austin',
  pos: 'F',
  jersey: 4
},
{
  id: 2820,
  name: 'Keon Johnson',
  nba: { start: 2021, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Tennessee',
  pos: 'G',
  jersey: 6
},
{
  id: 2861,
  name: 'Trendon Watford',
  nba: { start: 2021, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '237',
  college: 'Louisiana State',
  pos: 'F',
  jersey: 2
},
{
  id: 3376,
  name: 'Cameron McGriff',
  nba: { start: 2021, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Oklahoma State',
  pos: null,
  jersey: 8
},
{
  id: 47,
  name: 'Michael Beasley',
  nba: { start: 2008, pro: 11, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Kansas State',
  pos: 'F',
  jersey: 30
},
{
  id: 414,
  name: 'Patrick Patterson',
  nba: { start: 0, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 54
},
{
  id: 59,
  name: 'Eric Bledsoe',
  nba: { start: 2010, pro: 11, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '214',
  college: 'Kentucky',
  pos: 'G',
  jersey: 5
},
{
  id: 167,
  name: 'Kenneth Faried',
  nba: { start: 0, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'F',
  jersey: 35
},
{
  id: 319,
  name: 'Damian Lillard',
  nba: { start: 2012, pro: 9, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Weber State',
  pos: 'G',
  jersey: null
},
{
  id: 355,
  name: 'Ben McLemore',
  nba: { start: 2013, pro: 8, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Kansas',
  pos: 'G',
  jersey: 23
},
{
  id: 347,
  name: 'CJ McCollum',
  nba: { start: 2013, pro: 8, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Lehigh',
  pos: 'G',
  jersey: 3
},
{
  id: 571,
  name: 'Cody Zeller',
  nba: { start: 2013, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Indiana',
  pos: null,
  jersey: 40
},
{
  id: 118,
  name: 'Robert Covington',
  nba: { start: 2013, pro: 8, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '209',
  college: 'Tennessee State',
  pos: 'F',
  jersey: 23
},
{
  id: 492,
  name: 'Tony Snell',
  nba: { start: 2013, pro: 8, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '213',
  college: 'New Mexico',
  pos: 'G',
  jersey: 21
},
{
  id: 398,
  name: 'Jusuf Nurkic',
  nba: { start: 2014, pro: 7, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '290',
  college: 'Cedevita',
  pos: 'C',
  jersey: 27
},
{
  id: 3255,
  name: 'Mark Vital',
  nba: { start: 0, pro: 0, name: "Portland Trail Blazers", nickname: "POR" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Baylor'
},
{
  id: 378,
  name: 'Emmanuel Mudiay',
  nba: { start: 2015, pro: 5, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Guangdong',
  pos: 'G',
  jersey: 15
},
{
  id: 246,
  name: 'Richaun Holmes',
  nba: { start: 2015, pro: 6, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '235',
  college: 'Bowling Green',
  pos: 'F',
  jersey: 22
},
{
  id: 331,
  name: 'Trey Lyles',
  nba: { start: 2015, pro: 6, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '234',
  college: 'Kentucky',
  pos: 'F',
  jersey: 41
},
{
  id: 463,
  name: 'Domantas Sabonis',
  nba: { start: 2016, pro: 5, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '240',
  college: 'Gonzaga',
  pos: 'F-C',
  jersey: 10
},
{
  id: 236,
  name: 'Buddy Hield',
  nba: { start: 2016, pro: 5, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Oklahoma',
  pos: 'G',
  jersey: 24
},
{
  id: 281,
  name: 'Damian Jones',
  nba: { start: 2016, pro: 5, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '245',
  college: 'Vanderbilt',
  pos: 'C',
  jersey: 30
},
{
  id: 805,
  name: 'Josh Jackson',
  nba: { start: 2017, pro: 4, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '207',
  college: 'Kansas',
  pos: 'G-F',
  jersey: 55
},
{
  id: 776,
  name: "De'Aaron Fox",
  nba: { start: 2017, pro: 4, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Kentucky',
  pos: 'G',
  jersey: 5
},
{
  id: 931,
  name: 'Marvin Bagley III',
  nba: { start: 2018, pro: 3, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '235',
  college: 'Duke',
  pos: 'F',
  jersey: 35
},
{
  id: 962,
  name: 'Donte DiVincenzo',
  nba: { start: 2018, pro: 3, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '203',
  college: 'Villanova',
  pos: 'G',
  jersey: null
},
{
  id: 999,
  name: 'Chimezie Metu',
  nba: { start: 2018, pro: 3, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Southern California',
  pos: 'F-C',
  jersey: 7
},
{
  id: 2168,
  name: 'Terence Davis',
  nba: { start: 0, pro: 0, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'G',
  jersey: 3
},
{
  id: 1043,
  name: 'Johnathan Williams',
  nba: { start: 0, pro: 2, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '228',
  college: 'Gonzaga',
  pos: 'F',
  jersey: 19
},
{
  id: 1032,
  name: 'Emanuel Terry',
  nba: { start: 2018, pro: 1, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Lincoln Memorial',
  pos: 'F',
  jersey: 10
},
{
  id: 2207,
  name: 'Justin Robinson',
  nba: { start: 2019, pro: 2, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Virginia Tech',
  pos: 'G',
  jersey: 55
},
{
  id: 2131,
  name: 'Louis King',
  nba: { start: 2019, pro: 1, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Oregon',
  pos: 'F',
  jersey: 23
},
{
  id: 2844,
  name: 'Neemias Queta',
  nba: { start: 2021, pro: 0, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '7', inches: '7' },
  weight: '248',
  college: 'Utah State',
  pos: 'C',
  jersey: 88
},
{
  id: 2882,
  name: 'Marcus Graves',
  nba: { start: 0, pro: 0, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '187',
  college: 'Sacramento State'
},
{
  id: 2595,
  name: 'Tyrese Haliburton',
  nba: { start: 2020, pro: 1, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Iowa State',
  pos: 'G',
  jersey: null
},
{
  id: 2637,
  name: "Jahmi'us Ramsey",
  nba: { start: 2020, pro: 1, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Texas Tech',
  pos: 'G',
  jersey: 20
},
{
  id: 2667,
  name: 'Robert Woodard II',
  nba: { start: 2020, pro: 1, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '235',
  college: 'Mississippi State',
  pos: 'F',
  jersey: 28
},
{
  id: 2916,
  name: 'Princepal Singh',
  nba: { start: 0, pro: 0, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '221',
  college: '                                   '
},
{
  id: 2625,
  name: 'Ade Murkey',
  nba: { start: 2021, pro: 0, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Denver',
  pos: 'G',
  jersey: null
},
{
  id: 2834,
  name: 'Davion Mitchell',
  nba: { start: 2021, pro: 0, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '202',
  college: 'Baylor',
  pos: 'G',
  jersey: 15
},
{
  id: 2921,
  name: 'DJ Steward',
  nba: { start: 0, pro: 0, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '163',
  college: 'Duke',
  pos: 'G',
  jersey: null
},
{
  id: 2986,
  name: 'Matt Coleman III',
  nba: { start: 0, pro: 0, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Texas',
  pos: 'G',
  jersey: null
},
{
  id: 2914,
  name: 'Jordan Schakel',
  nba: { start: 2021, pro: 0, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'San Diego State',
  pos: 'G',
  jersey: 20
},
{
  id: 515,
  name: 'Tristan Thompson',
  nba: { start: 2011, pro: 10, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '254',
  college: 'Texas-Austin',
  pos: 'C-F',
  jersey: 3
},
{
  id: 36,
  name: 'Harrison Barnes',
  nba: { start: 2012, pro: 9, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'North Carolina',
  pos: 'F',
  jersey: 40
},
{
  id: 303,
  name: 'Jeremy Lamb',
  nba: { start: 2012, pro: 9, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Connecticut',
  pos: 'G-F',
  jersey: 26
},
{
  id: 217,
  name: 'Maurice Harkless',
  nba: { start: 2012, pro: 9, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: "St. John's",
  pos: 'F-G',
  jersey: 8
},
{
  id: 243,
  name: 'Justin Holiday',
  nba: { start: 2012, pro: 8, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Washington',
  pos: 'F-G',
  jersey: 9
},
{
  id: 313,
  name: 'Alex Len',
  nba: { start: 2013, pro: 8, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '7', inches: '7' },
  weight: '250',
  college: 'Maryland',
  pos: 'C',
  jersey: 25
},
{
  id: 2869,
  name: 'Alex Antetokounmpo',
  nba: { start: 0, pro: 0, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '214',
  college: 'UCAM Murcia (Spain)'
},
{
  id: 2885,
  name: 'Damien Jefferson',
  nba: { start: 0, pro: 0, name: "Sacramento Kings", nickname: "SAC" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Creighton'
},
{
  id: 446,
  name: 'Josh Richardson',
  nba: { start: 2015, pro: 6, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Tennessee',
  pos: 'G',
  jersey: 7
},
{
  id: 302,
  name: 'Skal Labissiere',
  nba: { start: 0, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 7
},
{
  id: 382,
  name: 'Dejounte Murray',
  nba: { start: 2016, pro: 4, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Washington',
  pos: 'G',
  jersey: 5
},
{
  id: 428,
  name: 'Jakob Poeltl',
  nba: { start: 2016, pro: 5, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '7', inches: '7' },
  weight: '245',
  college: 'Utah',
  pos: 'C',
  jersey: 25
},
{
  id: 230,
  name: 'Juancho Hernangomez',
  nba: { start: 2016, pro: 5, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '214',
  college: 'Estudiantes',
  pos: 'F',
  jersey: 41
},
{
  id: 176,
  name: 'Bryn Forbes',
  nba: { start: 2016, pro: 5, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Michigan State',
  pos: 'G',
  jersey: 6
},
{
  id: 762,
  name: 'Zach Collins',
  nba: { start: 2017, pro: 3, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Gonzaga',
  pos: 'F-C',
  jersey: 23
},
{
  id: 897,
  name: 'Derrick White',
  nba: { start: 2017, pro: 4, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Colorado',
  pos: 'G',
  jersey: 9
},
{
  id: 844,
  name: 'Jaylen Morris',
  nba: { start: 2017, pro: 2, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Molloy',
  pos: 'G',
  jersey: 30
},
{
  id: 934,
  name: 'Keita Bates-Diop',
  nba: { start: 2018, pro: 3, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '229',
  college: 'Ohio State',
  pos: 'F',
  jersey: 31
},
{
  id: 1057,
  name: 'Malik Newman',
  nba: { start: 2019, pro: 1, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Kansas',
  pos: 'G',
  jersey: 14
},
{
  id: 1038,
  name: 'Lonnie Walker IV',
  nba: { start: 2018, pro: 3, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '204',
  college: 'Miami',
  pos: 'G-F',
  jersey: 1
},
{
  id: 1485,
  name: 'Jock Landale',
  nba: { start: 0, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'C',
  jersey: 34
},
{
  id: 966,
  name: 'Drew Eubanks',
  nba: { start: 2018, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Oregon State',
  pos: null,
  jersey: 24
},
{
  id: 1948,
  name: 'DaQuan Jeffries',
  nba: { start: 2019, pro: 3, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Tulsa',
  pos: 'G-F',
  jersey: 55
},
{
  id: 1872,
  name: 'Keldon Johnson',
  nba: { start: 2019, pro: 2, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Kentucky',
  pos: 'F-G',
  jersey: 3
},
{
  id: 1874,
  name: 'Romeo Langford',
  nba: { start: 2019, pro: 2, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '216',
  college: 'Indiana',
  pos: 'G-F',
  jersey: 35
},
{
  id: 1923,
  name: 'Zach Norvell Jr.',
  nba: { start: 0, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 25
},
{
  id: 1891,
  name: 'Luka Samanic',
  nba: { start: 0, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 91
},
{
  id: 2387,
  name: 'Devontae Cacok',
  nba: { start: 2019, pro: 2, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '240',
  college: 'North Carolina-Wilmington',
  pos: 'F',
  jersey: 18
},
{
  id: 3000,
  name: 'Stephen Domingo',
  nba: { start: 0, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'California'
},
{
  id: 3078,
  name: 'Kaleb Johnson',
  nba: { start: 0, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Georgetown'
},
{
  id: 2661,
  name: 'Devin Vassell',
  nba: { start: 2020, pro: 1, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Florida State',
  pos: 'G-F',
  jersey: 24
},
{
  id: 2606,
  name: 'Tre Jones',
  nba: { start: 2020, pro: 1, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Duke',
  pos: 'G',
  jersey: 33
},
{
  id: 2667,
  name: 'Robert Woodard II',
  nba: { start: 2020, pro: 1, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '235',
  college: 'Mississippi State',
  pos: 'F',
  jersey: 28
},
{
  id: 2609,
  name: 'Anthony Lamb',
  nba: { start: 2020, pro: 1, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '227',
  college: 'Vermont',
  pos: 'F',
  jersey: 33
},
{
  id: 2659,
  name: 'Jahlil Tripp',
  nba: { start: 0, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 5
},
{
  id: 3187,
  name: 'Nate Renfro',
  nba: { start: 0, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '202',
  college: 'San Francisco',
  pos: 'F',
  jersey: null
},
{
  id: 2843,
  name: 'Joshua Primo',
  nba: { start: 2021, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '189',
  college: 'Alabama',
  pos: 'G',
  jersey: 11
},
{
  id: 2862,
  name: 'Joe Wieskamp',
  nba: { start: 2021, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Iowa',
  pos: 'G-F',
  jersey: 15
},
{
  id: 2922,
  name: 'DJ Stewart',
  nba: { start: 0, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Mississippi State',
  pos: 'G',
  jersey: 18
},
{
  id: 3138,
  name: 'Matt Mitchell',
  nba: { start: 0, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '235',
  college: 'San Diego State'
},
{
  id: 570,
  name: 'Thaddeus Young',
  nba: { start: 2007, pro: 14, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '235',
  college: 'Georgia Tech',
  pos: 'F',
  jersey: 21
},
{
  id: 12,
  name: 'Al-Farouq Aminu',
  nba: { start: 0, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 72
},
{
  id: 470,
  name: 'Tomas Satoransky',
  nba: { start: 2016, pro: 5, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'FC Barcelona',
  pos: 'G',
  jersey: 31
},
{
  id: 351,
  name: 'Doug McDermott',
  nba: { start: 2014, pro: 7, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Creighton',
  pos: 'F',
  jersey: 17
},
{
  id: 277,
  name: 'Tyler Johnson',
  nba: { start: 2014, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Fresno State',
  pos: null,
  jersey: 28
},
{
  id: 3249,
  name: 'Justin Turner',
  nba: { start: 0, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Bowling Green'
},
{
  id: 3017,
  name: 'Biram Faye',
  nba: { start: 0, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'CB Girona'
},
{
  id: 2996,
  name: 'Eric Demers',
  nba: { start: 0, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Gordon'
},
{
  id: 3190,
  name: 'Justin Robinson',
  nba: { start: 0, pro: 0, name: "San Antonio Spurs", nickname: "SAS" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Duke'
}, {
  id: 132,
  name: 'Sam Dekker',
  nba: { start: 2015, pro: 0, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Wisconsin',
  pos: null,
  jersey: 8
},
{
  id: 479,
  name: 'Pascal Siakam',
  nba: { start: 2016, pro: 5, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'New Mexico State',
  pos: 'F',
  jersey: 43
},
{
  id: 527,
  name: 'Fred VanVleet',
  nba: { start: 2016, pro: 5, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '197',
  college: 'Wichita State',
  pos: 'G',
  jersey: 23
},
{
  id: 732,
  name: 'OG Anunoby',
  nba: { start: 2017, pro: 4, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '232',
  college: 'Indiana',
  pos: 'F',
  jersey: 3
},
{
  id: 899,
  name: 'D.J. Wilson',
  nba: { start: 2017, pro: 0, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Michigan',
  pos: null,
  jersey: 9
},
{
  id: 745,
  name: 'Chris Boucher',
  nba: { start: 2017, pro: 4, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Oregon',
  pos: 'F-C',
  jersey: 25
},
{
  id: 1006,
  name: 'Svi Mykhailiuk',
  nba: { start: 2018, pro: 3, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Kansas',
  pos: 'G-F',
  jersey: 14
},
{
  id: 1058,
  name: 'Gary Trent Jr.',
  nba: { start: 2018, pro: 3, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '209',
  college: 'Duke',
  pos: 'G-F',
  jersey: 33
},
{
  id: 939,
  name: 'Isaac Bonga',
  nba: { start: 2018, pro: 3, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Skyliners Frankfurt',
  pos: 'G',
  jersey: 17
},
{
  id: 1040,
  name: 'Yuta Watanabe',
  nba: { start: 2018, pro: 3, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'George Washington',
  pos: 'G-F',
  jersey: 18
},
{
  id: 2632,
  name: 'Reggie Perry',
  nba: { start: 2020, pro: 1, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Mississippi State',
  pos: 'F-C',
  jersey: null
},
{
  id: 1898,
  name: 'Tremont Waters',
  nba: { start: 2019, pro: 2, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '5', inches: '5' },
  weight: '175',
  college: 'Louisiana State',
  pos: 'G',
  jersey: 51
},
{
  id: 2325,
  name: 'Armoni Brooks',
  nba: { start: 2020, pro: 1, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Houston',
  pos: 'G',
  jersey: 1
},
{
  id: 2438,
  name: 'Juwan Morgan',
  nba: { start: 2019, pro: 2, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '232',
  college: 'Indiana',
  pos: 'F',
  jersey: 16
},
{
  id: 2432,
  name: 'Jalen Adams',
  nba: { start: 0, pro: 0, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 6
},
{
  id: 2543,
  name: 'Matt Morgan',
  nba: { start: 0, pro: 0, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '174',
  college: 'Cornell',
  pos: 'G',
  jersey: null
},
{
  id: 2561,
  name: 'Precious Achiuwa',
  nba: { start: 2020, pro: 1, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Memphis',
  pos: 'F',
  jersey: 5
},
{
  id: 2631,
  name: 'Daniel Oturu',
  nba: { start: 2020, pro: 1, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '240',
  college: 'Minnesota',
  pos: 'C',
  jersey: 10
},
{
  id: 2587,
  name: 'Malachi Flynn',
  nba: { start: 2020, pro: 1, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '175',
  college: 'San Diego State',
  pos: 'G',
  jersey: 22
},
{
  id: 2594,
  name: 'Ashton Hagans',
  nba: { start: 0, pro: 0, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'G-F',
  jersey: 22
},
{
  id: 2596,
  name: 'Rayshaun Hammonds',
  nba: { start: 0, pro: 0, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 22
},
{
  id: 2592,
  name: 'Freddie Gillespie',
  nba: { start: 2020, pro: 1, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '245',
  college: 'Baylor',
  pos: 'C',
  jersey: null
},
{
  id: 2818,
  name: 'David Johnson',
  nba: { start: 2021, pro: 0, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '203',
  college: 'Louisville',
  pos: 'G',
  jersey: 13
},
{
  id: 2798,
  name: 'Justin Champagnie',
  nba: { start: 2021, pro: 0, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '206',
  college: 'Pittsburgh',
  pos: 'G-F',
  jersey: 11
},
{
  id: 2789,
  name: 'Scottie Barnes',
  nba: { start: 2021, pro: 0, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Florida State',
  pos: 'F',
  jersey: 4
},
{
  id: 2788,
  name: 'Dalano Banton',
  nba: { start: 2021, pro: 0, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '204',
  college: 'Nebraska',
  pos: 'F',
  jersey: 45
},
{
  id: 2993,
  name: 'Zaccheus Darko-Kelly',
  nba: { start: 0, pro: 0, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Providence'
},
{
  id: 2859,
  name: 'Ish Wainright',
  nba: { start: 2021, pro: 0, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Baylor',
  pos: 'F',
  jersey: 12
},
{
  id: 570,
  name: 'Thaddeus Young',
  nba: { start: 2007, pro: 14, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '235',
  college: 'Georgia Tech',
  pos: 'F',
  jersey: 21
},
{
  id: 146,
  name: 'Goran Dragic',
  nba: { start: 2008, pro: 13, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Union Olimpija',
  pos: 'G',
  jersey: 9
},
{
  id: 739,
  name: 'Khem Birch',
  nba: { start: 2017, pro: 4, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '233',
  college: 'UNLV',
  pos: 'C',
  jersey: 24
},
{
  id: 3109,
  name: 'Anas Mahmoud',
  nba: { start: 0, pro: 0, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '7', inches: '7' },
  weight: '215',
  college: 'Louisville'
},
{
  id: 3135,
  name: 'Isiaha Mike',
  nba: { start: 0, pro: 0, name: "Toronto Raptors", nickname: "TOR" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'SMU'
}, {
  id: 339,
  name: 'Jarell Martin',
  nba: { start: 0, pro: 0, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 24
},
{
  id: 851,
  name: "Royce O'Neale",
  nba: { start: 2017, pro: 4, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '226',
  college: 'Baylor',
  pos: 'F',
  jersey: 23
},
{
  id: 526,
  name: 'Denzel Valentine',
  nba: { start: 2016, pro: 0, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Michigan State',
  pos: null,
  jersey: 15
},
{
  id: 447,
  name: 'Malachi Richardson',
  nba: { start: 2016, pro: 2, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Syracuse',
  pos: 'G',
  jersey: 22
},
{
  id: 230,
  name: 'Juancho Hernangomez',
  nba: { start: 2016, pro: 5, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '214',
  college: 'Estudiantes',
  pos: 'F',
  jersey: 41
},
{
  id: 249,
  name: 'Danuel House Jr.',
  nba: { start: 2016, pro: 5, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Texas A&M',
  pos: 'F-G',
  jersey: 25
},
{
  id: 840,
  name: 'Donovan Mitchell',
  nba: { start: 2017, pro: 4, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Louisville',
  pos: 'G',
  jersey: 45
},
{
  id: 2565,
  name: 'Udoka Azubuike',
  nba: { start: 2020, pro: 1, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '7', inches: '7' },
  weight: '270',
  college: 'Kansas',
  pos: 'C-F',
  jersey: 20
},
{
  id: 2077,
  name: 'Zylan Cheatham',
  nba: { start: 2019, pro: 1, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Arizona State',
  pos: 'F',
  jersey: 45
},
{
  id: 1845,
  name: 'Nickeil Alexander-Walker',
  nba: { start: 2019, pro: 2, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Virginia Tech',
  pos: 'G',
  jersey: 6
},
{
  id: 1885,
  name: 'Miye Oni',
  nba: { start: 2019, pro: 0, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Yale',
  pos: null,
  jersey: 18
},
{
  id: 1886,
  name: 'Eric Paschall',
  nba: { start: 2019, pro: 2, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '255',
  college: 'Villanova',
  pos: 'F',
  jersey: null
},
{
  id: 1851,
  name: 'Jarrell Brantley',
  nba: { start: 2019, pro: 2, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'College of Charleston',
  pos: 'F',
  jersey: 5
},
{
  id: 2482,
  name: 'Marques Bolden',
  nba: { start: 2019, pro: 2, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '249',
  college: 'Duke',
  pos: 'C',
  jersey: 24
},
{
  id: 2405,
  name: 'Dakota Mathias',
  nba: { start: 2020, pro: 1, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Purdue',
  pos: 'G',
  jersey: 33
},
{
  id: 2438,
  name: 'Juwan Morgan',
  nba: { start: 2019, pro: 2, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '232',
  college: 'Indiana',
  pos: 'F',
  jersey: 16
},
{
  id: 2474,
  name: 'Matt Mooney',
  nba: { start: 2019, pro: 1, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '199',
  college: 'Texas Tech',
  pos: 'G',
  jersey: 31
},
{
  id: 3266,
  name: 'Paul White',
  nba: { start: 0, pro: 0, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Oregon'
},
{
  id: 2602,
  name: 'Elijah Hughes',
  nba: { start: 2020, pro: 1, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Syracuse',
  pos: 'G',
  jersey: 19
},
{
  id: 2796,
  name: 'Jared Butler',
  nba: { start: 2021, pro: 0, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '193',
  college: 'Baylor',
  pos: 'G',
  jersey: 13
},
{
  id: 2589,
  name: 'Trent Forrest',
  nba: { start: 2020, pro: 1, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'Florida State',
  pos: 'G',
  jersey: 3
},
{
  id: 2586,
  name: 'Malik Fitts',
  nba: { start: 2020, pro: 1, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: "St. Mary's College",
  pos: 'F',
  jersey: 8
},
{
  id: 2940,
  name: 'Derrick Alston Jr.',
  nba: { start: 0, pro: 0, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '190',
  college: 'Boise State',
  pos: 'F',
  jersey: 10
},
{
  id: 2645,
  name: 'Xavier Sneed',
  nba: { start: 2021, pro: 0, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Kansas State',
  pos: 'F',
  jersey: 19
},
{
  id: 2642,
  name: 'Nathan Sestina',
  nba: { start: 0, pro: 0, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '234',
  college: 'Kentucky',
  pos: 'F',
  jersey: 41
},
{
  id: 2854,
  name: 'MaCio Teague',
  nba: { start: 0, pro: 0, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '195',
  college: 'Baylor',
  pos: 'G',
  jersey: 31
},
{
  id: 186,
  name: 'Rudy Gay',
  nba: { start: 2006, pro: 15, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Connecticut',
  pos: 'F-G',
  jersey: 8
},
{
  id: 114,
  name: 'Mike Conley',
  nba: { start: 2007, pro: 14, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '175',
  college: 'Ohio State',
  pos: 'G',
  jersey: 11
},
{
  id: 369,
  name: 'Greg Monroe',
  nba: { start: 2010, pro: 9, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Georgetown',
  pos: 'F-C',
  jersey: 15
},
{
  id: 546,
  name: 'Hassan Whiteside',
  nba: { start: 2010, pro: 9, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '7', inches: '7' },
  weight: '265',
  college: 'Marshall',
  pos: 'C',
  jersey: 21
},
{
  id: 60,
  name: 'Bojan Bogdanovic',
  nba: { start: 2014, pro: 7, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '226',
  college: 'Fenerbahce',
  pos: 'F',
  jersey: 44
},
{
  id: 775,
  name: 'Kyle Fogg',
  nba: { start: 0, pro: 0, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: null,
  jersey: 18
},
{
  id: 192,
  name: 'Rudy Gobert',
  nba: { start: 2013, pro: 8, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '7', inches: '7' },
  weight: '258',
  college: 'Cholet',
  pos: 'C',
  jersey: 27
},
{
  id: 1012,
  name: 'Norvel Pelle',
  nba: { start: 2019, pro: 0, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Iona',
  pos: null,
  jersey: 5
},
{
  id: 109,
  name: 'Jordan Clarkson',
  nba: { start: 2014, pro: 7, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '194',
  college: 'Missouri',
  pos: 'G',
  jersey: null
},
{
  id: 258,
  name: 'Joe Ingles',
  nba: { start: 2014, pro: 7, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '220',
  college: 'Maccabi Tel Aviv',
  pos: 'F-G',
  jersey: null
},
{
  id: 3027,
  name: 'D.J. Funderburk',
  nba: { start: 0, pro: 0, name: "Utah Jazz", nickname: "UTA" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'North Carolina State'
},
{
  id: 3036,
  name: 'Asante Gist',
  nba: { start: 0, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: null, inches: null },
  weight: null,
  college: null
},
{
  id: 218,
  name: 'Montrezl Harrell',
  nba: { start: 2015, pro: 6, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '240',
  college: 'Louisville',
  pos: 'F-C',
  jersey: 8
},
{
  id: 820,
  name: 'Kyle Kuzma',
  nba: { start: 2017, pro: 4, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '221',
  college: 'Utah',
  pos: 'F',
  jersey: 33
},
{
  id: 753,
  name: 'Thomas Bryant',
  nba: { start: 2017, pro: 4, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '248',
  college: 'Indiana',
  pos: 'C-F',
  jersey: 13
},
{
  id: 2548,
  name: 'Craig Sword',
  nba: { start: 2021, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Mississippi State',
  pos: null,
  jersey: 32
},
{
  id: 979,
  name: 'Aaron Holiday',
  nba: { start: 2018, pro: 3, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'UCLA',
  pos: 'G',
  jersey: 4
},
{
  id: 983,
  name: 'Alize Johnson',
  nba: { start: 2018, pro: 3, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '212',
  college: 'Missouri State',
  pos: 'F',
  jersey: 24
},
{
  id: 1862,
  name: 'Rui Hachimura',
  nba: { start: 2019, pro: 2, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Gonzaga',
  pos: 'F',
  jersey: 8
},
{
  id: 2078,
  name: 'Aubrey Dawkins',
  nba: { start: 0, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Central Florida'
},
{
  id: 1865,
  name: 'Dewan Hernandez',
  nba: { start: 0, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: null, inches: null },
  weight: null,
  college: null,
  pos: 'C-F',
  jersey: 20
},
{
  id: 1859,
  name: 'Daniel Gafford',
  nba: { start: 2019, pro: 2, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '234',
  college: 'Arkansas',
  pos: 'F-C',
  jersey: 21
},
{
  id: 1898,
  name: 'Tremont Waters',
  nba: { start: 2019, pro: 2, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '5', inches: '5' },
  weight: '175',
  college: 'Louisiana State',
  pos: 'G',
  jersey: 51
},
{
  id: 2482,
  name: 'Marques Bolden',
  nba: { start: 2019, pro: 2, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '249',
  college: 'Duke',
  pos: 'C',
  jersey: 24
},
{
  id: 2564,
  name: 'Deni Avdija',
  nba: { start: 2020, pro: 1, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'Maccabi Tel Aviv',
  pos: 'F',
  jersey: 9
},
{
  id: 2574,
  name: 'Vernon Carey Jr.',
  nba: { start: 2020, pro: 1, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '270',
  college: 'Duke',
  pos: 'F-C',
  jersey: 22
},
{
  id: 2665,
  name: 'Cassius Winston',
  nba: { start: 2020, pro: 1, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Michigan State',
  pos: 'G',
  jersey: 5
},
{
  id: 2605,
  name: 'Mason Jones',
  nba: { start: 2020, pro: 1, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Arkansas',
  pos: 'G',
  jersey: 40
},
{
  id: 2857,
  name: 'Isaiah Todd',
  nba: { start: 2021, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '219',
  college: 'NBA G League Ignite',
  pos: 'F',
  jersey: 14
},
{
  id: 2600,
  name: 'Caleb Homesley',
  nba: { start: 0, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '205',
  college: 'Liberty',
  pos: 'G',
  jersey: null
},
{
  id: 2590,
  name: 'Anthony Gill',
  nba: { start: 2020, pro: 1, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '230',
  college: 'Virginia',
  pos: 'F',
  jersey: 16
},
{
  id: 2787,
  name: 'Joel Ayayi',
  nba: { start: 2021, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Gonzaga',
  pos: 'G',
  jersey: 17
},
{
  id: 2825,
  name: 'Corey Kispert',
  nba: { start: 2021, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '224',
  college: 'Gonzaga',
  pos: 'F',
  jersey: 24
},
{
  id: 2814,
  name: 'Jay Huff',
  nba: { start: 2021, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '7', inches: '7' },
  weight: '240',
  college: 'Virginia',
  pos: 'F',
  jersey: 30
},
{
  id: 2914,
  name: 'Jordan Schakel',
  nba: { start: 2021, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'San Diego State',
  pos: 'G',
  jersey: 20
},
{
  id: 3203,
  name: 'Devontae Shuler',
  nba: { start: 0, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '185',
  college: 'Mississippi',
  pos: 'G',
  jersey: null
},
{
  id: 3341,
  name: 'Jordan Goodwin',
  nba: { start: 2021, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'St. Louis',
  pos: null,
  jersey: 7
},
{
  id: 3345,
  name: 'Jaime Echenique',
  nba: { start: 2021, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Wichita State',
  pos: null,
  jersey: 12
},
{
  id: 3184,
  name: 'Xavier Rathan-Mayes',
  nba: { start: 0, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: null, inches: null },
  weight: null,
  college: null
},
{
  id: 369,
  name: 'Greg Monroe',
  nba: { start: 2010, pro: 9, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '250',
  college: 'Georgetown',
  pos: 'F-C',
  jersey: 15
},
{
  id: 488,
  name: 'Ish Smith',
  nba: { start: 2010, pro: 11, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '175',
  college: 'Wake Forest',
  pos: 'G',
  jersey: 4
},
{
  id: 52,
  name: 'Davis Bertans',
  nba: { start: 2016, pro: 5, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '225',
  college: 'Baskonia',
  pos: 'F',
  jersey: 44
},
{
  id: 1039,
  name: 'Brad Wanamaker',
  nba: { start: 2018, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: null, inches: null },
  weight: null,
  college: 'Pittsburgh',
  pos: null,
  jersey: 22
},
{
  id: 45,
  name: 'Bradley Beal',
  nba: { start: 2012, pro: 9, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '207',
  college: 'Florida',
  pos: 'G',
  jersey: 3
},
{
  id: 470,
  name: 'Tomas Satoransky',
  nba: { start: 2016, pro: 5, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '210',
  college: 'FC Barcelona',
  pos: 'G',
  jersey: 31
},
{
  id: 89,
  name: 'Kentavious Caldwell-Pope',
  nba: { start: 2013, pro: 8, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '204',
  college: 'Georgia',
  pos: 'G',
  jersey: 1
},
{
  id: 390,
  name: 'Raul Neto',
  nba: { start: 2015, pro: 6, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '180',
  college: 'Murcia',
  pos: 'G',
  jersey: 19
},
{
  id: 142,
  name: 'Spencer Dinwiddie',
  nba: { start: 2014, pro: 7, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '215',
  college: 'Colorado',
  pos: 'G',
  jersey: 26
},
{
  id: 432,
  name: 'Kristaps Porzingis',
  nba: { start: 2015, pro: 5, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '7', inches: '7' },
  weight: '240',
  college: 'Cajasol Sevilla',
  pos: 'F-C',
  jersey: 6
},
{
  id: 3009,
  name: 'Jaime Echenique',
  nba: { start: 0, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '258',
  college: 'Wichita State'
},
{
  id: 3037,
  name: 'Jordan Goodwin',
  nba: { start: 0, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '200',
  college: 'Saint Louis'
},
{
  id: 3061,
  name: 'Austin Hollins',
  nba: { start: 0, pro: 0, name: "Washington Wizards", nickname: "WAS" },
  height: { feets: '6', inches: '6' },
  weight: '183',
  college: 'Minnesota'
}
]

module.exports = playerSeed