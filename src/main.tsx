import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Player } from './pages/Player'
import { Debug } from './pages/Debug'
import { Screen } from './pages/Screen'
import { MC } from './pages/MC'
import { Provider } from './components/Provider'

export const router = createBrowserRouter( [
  {
    errorElement: <Navigate to={'/'}/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/player',
        element: <Player/>,
      },
      {
        path: '/mc',
        element: <MC/>,
      },
      {
        path: '/screen',
        element: <Screen/>,
      },
      {
        path: '/debug',
        element: <Debug/>,
      }
    ]
  }
] )

const root = ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement )
root.render( <React.StrictMode><Provider> <RouterProvider router={router} /></Provider>  </React.StrictMode> )
