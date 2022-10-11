const express = require("express");
const router = express.Router();

const productsHandler = require("./products.handler")

router.post("/", async(req, res) => {
    const dados = await productsHandler.cadastrarProduct(req.body);
    res.json(dados);
})

router.get("/", async(req, res) => {
    const dados = await productsHandler.buscarProduct();
    res.json(dados);
})

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    const dados = await productsHandler.removerProduct(id);
    res.json(dados);
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const dados = await productsHandler.buscarProductId(id);
    res.json(dados);
})

router.put(':id', async(req, res) => {
    const id = req.params.id;
    const autor = req.body;
    const dados = await productsHandler.trocarProduct(id, autor);
    res.json(dados);
})



module.exports = router;