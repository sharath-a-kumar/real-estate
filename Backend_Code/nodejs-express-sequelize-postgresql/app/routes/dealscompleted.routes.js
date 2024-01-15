const dealsCompleted = require("../controller/dealscompleted.controller.js");

const router = require("express").Router();

// Create a new DealsCompleted
router.post("/", dealsCompleted.create);

// Retrieve all DealsCompleted
router.get("/", dealsCompleted.findAll);

// Retrieve a single DealsCompleted with id
router.get("/:id", dealsCompleted.findOne);

// Update a DealsCompleted with id
router.put("/:id", dealsCompleted.update);

// Delete a DealsCompleted with id
router.delete("/:id", dealsCompleted.delete);

// Delete all DealsCompleted
router.delete("/", dealsCompleted.deleteAll);

// Retrieve all completed Deals
router.get("/completed", dealsCompleted.findAllCompleted);

module.exports = router;
