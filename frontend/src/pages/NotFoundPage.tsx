import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <section>
      <h1>Страница не найдена</h1>
      <p>Запрошенный адрес не существует.</p>
      <Link to="/recipes">К списку рецептов</Link>
    </section>
  )
}
