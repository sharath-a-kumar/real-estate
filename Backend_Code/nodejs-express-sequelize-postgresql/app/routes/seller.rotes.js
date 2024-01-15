const sellers = require("../controller/seller.controller");

const router = require("express").Router();

// Create a new Seller
router.post("/", sellers.create);

// Retrieve all Sellers
router.get("/", sellers.findAll);

// Retrieve a single Seller with id
router.get("/:id", sellers.findOne);

// Update a Seller with id
router.put("/:id", sellers.update);

// Delete a Seller with id
router.delete("/:id", sellers.delete);

// Delete all Sellers
router.delete("/", sellers.deleteAll);

module.exports = router;
