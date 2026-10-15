import { Link } from 'react-router'

export function NewRecipePage() {
  return (
    <section>
      <h1>Создание рецепта</h1>
      <p>Форма добавления нового рецепта появится в следующей лабораторной работе.</p>
      <Link to="/recipes">К списку рецептов</Link>
    </section>
  )
}
