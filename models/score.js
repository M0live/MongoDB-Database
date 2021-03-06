const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    playerId: {
        type: Number,
        required: true
    },
    gameScore: {
        type: Number,
        required: true
    },
    win: {
        type: Boolean,
        required: true
    }
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
