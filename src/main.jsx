import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { SilencioProvider } from './context/SilencioContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SilencioProvider>
        <App />
      </SilencioProvider>
    </BrowserRouter>
  </React.StrictMode>,
)