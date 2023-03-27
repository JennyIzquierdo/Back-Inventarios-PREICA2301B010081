const { Router } = require('express')
const {createMarcaEquipo, getMarcaEquipos} = require ('../controllers/marcaEquipo')
const router = Router()


//Creación
router.post('/', createMarcaEquipo)

//Edición
//router.put('/', updateMarcaEquipo)

//Listar Todo
router.get('/', getMarcaEquipos)


module.exports = router