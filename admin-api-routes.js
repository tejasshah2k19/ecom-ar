var router = require("express").Router();

var roleController = require("./Controllers/roleController");
var brandController = require("./Controllers/brandController");
var categoryController = require("./Controllers/categoryController");
var subcategoryController = require("./Controllers/subcategoryController");
var productController = require("./Controllers/productController");
var orderstatusController = require("./Controllers/orderstatusController");

router.get("/", function(req, res) {

    res.json({
        
        status: 200,
        message: "Welcome to ECOM Project"

    });

});

router.route("/role").post(roleController.insertRole);
router.route("/getrole").get(roleController.getRole);
router.route("/deleterole").delete(roleController.deleteRole);
router.route("/updaterole").put(roleController.updateRole);

router.route("/brand").post(brandController.insertBrand);
router.route("/getbrand").get(brandController.getBrand);
router.route("/deletebrand").delete(brandController.deleteBrand);
router.route("/updatebrand").put(brandController.updateBrand);

router.route("/category").post(categoryController.insertCategory);
router.route("/getcategory").get(categoryController.getCategory);
router.route("/deletecategory").delete(categoryController.deleteCategory);
router.route("/updatecategory").put(categoryController.updateCategory);

router.route("/subcategory").post(subcategoryController.insertSubCategory);
router.route("/getsubcategory").get(subcategoryController.getSubCategory);
router.route("/deletesubcategory").delete(subcategoryController.deleteSubCategory);
router.route("/updatesubcategory").put(subcategoryController.updateSubCategory);

router.route("/product").post(productController.insertProduct);
router.route("/getproduct").get(productController.getProduct);
router.route("/deleteproduct").delete(productController.deleteProduct);
router.route("/updateproduct").put(productController.updateProduct);

router.route("/orderstatus").post(orderstatusController.insertOrderStatus);
router.route("/getorderstatus").get(orderstatusController.getOrderStatus);
router.route("/deleteorderstatus").delete(orderstatusController.deleteOrderStatus);
router.route("/updateorderstatus").put(orderstatusController.updateOrderStatus);

module.exports = router;