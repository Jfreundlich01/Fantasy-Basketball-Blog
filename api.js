const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ca9af0a0dbmsh807194fd1afac38p1441e4jsn915d4680d151',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

//Player Info (id,firstname,birth,nba.start,nba.pro,height.feets,height.inches,weight.pounds,college,affiliation, leagues.standard.jersey, leagues.standard.pos)

let players = []



// for(let i = 0; i <32; i++){
//     fetch(`https://api-nba-v1.p.rapidapi.com/players?team=${i}&season=2021`, options)
//         .then(response => response.json())
//         .then(response => {
//             for (let j = 0; j < response.response.length; j++){
//                 let player = {
//                     id:response.response[j].id,
//                     firstname:response.response[j].firstname,
//                     lastname:response.response[j].lastname,
//                     nba:{
//                         start:response.response[j].nba.start,
//                         pro:response.response[j].nba.pro,
//                     },
//                     height:{
//                         feets:response.response[j].height.feets,
//                         inches:response.response[j].height.feets,
//                     },
//                     college:response.response[j].college,
//                     jersey:response.response[j].leagues.standard.jersey,
//                     position:response.response[j].leagues.standard.pos
//                 }
//                 // console.log(player)
//                 players.push(player)
//             }
//             // console.log(response.response[0])
//         })
//         .catch(err => console.error(err));
//     }
    // console.log(players)
    // console.log(players.length)
//Teams
fetch('https://api-nba-v1.p.rapidapi.com/teams', options)
	.then(response => response.json())
	.then(response => console.log(response.response[0].leagues.vegas))
	.catch(err => console.error(err));