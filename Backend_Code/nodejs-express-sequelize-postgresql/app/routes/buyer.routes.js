const buyers = require("../controller/buyer.controller");

const router = require("express").Router();

// Create a new Buyer
router.post("/", buyers.create);

// Retrieve all Buyers
router.get("/", buyers.findAll);

// Retrieve a single Buyer with id
router.get("/:id", buyers.findOne);

// Update a Buyer with id
router.put("/:id", buyers.update);

// Delete a Buyer with id
router.delete("/:id", buyers.delete);

// Delete all Buyers
router.delete("/", buyers.deleteAll);

module.exports = router;
