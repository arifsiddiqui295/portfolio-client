import React from 'react'
import SkilsLang from './SkilsLang'
import html5 from '../images/html5.png'
import CSS from '../images/CSS.png'
import Tailwind from '../images/Tailwind.png'
import Bootstrap from '../images/Bootstrap.png'
import JavaScript from '../images/JavaScript.png'
import Nodejs from '../images/Nodejs.png'
import Express from '../images/Express.png'
import Mongodb from '../images/Mongodb.png'
import Reactjs from '../images/React.png'
import Socket from '../images/Socket.png'
const Skills = () => {
    return (
        <div
        id='skills'
        className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
            <h1 className='text-center text-5xl text-white font-bold uppercase'>
                Technical &  <span className='text-yellow-400'>Skills</span>
            </h1>
            <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
                <div>
                    <SkilsLang
                        skill1="HTML5"
                        skill2="Tailwind CSS"
                        skill3="JavaScript"
                        skill4="ExpressJS"
                        skill5="MongoDB"
                        img1={html5}
                        img2={Tailwind}
                        img3={JavaScript}
                        img4={Express}
                        img5={Mongodb}
                        level1="w-[91%]"
                        level2="w-[85%]"
                        level3="w-[80%]"
                        level4="w-[76%]"
                        level5="w-[66%]"
                    />
                </div>
                <div>
                    <SkilsLang
                        skill1="CSS"
                        skill2="Bootstrap"
                        skill3="React JS"
                        skill4="Node JS"
                        skill5="Socket.io"
                        img1={CSS}
                        img2={Bootstrap}
                        img3={Reactjs}
                        img4={Nodejs}
                        img5={Socket}
                        level1="w-[91%]"
                        level2="w-[85%]"
                        level3="w-[80%]"
                        level4="w-[76%]"
                        level5="w-[66%]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills