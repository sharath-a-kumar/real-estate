module.exports = (sequelize, Sequelize) => {
    const DealsCompleted = sequelize.define("dealsCompleted", {
      deal_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      buyer_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      seller_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      property_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      deal_amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      deal_date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      completion_status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      notes: {
        type: Sequelize.TEXT
      }
    });
  
    return DealsCompleted;
  };
  