import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import about from '../images/about.jpg'
const About = () => {
    return (
        <div
        id='about'
        className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt;[8rem] pr-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
                <div>
                    <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mg-[1rem]'>
                        About Me
                    </h1>
                    <h2 className='text-[25px] md:text[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mg-[3rem] font-bold text-white'>
                        Transforming <span className='text-yellow-500'>Visions</span>
                    </h2>
                    <div className='mb-[3rem] flex items-center mt-10 md:space-x-10'>
                        <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm '></span>
                        <p className='text-[19px] text-slate-300 w-[80%]'>
                        Hello Folks, I'm an enthusiastic software developer skilled in full-stack web development. Experienced in projects like live chat platform and an web portal where you can generate AI image through prompt by utilizing the power of OpenAI's Dall-E Model.
                        </p>
                    </div>
                    <button
                        className=' text-center px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'
                    >
                        <p>View Resume</p>
                        <ArrowForwardIcon />
                    </button>
                </div>
                <div data-aos="fade-left" className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] relative'>
                    <img src={about}
                        alt="user"
                        className='relative z-[11] w-[100%] h-[100%] object-contain' />
                    <div  className='absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5]  right-[-2rem]'
                    style={{
                        top:'-2rem'
                    }}
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About