import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

export const requestHeader = {
  'Content-Type': 'application/json'
}

export const userId = 1;

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
