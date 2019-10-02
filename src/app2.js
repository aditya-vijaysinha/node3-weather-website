const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
    res.send({
        name: 'Aditya',
        age: 27
    });
});

/** 
 *  Challenge: Update routes
 *  =====================================================
 *    1. Setup an about route and render a page title with HTML
 *    2. Setup a weather route to send back JSON
 *          - Object with forecast and location Strings
 *    3. Test your work
 */

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
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