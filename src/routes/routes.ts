import { Router } from 'express'
import CoordinatesController from '../controllers/coordinates'

const router = Router()
const coordinatesController = new CoordinatesController()
router.get('/', coordinatesController.getAllCoordinates)

router.post('/', (_req, res) => {
  res.json({ message: 'hello world' })
})

export default router
