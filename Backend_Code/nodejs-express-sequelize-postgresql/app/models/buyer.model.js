module.exports = (sequelize, Sequelize) => {
    const buyer = sequelize.define("buyer", {
      buyer_id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      buyer_email: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.STRING
      },
      preferred_location: {
        type: Sequelize.STRING
      },
      property_type: {
        type: Sequelize.STRING
      },
      bedrooms: {
        type: Sequelize.INTEGER
      },
      bathrooms: {
        type: Sequelize.INTEGER
      },
      amenities: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      move_in_date: {
        type: Sequelize.DATEONLY
      }
    });
  
    return buyer;
  };
  