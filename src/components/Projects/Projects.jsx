import React, { useEffect, useState } from 'react'

import arrow from '../../assets/arrow(1).svg'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'


function getData() {
    return fetch(`https://api.sheetbest.com/sheets/5a59ed20-0dad-485c-bde1-c1b40fa5c1a9`).then(res => res.json())


}


export default function Projects() {


    const { data, isLoading } = useQuery({
        queryKey: ['sheetData'],
        queryFn: getData,
    })

    if (isLoading) return <div className='flex items-center justify-center min-h-[100dvh] lo bg-[#0C0C0C]'>
        <h1 class="shiny-text text-2xl lg:text-[50px]">
            LOADING
        </h1>
    </div>;

    return (

        <>


            <div className='h-18 lg:h-[115px]'></div>

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


                    <div className='flex  items-center justify-center  '>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                            {data?.map((project, i) => {
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: .4 }}
                                        className='  proCard relative rounded-2xl overflow-hidden '>
                                        <a href={project.url} target='_blank'>
                                            <img src={project.img} className='rounded-3xl overflow-hidden' alt="" />
                                            <div className='text-white overflow-hidden  absolute bottom-0 p-4 backdrop-blur-2xl w-full '>
                                                <h2 className='text-2xl'>{project.title}</h2>
                                                <span>{project.des}</span>
                                            </div>
                                        </a>
                                    </motion.div>
                                )
                            })}

                        </div>

                    </div>


                </div>
            </div>


        </>
    )
}
