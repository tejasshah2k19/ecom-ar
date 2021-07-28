var OrderStatus = require("../Models/orderstatusModel");

exports.insertOrderStatus = function (req, res) {

    var o = new OrderStatus({

        order_status: req.body.order_status

    });

    o.save(function (err, data) {

        if (err) {
            res.json({

                status: -1,
                message: "Something went wrong",
                detail: err

            });
        }
        else {
            res.json({

                status: 200,
                message: "Order Status is inserted",
                details: data

            });
        }
    });
}

exports.getOrderStatus = function (req, res) {

    OrderStatus.find(function (err, data) {

        if (err) {
            res.json({

                status: -1,
                message: "Something went wrong",
                details: err

            });
        }
        else {
            res.json({

                status: 200,
                message: "Order Status List",
                details: data

            })
        }
    });
}

exports.deleteOrderStatus = function (req, res) {

    OrderStatus.findByIdAndDelete(

        req.body.id,

        function (err, data) {

            if (err) {
                res.json({
                    status: -1,
                    message: "Something went wrong",
                    details: err
                });
            }
            else {
                res.json({
                    status: 200,
                    message: "Order Status Deleted",
                });
            }
        }
    )
}

exports.updateOrderStatus = function (req, res) {

    OrderStatus.findByIdAndUpdate(

        req.body.id,

        {
            order_status: req.body.order_status,
        },

        function (err, data) {

            if (err) {
                res.json({
                    status: -1,
                    message: "Something went wrong"
                })
            }
            else {
                res.json({
                    status: 200,
                    message: "Order Status Updated"
                })
            }
        }
    )
}