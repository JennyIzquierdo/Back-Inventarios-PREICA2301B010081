const EstadoEquipo = require('../models/estadoEquipo')
const {request, response}=require ('express')

//Creación
const createEstadoEquipo = async (req = request, res = response) => {
    //console.log(req.body)
    try{
        const nombre = req.body.nombre 
        ? req.body.nombre.toUpperCase()
        : ''
        console.log(nombre)
        const estadoEquipoBD = await EstadoEquipo.findOne({nombre})
        if(estadoEquipoBD){
            return res.status(400).json({msg:'Ya Existe'})
        }
        const data = {
            nombre
        }
        const estadoEquipo = new EstadoEquipo(data)
        //Guardar
        console.log(estadoEquipo)
        await estadoEquipo.save()
        return res.status(201).json(estadoEquipo)
    }catch(e){
        return res.status(500).json({
            msg: e
        })
    }
    
}

//Edición

//Listar Todo
const getEstadoEquipos = async (req = request, res = response) => {
    try{
        const { estado } = req.query;
        
        const  estadoEquiposBD = await EstadoEquipo.find({estado})
        return res.json(estadoEquiposBD)
    }catch(e){
        return res.status(500).json({
            msg: e
    })
    }
}

//Borrar

module.exports = {createEstadoEquipo, getEstadoEquipos}