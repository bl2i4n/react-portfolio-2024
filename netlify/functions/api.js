const path =  require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();
import serverless from "serverless-http";
import express, { Router } from "express";


const PORT = process.env.PORT || 3001 // local is 3001

const app = express ();
app.use(express.static(path.resolve(__dirname, '../build')));
//we will run into a cors error so we need to do the below
app.use(cors());
app.use(bodyParser.json());
const router = Router();



app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"})
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS
    }
})

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("ready to send");
    }
})

router.post("/api/contact", bodyParser.urlencoded({ extended: false }), (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    const mail = {
        from: name,
        to: process.env.EMAIL_ADDRESS,
        subject: 'Contact Form Submission - Portfolio',
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>message: ${message}</p>
        `
    }                           //callback in case there is an error
    contactEmail.sendMail(mail, (error) => {
        if (error){
            res.json(error);
        } else {
            res.json({code: 200, message:"Message Sent"});
        }
    })
})

app.use("/api/", router);


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is online on port : ${PORT}`)
})

export const handler = serverless(app);

