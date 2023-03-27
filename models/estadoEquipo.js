const { Schema, model } = require('mongoose')

const EstadoEquipoSchema=Schema(
    {
        nombre: {
            type: String,
            required: [true, 'Nombre requerido']
        },
        estado: {
            type: Boolean,
            default: true,
            required: true
        },
        fechaCreacion:{
            type: Date,
            default: new Date()
        },
        fechaActualizacion: {
            type: Date,
            default: new Date()
        }
    }
)

module.exports = model('EstadoEquipo', EstadoEquipoSchema)