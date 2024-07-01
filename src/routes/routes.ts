import { Router } from 'express'
import { getAllCoordinates } from '../services/coordenates'

const router = Router()

router.get('/', (_req, res) => {
  res.json(getAllCoordinates())
})

router.post('/', (_req, res) => {
  res.json({ message: 'hello world' })
})

export default router
