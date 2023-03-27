const app = require('./app')
//const mongoConn = require('./databases/configuration')
const { mongoConn } = require('./databases/configuration')
const dotenv = require('dotenv').config()

//Middleware
app.set('port', process.env.PORT||3000)

//console.log (mongoConn)
const conn = mongoConn()

app.listen(app.get('port'), () => {
    console.log(`Arrancó por puerto:  ${app.get('port')}` )
})