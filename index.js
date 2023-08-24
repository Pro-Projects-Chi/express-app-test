'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002
app.get('/', (req, res) => {
    res.status(200).send('I\'m working whats it to ya? Am I in your business like that?!')
})

app.listen(PORT, () => console.log('I\'m running on AWS'))

