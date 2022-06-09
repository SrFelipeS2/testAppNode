const {Router} = require('express'); //obtengo solo el metodo router para el enrutamiento
const userController = require('../../../controllers/userController');


const router = Router();

router.get("/", userController.getAllUsers);

router.get("/:userId", userController.getUser);

router.post("/", userController.createUser);

router.put("/:userId", userController.updateUser);

router.delete("/:userId", userController.deleteUser);

module.exports = router; // se exporta el modulo para poderlo usar

