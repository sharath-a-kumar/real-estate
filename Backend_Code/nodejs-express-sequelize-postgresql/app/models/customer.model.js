module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
      customer_id: {
        type: Sequelize.STRING,
        primaryKey: true 
      },
      name: {
        type: Sequelize.STRING
      },
      father_name: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.STRING 
      },
      wedding_day: {
        type: Sequelize.STRING 
      },
      gender: {
        type: Sequelize.STRING
      },
      marriage_status: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      occupation: {
        type: Sequelize.STRING
      },
      annual_income: {
        type: Sequelize.STRING 
      },
      net_worth: {
        type: Sequelize.STRING
      }
    });
   
    return Customer;
   };
   