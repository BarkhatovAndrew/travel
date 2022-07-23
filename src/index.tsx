import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { Provider } from 'react-redux'
import { store } from './store'
import HelpPage from './pages/Help'
import MainPage from './pages/Main'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<MainPage />} />
              <Route path="help" element={<HelpPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
