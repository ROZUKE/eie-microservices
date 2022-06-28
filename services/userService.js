// const getConection = require('./../libs/postgresPool');
// const getConection = require('../libs/postgres');
const {sequelize} = require('./../libs/sequelize');

const { UserSchema } = require('./../models/userModel.js');
class UserService {

    constructor(){
        this.users= [];
        // this.pool = pool;
        // this.pool.on('error', (err) => console.error(err))
    }

    async create(data) {
      const newUser = await UserSchema.create(data)
      return newUser;
    }

    async find() {
      
      // old version to execute query
      // const query = 'SELECT * from "Usuario"';
      // const [data] = await sequelize.query(query)
      const rta = await UserSchema.findAll();
      return rta;
    }

    async findOne(id) {
      const user = await UserSchema.findByPk(id);
      return user;
    }

    async update(id, editUser) {
      const user = await UserSchema.findByPk(id);
      const rta = user.update(editUser);
      return rta;
    }

    // async updateRecord(id, editUser) {
    //   console.log(editUser)
    //   const correo = editUser.correo
    //   try {
    //     if( !correo ){
    //       console.log('Passed: ', correo);
    //       const rta = await UserSchema.upsert({usuario_id: id, correo: editUser.correo});
    //       return rta;
    //     }
    //     if (editUser.contrasena != undefined){
    //       const rta = await UserSchema.upsert({usuario_id: id, contrasena: editUser.contrasena});
    //       return rta;
    //     } 
    //   } catch (error) {
    //     console.log(error)
    //   }
        
    //   }
      

    async delete(id) {
      const user = await UserSchema.findByPk(id);
      await user.destroy();
      return {id}
    }
}

module.exports = UserService;