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

      {/* <div className="loading-wave">
        <div className="loading-bar" />
        <div className="loading-bar" />
        <div className="loading-bar" />
        <div className="loading-bar" />
      </div> */}
      <div className="flex space-x-1 text-neutral-500 text-3xl font-light font-[poppins]">
        <span className="fade-letter" style={{ animationDelay: '0s' }}>L</span>
        <span className="fade-letter" style={{ animationDelay: '0.1s' }}>O</span>
        <span className="fade-letter" style={{ animationDelay: '0.2s' }}>A</span>
        <span className="fade-letter" style={{ animationDelay: '0.3s' }}>D</span>
        <span className="fade-letter" style={{ animationDelay: '0.4s' }}>I</span>
        <span className="fade-letter" style={{ animationDelay: '0.5s' }}>N</span>
        <span className="fade-letter" style={{ animationDelay: '0.6s' }}>G</span>
      </div>



    </div>;
  }

  return (
    <>

      <RouterProvider router={router}></RouterProvider>


    </>
  )
}
