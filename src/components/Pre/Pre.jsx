import React from 'react'
import { motion } from 'framer-motion'
import arrow from '../../assets/arrow(1).svg'
import img from '../../assets/dark.png'
import ling from '../../assets/ling.png';
import ar from '../../assets/fluent_arrow-up-12-filled.svg'
import landing from '../../assets/landing.png';
import petty from '../../assets/petty.png';
import dream from '../../assets/dream.png';
import { Link } from 'react-router-dom';
import food from '../../assets/food.png';



export default function Pre() {
    return (
        <>


            <div className='h-16 lg:h-12'></div>

            <div className=' flex flex-col justify-center overflow-hidden items-center relative'>
                <img src={img} className='absolute opacity-80 -z-40 w-[600px] h-[900px] object-cover end-0 bottom-0  ' alt="" />

                <div className="ccontainer flex flex-col gap-10 ">

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .4 }}
                        className='flex flex-col items-center gap-3'>
                        <h2 className='bg-btn-purple px-6 py-1  transition-all duration-300 ease-in-out w-fit mx-auto rounded-2xl font-handlee font-black text-[32px]  text-white'>Recent Projects</h2>
                        <img src={arrow} className='w-10 translate-x-10' alt="" />
                    </motion.div>

                    <div className='flex flex-col lg:flex-row gap-4 items-center justify-center flex-wrap'>

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .4 }}
                            className='lg:w-5/12 relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/180166455/Linguista-Design-Thinking' target='_blank'>
                                <img src={ling} className='rounded-3xl overflow-hidden' alt="" />
                                <div className='text-white overflow-hidden  absolute bottom-0 p-4 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Languista</h2>
                                    <span>User Research & Mobile App</span>
                                </div>
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .4 }}
                            className='lg:w-5/12 relative rounded-2xl overflow-hidden'>
                            <a href='https://www.behance.net/gallery/183187629/style-Haven-Landing-page' target='_blank'>
                                <img src={landing} className='rounded-3xl' alt="" />
                                <div className='text-white  overlay absolute bottom-0 p-4 bg-[#5a5a58]/40 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Style Haven</h2>
                                    <span>Furniture-Landing Page</span>
                                </div>
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .4 }}
                            className='lg:w-5/12 relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/163508497/Foodi-Mobile-App' target='_blank'>
                                <img src={food} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden  absolute bottom-0 p-4 bg-[#5a5a58]/40  backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Foodi</h2>
                                    <span>Food - Mobile App </span>
                                </div>
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .4 }}
                            className='lg:w-5/12 relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/177710469/Petty-Responsive-Design' className='overflow-hidden' target='_blank'>
                                <img src={petty} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Petty</h2>
                                    <span className=' '>Pet Grooming - Landing Page</span>
                                </div>
                            </a>
                        </motion.div>
                    </div>

                    <Link className='see flex items-center gap-3 mb-9' to={'/projects'}>See more <img src={ar} alt="" /></Link>


                </div>
            </div>









        </>
    )
}
