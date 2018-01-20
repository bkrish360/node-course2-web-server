const express = require('express');
const hbs = require('hbs');


const port = process.env.port || 3000;

hbs.registerPartials(__dirname+'/views/partials');

var app = express();
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));



app.get('/', (req,res) => {
    res.render('index.hbs',{
        pageTitle: 'About US',
        currentYear: new Date().getFullYear()
    });

});


app.get('/about', (req,res) => {
    res.render('about.hbs',{
        pageTitle: 'About US',
        currentYear: new Date().getFullYear()
    });

});

app.get('/error', (req,res) => {
    res.send({
        errorMessage: 'Error'
    });

});

app.listen(port,()=>{
    console.log('Server is running on port: ${port}');
});