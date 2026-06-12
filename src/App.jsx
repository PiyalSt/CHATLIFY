import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import HomePage from './pages/HomePage'
import RootLayout from './layout/RootLayout'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='profile' element={<ProfilePage />} />
      </Route>
    )
  )

  return (
    <>
      <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
