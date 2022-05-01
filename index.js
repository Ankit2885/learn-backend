const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')


// this line send html css and javascript file
const websitePath = path.join(__dirname, 'public')
console.log(websitePath);
app.use(('/'), express.static(websitePath));

// services page serve with this line
app.use(('/services'), express.static(path.join(__dirname, 'noticfaction')))


// this line send hello world
app.get('/hello', (req, res) => {
    res.send("hello world")
})

// this line send JSON 
app.get('/json', (req, res) => {
    res.send(
        {
            name: "ankit",
            lastName: "rawat"
        }
    )
})

// serving the html file with node js code
app.get('/html', (req, res) => {
    const data = fs.readFileSync('public/index.html');
    res.end(data.toString());
})

// serving the file with express js code
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/project1.html'))
})

app.listen(port, () => {
    console.log(`your server listening http://localhost:${port}`);
})


