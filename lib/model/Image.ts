import ChopsticksCuties from '../../public/chopsticks/cuties.jpeg'
import ChopsticksGlases from '../../public/chopsticks/glases.jpeg'
import ChopsticksPolaroid from '../../public/chopsticks/polaroid.jpeg'
import Cleaning_carton from '../../public/cleaning/carton.jpeg'
import Cleaning_dreft from '../../public/cleaning/dreft.jpeg'
import Cleaning_rollo from '../../public/cleaning/rollo.jpeg'
import Coloc_cena from '../../public/coloc/cena.jpeg'
import Coloc_funeral from '../../public/coloc/funeral.jpeg'
import Coloc_hallerbos from '../../public/coloc/hallerbos.jpeg'
import Coloc_piercing from '../../public/coloc/piercing.jpeg'
import Coloc_shirts from '../../public/coloc/shirts.jpeg'
import Coloc_snow from '../../public/coloc/snow.jpeg'
import Coloc_stairs from '../../public/coloc/stairs.jpeg'
import Crazy_letsgoshopping from '../../public/crazy/letsgoshopping.jpeg'
import Crazy_noestabien from '../../public/crazy/noestabien.jpeg'
import Crazy_on_the_car from '../../public/crazy/on_the_car.jpeg'
import Crazy_posing_statue from '../../public/crazy/posing_statue.jpeg'
import Crazy_yoda from '../../public/crazy/yoda.jpeg'
import Foodburger from '../../public/Food/burger.jpeg'
import Foodcake from '../../public/Food/cakeee.jpeg'
import Foodhanoi from '../../public/Food/hanoi.jpeg'
import Foodpanellets from '../../public/Food/panellets.jpeg'
import GRBoat2cuties from '../../public/GRBoat/2cuties.jpeg'
import GRBoat3cuties from '../../public/GRBoat/3cuties.jpeg'
import GRBoatdiving from '../../public/GRBoat/diving.jpeg'
import GRBoatmodel from '../../public/GRBoat/model_almpanidou.jpeg'
import GRGen_3_in_the_boat from '../../public/GRGeneral/3_in_the_boat.jpeg'
import GRGen_greece_general1 from '../../public/GRGeneral/greece_general1.jpeg'
import GRGen_greek_gods from '../../public/GRGeneral/greek_gods.jpeg'
import GRGen_more_greece from '../../public/GRGeneral/more_greece.jpeg'
import GRGen_selfie_in_greece from '../../public/GRGeneral/selfie_in_greece.jpeg'
import GRGen_sofas from '../../public/GRGeneral/sofas.jpeg'
import GRPhiriplaka3crazies from '../../public/GRPhiriplaka/3crazies.jpeg'
import GRPhiriplaka4hot from '../../public/GRPhiriplaka/4hot.jpeg'
import GRPhiriplakahats from '../../public/GRPhiriplaka/hats.jpeg'
import GRPhiriplakamermade from '../../public/GRPhiriplaka/mermade.jpeg'
import GRSunset_not_worth_it from '../../public/GRSunset/not_worth_it.jpeg'
import GRSunset_sunset1 from '../../public/GRSunset/sunset1.jpeg'
import GRSunset_sunset2 from '../../public/GRSunset/sunset2.jpeg'
import GRSunset_sunset3 from '../../public/GRSunset/sunset3.jpeg'
import GRSunset_sunset_boat from '../../public/GRSunset/sunset_boat.jpeg'
import GRSunset_sunset_in_lov from '../../public/GRSunset/sunset_in_lov.jpeg'
import Hats_gorro1 from '../../public/hats/gorro1.jpeg'
import Hats_gorro2 from '../../public/hats/gorro2.jpeg'
import Hats_gorro3 from '../../public/hats/gorro3.jpeg'
import Hats_gorro4 from '../../public/hats/gorro4.jpeg'
import Hats_gorro5 from '../../public/hats/gorro5.jpeg'
import Masks_mask1 from '../../public/Masks/mask1.jpeg'
import Masks_mask2 from '../../public/Masks/mask2.jpeg'
import Masks_mask_party from '../../public/Masks/mask_party.jpeg'
import Model_model from '../../public/model/model.jpeg'
import Model_model1 from '../../public/model/model1.jpeg'
import Model_model2 from '../../public/model/model2.jpeg'
import Model_super_model from '../../public/model/super_model.jpeg'
import {
  default as Selfies_colacao,
  default as Selfies_dracula,
} from '../../public/Selfies/colacao.jpeg'
import Selfies_infusiones from '../../public/Selfies/infusiones.jpeg'
import Selfies_rabit from '../../public/Selfies/rabit.jpeg'
import Selfies_selfie1 from '../../public/Selfies/selfie1.jpeg'
import Selfies_selfie2 from '../../public/Selfies/selfie2.jpeg'
import ChopsticksCouch from '../../public/sofas/couch.jpeg'
import Sofa_more_sofa from '../../public/sofas/more_sofa.jpeg'
import Sofa_popcorn from '../../public/sofas/popcorn.jpeg'
import Sofa_sofa_elena from '../../public/sofas/sofa_elena.jpeg'
import Sofa_sofa_outside from '../../public/sofas/sofa_outside.jpeg'
import Sofa_Two_bitches from '../../public/sofas/Two_bitches.jpeg'

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
  ['ChopsticksPolaroid', ChopsticksPolaroid],
  ['ChopsticksCuties', ChopsticksCuties],
  ['GRBoat2cuties', GRBoat2cuties],
  ['GRBoat3cuties', GRBoat3cuties],
  ['GRBoatdiving', GRBoatdiving],
  ['GRBoatmodel', GRBoatmodel],
  ['GRPhiriplaka3crazies', GRPhiriplaka3crazies],
  ['GRPhiriplaka4hot', GRPhiriplaka4hot],
  ['GRPhiriplakahats', GRPhiriplakahats],
  ['GRPhiriplakamermade', GRPhiriplakamermade],
  ['Foodburger', Foodburger],
  ['Foodcake', Foodcake],
  ['Foodhanoi', Foodhanoi],
  ['Foodvagelis', Foodhanoi],
  ['Foodpanellets', Foodpanellets],
  ['Cleaning_dreft', Cleaning_dreft],
  ['Cleaning_rollo', Cleaning_rollo],
  ['Cleaning_carton', Cleaning_carton],
  ['Coloc_cena', Coloc_cena],
  ['Coloc_funeral', Coloc_funeral],
  ['Coloc_piercing', Coloc_piercing],
  ['Coloc_shirts', Coloc_shirts],
  ['Coloc_snow', Coloc_snow],
  ['Coloc_stairs', Coloc_stairs],
  ['Coloc_hallerbos', Coloc_hallerbos],
  ['Crazy_letsgoshopping', Crazy_letsgoshopping],
  ['Crazy_noestabien', Crazy_noestabien],
  ['Crazy_on_the_car', Crazy_on_the_car],
  ['Crazy_posing_statue', Crazy_posing_statue],
  ['Crazy_yoda', Crazy_yoda],
  ['Hats_gorro1', Hats_gorro1],
  ['Hats_gorro2', Hats_gorro2],
  ['Hats_gorro3', Hats_gorro3],
  ['Hats_gorro4', Hats_gorro4],
  ['Hats_gorro5', Hats_gorro5],
  ['Masks_mask_party', Masks_mask_party],
  ['Masks_mask1', Masks_mask1],
  ['Masks_mask2', Masks_mask2],
  ['Model_model', Model_model],
  ['Model_model1', Model_model1],
  ['Model_model2', Model_model2],
  ['Model_super_model', Model_super_model],
  ['Sofa_more_sofa', Sofa_more_sofa],
  ['Sofa_popcorn', Sofa_popcorn],
  ['Sofa_sofa_elena', Sofa_sofa_elena],
  ['Sofa_Two_bitches', Sofa_Two_bitches],
  ['Sofa_sofa_outside', Sofa_sofa_outside],
  ['GRGen_3_in_the_boat', GRGen_3_in_the_boat],
  ['GRGen_greece_general1', GRGen_greece_general1],
  ['GRGen_greek_gods', GRGen_greek_gods],
  ['GRGen_more_greece', GRGen_more_greece],
  ['GRGen_selfie_in_greece', GRGen_selfie_in_greece],
  ['GRGen_sofas', GRGen_sofas],
  ['GRSunset_not_worth_it', GRSunset_not_worth_it],
  ['GRSunset_sunset_boat', GRSunset_sunset_boat],
  ['GRSunset_sunset_in_lov', GRSunset_sunset_in_lov],
  ['GRSunset_sunset1', GRSunset_sunset1],
  ['GRSunset_sunset2', GRSunset_sunset2],
  ['GRSunset_sunset3', GRSunset_sunset3],
  ['Selfies_colacao', Selfies_colacao],
  ['Selfies_dracula', Selfies_dracula],
  ['Selfies_infusiones', Selfies_infusiones],
  ['Selfies_rabit', Selfies_rabit],
  ['Selfies_selfie1', Selfies_selfie1],
  ['Selfies_selfie2', Selfies_selfie2],
])
