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

 fetch('https://api-nba-v1.p.rapidapi.com/players?team=41&season=2021', options)
	.then(response => response.json())
	.then(response =>  { 
        let team = response.response
        for (const a of team){
            let player = {
                                id:a.id,
                                name: `${a.firstname} ${a.lastname}`,
                                nba:{
                                    start:a.nba.start,
                                    pro:a.nba.pro,
                					team: 41,
                                },
                                height:{
                                    feets:a.height.feets,
                                    inches:a.height.feets,
                                },
                                weight: a.weight.pounds,
                                college:a.college,
                    }
                    if(a.leagues.standard){
                        player.pos = a.leagues.standard.pos
                        player.jersey = a.leagues.standard.jersey
                    } else {

                    }
            players.push(player)
        }
        console.log(players)
    })
	.catch(err => console.error(err));
