module.exports = (sequelize, Sequelize) => {
    const Seller = sequelize.define("seller", {
      seller_id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      seller_email: {
        type: Sequelize.STRING
      },
      project_name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      square_feet: {
        type: Sequelize.INTEGER 
      },
      facing: {
        type: Sequelize.STRING
      },
      road: {
        type: Sequelize.STRING
      },
      height_and_width: {
        type: Sequelize.STRING 
      },
      frontage: {
        type: Sequelize.STRING
      }
    });
  
    return Seller;
  };
  
  