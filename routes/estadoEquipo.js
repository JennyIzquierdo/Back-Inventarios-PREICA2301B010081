const { Router } = require('express')
const {createEstadoEquipo, getEstadoEquipos} = require ('../controllers/estadoEquipo')
const router = Router()


//Creación
router.post('/', createEstadoEquipo)

//Edición


//Listar Todo
router.get('/', getEstadoEquipos)

//Borrar



module.exports = router