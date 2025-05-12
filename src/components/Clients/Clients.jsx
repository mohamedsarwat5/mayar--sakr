import React, { Component } from 'react'
import { motion } from 'framer-motion'
import arrow from '../../assets/arrow(1).svg'
import Rawad from '../../assets/Rawad.jpeg'
import Raneen from '../../assets/Raneen.jpeg'
import pic from '../../assets/pic.jpg'
import img from '../../assets/img.jpg'
import blop from '../../assets/blop.png'
import blop2 from '../../assets/blop2.png'
import Slider from "react-slick";

export default function Clients() {


    let settings = {
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        dots: true,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    pauseOnHover: false,
                    centerMode: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    pauseOnHover: false,
                    centerMode: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 300,
                    infinite: true,
                    autoplay: true,
                    pauseOnHover: false,
                    dots: true,
                    centerMode: false,
                }
            }
        ]
    }

    return (<>


        <div className='relative overflow-hidden pb-9 '>
            <img src={blop} className='absolute w-[700px] left-1/2 top-1/2 -translate-x-1/2 lg:left-0 lg:top-0 lg:-translate-x-0' alt="" />
            <img src={blop2} className='absolute w-[700px] end-0 ' alt="" />
            <div className='pt-12 overflow-hidden ccontainer'>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .4 }}
                    className='flex flex-col items-center gap-3 mb-8'>
                    <h2 className='bg-btn-purple px-6 py-1   w-fit mx-auto rounded-2xl font-handlee font-black text-[32px]  text-white hidden lg:block'>Here’s what my clients are saying about my work</h2>
                    <h2 className='bg-btn-purple px-6 py-1   w-fit mx-auto rounded-2xl font-handlee font-black text-[32px]  text-white lg:hidden'>Clients Reviews</h2>
                    <img src={arrow} className='w-10 translate-x-10' alt="" />
                </motion.div>


                <div className=' slider-container'>
                    <Slider {...settings}>

                        <div className='bg-gray-400/20 backdrop-blur-[3px] border p-5 border-btn-purple card text-white rounded-2xl'>
                            <h2 >Mayar was a very good listener and learner, from day 1 she demonstrated exceptional skills and was a breeze to teach her new skills, always expanding her skillset</h2>
                            <div className='flex items-center gap-5 mt-5'>
                                <div className='p-1 rounded-full bg-white'>
                                    <img src={Rawad} className='rounded-full w-[80px]' alt="" />
                                </div>
                                <div>
                                    <h2 className='text-[19px] font-semibold'>Rawad Semaan</h2>
                                    <p className='text-[15px]'>Senior UI/UX Designer</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-gray-400/20 backdrop-blur-[3px] border  p-5 border-btn-purple card text-white rounded-2xl'>
                            <h2 >Mayar is a talented and reliable UI/UX designer. Her creativity, attention to detail, and user-first approach make every project smooth and successful. Highly recommended! ❤️</h2>
                            <div className='flex items-center gap-5 mt-5'>
                                <div className='p-1 rounded-full bg-white'>
                                    <img src={Raneen} className='rounded-full w-[80px]' alt="" />
                                </div>
                                <div>
                                    <h2 className='text-[19px] font-semibold'>Raneen Osman</h2>
                                    <p className='text-[15px]'>Frontend Developer</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-gray-400/20 backdrop-blur-[3px] border  p-5 border-btn-purple card text-white rounded-2xl'>
                            <h2 >Mayar's ability to simplify complex concepts and provide actionable feedback greatly. She inspired me to approach challenges creatively and always aim for user-centered solutions.</h2>
                            <div className='flex items-center gap-5 mt-5'>
                                <div className='p-1 rounded-full bg-white'>
                                    <img src={pic} className='rounded-full w-[80px]' alt="" />
                                </div>
                                <div>
                                    <h2 className='text-[19px] font-semibold'>Abdelrahman Moftah</h2>
                                    <p className='text-[15px]'>UI/UX Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gray-400/20 backdrop-blur-[3px] border  p-5 border-btn-purple card text-white rounded-2xl'>
                            <h2 >It is my pleasure to recommend Engineer Mayar Saqr as an exceptional and expert trainer in the field of UI/UX design. Learning from her was a truly enriching and enjoyable experience.</h2>
                            <div className='flex items-center gap-5 mt-5'>
                                <div className='p-1 rounded-full bg-white'>
                                    <img src={img} className='rounded-full w-[80px]' alt="" />
                                </div>
                                <div>
                                    <h2 className='text-[19px] font-semibold'>Ahmed Tharwat</h2>
                                    <p className='text-[15px]'>UI/UX Designer</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>







    </>
    )
}
