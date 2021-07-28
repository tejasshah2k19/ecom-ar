var SubCategory = require("../Models/subcategoryModel");

exports.insertSubCategory = function(req, res) {

    var s = new SubCategory({

        sub_category_name: req.body.sub_category_name

    });

    s.save(function(err, data) {

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
                message: "SubCategory is inserted",
                details: data

            })
        }
    });
} 

exports.getSubCategory = function (req, res) {

    SubCategory.find(function (err, data) {

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
                message: "SubCategory List",
                details: data

            })
        }
    });
}

exports.deleteSubCategory = function (req, res) {

    SubCategory.findByIdAndDelete(

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
                    message: "SubCategory Deleted",
                });
            }
        }
    )
}

exports.updateSubCategory = function (req, res) {

    SubCategory.findByIdAndUpdate(

        req.body.id,

        {
            sub_category_name: req.body.sub_category_name,
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
                    message: "SubCategory Updated"
                })
            }
        }
    )
}