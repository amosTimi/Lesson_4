module.exports = (sequelize, DataTypes) => {
    const categories = sequelize.define('categories', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
              isAlpha: true,
          }
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
              isAlpha: true,
          }
        }
    });
  
    return categories;
  };
  