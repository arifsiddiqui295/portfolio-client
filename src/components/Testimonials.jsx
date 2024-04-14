import React from 'react'
import TestimonialsSlider from './TestimonialsSlider'

const Testimonials = () => {
    return (
        <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem]'>
            <h1 className='text-center text-5xl text-white font-bold uppercase'>
                Client <span className='text-yellow-400'>Reviews</span>
            </h1>
            <div className='pt-[5rem] pb-[4rem] w-[80%] mx-auto'>
                <TestimonialsSlider />
            </div>
        </div>
    )
}

export default Testimonials