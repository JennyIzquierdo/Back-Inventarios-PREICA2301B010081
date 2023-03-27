const mongoose = require('mongoose')

const mongoConn = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            })   
            console.log('Conexión Exitosa con Mongo!')
        }catch(e){
            console.log('Error',e)
            throw new Error('Error de Conexión')
        }
}

module.exports = {
    mongoConn
}