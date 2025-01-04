import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route} from "react-native-navigation-filepath/route";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Route />
  </StrictMode>,
)
