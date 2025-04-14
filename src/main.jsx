import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './components/DataProvider/DataProvider.jsx'
import { initialState, reducer } from './Utility/reducer.js'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename= "/amazon-frontEnd">
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
    </BrowserRouter>
  </StrictMode>,
)
