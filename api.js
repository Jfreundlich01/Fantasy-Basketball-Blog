const { response } = require("express");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ca9af0a0dbmsh807194fd1afac38p1441e4jsn915d4680d151',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

//Player Info (id,firstname,birth,nba.start,nba.pro,height.feets,height.inches,weight.pounds,college,affiliation, leagues.standard.jersey, leagues.standard.pos)

let players = []
let i = 1;

    fetch(`https://api-nba-v1.p.rapidapi.com/players?team=${i}&season=2021`, options)
        .then(response => response.json())
        .then(response => {
            for (let j = 0; j < response.response.length; j++){
				let player = {
                    id:"",
                    firstname:"",
                    lastname:"",
                    nba:{
                        start:0,
                        pro:0,
						team: i,
                    },
                    height:{
                        feets:"",
                        inches:"",
                    },
                    college:"",
                    position:""
                }

                player = {
                    id:response.response[j].id,
                    firstname:response.response[j].firstname,
                    lastname:response.response[j].lastname,
                    nba:{
                        start:response.response[j].nba.start,
                        pro:response.response[j].nba.pro,
						team: i,
                    },
                    height:{
                        feets:response.response[j].height.feets,
                        inches:response.response[j].height.feets,
                    },
                    college:response.response[j].college,
                    position:response.response[j].leagues.standard.pos
                }
                // console.log(player)
                players.push(player)
            }
            // console.log(response.response[0])
        })
    console.log(players)
    console.log(players.length)

// fetch('https://api-nba-v1.p.rapidapi.com/players?team=1&season=2021', options)
// 	.then(response => response.json())
// 	.then(response =>  console.log(response.response.length))
// 	.catch(err => console.error(err));