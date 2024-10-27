// importing the express 1
const express = require('express');
const path = require('path');


//This app object will represent your Express web server and allows you to define routes, handle requests, and listen on a specific port. 2
const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));


//to parse json request bodys 
app.use(express.json());