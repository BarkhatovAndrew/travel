import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import HelpPage from './pages/Help'
import MainPage from './pages/Main'
import FavoritesPage from './pages/Favorites'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<MainPage />} />
            <Route path="help" element={<HelpPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
