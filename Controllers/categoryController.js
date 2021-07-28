var Category = require("../Models/categoryModel");

exports.insertCategory = function(req, res) {

    var c = new Category({

        category_name: req.body.category_name

    });

    c.save(function(err, data) {

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
                message: "Category is inserted",
                details: data

            })
        }
    });
} 

exports.getCategory = function (req, res) {

    Category.find(function (err, data) {

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
                message: "Category List",
                details: data

            })
        }
    });
}

exports.deleteCategory = function (req, res) {

    Category.findByIdAndDelete(

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
                    message: "Category Deleted",
                });
            }
        }
    )
}

exports.updateCategory = function (req, res) {

    Category.findByIdAndUpdate(

        req.body.id,

        {
            category_name: req.body.category_name,
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
                    message: "Category Updated"
                })
            }
        }
    )
}