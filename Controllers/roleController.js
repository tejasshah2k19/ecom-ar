var Role = require("../Models/roleModel");

exports.insertRole = function(req, res) {

    var r = new Role({

        role_name: req.body.role_name

    });

    r.save(function(err, data) {

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
                message: "Role is inserted",
                details: data

            })
        }
    });
} 

exports.getRole = function (req, res) {

    Role.find(function (err, data) {

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
                message: "Role List",
                details: data

            })
        }
    });
}

exports.deleteRole = function (req, res) {

    Role.findByIdAndDelete(

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
                    message: "Role Deleted",
                });
            }
        }
    )
}

exports.updateRole = function (req, res) {

    Role.findByIdAndUpdate(

        req.body.id,

        {
            role_name: req.body.role_name
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
                    message: "Role Updated"
                })
            }
        }
    )
}