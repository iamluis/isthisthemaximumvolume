import Categories, { Category } from '../model/Categories';


export function getCategoryBySlug(slug: string) : Category | undefined {
  return Categories.find((category: Category) => category.id === slug)
}