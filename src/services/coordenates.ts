import { Coordinates } from '../types'
import coordenatesEntry from './coordenates.json'

const coordinates: Coordinates[] = coordenatesEntry as Coordinates[]

export function getAllCoordinates (): Coordinates[] {
  return coordinates
}
