import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavigationHoster from './NavigationHoster'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavigationHoster/>
  </StrictMode>,
)
