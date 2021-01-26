module.exports = (sequelize, DataTypes) => {
    const product_options = sequelize.define('product_options', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        option_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        product_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        }
    });
  
    return product_options;
  };
  