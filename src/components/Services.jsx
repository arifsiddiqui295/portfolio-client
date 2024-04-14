import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
const Services = () => {
    return (
        <div
        id='services'
        className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
            <h2 className='text-center text-5xl text-white font-bold uppercase'>
                My
                <span className='text-yellow-400'> Services</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
                <div data-aos="fade-right">
                    <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <CodeIcon style={{ fontSize: "5rem" }} />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            Frontend
                        </h1>
                        <p className='text-[15px] text-white  font-normal'>
                        "I am skilled  in frontend web development, possessing a strong command of HTML, CSS, and JavaScript. Additionally, I have developed expertise in React and few CSS frameworks."
                        </p>
                    </div>

                </div>
                <div data-aos="zoom-in" data-aos-delay="300">
                    <div className='bg-orange-400 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <RocketLaunchIcon style={{ fontSize: "5rem" }} />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Backend
                        </h1>
                        <p className='text-[15px] text-gray-200 font-normal'>
                        I'm experienced in backend development, handling Node.js, Express, Socket.IO, and MongoDB database. My expertise extends to building server-side applications.
                        </p>
                    </div>

                </div>
                <div data-aos="fade-left" data-aos-delay="500">
                    <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <TerminalIcon style={{ fontSize: "5rem" }} />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            Full stack
                        </h1>
                        <p className='text-[15px] text-gray-200 font-normal'>
                        I'm skilled in both frontend and backend development for websites. Beyond building your site, I can assist with deployment and provide ongoing support.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services