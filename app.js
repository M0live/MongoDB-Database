const express = require('express');
const mongoose = require('mongoose');
const Player = require('./models/player');
const Score = require('./models/score');
const Game = require('./models/game');
const Team = require('./models/team');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/playerProfile',{useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    app.listen(port);
  })
  .catch((err) => console.log('err'));

  //This is the root that gets to index.ejs
app.get('/', (req, res) => {
  res.render('index');
});

//this takes you to allPlayers.ejs
app.get('/addPlayer', (req, res) => {
  const newPlayer = new Player({
    playerId: 5,
    firstName: 'Olag',
    surname: 'Gan'
  });


  newPlayer.save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });

  })

  //this takes you to allGames.ejs
  app.get('/allGames', (req, res) => {
    Game.find()
      .then((result) => {
        res.render('allGames', {Games: result});
      })
      .catch((err) => {
        console.log(err);
      });
  
  })
//this takes you to allPlayers.ejs
app.get('/allPlayers', (req, res) => {
  Player.find()
    .then((result) => {
    res.render('allPlayers', {players: result});
    })
    .catch((err) => {
      console.log(err);
    });

})
//this takes you to allTeams.ejs
app.get('/allTeams', (req, res) => {
  Team.find()
    .then((result) => {
    res.render('allTeams', {teams: result});
    })
    .catch((err) => {
      console.log(err);
    });

})
//this takes you to allScores.ejs
app.get('/allScores', (req, res) => {
  Score.find()
    .then((result) => {

      res.render('allScores', {scores: result});
    })
    .catch((err) => {
      console.log(err);
    });
  })
//this takes you to avgScores.ejs. 

app.get('/avgScores', (req, res) => {
  //Score.aggregate allows us to work out the average of players and thier scores
  //aggregate functions would be needed to work out the players last score and max score
  Score.aggregate([{$group:{
    _id: "$playerId",
    avgGameScore: {
      $avg: "$gameScore"
      }
    }
  }])
    .then((result) => {
      res.render('avgScores', {avgScores: result});
    })
    .catch((err) => {
      console.log(err);
    });

  })
