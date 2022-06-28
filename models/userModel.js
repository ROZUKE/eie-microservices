const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./../libs/sequelize')
const USER_TABLE = 'Usuario';

const UserSchema = sequelize.define( 'Usuarios', {
    usuarioId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'usuario_id'
    },
    correo: {
        type: DataTypes.STRING,
        unique: true
    },
    contrasena: {
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: false
}); 

// class User extends Model{
//     static associate() {

//     }

//     static config(sequelize) {
//         return {
//             sequelize,
//             tableName: USER_TABLE,
//             modelName: 'Usuario',
//             timestamps: false
//         }
//     }
// }

module.exports = { USER_TABLE, UserSchema }