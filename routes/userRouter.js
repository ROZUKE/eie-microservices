const UserService = require('./../services/userService');
const service = new UserService();

const getUser = async (event,context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try{
        const users = await service.find();
        const response = {status: 200, body: {users}}
        return response
    }catch (error){
        console.log(error)
    }
    
}

const addUser = async (event) => {

    const { correo, contrasena } = JSON.parse(event.body);
    const newUser = {
        correo,
        contrasena
    }
    const user = service.create(newUser);
    return {status:200, body: {user}}
}

const updateUser = async (event) => {
    const { id } = event.pathParameters;
    const newUserData =  JSON.parse(event.body);
    const user = service.update(id, newUserData);

    return {status: 200, body: {user}}
}

const deleteUser = async (event) => {
    const { id } = event.pathParameters;
    const response = service.delete(id);

    return {status: 200, body: {response}}
}
module.exports = {
    getUser,
    addUser,
    updateUser,
    deleteUser
}