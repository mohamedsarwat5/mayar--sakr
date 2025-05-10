import React from 'react'
import { motion } from 'framer-motion'
import arrow from '../../assets/arrow1.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img from '../../assets/Ellipse 2.png'



export default function Services() {
    return (
        <>




            <div className='h-16 lg:h-12'></div>
            <div className='bg-[url("assets/u.png")] bg-no-repeat sec min-h-screen flex flex-col justify-center  items-center relative'>
                <img src={img} className='absolute opacity-80 -z-40 w-[600px] h-[900px] object-cover left-0 ' alt="" />
                <div className="ccontainer  flex flex-col gap-10">

                    <div className='flex flex-col items-center gap-3'>
                        <h2 className='bg-btn-purple px-6 py-1  transition-all duration-300 ease-in-out w-fit mx-auto rounded-2xl font-handlee font-black text-lg lg:text-[32px]  text-white'>What i do</h2>
                        <img src={arrow} className='w-10 translate-x-10' alt="" />
                    </div>

                    <div className='flex flex-col lg:flex-row gap-7 items-center justify-center '>


                        <div className='lg:w-3/12 h-[350px] flex flex-col items-center  py-9  px-4 rounded-2xl text-white justify-center gap-4 bg-gray-100/10 backdrop-blur-[3px] border border-btn-purple'>

                            <img src={img1} alt="" />
                            <h2 className='font-handlee text-3xl'>Web Design</h2>
                            <p className='text-center'>Designing responsive, stylish websites that not only look great but guide users smoothly from start to finish.</p>
                        </div>
                        <div className='lg:w-3/12 h-[350px] flex flex-col items-center  py-9  px-4 rounded-2xl text-white justify-center gap-4 bg-gray-100/10 backdrop-blur-[3px] border border-btn-purple'>

                            <img src={img1} alt="" />
                            <h2 className='font-handlee text-3xl'>Web Design</h2>
                            <p className='text-center'>Designing responsive, stylish websites that not only look great but guide users smoothly from start to finish.</p>
                        </div>
                        <div className='lg:w-3/12 h-[350px] flex flex-col items-center  py-9  px-4 rounded-2xl text-white justify-center gap-4 bg-gray-100/10 backdrop-blur-[3px] border border-btn-purple'>

                            <img src={img1} alt="" />
                            <h2 className='font-handlee text-3xl'>Web Design</h2>
                            <p className='text-center'>Designing responsive, stylish websites that not only look great but guide users smoothly from start to finish.</p>
                        </div>



                    </div>

                </div>
            </div>







        </>
    )
}
