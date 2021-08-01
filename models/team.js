const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamName: {
        type: String,
        required: true
    },
    playerId: {
        type: String,
        required: true
    },
    playerName: {
        type: String,
        required: true
    }
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;