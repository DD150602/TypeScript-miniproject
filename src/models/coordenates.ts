import { Coordinates } from '../types'
import coordenatesEntry from '../data/coordenates.json'

const coordinates: Coordinates[] = coordenatesEntry as Coordinates[]

class CoordenatesModel {
  async getAllCoordenates (): Promise<Coordinates[]> {
    return coordinates
  }
}

export default CoordenatesModel
