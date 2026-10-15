export type RecipeCategory =
  | 'soup'
  | 'main'
  | 'salad'
  | 'dessert'
  | 'bakery'

export type RecipeDifficulty = 'easy' | 'medium' | 'hard'

export type Recipe = {
  id: string
  title: string
  description: string
  category: RecipeCategory
  difficulty: RecipeDifficulty
  cookingTimeMinutes: number
  servings: number
  calories: number
  createdAt: string
}

export const categoryLabels: Record<RecipeCategory, string> = {
  soup: 'Суп',
  main: 'Основное блюдо',
  salad: 'Салат',
  dessert: 'Десерт',
  bakery: 'Выпечка',
}

export const difficultyLabels: Record<RecipeDifficulty, string> = {
  easy: 'Простой',
  medium: 'Средний',
  hard: 'Сложный',
}
