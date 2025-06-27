import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Child from './components/child.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Child />
  </StrictMode>,
)
