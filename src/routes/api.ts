import {Router} from 'express'
import * as apiController from '../controllers/apiController'

const router = Router()

router.get('/ping',apiController.ping)

router.get('/random',apiController.random)

router.get('/nome/:nome',apiController.nome)

router.post('/frases', apiController.criarFrase)

router.get('/frases/:id', apiController.listarFrases)

router.get('/frases/:id', apiController.pegarFrases)

router.put('/frases/:id',apiController.editaFrases)

router.delete('/frases/:id',apiController.deletaFrases)

export default router