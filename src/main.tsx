import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './routes/Home.tsx'
import Empresa from './routes/Empresa.tsx'
import Upload from './routes/Upload.tsx'
import Novareuniao from './routes/Novareuniao.tsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'empresa', element: <Empresa /> },
      { path: 'upload', element: <Upload /> },
      { path: 'novareuniao', element: <Novareuniao /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
