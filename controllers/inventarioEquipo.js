const InventarioEquipo = require('../models/inventarioEquipo')
const { request, response} = require('express')
const Usuario = require('../models/usuarioEquipo')
const Marca = require('../models/marcaEquipo')
const Estado = require('../models/estadoEquipo')
const TipoEquipo = require('../models/tipoEquipo')

// crear
const createInventarioEquipo= async (req = request, 
    res = response) => {
    try{
        const data = req.body
        console.log(data)
        const { usuario, marca, estado, tipoEquipo } = data;
        //validando usuario
        const usuarioDB = Usuario.findOne({
            _id: usuario._id,
            estado: true
        })// select * from usuarios where _id=? and estado=true
        if(!usuarioDB){
            return res.status(400).json({msg: 'usuario invalido'})
        }
        // validando marca
        const marcaDB = Marca.findOne({
            _id: marca._id,
            estado: true
        })// select * from marcas where _id=? and estado=true
        if(!marcaDB){
            return res.status(400).json({msg: 'marca invalida'})
        }
        // validando estado
        const estadoDB = Estado.findOne({
            _id: estado._id,
            estado: true
        })// select * from estados where _id=? and estado=true
        if(!estadoDB){
           return res.status(400).json({msg: 'estado invalido'})
        }
        // validando tipo equipo
        const tipoEquipoDB = TipoEquipo.findOne({
            _id: tipoEquipo._id,
            estado: true
        })// select * from tipoequipos where _id=? and estado=true
        if(!tipoEquipoDB){
           return res.status(400).json({msg: 'estado invalido'})
        }      
        const inventarioEquipo = new InventarioEquipo(data)

        await inventarioEquipo.save()
        
        return res.status(201).json(inventarioEquipo)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getInventarioEquipos = async (req = request, res = response) => {
        try{
            const inventarioEquiposDB = await InventarioEquipo.find()//select * from inventarios
            return res.json(inventarioEquiposDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar inventario
const updateInventarioByID = async (req = request, 
    res = response) => {

    try{
        const { id } = req.params
        const data = req.body
        const inventario  = await InventarioEquipo.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(inventario)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }
}

module.exports = { createInventarioEquipo, getInventarioEquipos, updateInventarioByID}