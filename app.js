
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import expressEjsLayouts from "express-ejs-layouts";
import { passController } from "./controller/passwordController.js";
import { userinterface_controller } from "./controller/userInterface_controller.js";
import { encryptPassword } from './middleware/encryption_middleware.js'
import { userController } from "./controller/userController.js";
import session from "express-session";
import LocalStrategy from "passport-local";
import passport from "passport";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('view engine', 'ejs');


app.use(expressEjsLayouts);
app.use(express.urlencoded({ extended: true }));
// app.use('/createpass',encryptPassword);
// app.use('/edit/:id', encryptPassword)
app.use(encryptPassword);
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    secret: "secret",
    resave: false ,
    saveUninitialized: true ,
  }))
app.use(passport.initialize())
app.use(passport.session()) 

const customFields = {
    usernameField: 'user_email',
    passwordField: 'user_password'
}

passport.use(new LocalStrategy(customFields, userController.authUser))

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.use((req, res, next) => {
    console.log(req.session);
    console.log(req.user);
    next();
});

const checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) { return next() }
    res.redirect("/login")
  }



const port = 3000;


app.get('/dashboard', checkAuthenticated, userinterface_controller.list)

app.get('/create', userinterface_controller.create)

app.post('/createpass', passController.createEntry)

app.post('/delete/:id', passController.deleteEntry)

app.get('/entry/:id', passController.viewEntry)

app.get('/edit/:id', passController.edit)

app.post('/edit/:id', passController.editEntry)

app.get('/register', userinterface_controller.registerPage)

app.post('/register', userController.register)

app.get('/login', userinterface_controller.loginPage)

app.post('/login', userController.loginSubmit)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    });