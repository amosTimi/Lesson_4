module.exports = (sequelize, DataTypes) => {
    const product_categories = sequelize.define('product_categories', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
        }
    });
  
    return product_categories;
  };
  