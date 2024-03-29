const path = require('path');
const express = require('express');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '/templates');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Aditya Sinha'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Aditya Sinha'
    });
});

/** 
 *  Challenge: Create a template for help page
 *  =====================================================
 *    1. Setup a help template to render a help message to the screen
 *    2. Setup the help route and render the template with an example message
 *    3. Test your work
 */

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Help Page'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is raining!!!!',
        location: 'Bangalore'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});