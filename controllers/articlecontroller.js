const ArticleService = require('../services/articleService');

const getAllArticles = async(req, res)=>{
    try{
        const allArticles = await ArticleService.getAllArticles();
        res.status(200).send({ status: "OK", data: allArticles});
    }catch(error){
        res.status(error.status||500).send({ status: "Failed", data:{error: error.message}});
    }   
         
};

const getArticle = async (req, res)=>{
    let id = req.params.articleId;
    try{
        const Article = await ArticleService.getArticle(id);
        res.status(200).send({ status: "OK", data: Article});
    }catch(error){
        res.status(error.status||500).send({ status: "Failed", data:{error: error.message}});
    }   
};

const createArticle = async (req, res) =>{
    try{
        const {body} = req;
        const {title, content, UserId} = body;
        if(title==undefined||content==undefined||UserId==undefined){
            throw {status: 400, message: "Failed to created Article, the information can't be null"}
        }
        const createdArticle = await ArticleService.createArticle(title, content, UserId);
        res.status(201).send({ status: "OK", data: createdArticle});
    }catch(error){
        res.status(error.status||500).send({ status: "Failed", data:{error: error.message}});
    }
};

const updateArticle = async (req, res) =>{
    try{
        let id = req.params.articelId;
        let{title, content, UserId} = req.body;
        const updatedArticle = await ArticleService.updateArticle(id, title, content, UserId);
        res.status(200).send({ status: "OK", data: updatedArticle});
    }catch(error){
        res.status(error.status||500).send({ status: "Failed", data:{error: error.message}});
    }
   
};

const deleteArticle = async (req, res) =>{
    try{
        let id = req.params.articleId;
        const deletedArticle = await ArticleService.deleteArticle(id);
        res.status(200).send({ status: "OK", data: deletedArticle});
    }catch(error){
        res.status(error.status||500).send({ status: "Failed", data:{error: error.message}});
    }
        

};

module.exports ={
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
};