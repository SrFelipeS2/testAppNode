const db= require('../models')

const {Router} = require('express'); //obtengo solo el metodo router para el enrutamiento
const router = Router();

app.get('/', (req,res)=>{ //req->request->peticion || resp-> response
    res.send({Message: 'hello Adsi 2231424'})
})

module.exports = router; // se exporta el modulo para poderlo usar