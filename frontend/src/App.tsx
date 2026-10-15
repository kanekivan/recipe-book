import { Navigate, Route, Routes } from 'react-router'
import { AppLayout } from './app/AppLayout'
import { RecipesPage } from './pages/RecipesPage'
import { RecipeDetailsPage } from './pages/RecipeDetailsPage'
import { NewRecipePage } from './pages/NewRecipePage'
import { NotFoundPage } from './pages/NotFoundPage'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/recipes" replace />} />
        <Route path="recipes" element={<RecipesPage />} />
        <Route path="recipes/new" element={<NewRecipePage />} />
        <Route path="recipes/:id" element={<RecipeDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}