import React, { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>


            <header>

                <nav className='flex justify-between items-center px-5 lg:px-[120px] py-5 fixed top-0 w-full'>
                    <div className='w-[50px] lg:w-[80px]'>
                        <Link to='/'>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <ul className=' hidden lg:flex gap-11 text-white font-medium text-xl'>
                        <li> <NavLink className={'transition-all duration-200 ease-in-out'} to={'/'}>Home</NavLink> </li>
                        <li> <NavLink className={'transition-all duration-200 ease-in-out'} to={'/services'}>What i do</NavLink> </li>
                        <li> <NavLink className={'transition-all duration-200 ease-in-out'} to={'/projects'}>Portfolio</NavLink> </li>
                        <li> <NavLink className={'transition-all duration-200 ease-in-out'} to={'/contact'}>Contact Me</NavLink> </li>
                    </ul>
                    <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden'>
                        <i className=' cursor-pointer fa-solid fa-bars text-white text-2xl'></i>
                    </button>
                </nav>




            </header>

            {isOpen && <div className={` fixed inset-0 bg-black/75 transition-opacity duration-300`} onClick={() => setIsOpen(false)}></div>}


            <div
                className={`fixed top-0 right-0 h-full w-64 flex flex-col  bg-[#0C0C0C] text-white p-6 transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}>
                <button
                    className={`text-white text-2xl mb-4 cursor-pointer text-end `} onClick={() => setIsOpen(false)}>
                    <i className='fa-solid fa-xmark'></i>
                </button>
                <nav className="flex flex-col gap-7">
                    <li className="list-none navlink">
                        <NavLink className="flex items-center gap-3 transition-all duration-200 ease-in-out" to="/">
                            <i className="fa-solid fa-house w-5"></i> Home
                        </NavLink>
                    </li>
                    <li className="list-none navlink">
                        <NavLink className="flex items-center gap-3 transition-all duration-200 ease-in-out" to="/services">
                            <i className="fa-solid fa-users-gear w-5"></i> What I Do
                        </NavLink>
                    </li>
                    <li className="list-none navlink">
                        <NavLink className="flex items-center gap-3 transition-all duration-200 ease-in-out" to="/projects">
                            <i className="fa-solid fa-chart-simple w-5"></i> Portfolio
                        </NavLink>
                    </li>
                    <li className="list-none navlink">
                        <NavLink className="flex items-center gap-3 transition-all duration-200 ease-in-out" to="/contact">
                            <i className="fa-solid fa-envelope w-5"></i> Contact Me
                        </NavLink>
                    </li>
                </nav>

                <div className='flex gap-6 justify-center absolute bottom-7 left-1/2 -translate-x-1/2 text-xl'>
                    <a href='https://www.facebook.com/share/1GvHVVEWRC/' target='_blank' className='icon transition-all duration-300 ease-in-out cursor-pointer   flex items-center justify-center  rounded-full  '><i className='fa-brands fa-facebook-f'></i></a>
                    <a href='https://www.instagram.com/mayar.sak_r?igsh=MWJ5ajQ0b2QzdmhsdA==' target='_blank' className='icon transition-all duration-300 ease-in-out cursor-pointer   flex items-center justify-center  rounded-full  '><i className='fa-brands fa-instagram'></i></a>
                    <a href='https://www.tiktok.com/@mayar.sakr8' target='_blank' className='icon transition-all duration-300 ease-in-out cursor-pointer   flex items-center justify-center  rounded-full  '><i className='fa-brands fa-tiktok'></i></a>
                    <a href='https://www.behance.net/mayarsakr' target='_blank' className='icon transition-all duration-300 ease-in-out cursor-pointer   flex items-center justify-center  rounded-full  '><i className='fa-brands fa-behance'></i></a>

                    <a href='https://api.whatsapp.com/send/?phone=201276317725&text&type=phone_number&app_absent=0&wame_ctl=1' target='_blank' className='icon transition-all duration-300 ease-in-out cursor-pointer   flex items-center justify-center  rounded-full  '><i className='fa-brands fa-whatsapp'></i></a>

                </div>

            </div>




        </>
    )
}
