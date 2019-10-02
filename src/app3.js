const path = require('path');
const express = require('express');

console.log(__dirname);
//console.log(__filename);
//console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

/** 
 *  Challenge: Create two more HTML files
 *  =====================================================
 *    1. Create a HTML page for about with "About" title
 *    2. Create a HTML page for about with "Help" title
 *    3. Remove the old route handlers for both
 *    4. Test your work
 */

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is raining!!!!',
        location: 'Bangalore'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});