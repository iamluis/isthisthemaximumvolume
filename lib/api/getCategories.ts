import { Categories } from '../db'

export function getCategoryIds() {
  return Categories.map((cat) => cat.id)
}
