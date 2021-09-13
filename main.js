var nodemailer = require("nodemailer");
var express = require("express");
var app = express();

app.post("/send-email", (req, res) =>{
    var transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        post: 587,
        secure: false,
        auth: {
            user: "maxwell.brown36@ethereal.email",
            pass: "7Z8N1WDguRqbbkNEph"
        },
    });
    var mailOptions = {
        from: "Remitente",
        to: "correoinventado001@gmail.com",
        subject: "Enviado con nodemailer",
        text: "A ver si esta cosa funciona"
    }
    transporter.sendMail(mailOptions, (error, info) =>{
        if (error) {
            res.status(500).send(error.message);
        }else{
            console.log("Emaila bien enviado.");
            res.status(200).jsonp(req.body);
        }
    })
});

app.listen(3000, () =>{
    console.log("Servido en -> http://localhost:3000 ");
})