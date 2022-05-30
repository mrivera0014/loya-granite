// const express = require('express');
// // const app = express();
// require('dotenv').config();
// // const cors = require('cors');
// const UseCalc = require('./data/calculations');
// const { config } = require('dotenv');
// const answers = [];

// const bcrypt = require("bcrypt");
// const passport = require('passport');
const flash = require("express-flash");
const session = require('express-session');
// const methodOverride = require('method-override');

// const initializePassport = require('./passport-config');
// initializePassport(
//     passport,
//     email => users.find(user => user.email === email),
//     id => users.find(user => user.id === id)
// )



// app.set('view-engine', 'ejs');
// app.use(express.urlencoded({ extended: false }))
// app.use(flash());
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }))
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(methodOverride("_method"))
// app.get('/', checkNotAuthenticated, (req, res) => {
//     res.render("./answer.ejs");
// })

// app.get("/stuff", checkNotAuthenticated, (req, res) => {
//     res.render('login.ejs')
// })




// app.post('/calc', (req, res) => {
//     let result = new UseCalc(Number(req.body.unitOne), Number(req.body.unitTwo));
//     answers.push(result.yep);
//     console.log(answers);
//     res.redirect('/answer');
// })


// function checkAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next()
//     }

//     res.redirect('/')
// }

// function checkNotAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return res.redirect('/')
//     }
//     next()
// }




// // contact form
// const express = require('express');
// const nodemailer = require('nodemailer')
// const app = express()
// require('dotenv').config();
// // const cors = require('cors');

// const port = process.env.PORT || 3001;
// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`)
// })
// // the sender email



// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         type: 'OAuth2',
//         user: process.env.EMAIL,
//         pass: process.env.WORD,
//         clientId: process.env.OAUTH_CLIENTID,
//         clientSecret: process.env.OAUTH_CLIENT_SECRET,
//         refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//     }
// })



// transporter.verify((err, success) => {
//     err
//         ? console.log(err)
//         : console.log(`=== Server is ready to take messages: ${success} ===`)
// })

// let mailOptions = {
//     from: 'test@email.com',
//     to: process.env.EMAIL,
//     subject: 'Nodemailer API',
//     text: 'Testing nodemailer, if you see this it worked!'
// };

// transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//         console.log('Error' + err);
//     } else {
//         console.log('Email Sent!')
//     }
// })


// const app = express()


// app.use('/', router)
// app.listen(port, () => console.log('connected'))

// const contactSend = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     aut: {
//         user: 'mrivera0014@gmail.com',
//         pass: 'Penny!14'
//     }
// });

// app.post('/', (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const phone = req.body.phone;
//     const message = req.body.message;
//     const mail = {
//         from: name,
//         to: 'mrivera0014@gmail.com',
//         Subject: `Message From ${name}`,
//         html: `
//         <p>Name: ${name}</p>
//         <p>Email: ${email}</p>
//         <p>Phone: ${phone}</p>
//         <p>Message: ${message}</p>`
//     }
//     console.log(req)
//     contactSend.sendMail(mail, (error) => {
//         console.log(mail);
//         if (error) {
//             res.json({ status: 'failed' });
//         } else {
//             res.json({
//                 status: 'sent'
//             })
//         }
//     })
// })



// app.listen(3050)

// app.post('/api/contact', (req, res) => {
//     let data = req.body
//     let smtpTransport = nodemailer.createTransport({
//         service: 'Gmail',
//         port: 587,
//         auth: {
//             user: 'mrivera0014@gmail.com',
//             pass: 'Penny!14'
//         }
//     })
// })

// let mailOptions = {
//     from: data.email,
//     to: 'mrivera0014@gmail.com',
//     subject: `Message from ${data.name}`,
//     html:
//         `<h3>Contact Info For Customer</h3>
//     <p>Name: ${data.name}</p>
//     <p>Email: ${data.email}</p>
//     <p>Phone: ${data.phone}</p>
//     <p>Message: ${data.message}</p>
//     `
// }


// smtpTransport.contactSend(mailOptions, (err, res) => {
//     if (err) {
//         res.send(err)
//     }
//     else {
//         res.send('Success')
//     }
//     smtpTransport.close()
// })


const express = require('express');
const app = express();
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require("cors");
const nodemailer = require('nodemailer')


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(cors())


app.post("/send_mail",cors(),async(req,res)=>{
    console.log(req.body)
    let {text,name,email} = req.body;
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST, 
        port: process.env.MAIL_PORT,
        auth:{
            user:process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD
        }

    })

    await transport.sendMail({
        from:process.env.MAIL_FROM,
        to:"test@test.com",
        subject:"test email",
        html:`
        
        <div>
            
            <p>${name}</p>
            <p>${email}</p>
            <p>${text}</p>

        
        </div>

        `
    })
})




app.listen(process.env.PORT || 4000, () =>{
    console.log("running on port 4000")
})