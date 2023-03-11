const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");

router.get("/index", (req, res)=>{
    const valores = {
        recibo: req.query.recibo,
        nombre: req.query.nombre,
        domicilio: req.query.domicilio,
        tipo: req.query.tipo,
        consumo: req.query.consumo,
        descontado: req.query.descontado,
        descuento: req.query.descuento,
        total: req.query.total,
        subtotal: req.query.total
    }
    res.render('index.html', valores)
})

router.post("/index", (req, res)=>{
    const valores = {
        recibo: req.body.recibo,
        nombre: req.body.nombre,
        domicilio: req.body.domicilio,
        tipo: req.body.tipo,
        consumo: req.body.consumo,
        descontado: req.body.descontado,
        descuento: req.body.descuento,
        total: req.body.total,
        subtotal: req.body.total
    }
    res.render('pagoRecibo.html', valores)
})

module.exports = router;