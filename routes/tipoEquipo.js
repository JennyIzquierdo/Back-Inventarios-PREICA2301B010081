const { Router } = require('express')
const {createTipoEquipo, getTipoEquipos} = require ('../controllers/tipoEquipo')
const router = Router()


//Creación
router.post('/', createTipoEquipo)

//Edición
//router.put('/', updateTipoEquipo)

//Listar Todo
router.get('/', getTipoEquipos)

//Borrar

module.exports = router