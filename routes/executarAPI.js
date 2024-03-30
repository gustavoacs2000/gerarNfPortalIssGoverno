import { Login } from "../dispatchers/login.js";
import express from "express";

const routeExecutarAPI = express.Router();

routeExecutarAPI.get('/', (req, res) => {
    console.log(`Execução iniciada`);
    res.render('executando',{
        title:'Robô em execucao',
        explanation:'O robô está em execução'
    });
    //res.json({ testando: 'Teste realizado com sucesso' })
});

routeExecutarAPI.post('/', async(req,res) => {
    console.log(`Iniciando funcao de login no portal ${req.body.url}`);
    await Login(req.body.url, req.body.login, req.body.senha);
    res.redirect('/');
});
export { routeExecutarAPI };