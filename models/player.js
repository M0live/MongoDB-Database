const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playerId: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
