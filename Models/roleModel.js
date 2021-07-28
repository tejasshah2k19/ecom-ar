var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var roleSchema = new Schema({

    role_name: {
       
        type: String,
        required: true,
        max: 50,

    }

});

module.exports = mongoose.model("Role", roleSchema,"roles");