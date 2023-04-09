const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
})

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready: ${success} ===`)
})


//creating our route
app.post('/send', function (req, res) {
    //creating object to test that everything in our server is working
    let mailOptions = {
        from: 'test@gmail.com',
        to: process.env.EMAIL,
        subject: 'NodemailerAPI',
        text: 'It works!',
    }

    //sending our test object through transporter to test
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('Error ' + err);
        } else {
            console.log('Email sent successfully');
            res.json({ status: 'Email sent' })
        }
    })
})



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})