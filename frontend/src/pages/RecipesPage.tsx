import { Link } from 'react-router'
import { RecipeCard } from '../components/RecipeCard'
import { recipes } from '../data/recipes'

export function RecipesPage() {
  return (
    <section>
      <h1>Мои рецепты</h1>
      <Link to="/recipes/new">Добавить рецепт</Link>
      {recipes.length === 0 ? (
        <p>Рецептов пока нет.</p>
      ) : (
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </section>
  )
}
