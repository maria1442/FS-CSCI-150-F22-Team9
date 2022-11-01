if(process.env.NODE_ENV !== 'prodcution'){
    require('dotenv').config()
}

const express = require('express');
const app=express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassport = require('./passport-config');
const flash = require('express-flash');
const session = require('express-session');

initializePassport(
    passport, 
    email => {
    return users.find(users => users.email === email)
});

const users = [];

app.set('view-engine','ejs');
app.use(express.urlencoded({extended: false}));
app.use(flash());
app.use(session(
    secret: process.env.SESSION_SECRET
));

app.get("/", function(req,res){
    res.render('index.ejs', {name: "Aakash"});
})

app.get("/login", function(req,res){
    res.render('login.ejs');
})

// post for log in
app.post('/login', function(req,res){

})

// get for register

app.get('/register',function(req, res){
    res.render('register.ejs');
})

app.post('/register',async function(req, res){
    try{
        const hashedPassword = await (bcrypt.hash(req.body.password, 10));
        users.push({
            id: Date.now().toString,
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        res.redirect('/login');
        
    }
    catch{
        res.redirect('/register');
    }
    console.log(users);
})

app.listen(3000, function(){
    console.log("running on 3000");
})
