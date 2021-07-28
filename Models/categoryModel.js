var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var categorySchema = new Schema({

    category_name: {
       
        type: String,
        required: true,
        max: 50,

    }

});

module.exports = mongoose.model("Category", categorySchema);