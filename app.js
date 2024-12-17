
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import { passController } from "./controller/pass_controller.js";

const app = express();
app.set('view engine', 'ejs');

app.use(expressEjsLayouts)
app.use(express.urlencoded({ extended: true }));

const port = 3000;


app.get('/', passController.list)

app.get('/create', (req, res) => {
    res.render('create');
})

app.post('/createpass', passController.createEntry)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    });