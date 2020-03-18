const express = require('express');
const app = express();
const router = require('./routes.js')
const port = 3666;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/reviews', router)

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Listening on port: ${port}`))