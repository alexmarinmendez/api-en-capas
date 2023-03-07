import { Router } from 'express'
import { division, lista, multiplicacion, resta, suma } from '../controllers/operaciones.js'
import { auth } from '../middlewares/auth.js'

const router = Router()

router.get('/suma', suma)
router.get('/resta', resta)
router.get('/multiplicacion', multiplicacion)
router.get('/division', division)
router.get('/lista', auth, lista)

export default router