const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");

module.exports = router;

router.get("/index", (req, res)=>{
    const valores = {
        numRecibo: req.query.numRecibo,
        nombre: req.query.nombre,
        domicilio: req.query.domicilio,
        servicio: req.query.servicio,
        consumo: req.query.consumo
    }
    res.render('pagoRecibo.ejs', valores)
})

router.post("/index", (req, res)=>{
    const valores = {
        numRecibo: req.body.numRecibo,
        nombre: req.body.nombre,
        domicilio: req.body.domicilio,
        servicio: req.body.servicio,
        consumo: req.body.consumo
    }
    res.render('pagoRecibo.ejs', valores)
})

function btnLimpiar(){
    document.getElementById("numRecibo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("domicilio").value = "";
    document.getElementById("servicio").value = "";
    document.getElementById("consumo").value = "";
}