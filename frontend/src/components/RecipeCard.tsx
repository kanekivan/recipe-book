import { Link } from 'react-router'
import type { Recipe } from '../types/recipe'
import { categoryLabels, difficultyLabels } from '../types/recipe'

type RecipeCardProps = {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="recipe-card">
      <h2>
        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
      </h2>
      <p>{recipe.description}</p>
      <p>Категория: {categoryLabels[recipe.category]}</p>
      <p>Сложность: {difficultyLabels[recipe.difficulty]}</p>
      <p>Время приготовления: {recipe.cookingTimeMinutes} мин.</p>
    </article>
  )
}
