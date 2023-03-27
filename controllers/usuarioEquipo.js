const UsuarioEquipo = require('../models/usuarioEquipo')
const {request, response}=require ('express')

//Creación
const createUsuarioEquipo = async (req = request, res = response) => {
    try{
        const data = req.body
        const email = data.email
        console.log(data)
        const usuarioEquipoBD = await UsuarioEquipo.findOne({ email })
        if(usuarioEquipoBD){
            return res.status(400).json({msg: 'Ya existe usuario'})
        }
        const usuarioEquipo = new UsuarioEquipo(data)
        console.log(usuarioEquipo)
        await usuarioEquipo.save()
        return res.status(201).json(usuarioEquipo)
    }catch(e){
        console.log(e)
        return res.status(500).json({e})
    }
    
}

//Edición

//Listar Todo
const getUsuarioEquipos = async (req = request, res = response) => {
    try{
        const { estado } = req.query;
        
        const  usuarioEquiposBD = await UsuarioEquipo.find({estado})
        return res.json(usuarioEquiposBD)
    }catch(e){
        return res.status(500).json({
            msg: e
    })
    }
}

module.exports = {createUsuarioEquipo, getUsuarioEquipos}