import React from 'react'
import banner from '../images/banner.jpg'
import u1 from '../images/u1.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextEffect from './TextEffect'
import resume from '../resume/Arifuddin Siddiqui.pdf'
const Hero = () => {
  const openResumeInNewTab = () => {
    console.log(resume)
    window.open(resume, '_blank');
};
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = resume;
  link.download = resume;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div
    id='hero'
    className=''
      style={{
        height: "88vh",
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: "center",
      }}
    >
      <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items-center'>
        <div>
          <h1 className='text-white font-bold text-4xl mb-6'>
            HELLO, I'M
            <span className=' text-yellow-400'> ARIFUDDIN SIDDIQUI!  </span>
          </h1>
          <TextEffect />
          <p className='mt-[2.5rem] mb-2 text-[19px] text-[#ffffff92]'>
          A Passionate software developer creating impactful applications with my knowledge in MERN Stack.
          </p>
          <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex-row items-center sm:space-x-6 '>
            <button
              className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'
            >
              <a target={'_blank'} href="https://drive.google.com/file/d/1W_PRGO3IX2fK_lamo3jsmzQ8nNO-5DKs/view?usp=sharing">View Resume</a>
              <ArrowForwardIcon />
            </button>

          </div>
        </div>
        <div data-aos="zoom-in" className='w-[450px] mt-20 hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[450px]'>
          <img className='object-cover rounded-full' src={u1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero