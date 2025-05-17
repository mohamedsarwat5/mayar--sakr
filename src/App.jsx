import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const navigationType = performance.getEntriesByType('navigation')[0]?.type;

    // 'reload' or 'navigate' or 'back_forward'
    if (navigationType === 'reload' || !sessionStorage.getItem('hasLoaded')) {
      sessionStorage.setItem('hasLoaded', 'true');
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    } else {
      setLoading(false);
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "services", element: <Services /> },
        { path: "projects", element: <Projects /> },
        { path: "contact", element: <Contact /> },
      ]
    }
  ])

  if (loading) {
    return <div className='flex items-center justify-center min-h-[100dvh] lo bg-[#0C0C0C]'>


      <h1 class="shiny-text">
        LOADING
      </h1>



    </div>;
  }

  return (
    <>

      <RouterProvider router={router}></RouterProvider>


    </>
  )
}
