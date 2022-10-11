const express = require("express");
const router = express.Router();

const userHandler = require("./user.handler")

router.post("/", async(req, res) => {
    const dados = await userHandler.cadastrarUser(req.body);
    res.json(dados);
})

router.get("/", async(req, res) => {
    const dados = await userHandler.buscarUser();
    res.json(dados);
})

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    const dados = await userHandler.removerUser(id);
    res.json(dados);
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const dados = await userHandler.buscarUserId(id);
    res.json(dados);
})

router.put('/', async(req, res) => {
    const dados = await userHandler.login(req.body);
    res.json(dados);
})



module.exports = router;