import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Root from './Root/Root.jsx'
import ErrorPage from './ErrorPage/ErrorPage.jsx'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import SignUp from './SignUp/SignUp.jsx'
import AuthContextProvider from './Provider/AuthContextProvider.jsx'
import AllJobs from './Pages/AllJobs/AllJobs.jsx'
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
import ViewDetails from './Pages/ViewDetails/ViewDetails.jsx'
import AddJob from './Pages/AddJob/AddJob.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      },
      {
        path: '/all-jobs',
        element: <AllJobs></AllJobs>,
        loader: () => fetch('http://localhost:5000/jobs')
      },
      {
        path: '/job/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
      },
      {
        path: '/add-a-job' ,
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
