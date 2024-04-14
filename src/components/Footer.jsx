import React from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
const Footer = () => {
    return (
        <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
            <div className=' border-b-[1px]  border-gray-400 w-[80%] mx-auto'>
               
            </div>
            <div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between '>
                <div className='text-[18px] mb-[2rem] md:mb-0 text-white opacity-60'>
                    Webdev 2024 || All rights reserved
                </div>
                <div className='flex items-center space-x-10'>
                    <p className=' text-[18px] text-white opacity-60'>Terms</p>
                    <p className=' text-[18px] text-white opacity-60'>Privacy & Policy</p>
                    <p className=' text-[18px] text-white opacity-60'>Sitemap</p>
                </div>
            </div>
        </div>
    )
}

export default Footer