import './App.css'

const appTitle: string = 'Кулинарная книга'

export default function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>{appTitle}</h1>
        <p className="app-subtitle">
          Личные рецепты, ингредиенты и кулинарные заметки.
        </p>
      </header>

      <section className="app-content" aria-labelledby="items-title">
        <h2 id="items-title">Мои рецепты</h2>
        <div className="empty-state">
          <p>Здесь появится список ваших рецептов.</p>
        </div>
      </section>
    </main>
  )
}
