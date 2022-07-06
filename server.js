const express = require('express');
const app = express();
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require("cors");
const nodemailer = require('nodemailer')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())


app.post("/", cors(), async (req, res) => {
    console.log(req.body)
    let { text, name, email } = req.body;
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD
        }

    })

    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: "chrisbwatkins@gmail.com",
        subject: "test email",
        html: `

        <div>

            <p>${name}</p>
            <p>${email}</p>
            <p>${text}</p>

        </div>
        `
    })
})


app.listen(process.env.PORT || 4000, () => {
    console.log("running on port 4000")
})