var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var sub_categorySchema = new Schema({

    sub_category_name: {
       
        type: String,
        required: true,
        max: 50,

    }

});

module.exports = mongoose.model("SubCategory", sub_categorySchema);