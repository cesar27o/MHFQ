const express = require('express');
const path = require('path');

const app = express();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

app.get("/", (req, res) => {
    res.render('index', {
        name: 'John'
    });
})

app.listen(5002, () => {
    console.log("Server is running on port 5002");
})