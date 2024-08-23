const UserModel = (sequelize, Sequelize) => {
    return sequelize.define(
        'User',
        {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                notEmpty: true
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                isEmail: true,
                notEmpty: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                notEmpty: true
            },
            age: {
                type: Sequelize.INTEGER,
                allowNull: false,
                min: 0,
                notEmpty: true
            },
        });
};

export default UserModel