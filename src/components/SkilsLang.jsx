import React from 'react'

const SkilsLang = ({
    level1,
    level2,
    level3,
    level4,
    level5,
    img1,
    img2,
    img3,
    img4,
    img5,
    skill1,
    skill2,
    skill3,
    skill4,
    skill5
}) => {
    return (
        <div>
            <div data-aos="fade-right" data-aos-duration="600" className='relative mb-[3rem]'>
                <div className='p-5 w-[100%] flex gap-1 uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
                    <img src={img1} alt="" className='h-10 w-10' />
                    <h1 className='mt-1'>
                        {skill1}
                    </h1>
                </div>
                <span className={`${level1} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div> 
            <div data-aos="fade-right" data-aos-duration="600" className='relative mb-[3rem]'>
                <div className='p-5 w-[100%] flex gap-2 uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
                    <img src={img2} alt="" className='h-10 w-10' />
                    <h1 className='mt-1'>
                        {skill2}
                    </h1>
                </div>
                <span className={`${level2} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
            <div data-aos="fade-right" data-aos-duration="600" className='relative mb-[3rem]'>
                <div className='p-5 w-[100%] flex gap-2 uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
                    <img src={img3} alt="" className='h-10 w-10' />
                    <h1 className='mt-1'>
                        {skill3}
                    </h1>
                </div>
                <span className={`${level3} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
            <div data-aos="fade-right" data-aos-duration="600" className='relative mb-[3rem]'>
                <div className='p-5 w-[100%] flex gap-1 uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
                    <img src={img4} alt="" className='h-10 w-10' />
                    <h1 className='mt-1'>
                        {skill4}
                    </h1>
                </div>
                <span className={`${level4} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
            <div data-aos="fade-right" data-aos-duration="600" className='relative mb-[3rem]'>
                <div className='p-5 w-[100%] flex gap-1 uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
                    <img src={img5} alt="" className='h-10 w-10' />
                    <h1 className='mt-1'>
                        {skill5}
                    </h1>
                </div>
                <span className={`${level5} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
        </div>
    )
}

export default SkilsLang