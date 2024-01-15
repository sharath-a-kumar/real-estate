const db = require("../models/index.js");
const DealsCompleted = db.dealsCompleted;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    const {
        deal_id,
        buyer_id,
        seller_id,
        property_id,
        deal_amount,
        deal_date,
        completion_status,
        notes
    } = req.body;

    try {
        const data = await DealsCompleted.create({
            deal_id: deal_id,
            buyer_id: buyer_id,
            seller_id: seller_id,
            property_id: property_id,
            deal_amount: deal_amount,
            deal_date: deal_date,
            completion_status: completion_status,
            notes: notes
        });

        res.json({ status: 200, message: "Success", data: data });
    } catch (error) {
        res.json({ status: 400, message: error.message });
    }
};

exports.update = (req, res) => {
    const id = req.params.id;

    DealsCompleted.update(req.body, {
        where: { deal_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Deal was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Deal with deal_id=${id}. Maybe Deal was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Deal with deal_id=" + id
            });
        });
};

exports.findAll = (req, res) => {
    const dealId = req.query.deal_id;
    const condition = dealId ? { deal_id: { [Op.like]: `%${dealId}%` } } : null;

    DealsCompleted.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving deals_completed."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    DealsCompleted.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Deal with deal_id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Deal with deal_id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    DealsCompleted.destroy({
        where: { deal_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Deal was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Deal with deal_id=${id}. Maybe Deal was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Deal with deal_id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    DealsCompleted.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Deals were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all deals_completed."
            });
        });
};

exports.findAllCompleted = (req, res) => {
    DealsCompleted.findAll({ where: { completion_status: 'Completed' } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving completed deals."
            });
        });
};
