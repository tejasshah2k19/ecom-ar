var Product = require("../Models/productModel");

exports.insertProduct = function(req, res) {

    var p = new Product({

        brand_id: req.body.brand_id,
        category_id: req.body.category_id,
        sub_category_id: req.body.sub_category_id,
        product_name: req.body.product_name,
        product_qty: req.body.product_qty,
        product_price: req.body.product_price

    });

    p.save(function(err, data) {

        if(err)
        {
            res.json({

                status: -1,
                message:"Something went wrong",
                detail: err

            });
        }
        else
        {
            res.json({

                status: 200,
                message: "Product is inserted",
                details: data

            });
        }
    });
} 

exports.getProduct = function (req, res) {

    Product.find(function (err, data) {

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
                message: "Product List",
                details: data

            })
        }
    });
}

exports.deleteProduct = function (req, res) {

    Product.findByIdAndDelete(

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
                    message: "Product Deleted",
                });
            }
        }
    )
}

exports.updateProduct = function (req, res) {

    Product.findByIdAndUpdate(

        req.body.id,

        {
            order_status: req.body.order_status,
            brand_id: req.body.brand_id,
            category_id: req.body.category_id,
            sub_category_id: req.body.sub_category_id,
            product_name: req.body.product_name,
            product_qty: req.body.product_qty,
            product_price: req.body.product_price
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
                    message: "Product Updated"
                })
            }
        }
    )
}