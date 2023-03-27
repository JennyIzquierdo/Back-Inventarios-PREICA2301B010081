const MarcaEquipo = require('../models/marcaEquipo')
const {request, response}=require ('express')

//Creación
const createMarcaEquipo = async (req = request, res = response) => {
    try{
        const nombre = req.body.nombre 
        ? req.body.nombre.toUpperCase()
        : ''
        //console.log(nombre)
        const marcaEquipoBD = await MarcaEquipo.findOne({nombre})
        
        if(marcaEquipoBD){
            return res.status(400).json({msg:'Ya Existe'})
        }
        const data = {
            nombre
        }
        const marcaEquipo = new MarcaEquipo(data)
        //Guardar
        console.log(marcaEquipo)
        await marcaEquipo.save()
        return res.status(201).json(marcaEquipo)
    }catch(e){
        return res.status(500).json({
            msg: e
        })
    }
    
}

//Listar Todo
const getMarcaEquipos = async (req = request, res = response) => {
    try{
        const { estado } = req.query;
        
        
        const  marcaEquiposBD = await MarcaEquipo.find({estado})
        return res.json(marcaEquiposBD)
    }catch(e){
        return res.status(500).json({
            msg: e
    })
    }
}



module.exports = {createMarcaEquipo, getMarcaEquipos}