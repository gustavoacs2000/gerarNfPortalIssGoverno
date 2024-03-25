import express  from "express";
const router = express.Router();

router.get('/', (req, res) => {
    console.log(`HomePage chamada`);
    res.json({testando:'Teste realizado com sucesso'})
});

export {router}