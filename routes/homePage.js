import express from "express";
import { routeExecutarAPI } from "./executarAPI.js";

const router = express.Router();

router.get('/', (req, res) => {
    console.log(`HomePage chamada`);
    res.render('home',{
        title:'Página Inicial',
        explanation:'Testando'
    });
    //res.json({ testando: 'Teste realizado com sucesso' })
});

router.use('/login', routeExecutarAPI);

export { router };