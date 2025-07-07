import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import GlobalState from './states/GlobalState'

createRoot(document.getElementById('root')!).render(
  <GlobalState>
    <RouterProvider router={router} />
  </GlobalState>,
)
