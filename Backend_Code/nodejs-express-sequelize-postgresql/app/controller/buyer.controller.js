const db = require("../models/index.js");
const Buyer = db.buyers; 
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    let {
        buyer_id,
        name,
        phone_number,
        buyer_email,
        budget,
        preferred_location,
        property_type,
        bedrooms,
        bathrooms,
        amenities,
        move_in_date
    } = req.body;

    await Buyer.create({
        buyer_id: buyer_id,
        name: name,
        phone_number: phone_number,
        buyer_email: buyer_email,
        budget: budget,
        preferred_location: preferred_location,
        property_type: property_type,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        amenities: amenities,
        move_in_date: move_in_date
    }).then(async (data) => {
        res.json({ status: 200, message: "Success", data: data });
    }).catch(async (error) => {
        res.json({ 'status': 400, 'message': error.message });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Buyer.update(req.body, {
        where: { buyer_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Buyer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Buyer with buyer_id=${id}. Maybe Buyer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Buyer with buyer_id=" + id
            });
        });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    Buyer.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving buyers."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Buyer.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Buyer with buyer_id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Buyer with buyer_id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Buyer.destroy({
        where: { buyer_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Buyer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Buyer with buyer_id=${id}. Maybe Buyer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Buyer with buyer_id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Buyer.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Buyers were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all buyers."
            });
        });
};

exports.findAllPublished = (req, res) => {
    Buyer.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving buyers."
            });
        });
};
