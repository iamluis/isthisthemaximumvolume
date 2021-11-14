import Alonso from '../../public/alonso.jpg'
import Hamilton from '../../public/hamilton.jpg'
import Vettel from '../../public/vettel.jpg'

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
  ['hamilton', Hamilton],
  ['alonso', Alonso],
  ['vettel', Vettel],
])
