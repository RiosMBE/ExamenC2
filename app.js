const http = require("http");
const express = require("express");
const bodyparser = require("body-parser");
const misRutas = require("./router/index");
const path = require("path");

const app = express();
app.set('view engine', "ejs")
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile)

app.use(bodyparser.urlencoded({extended:true}));
app.use(misRutas)

const puerto = 4003;

app.use((req, res, next) =>{
    res.status(404).sendFile(__dirname + '/public/error.html');
})

app.listen(puerto, ()=>{
    console.log("iniciando puerto 4003")
})