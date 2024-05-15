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
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MyJobs from './Pages/MyJobs/MyJobs.jsx'
import UpdateJob from './Pages/UpdateJob/UpdateJob.jsx'
const queryClient = new QueryClient()
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
        element: <AllJobs></AllJobs>
      },
      {
        path: '/job/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
      },
      {
        path: '/add-a-job' ,
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: '/my-jobs' ,
        element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
      },
      {
        path: '/update/:id' ,
        element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </AuthContextProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
