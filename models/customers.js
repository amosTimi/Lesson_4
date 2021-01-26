module.exports = (sequelize, DataTypes) => {
    const customers = sequelize.define('customers', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
              isAlpha: true,
          }
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
            is: ["^[a-z]+$",'i'] 
            }
        },
        full_name: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
              notEmpty: true,
          }
        },
        billing_address: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
              notEmpty: true,
          }
        },
        default_shipping_address: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
              notEmpty: true,
          }
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
          },
          phone: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
    });
  
    return customers;
  };
  