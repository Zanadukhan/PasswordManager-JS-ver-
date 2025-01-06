import LocalStrategy from 'passport-local';
import passport from 'passport';
import {userController} from '../controllers/userController.js';
import {authController} from '../controllers/authController.js';


const customFields = {
    usernameField: 'user_email',
    passwordField: 'user_password'
}


const local = new LocalStrategy(customFields, authController.authUser);

passport.use(local);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});


export default passport