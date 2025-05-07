import React from 'react'
import { motion } from 'framer-motion'
import blop from '../../assets/blop.png'
import blop2 from '../../assets/blop2.png'
import hero from '../../assets/hero.png'
import ar from '../../assets/ar.png'
import bg from '../../assets/bg.png'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <>



            <div className='relative overflow-hidden section flex flex-col justify-center items-center h-screen '>

                {/* <img className='absolute -z-10' src={blop} alt="" />
                <img className='absolute end-0 -z-10' src={blop2} alt="" /> */}

                {/* <div className='h-64 lg:h-8 '></div> */}
                <div className="ccontainer pb-0 mt-16 flex flex-col  lg:flex-row lg:justify-between gap-y-14 items-center">

                    <div className='flex flex-col gap-3 '>
                        <img src={hero} className='w-80 mx-auto lg:w-full' alt="" />
                        <div className='icons flex items-center gap-4 text-white lg:text-2xl '>
                            <a href='https://www.tiktok.com/@mayar.sakr8' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer mx-auto lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-tiktok'></i></a>
                            <a href='https://www.facebook.com/share/1GvHVVEWRC/' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer mx-auto lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-facebook-f'></i></a>
                            <a href='https://www.behance.net/mayarsakr' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer mx-auto lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-linkedin-in'></i></a>
                            <a href='https://api.whatsapp.com/send/?phone=201276317725&text&type=phone_number&app_absent=0&wame_ctl=1' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer mx-auto lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-whatsapp'></i></a>
                            <a href='https://www.behance.net/mayarsakr' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer mx-auto lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-behance'></i></a>
                            <a href='https://www.instagram.com/mayar.sak_r?igsh=MWJ5ajQ0b2QzdmhsdA==' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer mx-auto lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-instagram'></i></a>
                        </div>
                    </div>

                    <div className='flex flex-col text-white text-center lg:text-left'>
                        <h2 className='font-bold lg:text-[32px] text-2xl '>UI/ UX Designer & Instructor</h2>
                        <p className='text-2xl lg:text-[24px] mt-6'>Creative UI/UX designer turning ideas into <span className='lg:block'>smooth, beautiful, and user-friendly websites</span> and apps. Let’s bring your vision to life!</p>
                        <Link to={'/contact'} className='mt-5'>
                            <span className='bg-btn-purple px-6 py-1 btn transition-all duration-300 ease-in-out w-fit cursor-pointer rounded-2xl font-handlee font-black text-lg lg:text-[32px] flex items-center mx-auto lg:mx-0 gap-4'>Let's Talk <img src={ar} alt="" /></span>
                        </Link>
                    </div>
                </div>
            </div>







        </>
    )
}
