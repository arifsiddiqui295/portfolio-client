import React, { useState } from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);
    const contactHandler = async (e) => {
        e.preventDefault();
        console.log(name, email, phone, message)
        try {
            setSent(!sent)
            const response = await axios.post('https://portfolio-server-production.up.railway.app/contact', { name, email, phone, message })
            console.log(response.data)
            if (response.status === 200) {
                setName('')
                setEmail('')
                setPhone('')
                setMessage('')
                setSent(false)
            }
            else{
                setSent(false)
            }
        } catch (err) {
            toast("There was some error try again after some time");
            setSent(false)
        }
    }
    return (
        <div
            id='contact'
            className='bg-[#02050a] pt-[2rem] pb-[1rem] p-5'>
            <h1 className='text-center text-5xl text-white font-bold uppercase'>
                Contact <span className='text-yellow-300'>Me</span>
            </h1>
            <ToastContainer />
            <div data-aos="flip-right" data-aos-delay="200" data-aos-duration="2000" className="font-[sans-serif] mt-20 max-w-6xl mx-auto relative bg-[#1f2937] rounded-3xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] overflow-hidden">
                <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-[#55e6a5]" />
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[#55e6a5]" />
                <div className="grid md:grid-cols-2">
                    <div className='flex items-center flex-col gap-10 pt-16 pb-10 justify-center'>
                        <div className='flex flex-items gap-5'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-[#55e6a5]'>
                                <PhoneAndroidIcon className=" scale-150 text-black" />
                            </div>
                            <div className='mr-20'>
                                <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>
                                    Phone
                                </h1>
                                <p className='text-[17px] w-[100%] text-white opacity-60 hover:opacity-100 '>
                                    {/* Lorem ipsum dolor sit amet. */}
                                    +918770993602
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-items gap-5'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-[#55e6a5]'>
                                <MailOutlineIcon className=" scale-150 text-black" />
                            </div>
                            <div>
                                <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>
                                    Email
                                </h1>
                                <p className='text-[16px] w-[90%] text-white opacity-60 hover:opacity-100 '>
                                    arifsiddiqui2905@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-items gap-5'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-[#55e6a5]'>
                                <SwitchAccountIcon className=" scale-150 text-black" />
                            </div>
                            <div>
                                <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>
                                    Social Platforms
                                </h1>
                                <p className='text-[16px] w-[90%]opacity-60 flex  gap-4'>
                                    <a href="https://github.com/arifsiddiqui295" target="_blank" className='underline opacity-60 text-white hover:opacity-100  '><GitHubIcon /> </a>
                                    <a href="https://www.linkedin.com/in/arifuddin-siddiqui/" target="_blank" className='underline opacity-60  text-white hover:opacity-100 '><LinkedInIcon /></a>
                                </p>
                            </div>
                        </div>

                    </div>
                    <form
                        className="p-6 xl:p-10 text-center">
                        <div className="max-w-sm mx-auto space-y-4">
                            <input
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                type="text"
                                placeholder="Name"
                                className="w-full bg-gray-100 rounded-full py-3 px-6 text-sm outline-none"
                            />
                            <input
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email"
                                placeholder="Email"
                                className="w-full bg-gray-100 rounded-full py-3 px-6 text-sm outline-none"
                            />
                            <input
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value) }}
                                type="number"
                                placeholder="Phone No."
                                className="w-full bg-gray-100 rounded-full py-3 px-6 text-sm outline-none"
                            />
                            <textarea
                                value={message}
                                onChange={(e) => { setMessage(e.target.value) }}
                                placeholder="Message"
                                rows={6}
                                className="w-full bg-gray-100 rounded-3xl px-6 text-sm pt-3 outline-none"
                                defaultValue={""}
                            />
                            {!sent ? (
                                <button
                                    onClick={contactHandler}
                                    type="button"
                                    className="text-white w-full relative bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-full text-sm px-6 py-3"
                                >
                                    <TelegramIcon />
                                    Send Message
                                </button>
                            ) : (
                                <button type="button" className="text-white w-full relative bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-full text-sm px-6 py-3 flex items-center justify-center gap-2" disabled="">
                                    <CircularProgress
                                        style={{ color: "inherit", width: "25px", height: "25px" }}
                                    />
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact