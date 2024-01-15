const db = require("../models/index.js");
const Seller = db.sellers; // Assuming you've named your Seller model 'sellers'
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    let {
        seller_id,
        name,
        phone_number,
        seller_email,
        project_name,
        address,
        square_feet,
        facing,
        road,
        height_and_width,
        frontage
    } = req.body;

    await Seller.create({
        seller_id: seller_id,
        name: name,
        phone_number: phone_number,
        seller_email: seller_email,
        project_name: project_name,
        address: address,
        square_feet: square_feet,
        facing: facing,
        road: road,
        height_and_width: height_and_width,
        frontage: frontage
    }).then(async (data) => {
        res.json({ status: 200, message: "Success", data: data });
    }).catch(async (error) => {
        res.json({ 'status': 400, 'message': error.message });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Seller.update(req.body, {
        where: { seller_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Seller was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Seller with seller_id=${id}. Maybe Seller was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Seller with seller_id=" + id
            });
        });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    Seller.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving sellers."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Seller.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Seller with seller_id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Seller with seller_id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Seller.destroy({
        where: { seller_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Seller was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Seller with seller_id=${id}. Maybe Seller was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Seller with seller_id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Seller.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Sellers were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all sellers."
            });
        });
};

exports.findAllPublished = (req, res) => {
    Seller.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving sellers."
            });
        });
};
