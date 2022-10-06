const {Router} = require('express'); //obtengo solo el metodo router para el enrutamiento
const articleController = require('../../../controllers/articleController');


const router = Router();

router.get("/", articleController.getAllArticles);

router.get("/:articleId", articleController.getArticle);

router.post("/", articleController.createArticle);

router.put("/:articleId", articleController.updateArticle);

router.delete("/:articleId", articleController.deleteArticle);

module.exports = router; // se exporta el modulo para poderlo usar

