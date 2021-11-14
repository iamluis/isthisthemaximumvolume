import Categories from '../model/Categories'

export function getCategoryIds() {
  return Categories.map((cat)=>cat.id)
}