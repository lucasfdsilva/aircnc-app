const express=require('express');
const routes=require('./routes');
const mongoose=require('mongoose');
const cors=require('cors');
const path=require('path')

const server=express();

const port=3333;

//REQ.QUERY = ACESSAR QUERY PARAMS (PARA FILTROS)
//REQ.PARAMS = ACESSAR ROUTE PARAMS (PARA EDIÇÃO, DELETE)
//REQ.BODY = ACESSAR CORPO DA REQUISIÇÃO (PARA CRIAÇÃO, EDIÇÃO)

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-axwe1.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

server.use(cors());
server.use(express.json());
server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
server.use(routes);

server.listen(port,(req,res)=>{
    console.log(`Servidor online na porta ${port}`);
});