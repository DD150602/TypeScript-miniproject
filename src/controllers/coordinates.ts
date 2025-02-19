import { Request, Response } from 'express'
import CoordenatesModel from '../models/coordenates'

const coordintesModel = new CoordenatesModel()

class CoordinatesController {
  async getAllCoordinates (_req: Request, res: Response): Promise<Response> {
    const coordinates = await coordintesModel.getAllCoordenates()
    return res.json(coordinates)
  }
}

export default CoordinatesController
