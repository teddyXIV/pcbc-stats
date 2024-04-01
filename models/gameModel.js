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
                return Number.isInteger(value);
            },
            message: "Plate appearances must be an integer"
        }
    },
    singles: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value);
            },
            message: "Singles must be an integer"
        }
    },
    doubles: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value);
            },
            message: "Doubles must be an integer"
        }
    },
    triples: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value);
            },
            message: "Triples must be an integer"
        }
    },
    homeruns: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value);
            },
            message: "Homeruns must be an integer"
        }
    },
    walks: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value);
            },
            message: "Walks must be an integer"
        }
    },
    strikouts: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value);
            },
            message: "Strikeouts must be an integer"
        }
    },
    hbp: {
        type: Number,
        default: 0,
        validate: {
            validator: function (value) {
                return Number.isInteger(value);
            },
            message: "Hit by pitch must be an integer"
        }
    }
})

const Game = mongoose.models.games || mongoose.model("games", gameSchema);

export default Game;