const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.set('port', process.env.PORT || 4000 );

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api/v1/users', require('./api/v1/routes/users.routes'));


app.get('/', (req,res)=>{
    res.send({Title:'Hello Adsi'})
});

app.listen(app.get('port'),()=>{
    console.log(`server is running on localhost:${app.get('port')}`);
})