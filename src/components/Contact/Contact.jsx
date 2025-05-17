import React from 'react'
import { motion } from 'framer-motion'
import mayar from '../../assets/Mayarrr.svg'
import v from '../../assets/Vector.svg'
import blob from '../../assets/blob.png'



export default function Contact() {
    return (
        <>




            <div className='h-22 lg:h-[50px]'></div>

            <div>

                <div className='relative ccontainer min-h-screen flex flex-col-reverse lg:flex-row gap-y-9 lg:justify-between items-center !pb-16 !lg:pb-0 overflow-hidden'>
                    <img src={blob} className='absolute -z-10 -left-32 lg:-top-24 opacity-50 lg:w-[900px]' alt="" />
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .4, delay: .3 }}
                            className='text-white text-2xl lg:text-4xl lg:w-10/12 font-light'><span className='text-btn-purple font-bold'>Are You Ready</span> to kickstart your project with a touch of magic?</motion.h2>
                        <motion.h2
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .4, delay: .4 }}
                            className='text-white mt-6 font-handlee text-2xl lg:text-4xl font-bold'>Take a coffee and contact me❤️</motion.h2>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .4, delay: .5 }}
                            className='flex items-center mx-auto justify-center lg:justify-normal'>
                            <img src={v} className='transform scale-x-[-1] translate-y-8 ' alt="" />
                            <div
                                className='icons flex items-center gap-3  text-white lg:text-2xl mt-5'>
                                <a href='https://www.tiktok.com/@mayar.sakr8' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer  lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-tiktok'></i></a>
                                <a href='https://www.facebook.com/share/1GvHVVEWRC/' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer  lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-facebook-f'></i></a>
                                <a href='https://www.linkedin.com/in/mayarsakr/' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer  lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-linkedin-in'></i></a>
                                <a href='https://api.whatsapp.com/send/?phone=201276317725&text&type=phone_number&app_absent=0&wame_ctl=1' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer  lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-whatsapp'></i></a>
                                <a href='https://www.behance.net/mayarsakr' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer  lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-behance'></i></a>
                                <a href='https://www.instagram.com/mayar.sak_r?igsh=MWJ5ajQ0b2QzdmhsdA==' target='_blank' className='icon transition-all duration-300 ease-in-out border border-white lg:w-14 lg:h-14 w-9 h-9 cursor-pointer  lg:mx-0  flex items-center justify-center  rounded-full  '><i className='fa-brands fa-instagram'></i></a>
                            </div>
                            <img src={v} className='translate-y-8 ' alt="" />
                        </motion.div>
                    </div>
                    <motion.img
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .4 }} src={mayar} alt="" />
                </div>
            </div>







        </>
    )
}
