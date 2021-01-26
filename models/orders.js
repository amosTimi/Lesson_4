module.exports = (sequelize, DataTypes) => {
    const orders = sequelize.define('orders', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              notEmpty: true,
              isNumeric: true
          }
        },
        shipping_address: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
              notEmpty: true,
          }
        },
        
        order_address: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
          },
        order_email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
          }
        },
       order_date: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.literal('NOW()'),
        },
        order_status:{
            type: DataTypes. STRING,
            allowNull: true,
            validate:{
                notEmpty: false,
            }
        }
    });
  
    return orders;
  };
  