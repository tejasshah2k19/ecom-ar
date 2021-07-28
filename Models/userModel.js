var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({

    myrole: { // We will change the name.

        type: mongoose.Schema.Types.ObjectId,
        ref: "Role", // This is the table we are refering to.

    },

    user_name: {

        type: String,
        required: true,
        max: 50

    },

    user_email: {

        type: String,
        required: true,
        max: 50

    },

    user_password: {

        type: String,
        required: true,
        max: 50

    }

});

module.exports = mongoose.model("User", userSchema,"users");