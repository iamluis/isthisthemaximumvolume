import ChopsticksCouch from '../../public/chopsticks/couch.jpeg'
import ChopsticksGlases from '../../public/chopsticks/glases.jpeg'
import ChopssticksPolaroid from '../../public/chopsticks/polaroid.jpeg'
import GRBoat2cuties from '../../public/GRBoat/2cuties.jpeg'
import GRBoat3cuties from '../../public/GRBoat/33cuties.jpeg'

/**
 *  x: zero = left of screen | either px or % to px max 1920
 *  y: zero = top of screen | either px or % to px max 1080
 */
export interface Position {
  x: string
  y: string
}

export interface Image {
  id: string
  position: Position
  rotation: number // rotation in degrees -180 to 180
  url: string // don't know how to type image import right now, will post process this with dynamic import
  width: string
}

export const images: Map<string, StaticImageData> = new Map([
  ['ChopsticksGlases', ChopsticksGlases],
  ['ChopsticksCouch', ChopsticksCouch],
  ['ChopssticksPolaroid', ChopssticksPolaroid],
  ['GRBoat2cuties', GRBoat2cuties],
  ['GRBoat3cuties', GRBoat3cuties]
])
