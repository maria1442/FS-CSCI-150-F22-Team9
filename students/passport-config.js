const { authenticate } = require('passport')
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy

function authenticateUser(){

}

function initialize(passport, getUserByEmail){
    const authenticateUser = (usernameField, password, done) =>{
        const user = getUserByEmail(email)

        if(user == null){
            return done(null, false, {message: "no user with that email!"})
        }
        try{
            if(await (bcrypt.compare(password, user.password))){
                return done(null, user)
            }
            else{
                return done(null, false, {message: "Incorrect password!"})
            }
        }
        catch (error){
            return done(error);
        }
    }
    passport.use(new LocalStrategy({usernameField: 'email'}), authenticateUser)
    passport.serializeUser(user, done => { }) 
    passport.deserializeUser(id, done => { }) 
    
}

module.exports = initialize