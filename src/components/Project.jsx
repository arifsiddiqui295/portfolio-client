import React from 'react'
import password_generator from '../images/Password Generator.png'
import password_generator2 from '../images/password_generator2.png'
import password_generator3 from '../images/password_generator3.png'
import currency_converter from '../images/currency_converter.png'
import currency_converter2 from '../images/currency_converter2.png'
import chat_buzz from '../images/chat_buzz.png'
import chat_buzz2 from '../images/chat_buzz2.png'
import chat_buzz3 from '../images/chat_buzz3.png'
import typing_verse from '../images/typing_verse.png'
import typing_verse2 from '../images/typing_verse2.png'
import typing_verse3 from '../images/typing_verse3.png'
import music_mate from '../images/music_mate.png'
import music_mate2 from '../images/music_mate2.png'
import music_mate3 from '../images/music_mate3.png'
import visual_ai from '../images/visual_ai.png'
import visual_ai2 from '../images/visual_ai2.png'
import visual_ai3 from '../images/visual_ai3.png'
import 'remixicon/fonts/remixicon.css'
import ProjectCards from './ProjectCards'
const Project = () => {
    return (
        <div
            id='projects'
            className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
            <h1 className='text-center text-5xl text-white font-bold uppercase mb-16'>
                Pro<span className='text-yellow-400'>Jects</span>
            </h1>
            <div className='flex flex-wrap justify-center items-center gap-10'>
                <ProjectCards
                    title="Real-time Chat Application"
                    image={chat_buzz}
                    image2={chat_buzz2}
                    image3={chat_buzz3}
                    github="https://github.com/arifsiddiqui295/chat_buzz"
                    live="https://chatbuzz-production.up.railway.app/"
                />
                  <ProjectCards
                    title="AI Image Generator & Sharing Application"
                    image={visual_ai}
                    image2={visual_ai2}
                    image3={visual_ai3}
                    github="https://github.com/arifsiddiqui295/VisualizeAI-Client"
                    live="https://astounding-torrone-6a753e.netlify.app/"
                />
                <ProjectCards
                    title="Typing Verse"
                    image={typing_verse}
                    image2={typing_verse2}
                    image3={typing_verse3}
                    github="https://github.com/arifsiddiqui295/TypeVerse"
                    live="https://typeverse-client-production.up.railway.app/"
                />
                <ProjectCards
                    title="Music Player"
                    image={music_mate}
                    image2={music_mate2}
                    image3={music_mate3}
                    github="https://github.com/arifsiddiqui295/Music-Mate"
                    live="https://music-mate-dun.vercel.app/"
                />
                <ProjectCards
                    title="Password Generator"
                    image={password_generator3}
                    image2={password_generator2}
                    image3={password_generator}
                    github="https://github.com/arifsiddiqui295/password_generator"
                    live="https://password-generator-nu-ebon.vercel.app/"
                />
                <ProjectCards
                    title="Currency Converter"
                    image={currency_converter}
                    image2={currency_converter2}
                    image3={currency_converter2}
                    github="https://github.com/arifsiddiqui295/Currency_converter"
                    live="https://currency-converter-three-snowy.vercel.app/"
                />
            </div>

        </div>
    )
}

export default Project