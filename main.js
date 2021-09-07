var nodemailer = require("nodemailer");
var express = require("express");
var app = express();

app.post("/send-email", (req, res) =>{
    console.log("Email enviado");
});

app.listen(3000, () =>{
    console.log("Servido en -> http://localhost:3000 ");
})