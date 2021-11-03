const express = require('express');

require('dotenv').config();

// Conexión a Base de Datos
const mongoose = require('mongoose');


// eslint-disable-next-line no-undef
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.cem57.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log('Base de datos conectada'))
.catch(e => console.log(e));
// ----------------------
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