module.exports = (sequelize, DataTypes) => {
    const products = sequelize.define('products', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        sku: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
              isAlpha: true,
          }
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
              isAlpha: true,
          }
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              notEmpty: true,
              isNumeric: true
          }
        },
        weight: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
          }
        },
        descriptions: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
          }
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
          }
        },
       created_date: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.literal('NOW()'),
        }
    });
  
    return products;
  };
  