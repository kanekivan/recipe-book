import './App.css'

const appTitle: string = 'Кулинарная книга'

export default function App() {
  return (
    <main className="app">
      <header>
        <h1>{appTitle}</h1>
        <p>Личные рецепты, ингредиенты и кулинарные заметки.</p>
      </header>
      <section aria-labelledby="items-title">
        <h2 id="items-title">Мои рецепты</h2>
        <p>Здесь появится список ваших рецептов.</p>
      </section>
    </main>
  )
}
