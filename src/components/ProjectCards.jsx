import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
const ProjectCards = (props) => {
    const passwordHandler = (e) => {
        const card = e.currentTarget.parentElement.querySelector('.current');
        gsap.to(card, {
            opacity: .9,
            duration: 0.8,
        });
    };

    const resetHandler = (e) => {
        const card = e.currentTarget.parentElement.querySelector('.current');
        gsap.to(card, {
            opacity: 0,
            duration: 0.8,
        });
    };


    return (
        <>
            <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-5 p-3'>
                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className='rounded-lg overflow-hidden relative bg-[#09101a] hover:-translate-y-6 transition-all duration-200'
                >
                    <div
                        onMouseEnter={passwordHandler}
                        onMouseLeave={resetHandler}
                        className='current bg-blue-800 absolute z-20 opacity-0 w-full h-full flex flex-col items-center justify-center rounded-lg gap-2'>
                        <a href={props.github} target="_blank" rel="noopener noreferrer" className='bg-white hover:scale-95 ease-in-out transition-all duration-200 px-3 py-2 rounded-xl flex gap-1 items-center'>
                            <i className="ri-github-fill text-2xl"></i>
                            <p className='text-2xl'>Github</p>
                        </a>
                        <a href={props.live} target="_blank" rel="noopener noreferrer" className='bg-white hover:scale-95 ease-in-out transition-all duration-200 px-3 py-2 rounded-xl flex gap-1 items-center'>
                            <i className="ri-record-circle-fill text-2xl text-red-500"></i>
                            <p className='text-xl'>View Live Demo</p>
                        </a>
                    </div>
                    <div className="password rounded-lg relative z-10 w-full">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={false}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img
                                    className="rounded-lg h-60 w-full"
                                    src={props.image}
                                    alt={props.title}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg h-60 w-full"
                                    src={props.image2}
                                    alt={props.title}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg h-60 w-full"
                                    src={props.image3}
                                    alt={props.title}
                                />
                            </SwiperSlide>
                        </Swiper>
                        <p className="m-2 text-white text-center text-lg">{props.title}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjectCards