
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import expressEjsLayouts from "express-ejs-layouts";
import { passController } from "./controllers/passwordController.js";
import { userinterface_controller } from "./controllers/userInterface_controller.js";
import { encryptPassword } from './middleware/security_middleware.js'
import { userController } from "./controllers/userController.js";
import session from "express-session";
import LocalStrategy from "passport-local";
import { authController } from "./controllers/authController.js";
import passport from "./config/passport.js";

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






const port = 3000;


app.get('/dashboard', authController.checkAuthenticated, userinterface_controller.list)

app.get('/create', authController.checkAuthenticated, userinterface_controller.create)

app.get('/generate', authController.checkAuthenticated, passController.generate)

app.post('/createpass', authController.checkAuthenticated, passController.createEntry)

app.post('/delete/:id', authController.checkAuthenticated, passController.deleteEntry)

app.get('/entry/:id', authController.checkAuthenticated, passController.viewEntry)

app.get('/edit/:id', authController.checkAuthenticated, passController.edit)

app.post('/edit/:id', authController.checkAuthenticated, passController.editEntry)

app.get('/register', userinterface_controller.registerPage)

app.post('/register', userController.register)

app.get('/login', userinterface_controller.loginPage)

app.post('/login', authController.loginSubmit)

app.post('/logout', authController.logout)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    });

export default app;