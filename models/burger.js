module.exports = function (sequelize, DataTypes) {

    const burgers = sequelize.define("burgers", {
        burger_name: DataTypes.STRING,
        devoured: {
            type : DataTypes.BOOLEAN,
            defaultValue : false
        }
    });


    return burgers;
};


