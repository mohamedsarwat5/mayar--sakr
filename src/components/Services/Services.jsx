import React from 'react'
import { motion } from 'framer-motion'
import arrow from '../../assets/arrow(1).svg'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img from '../../assets/Ellipse 2.png'



export default function Services() {
    return (
        <>




            <div className='h-16 lg:h-12'></div>
            <div className='bg-[url("assets/u.png")] ser bg-no-repeat sec min-h-screen flex flex-col justify-center  items-center relative overflow-hidden'>
                <img src={img} className='absolute opacity-80 -z-40 w-[600px] h-[900px] object-cover left-0 ' alt="" />
                <div className="ccontainer  flex flex-col gap-10">

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .4 }}
                        className='flex flex-col items-center gap-3'>
                        <h2 className='bg-btn-purple px-6 py-1  transition-all duration-300 ease-in-out w-fit mx-auto rounded-2xl font-handlee font-black text-[32px]  text-white'>What i do</h2>
                        <img src={arrow} className='w-10 translate-x-10' alt="" />
                    </motion.div>

                    <div className='flex flex-col lg:flex-row gap-7 items-center justify-center  flex-wrap'>


                        <motion.div
                            initial={{ opacity: 0, scale: 0, }}
                            whileInView={{ opacity: 1, scale: 1, }}
                            transition={{ duration: .4 }}
                            className='w-full lg:w-3/12 h-[350px] flex flex-col items-center  py-9  px-4 rounded-2xl text-white justify-center gap-4 bg-gray-100/10 backdrop-blur-[3px] border border-btn-purple'>
                            <img src={img1} alt="" />
                            <h2 className='font-handlee text-4xl font-bold'>Web Design</h2>
                            <p className='text-center'>Designing responsive, stylish websites that not only look great but guide users smoothly from start to finish.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0, }}
                            whileInView={{ opacity: 1, scale: 1, }}
                            transition={{ duration: .4 }}
                            className='w-full lg:w-3/12 h-[350px] flex flex-col items-center  py-9  px-4 rounded-2xl text-white justify-center gap-4 bg-gray-100/10 backdrop-blur-[3px] border border-btn-purple'>
                            <img src={img2} className='translate-x-5' alt="" />
                            <h2 className='font-handlee text-4xl font-bold'>UI UX</h2>
                            <p className='text-center'>Crafting clean, modern, and user-friendly interfaces that make every click feel easy and enjoyable.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0, }}
                            whileInView={{ opacity: 1, scale: 1, }}
                            transition={{ duration: .4 }}
                            className='w-full lg:w-3/12 h-[350px] flex flex-col items-center  py-9  px-4 rounded-2xl text-white justify-center gap-4 bg-gray-100/10 backdrop-blur-[3px] border border-btn-purple'>
                            <img src={img3} alt="" />
                            <h2 className='font-handlee text-4xl font-bold'>App Design</h2>
                            <p className='text-center'>Creating sleek mobile app designs with a seamless user journey, perfect for both iOS and Android.</p>
                        </motion.div>



                    </div>

                </div>
            </div>







        </>
    )
}
