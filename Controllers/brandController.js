var Brand = require("../Models/brandModel");

exports.insertBrand = function (req, res) {

    var b = new Brand({

        brand_name: req.body.brand_name

    });

    b.save(function (err, data) {

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
                message: "Brand is inserted",
                details: data
            });
        }
    });
}

exports.getBrand = function (req, res) {

    Brand.find(function (err, data) {

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
                message: "Brand List",
                details: data

            })
        }
    });
}

exports.deleteBrand = function (req, res) {

    Brand.findByIdAndDelete(

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
                    message: "Brand Deleted",
                });
            }
        }
    )
}

exports.updateBrand = function (req, res) {

    Brand.findByIdAndUpdate(

        req.body.id,

        {
            brand_name: req.body.brand_name,
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
                    message: "Brand Updated"
                })
            }
        }
    )
}