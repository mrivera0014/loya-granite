const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const UseCalc = require('./data/calculations');
const { config } = require('dotenv');
const answers = [];


app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended:false}))



app.get('/',(req,res)=>{
    res.render("index.ejs",{name: "clare"})
})

app.get('/calc',(req,res)=>{
    res.render('calc.ejs',{answer:"here"})
})
app.get('/answer',(req,res)=>{
    res.render('answer.ejs',{answer:answers})
})


app.post('/calc',(req,res)=>{
    let result = new UseCalc(Number(req.body.unitOne), Number(req.body.unitTwo));
    answers.push(result.yep);
    console.log(answers);
     res.redirect('/answer');
})
app.listen(3000)
