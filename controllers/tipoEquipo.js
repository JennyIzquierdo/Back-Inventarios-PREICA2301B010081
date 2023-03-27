const TipoEquipo = require('../models/tipoEquipo')
const {request, response}=require ('express')

//Creación
const createTipoEquipo = async (req = request, res = response) => {
    console.log(req.body)
    //const { nombre } = req.body
    try{
        const nombre = req.body.nombre 
        ? req.body.nombre.toUpperCase()
        : ''
        console.log(nombre)
        const tipoEquipoBD = await TipoEquipo.findOne({nombre})
        if(tipoEquipoBD){
            return res.status(400).json({msg:'Ya Existe'})
        }
        const data = {
            nombre
        }
        const tipoEquipo = new TipoEquipo(data)
        //Guardar
        console.log(tipoEquipo)
        await tipoEquipo.save()
        return res.status(201).json(tipoEquipo)
    }catch(e){
        return res.status(500).json({
            msg: e
        })
    }
    
}

//Edición

//Listar Todo
const getTipoEquipos = async (req = request, res = response) => {
    try{
        const { estado } = req.query;
        
        // select * from tipoEquipo where estado = estado
        const  tipoEquiposBD = await TipoEquipo.find({estado})
        return res.json(tipoEquiposBD)
    }catch(e){
        return res.status(500).json({
            msg: e
    })
    }
}

//Borrar

module.exports = {createTipoEquipo, getTipoEquipos}