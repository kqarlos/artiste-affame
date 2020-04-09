const router = require("express").Router();
const itemsController = require("../../controllers/itemsCotroller");
//Items api route "api/items"
//Gets all items
router.route("/store")
    .get(itemsController.findAll)

//Add an item
router.route("/add")
    .post(itemsController.create)

//Get Item
router.route("/:id")
    .get(itemsController.findById)

module.exports = router;

