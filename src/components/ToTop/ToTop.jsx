import React from 'react'
import { motion } from 'framer-motion'

export default function ToTop() {
    return (
        <>





            <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='flex items-center justify-center w-10 h-10 bg-btn-purple cursor-pointer fixed lg:end-5 lg:bottom-5 end-3 bottom-3 rounded-full text-white'>
                <i class="fa-solid fa-arrow-up"></i>
            </div>







        </>
    )
}
