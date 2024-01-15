const db = require("../models/index.js");
const Customer = db.customers;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    
    let { customer_id, name, father_name, dob, wedding_day, gender, marriage_status, address, phone_number, email, state, district, occupation, annual_income, net_worth } = req.body;
 
    await Customer.create({ 
        customer_id: customer_id,
        name: name,
        father_name: father_name,
        dob: dob,
        wedding_day: wedding_day,
        gender: gender,
        marriage_status: marriage_status,
        address: address,
        phone_number: phone_number,
        email: email,
        state: state,
        district: district,
        occupation: occupation,
        annual_income: annual_income,
        net_worth: net_worth
    }).then(async (data) => {

        res.json({ status: 200, message: "Success", data: data });

    }).catch(async (error) => {

        res.json({ 'status': 400, 'message': error.message });

    });
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Customer.update(req.body, {
      where: { customer_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Customer was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Customer with customer_id=${id}. Maybe Customer was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Customer with customer_id=" + id
        });
      });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Customer.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Customer.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Customer with customer_id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Customer with customer_id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Customer.destroy({
      where: { customer_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Customer was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Customer with customer_id=${id}. Maybe Customer was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Customer with customer_id=" + id
        });
      });
};

exports.deleteAll = (req, res) => {
    Customer.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Customers were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all customers."
        });
      });
};

exports.findAllPublished = (req, res) => {
    Customer.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      });
};
