const { Router } = require('express')
const {createUsuarioEquipo, getUsuarioEquipos} =
 require('../controllers/usuarioEquipo')

const router = Router()

// crear
router.post('/', createUsuarioEquipo)

// consultar todos
router.get('/', getUsuarioEquipos)

module.exports = router;