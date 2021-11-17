import ChopsticksCouch from '../../public/chopsticks/couch.jpeg'
import ChopsticksGlases from '../../public/chopsticks/glases.jpeg'
import ChopssticksPolaroid from '../../public/chopsticks/polaroid.jpeg'
import GRBoat2cuties from '../../public/GRBoat/2cuties.jpeg'
import GRBoat3cuties from '../../public/GRBoat/3cuties.jpeg'
import GRBoatdiving from '../../public/GRBoat/diving.jpeg'
import GRBoatmodel from '../../public/GRBoat/model_almpanidou.jpeg'
import GRPhiriplaka3crazies from '../../public/GRPhiriplaka/3crazies.jpeg'
import GRPhiriplaka4hot from '../../public/GRPhiriplaka/4hot.jpeg'
import GRPhiriplakahats from '../../public/GRPhiriplaka/3crazies.jpeg'
import GRPhiriplakamermade from '../../public/GRPhiriplaka/mermade.jpeg'
import Foodburger from '../../public/Food/burger.jpeg'
import Foodcake from '../../public/Food/cakeee.jpeg'
import Foodhanoi from '../../public/Food/hanoi.jpeg'
import Foodvagelis from '../../public/Food/vagelis.jpeg'
import Cleaning_carton from '../../public/cleaning/carton.jpeg'
import Cleaning_dreft from '../../public/cleaning/dreft.jpeg'
import Cleaning_rollo from '../../public/cleaning/rollo.jpeg'
import Coloc_cena from '../../public/coloc/cleaning.jpeg'
import Coloc_funeral from '../../public/coloc/funeral.jpeg'
import Coloc_piercing from '../../public/coloc/piercing.jpeg'
import Coloc_shirts from '../../public/coloc/shirts.jpeg'
import Coloc_snow from '../../public/coloc/snow.jpeg'
import Coloc_stairs from '../../public/coloc/stairs.jpeg'
import Crazy_letsgoshopping from '../../public/crazy/letsgoshopping.jpeg'
import Crazy_noestabien from '../../public/crazy/noestabien.jpeg'
import Crazy_on_the_car from '../../public/crazy/on_the_car.jpeg'
import Crazy_posing_statue from '../../public/crazy/posing_statue.jpeg'
import Crazy_yoda from '../../public/crazy/yoda.jpeg'
import Hats_gorro1 from '../../public/hats/gorro1.jpeg'
import Hats_gorro2 from '../../public/hats/gorro2.jpeg'
import Hats_gorro3 from '../../public/hats/gorro3.jpeg'
import Hats_gorro4 from '../../public/hats/gorro4.jpeg'
import Hats_gorro5 from '../../public/hats/gorro5.jpeg'
import Masks_mask_party from '../../public/Masks/mask_party.jpeg'
import Masks_mask1 from '../../public/Masks/mask1.jpeg'
import Masks_mask2 from '../../public/Masks/mask2.jpeg'
import Model_model from '../../public/model/model.jpeg'
import Model_model1 from '../../public/model/model1.jpeg'
import Model_model2 from '../../public/model/model2.jpeg'
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
  ['GRBoat3cuties', GRBoat3cuties],
  ['GRBoatdiving', GRBoatdiving],
  ['GRBoatmodel', GRBoatmodel],
  ['GRPhiriplaza3crazies', GRPhiriplaka3crazies],
  ['GRPhiriplaza4hot',GRPhiriplaka4hot],
  ['GRPhiriplazahats',GRPhiriplakahats],
  ['GRPhiriplazamermade',GRPhiriplakamermade],
  ['Foodburger',Foodburger],
  ['Foodcake',Foodcake],
  ['Foodhanoi',Foodhanoi],
  ['Foodvagelis',Foodvagelis],
  ['Cleaning_dreft',Cleaning_dreft],
  ['Cleaning_rollo',Cleaning_rollo],
  ['Cleaning_carton',Cleaning_carton],
  ['Coloc_cena',Coloc_cena],
  ['Coloc_funeral',Coloc_funeral],
  ['Coloc_piercing',Coloc_piercing],
  ['Coloc_shirts',Coloc_shirts],
  ['Coloc_snow',Coloc_snow],
  ['Coloc_stairs',Coloc_stairs],
  ['Crazy_letsgoshopping',Crazy_letsgoshopping],
  ['Crazy_noestabie',Crazy_noestabien],
  ['Crazy_on_the_car',Crazy_on_the_car],
  ['Crazy_posing_statue',Crazy_posing_statue],
  ['Crazy_yoda',Crazy_yoda],
  ['Hats_gorro1', Hats_gorro1],
  ['Hats_gorro2', Hats_gorro2],
  ['Hats_gorro3', Hats_gorro3],
  ['Hats_gorro4', Hats_gorro4],
  ['Hats_gorro5', Hats_gorro5],
  ['Masks_mask_party',Masks_mask_party],
  ['Masks_mask1',Masks_mask1],
  ['Masks_mask2',Masks_mask2],
  ['Model_model',Model_model],
  ['Model_model1',Model_model1],
  ['Model_model2',Model_model2]
])
