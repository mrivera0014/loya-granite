const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const UseCalc = require('./data/calculations');
const { config } = require('dotenv');
const answers = [];

const bcrypt = require("bcrypt");
const passport = require('passport');
const flash = require("express-flash");
const session = require('express-session');
const methodOverride = require('method-override');

const initializePassport = require('./passport-config');
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)



app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended:false}))
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized:false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"))
app.get('/',checkNotAuthenticated,(req,res)=>{
    res.render("./answer.ejs");
})
 
app.get("/stuff",checkNotAuthenticated,(req,res)=>{
    res.render('login.ejs')
})




app.post('/calc',(req,res)=>{
    let result = new UseCalc(Number(req.body.unitOne), Number(req.body.unitTwo));
    answers.push(result.yep);
    console.log(answers);
     res.redirect('/answer');
})


function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }

    res.redirect('/')
}

function checkNotAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return res.redirect('/')
    }
    next()
}

app.listen(3050)
