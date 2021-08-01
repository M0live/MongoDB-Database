const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    gameId: {
        type: Number,
        required: true
    },
    playerName: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    win: {
        type: Boolean,
        required: true
    },
    kFactor: {
        type: Number,
        required: true
    }
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;