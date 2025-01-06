
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import expressEjsLayouts from "express-ejs-layouts";
import { passController } from "./controller/pass_controller.js";
import { userinterface_controller } from "./controller/userInterface_controller.js";
import { encryptPassword } from './middleware/encryption_middleware.js'
import { userController } from "./controller/user_controller.js";


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




const port = 3000;


app.get('/', userinterface_controller.list)

app.get('/create', userinterface_controller.create)

app.post('/createpass', passController.createEntry)

app.post('/delete/:id', passController.deleteEntry)

app.get('/entry/:id', passController.viewEntry)

app.get('/edit/:id', passController.edit)

app.post('/edit/:id', passController.editEntry)

app.get('/register', userinterface_controller.registerPage)

app.post('/register', userController.register)



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    });