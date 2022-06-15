const userService = require('../services/userService');

const getAllUsers = async(req, res)=>{
    try{
        const allUsers = await userService.getAllUsers();
        res.status(200).send({ status: "OK", data: allUsers});
    }catch(error){
        res.status(error.status||500).send({ status: "Failed", data:{error: error.message}});
    }   
         
};

const getUser = async (req, res)=>{
    let id = req.params.userId;
    try{
        const user = await userService.getUser(id);
        res.status(200).send({ status: "OK", data: user});
    }catch(error){
        res.status(error.status||500).send({ status: "Failed", data:{error: error.message}});
    }   
};

const createUser = async (req, res) =>{
    try{
        const {body} = req;
        const {name, email, password} = body;
        if(name==undefined||email==undefined||password==undefined){
            throw {status: 400, message: "Failed to created user, the information can't be null"}
        }
        const createdUser = await userService.createUser(body.name, body.email, body.password);
        res.status(201).send({ status: "OK", data: createdUser});
    }catch(error){
        res.status(error.status||500).send({ status: "Failed", data:{error: error.message}});
    }
};

const updateUser = async (req, res) =>{
    try{
        let id = req.params.userId;
        let{name, email, password} = req.body;
        const updatedUser = await userService.updateUser(id,name,email,password);
        res.status(200).send({ status: "OK", data: updatedUser});
    }catch(error){
        res.status(error.status||500).send({ status: "Failed", data:{error: error.message}});
    }
   
};

const deleteUser = async (req, res) =>{
    try{
        let id = req.params.userId;
        const deletedUser = await userService.deleteUser(id);
        res.status(200).send({ status: "OK", data: deletedUser});
    }catch(error){
        res.status(error.status||500).send({ status: "Failed", data:{error: error.message}});
    }
        

};

module.exports ={
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};