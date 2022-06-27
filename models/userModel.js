const { Model, Sequelize } = require('sequelize');
const USER_TABLE = 'Usuario';
class User extends Model{
    static associate() {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'Usuario',
            timestamps: false
        }
    }
}

module.exports = {USER_TABLE, User}