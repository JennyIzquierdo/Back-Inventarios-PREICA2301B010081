const express = require('express')
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const tipoEquipo= require('./routes/tipoEquipo')
const estadoEquipo= require('./routes/estadoEquipo')
const usuarioEquipo= require('./routes/usuarioEquipo')
const marcaEquipo= require('./routes/marcaEquipo')
const inventarioEquipo = require ('./routes/inventarioEquipo')

//URI o endpoint 
//middlewares - .use 
app.use('/api/tipoequipos',tipoEquipo)
app.use('/api/estadoequipos',estadoEquipo)
app.use('/api/usuarioequipo',usuarioEquipo)
app.use('/api/marcaequipos',marcaEquipo)
app.use('/api/inventarioequipos',inventarioEquipo)

module.exports = app
