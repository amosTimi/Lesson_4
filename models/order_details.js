module.exports = (sequelize, DataTypes) => {
    const order_details = sequelize.define('order_details', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        order_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        product_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        price:{
            type: DataTypes.INTEGER,
            autoIncrement: false,
            allowNull: false
        },
        sku:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        quantity:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
    });
  
    return order_details;
  };
  