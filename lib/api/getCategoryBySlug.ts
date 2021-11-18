import { Categories } from '../db'
import Category from '../model/Category'

export function getCategoryBySlug(slug: string): Category | undefined {
  return Categories.find((category: Category) => category.id === slug)
}
