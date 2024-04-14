import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
const ClientReview = ({name,role,image}) => {
  return (
    <div className='flex flex-col text-center justify-center'>
        <img src={image} className="mx-auto mb-[2rem] rounded-full" alt="" />
        <div className='flex items-center mx-auto'>
        <StarRateIcon className='w-[2rem] h-[2rem] text-yellow-500' />    
        <StarRateIcon className='w-[2rem] h-[2rem] text-yellow-500' />    
        <StarRateIcon className='w-[2rem] h-[2rem] text-yellow-500' />    
        <StarRateIcon className='w-[2rem] h-[2rem] text-yellow-500' />    
        </div>
        <h1 className='text-[25px] text-white mt-[1rem]'>{name}</h1>
        <p className='text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]'>{role}</p>
        <p className='text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fuga unde, vitae et architecto vel accusamus dolor. Dolorem nisi tempora, ad sit nostrum repellendus voluptates, nemo aut, hic sapiente possimus.
        </p>
    </div>
  )
}

export default ClientReview