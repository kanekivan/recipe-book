import { NavLink, Outlet } from 'react-router'

export function AppLayout() {
  return (
    <div className="app">
      <header>
        <p className="app-title">Кулинарная книга</p>
        <nav aria-label="Основная навигация">
          <NavLink to="/recipes" end>
            Рецепты
          </NavLink>
          <NavLink to="/recipes/new">
            Создать
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
