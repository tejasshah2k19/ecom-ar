var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var productSchema = new Schema({

    brand_id: { // This is the Forgein Key coming from Brands's table

        type: String,
        required: true,
    },

    category_id: { // This is the Forgein Key coming from Category's table

        type: String,
        required: true,
    },

    sub_category_id: { // This is the Forgein Key coming from SubCategory's table

        type: String,
        required: true,
    },

    product_name: {

        type: String,
        required: true,
    },

    product_qty: {

        type: Number,
        required: true,
    },

    product_price: {

        type: Number,
        required: true,
    },

});

module.exports = mongoose.model("Product", productSchema);