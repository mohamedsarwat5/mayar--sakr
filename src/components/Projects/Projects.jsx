import React from 'react'

import arrow from '../../assets/arrow(1).svg'
import { motion } from 'framer-motion'


import ling from '../../assets/ling.png';
import landing from '../../assets/landing.png';
import petty from '../../assets/petty.png';
import dream from '../../assets/dream.png';
import brain from '../../assets/brain.png';
import covery from '../../assets/covery.png';

import dash from '../../assets/dash.png';
import dash2 from '../../assets/dash2.png';
import eco from '../../assets/eco.png';
import food from '../../assets/food.png';
import foodi from '../../assets/foodi.png';
import lap from '../../assets/lap.png';
import Otakudo from '../../assets/Otakudo.png';
import personal from '../../assets/personal.png';
import pesto from '../../assets/pesto.png';
import Qutopia from '../../assets/Qutopia.png';
import sales from '../../assets/sales.png';
import scan from '../../assets/scan.png';
import style from '../../assets/style.png';
import sweety from '../../assets/sweety.png';

export default function Projects() {



    return (

        <>


            <div className='h-16 lg:h-[115px]'></div>

            <div className='mb-10'>
                <div className="ccontainer !min-h-[100dvh] flex flex-col items-center justify-center">

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .4 }}
                        className='flex flex-col items-center gap-3 mb-5'>
                        <h2 className='bg-btn-purple px-6 py-1  transition-all duration-300 ease-in-out w-fit mx-auto rounded-2xl font-handlee font-black text-[32px]  text-white'>Recent Projects</h2>
                        <img src={arrow} className='w-10 translate-x-10' alt="" />
                    </motion.div>


                    <div className='flex flex-col lg:flex-row gap-4 gap-y-8 lg:gap-y-4 items-center justify-center flex-wrap '>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/180166455/Linguista-Design-Thinking' target='_blank'>
                                <img src="https://i.postimg.cc/1RkYQntF/ling.png" className='rounded-3xl overflow-hidden' alt="" />
                                <div className='text-white overflow-hidden  absolute bottom-0 p-4 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Languista</h2>
                                    <span>User Research & Mobile App</span>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/170611369/Brainy-Academy' className='overflow-hidden' target='_blank'>
                                <img src="https://i.postimg.cc/FHMKbxsR/brain.png" className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Brainy Academy</h2>
                                    <span className=' '>courses - Mobile App</span>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden'>
                            <a href='https://www.behance.net/gallery/183187629/style-Haven-Landing-page' target='_blank'>
                                <img src="https://i.postimg.cc/C5Bt4bKh/landing.png" className='rounded-3xl ' alt="" />
                                <div className='text-white  overlay absolute bottom-0 p-4 bg-[#5a5a58]/40 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Style Haven</h2>
                                    <span>Furniture-Landing Page</span>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/180595399/Dream-Trips-Landing-Page' target='_blank'>
                                <img src={dream} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden  absolute bottom-0 p-4 bg-[#5a5a58]/40  backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Dream Trips</h2>
                                    <span>Travel Agency - Landing Page </span>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/177710469/Petty-Responsive-Design' className='overflow-hidden' target='_blank'>
                                <img src={petty} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Petty</h2>
                                    <span className=' '>Pet Grooming - Landing Page</span>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/163508755/Covery-Mobile-App' className='overflow-hidden' target='_blank'>
                                <img src={covery} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Covery</h2>
                                    <span className=' '>Mobile App</span>
                                </div>
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/171410159/Cricley-Dashboard' className='overflow-hidden' target='_blank'>
                                <img src={dash} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4 bg-gray-900/30 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Cricley</h2>
                                    <span className=' '>Dashboard - Website</span>
                                </div>
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/171343505/Dashboard' className='overflow-hidden' target='_blank'>
                                <img src={dash2} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4 bg-gray-900/30 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Foodi</h2>
                                    <span className=' '>Food - Website</span>
                                </div>
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/173007373/ECO-Case-Study' className='overflow-hidden' target='_blank'>
                                <img src={eco} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4 bg-green-900/30 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>ECO</h2>
                                    <span className=' '>Case Study</span>
                                </div>
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/163508497/Foodi-Mobile-App' className='overflow-hidden' target='_blank'>
                                <img src={food} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4 bg-green-900/30 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Foodi</h2>
                                    <span className=' '>Food - Mobile App</span>
                                </div>
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/176027507/Foodie' className='overflow-hidden' target='_blank'>
                                <img src={foodi} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4 bg-green-900/30 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Foodie</h2>
                                    <span className=' '>Food - Mobile App</span>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/170608811/Sweety' className='overflow-hidden' target='_blank'>
                                <img src={sweety} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4  backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Sweety</h2>
                                    <span className=' '>Sweet - Mobile App</span>
                                </div>
                            </a>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/163509241/StyleOn-app' className='overflow-hidden' target='_blank'>
                                <img src={style} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4  backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>StyleOn</h2>
                                    <span className=' '>Mobile App</span>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/181769879/MediScan-Dashboard' className='overflow-hidden' target='_blank'>
                                <img src={scan} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4  backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>MediScan</h2>
                                    <span className=' '>Dashboard</span>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/179934397/Sales-Tracker-Dashboard' className='overflow-hidden' target='_blank'>
                                <img src={sales} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4  backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Sales Tracker</h2>
                                    <span className=' '>Dashboard</span>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/177056501/Qutopia-A-UX-Research-Study' className='overflow-hidden' target='_blank'>
                                <img src={Qutopia} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4  backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Qutopia</h2>
                                    <span className=' '>UX Research Study</span>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/173162677/Petso' className='overflow-hidden' target='_blank'>
                                <img src={pesto} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4 bg-yellow-700/10 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Petso</h2>
                                    <span className=' '>Landing Page</span>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/172955785/Personal-Website' className='overflow-hidden' target='_blank'>
                                <img src={personal} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4 bg-green-900/15 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Personal Portofolio</h2>
                                    <span className=' '>Website</span>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/177982821/Otakudo-Anime-UX-research-case-study' className='overflow-hidden' target='_blank'>
                                <img src={Otakudo} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Otakudo</h2>
                                    <span className=' '>Anime UX research - case study</span>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .4 }}
                            className='lg:w-3/12  proCard relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/169487515/Perception-Lap' className='overflow-hidden' target='_blank'>
                                <img src={lap} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden  bg-yellow-500/20  absolute bottom-0 p-4 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Perception Lap</h2>
                                    <span className=' '>Mobile App</span>
                                </div>
                            </a>
                        </motion.div>




                    </div>


                </div>
            </div>


        </>
    )
}
