var User = require("../Models/userModel");

exports.insertUser = function(req, res) {

    var u = new User({

        myrole: req.body.role_id,
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password

    });

    u.save(function(err, data) {

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
                message: "User is inserted",
                details: data

            })
        }
    });
} 

exports.getUser = async function (req, res) { // We will add async as a prefix becuase e have used await later on.
    
  
    await User.find().populate("myrole").exec(function(err, data){
       // await User.find(function(err, data){
     
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
                message: "User List",
                details: data
            })
        }
    
    console.log(" data in => ",data)

   });
   /* await User.find().populate("Role", function (err, data) { // We will wait until we get response from mongodb. Once we get the response we will send the data.  

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
                message: "User List",
                details: data

            })
        }
    });*/
}

exports.deleteUser = function (req, res) {

    User.findByIdAndDelete(

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
                    message: "User Deleted",
                });
            }
        }
    )
}

exports.updateUser = function (req, res) {

    User.findByIdAndUpdate(

        req.body.id,

        {
            role_id: req.body.role_id,
            user_name: req.body.user_name,
            user_email: req.body.user_email,
            user_password: req.body.user_password,

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
                    message: "User Updated"
                })
            }
        }
    )
}