import React, { useEffect } from 'react'
import { AnimatePresence } from "framer-motion";

import Navbar from '../Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>





            <Navbar></Navbar>
            <AnimatePresence mode='wait'>
                <Outlet key={pathname}></Outlet>
            </AnimatePresence>
            <Footer></Footer>






        </>
    )
}
