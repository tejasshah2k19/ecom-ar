var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var brandSchema = new Schema ({

    brand_name: {

        type: String,
        required: true,
        max: 50
    }

});

module.exports = mongoose.model("Brand", brandSchema);