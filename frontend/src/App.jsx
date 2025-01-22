import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { ROUTES } from './companents/routes/Routes'

const routes = createBrowserRouter(ROUTES)

function App() {

  return (
    <RouterProvider router={routes} />
  )
}

export default App
