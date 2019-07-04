const express = require('express');
const PORT =3000;

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
/////
app.set("json spaces",4);
const index = require('./routes/index');
const clientes = require('./routes/clientes');
const filmes = require('./routes/filmes');
const personagens = require('./routes/personagem');
const atores = require('./routes/ator');
app.use('/',index);
app.use('/clientes',clientes);
app.use('/filmes',filmes);
app.use('/personagens',personagens);
app.use('/ator',atores);
const db = require('./config/database');



app.use(cors({
    origin:['http://localhost:4200'],
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["Content-Type","Authorization"]
}));

db.authenticate()
    .then(()=>console.log('database connected...'))
    .catch(err=>console.log('error: '+ err))


app.listen(PORT,()=>console.log("escutando na porta"+PORT));