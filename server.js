const express = require('express');
const nodemailer = require('nodemailer')
const app = express()
require('dotenv').config();
const cors = require('cors');

//middleware
app.use(express.json());
app.use(cors())

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`)
})


app.post('/loya-granite', function (req, res) {
    let mailOptions = {
        from: `${req.body.mailState.email}`,
        to: process.env.EMAIL,
        subject: `Message from: ${req.body.mailState.email}`,
        text: `${req.body.mailState.message}`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            res.json({
                status: 'Fail'
            })
        } else {
            console.log('Email Sent!');
            res.json({ status: "Email Sent!" })
        }
    })
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})