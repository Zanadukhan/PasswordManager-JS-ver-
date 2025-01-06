
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import expressEjsLayouts from "express-ejs-layouts";
import { passController } from "./controllers/passwordController.js";
import { userinterface_controller } from "./controllers/userInterface_controller.js";
import { encryptPassword } from './middleware/encryption_middleware.js'
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

app.get('/create', userinterface_controller.create)

app.post('/createpass', passController.createEntry)

app.post('/delete/:id', passController.deleteEntry)

app.get('/entry/:id', passController.viewEntry)

app.get('/edit/:id', passController.edit)

app.post('/edit/:id', passController.editEntry)

app.get('/register', userinterface_controller.registerPage)

app.post('/register', userController.register)

app.get('/login', userinterface_controller.loginPage)

app.post('/login', authController.loginSubmit)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    });