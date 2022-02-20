const express = require('express');
const dotenv = require('dotenv');
const port = 5002;

const app = express();

app.get('/api/goals', (req, res) => {
    res.json({message: 'Get goals'})
})

app.listen(port, ()=> console.log('server running'))