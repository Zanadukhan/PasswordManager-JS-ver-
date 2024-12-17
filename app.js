
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();
app.set('view engine', 'ejs');
app.use(expressEjsLayouts)

const port = 3000;


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/create', (req, res) => {
    res.render('create');
})

app.post('/createpass', (req, res) => {
    pass
})
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    });