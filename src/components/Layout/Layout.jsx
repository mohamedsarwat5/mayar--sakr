import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
    return (
        <>





            <Navbar />
            <Outlet />
            <Footer />






        </>
    )
}
