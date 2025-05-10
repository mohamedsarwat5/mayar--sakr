import React from 'react'

import arrow from '../../assets/arrow(1).svg'


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


            <div className='h-16 lg:h-[105px]'></div>

            <div>
                <div className="ccontainer !min-h-[100dvh] flex flex-col items-center justify-center">

                    <div className='flex flex-col items-center gap-3 mb-5'>
                        <h2 className='bg-btn-purple px-6 py-1  transition-all duration-300 ease-in-out w-fit mx-auto rounded-2xl font-handlee font-black text-[32px]  text-white'>Recent Projects</h2>
                        <img src={arrow} className='w-10 translate-x-10' alt="" />
                    </div>


                    <div className='flex flex-col lg:flex-row gap-4 gap-y-8 lg:gap-y-4 items-center justify-center flex-wrap '>

                        <div className='lg:w-3/12   relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/180166455/Linguista-Design-Thinking' target='_blank'>
                                <img src={ling} className='rounded-3xl overflow-hidden' alt="" />
                                <div className='text-white overflow-hidden  absolute bottom-0 p-4 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Languista</h2>
                                    <span>User Research & Mobile App</span>
                                </div>
                            </a>
                        </div>
                            <div className='lg:w-3/12   relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/177710469/Petty-Responsive-Design' className='overflow-hidden' target='_blank'>
                                <img src={brain} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Petty</h2>
                                    <span className=' '>Pet Grooming - Landing Page</span>
                                </div>
                            </a>
                        </div>
                        <div className='lg:w-3/12   relative rounded-2xl overflow-hidden'>
                            <a href='https://www.behance.net/gallery/183187629/style-Haven-Landing-page' target='_blank'>
                                <img src={landing} className='rounded-3xl' alt="" />
                                <div className='text-white  overlay absolute bottom-0 p-4 bg-[#5a5a58]/40 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Style Haven</h2>
                                    <span>Furniture-Landing Page</span>
                                </div>
                            </a>
                        </div>
                        <div className='lg:w-3/12   relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/180595399/Dream-Trips-Landing-Page' target='_blank'>
                                <img src={dream} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden  absolute bottom-0 p-4 bg-[#5a5a58]/40  backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Dream Trips</h2>
                                    <span>Travel Agency - Landing Page </span>
                                </div>
                            </a>
                        </div>
                        <div className='lg:w-3/12   relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/177710469/Petty-Responsive-Design' className='overflow-hidden' target='_blank'>
                                <img src={petty} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Petty</h2>
                                    <span className=' '>Pet Grooming - Landing Page</span>
                                </div>
                            </a>
                        </div>

                        <div className='lg:w-3/12   relative rounded-2xl overflow-hidden '>
                            <a href='https://www.behance.net/gallery/177710469/Petty-Responsive-Design' className='overflow-hidden' target='_blank'>
                                <img src={covery} className='rounded-3xl' alt="" />
                                <div className='text-white overflow-hidden    absolute bottom-0 p-4 backdrop-blur-2xl w-full '>
                                    <h2 className='text-2xl'>Petty</h2>
                                    <span className=' '>Pet Grooming - Landing Page</span>
                                </div>
                            </a>
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}
