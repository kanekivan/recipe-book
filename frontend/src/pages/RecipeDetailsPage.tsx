import { Link, useParams } from 'react-router'
import { recipes } from '../data/recipes'
import { categoryLabels, difficultyLabels } from '../types/recipe'

export function RecipeDetailsPage() {
  const { id } = useParams()
  const recipe = recipes.find((item) => item.id === id)

  if (!recipe) {
    return (
      <section>
        <h1>Рецепт не найден</h1>
        <p>Запись с идентификатором {id} не найдена в списке рецептов.</p>
        <Link to="/recipes">К списку рецептов</Link>
      </section>
    )
  }

  return (
    <section className="recipe-details">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p><strong>Категория:</strong> {categoryLabels[recipe.category]}</p>
      <p><strong>Сложность:</strong> {difficultyLabels[recipe.difficulty]}</p>
      <p><strong>Время приготовления:</strong> {recipe.cookingTimeMinutes} мин.</p>
      <p><strong>Порций:</strong> {recipe.servings}</p>
      <p><strong>Калорийность:</strong> {recipe.calories} ккал</p>
      <p><strong>Дата добавления:</strong> {recipe.createdAt}</p>
      <Link to="/recipes">К списку рецептов</Link>
    </section>
  )
}
