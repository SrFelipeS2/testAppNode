const db = require('../models');

const getAllArticles = async()=>{
    try{
       let Articles = await db.Article.findAll({
        include:{
            model: db.User,
            required: true,
            as: "User",
            attributes:["id", "name", "email"]
        }
       });
       return Articles;
    }catch (error){
        throw {status: 500, message: error.message || "Failed to get users"}
    }
};

const getArticle = async(id) =>{
    try{
        let Article = await db.Article.findByPk(id);
        return Article
    }catch (error){
        throw {status: 500, message: error.message || "Failed to get user"}
    }
};

const createArticle = async(title, content, UserId)=>{
    try{
        let newArticle = await db.Article.create({
            title, 
            content, 
            UserId
        });
        return newArticle;
    }catch (error){
        throw {status: 500, message: error.message || "Failed to created user"}
    }
};

const updateArticle = async(id,title, content, UserId)=>{
    try{
        let updatedArticle = await db.Article.update({
            title, 
            content, 
            UserId
        },{
            where:{
                id,
            }
        });
        return updatedArticle;
    }catch (error){        
        throw {status: 500, message: error.message || "Failed to update User"}
    }
};

const deleteArticle = async(id) =>{
    try{
        const deletedArticle = await db.Article.destroy({
            where:{
                id,
            }
        });
        return deletedArticle
    }catch (error){
        throw {status: 500, message: error.message || "Failed to delete user"}
    }
};

module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
}