var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var orderstatusSchema = new Schema({

    order_status: {
        
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("OrderStatus", orderstatusSchema);