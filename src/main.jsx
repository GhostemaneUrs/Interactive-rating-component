import App from './pages'
import React from 'react'
import './theme/main.scss'
import { createRoot } from 'react-dom/client'
import { RatingProvider } from './contexts/rating'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RatingProvider>
      <App />
    </RatingProvider>
  </React.StrictMode>
)
