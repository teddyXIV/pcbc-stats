import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: String,
        required: [true, "Please enter the date"],
    },
    plate_appearances: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value) && value >= 0;
            },
            message: "Plate appearances must be an integer"
        }
    },
    singles: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value) && value >= 0;
            },
            message: "Singles must be an integer"
        }
    },
    doubles: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value) && value >= 0;
            },
            message: "Doubles must be an integer"
        }
    },
    triples: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value) && value >= 0;
            },
            message: "Triples must be an integer"
        }
    },
    homeruns: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value) && value >= 0;
            },
            message: "Homeruns must be an integer"
        }
    },
    walks: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value) && value >= 0;
            },
            message: "Walks must be an integer"
        }
    },
    strikeouts: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value) && value >= 0;
            },
            message: "Strikeouts must be an integer"
        }
    },
    hbp: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value) && value >= 0;
            },
            message: "Hit by pitch must be an integer"
        }
    },
    sacrifice: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value) && value >= 0;
            },
            message: "Sacrifice outs must be an integer"
        }
    }
})

const Game = mongoose.models.games || mongoose.model("games", gameSchema);

export default Game;