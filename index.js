const express = require('express');

const app = express();
const { port } = require('./config')

app.use(express.json());
app.set('port', port);
app.use(express.urlencoded({ extended: true }));