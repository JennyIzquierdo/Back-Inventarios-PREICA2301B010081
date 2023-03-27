const { Router } = require('express')
const { createInventarioEquipo, getInventarioEquipos} = require ('../controllers/inventarioEquipo')
const router = Router()


//Creación
router.post('/', createInventarioEquipo)

//Listar Todo
router.get('/', getInventarioEquipos)


module.exports = router