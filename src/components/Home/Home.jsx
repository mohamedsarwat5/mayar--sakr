import React from 'react'
import { motion } from 'framer-motion'
import blop from '../../assets/blop.png'
import blop2 from '../../assets/blop2.png'
import hero1 from '../../assets/hero1.png'
import ar from '../../assets/fluent_arrow-up-12-filled.svg'
import ar1 from '../../assets/arroo.png'
import arrow from '../../assets/Arrow.svg'
import x from '../../assets/Vector.svg'
import bg from '../../assets/bg.png'
import { Link } from 'react-router-dom'
import Services from '../Services/Services'
import Pre from '../Pre/Pre'
import Clients from '../Clients/Clients'
export default function Home() {
    return (
        <>



            <div className=" overflow-hidden section flex flex-col justify-center  min-h-screen   ">

                <img src={blop} className='-z-30 absolute  w-[700px] left-1/2 top-1/2 -translate-x-1/2 lg:left-0 lg:top-0 lg:-translate-x-0' alt="" />
                <img src={blop2} className='-z-30 absolute w-[700px] top-0 end-0 ' alt="" />
                <div className="ccontainer pb-0 mt-16 flex flex-col  overflow-hidden lg:flex-row lg:justify-between gap-y-14 items-center relative">

                    <div className='flex flex-col gap-3 relative '>

                        <div className='flex items-center flex-col lg:flex-row'>
                            <motion.img
                                initial={{ opacity: 0, scale: 0, }}
                                whileInView={{ opacity: 1, scale: 1, }}
                                transition={{ duration: .4 , scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }}}
                                src={hero1} className='w-full mx-auto lg:w-8/12' alt="" />

                            <motion.div
                                initial={{ opacity: 0, scale: 0, }}
                                whileInView={{ opacity: 1, scale: 1, }}
                                transition={{ duration: .4 ,scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },}}
                                className='hidden lg:flex flex-col justify-center items-center -rotate-6 lg:-translate-y-10 -translate-y-5'>
                                <h2 className='text-white font-handlee  lg:text-[30px] mb-0 translate-y-3 font-bold'> <span className='block'>Hey</span>I'm Mayar Sakr</h2>
                                <img src={arrow} className='mt-0 rotate-6' alt="" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: .4, delay: .3 }}
                                className='flex flex-row lg:hidden items-center justify-center gap-1'>
                                <img src={x} className=' w-14 h-14 rotate-45  transform scale-x-[-1]' alt="" />
                                <h2 className='text-white font-handlee  text-[30px] mb-0  font-bold'><span className='block text-center'>Hey</span>I'm Mayar Sakr</h2>
                                <img src={x} className=' w-14 h-14 -rotate-45  ' alt="" />
                            </motion.div>
                        </div>


                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .4 }}
                            className='icons flex items-center gap-4 mx-auto lg:mx-0 text-white lg:text-2xl mt-5'>
                            <a href='https://www.tiktok.com/@mayar.sakr8' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer  lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-tiktok'></i></a>
                            <a href='https://www.facebook.com/share/1GvHVVEWRC/' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer  lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-facebook-f'></i></a>
                            <a href='https://www.linkedin.com/in/mayarsakr/' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer  lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-linkedin-in'></i></a>
                            <a href='https://api.whatsapp.com/send/?phone=201276317725&text&type=phone_number&app_absent=0&wame_ctl=1' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer  lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-whatsapp'></i></a>
                            <a href='https://www.behance.net/mayarsakr' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer  lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-behance'></i></a>
                            <a href='https://www.instagram.com/mayar.sak_r?igsh=MWJ5ajQ0b2QzdmhsdA==' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer  lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-instagram'></i></a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .4, }}
                        className='flex flex-col text-white text-left'>
                        <h2 className='font-bold lg:text-[32px] text-2xl '>UI/ UX Designer & Instructor</h2>
                        <p className='text-2xl lg:text-[24px] mt-6'>Creative UI/UX designer turning ideas into <span className='lg:block'>smooth, beautiful, and user-friendly websites</span> and apps. Let’s bring your vision to life!</p>
                        <Link to={'/contact'} className='mt-5'>
                            <span className='bg-btn-purple px-6 py-1 btn transition-all duration-300 ease-in-out w-fit cursor-pointer rounded-2xl font-handlee font-black text-lg lg:text-[32px] flex items-center gap-4'>Let's Talk <img src={ar} alt="" /></span>
                        </Link>
                    </motion.div>
                </div>
            </div>


            <Services />
            <Pre />
            <Clients />

        </>
    )
}
