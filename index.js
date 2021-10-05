const express = require('express');

const app = express();
const { port } = require('./config')

app.use(express.json());
app.set('port', port);
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes/routes'));

const server = app.listen(app.get('port'), () => {
    console.info(`Escuchando el puerto ${app.get('port')}`)
});

module.exports = {
    app,
    server
};