// const getConection = require('./../libs/postgresPool');
// const getConection = require('../libs/postgres');
const {sequelize} = require('./../libs/sequelize');
class UserService {

    constructor(){
        this.users= [];
        // this.pool = pool;
        // this.pool.on('error', (err) => console.error(err))
    }

    create(data) {
      const newUser = {
        id: parseInt(Math.random() * 100),
        ...data
      }
      this.users.push(newUser);
      console.log(this.users);
      return newUser;
    }

    async find() {
      
      const query = 'SELECT * from "Usuario"';
      const [data] = await sequelize.query(query)
      return data;
    }

    findOne(id) {
      return this.users.find(item => item.id == id);
    }

    update(id, editUser) {
      const index = this.users.findIndex(item => item.id == id)
      if (index === -1) {
        throw new Error('user not found')
      }
      this.users[index] = editUser;
      return this.users[index];
    }

    delete(id) {
      const index = this.users.findIndex(item => item.id == id)
      if (index === -1) {
        throw new Error('user not found')
      }
      this.users.splice(index, 1);
      return { id }
    }
}

module.exports = UserService;