const db = require('../models');

const getAllUsers = async()=>{
    try{
       let users = await db.User.findAll();
       return users;
    }catch (error){
        throw {status: 500, message: error.message || "Failed to get users"}
    }
};

const getUser = async(id) =>{
    try{
        let user = await db.User.findByPk(id);
        return user
    }catch (error){
        throw {status: 500, message: error.message || "Failed to get user"}
    }
};

const createUser = async(name, email, password)=>{
    try{
        let newUser = await db.User.create({
            name,
            email,
            password,
        });
        return newUser;
    }catch (error){
        throw {status: 500, message: error.message || "Failed to created user"}
    }
};

const updateUser = async(id,name,email,password)=>{
    try{
        let updatedUser = await db.User.update({
            name,
            email,
            password,
        },{
            where:{
                id,
            }
        });
        return updatedUser;
    }catch (error){        
        throw {status: 500, message: error.message || "Failed to update User"}
    }
};

const deleteUser = async(id) =>{
    try{
        const deletedUser = await db.User.destroy({
            where:{
                id,
            }
        });
        return deletedUser
    }catch (error){
        throw {status: 500, message: error.message || "Failed to delete user"}
    }
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}