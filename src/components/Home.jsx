import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";


const Home = () => {

  return (
    <div className='flex flex-col items-center justify-center h-full w-full lg:grid lg:grid-cols-2 lg:gap-5'>
       <div className='flex w-full  lg:ml-[100px]  flex-col items-center h-full'>
            <div className='flex justify-center lg:justify-start w-full  mt-[40px] items-center'>
                <img src='/betterlogo.png' alt='logo' className='w-[30px] h-auto'/>
                <span className='text-[13px] ml-2 font-bold'>Health<span className='text-gray-400'>Wise</span></span>
            </div> 
            <div className='flex w-full gap-2 items-center mt-[30px] justify-center lg:justify-start flex-col'>
                <h1 className='flex w-full justify-center lg:justify-start items-center lg:text-[18px] text-[23px] font-bold'>Hello there,.....</h1>
                <p  className='flex lg:text-[10px] text-[13px] justify-center lg:justify-start text-gray-400 w-full items-center'>Sign in to get access to your account</p>
            </div>
        <form className='flex w-full gap-4 items-center mt-[30px] justify-center lg:justify-start flex-col'>
            <label htmlFor='username' className='flex  w-full   flex-col'>
                <span className='ml-3 lg:ml-0 mb-2 text-[12px] lg:text-[9px] text-gray-400'>Your email address</span>
                <div className='bg-zinc-800 items-center  lg:w-[350px] lg:p-2 text-[11px] p-2.5 flex lg:-mx-0 mx-3 rounded-sm '>
                <MdOutlineEmail className='text-gray-400' size={15}/>
                <input type='text ' className='ml-2 outline-none' placeholder='example@gmail.com'  />
                </div>
            </label>

            <label htmlFor='username' className='flex  w-full   flex-col'>
                <span className='ml-3 lg:ml-0 mb-2 text-[12px] lg:text-[9px]  text-gray-400'>Enter your username</span>
                <div className='bg-zinc-800 items-center  lg:w-[350px] lg:p-2 text-[11px] p-2.5 flex lg:-mx-0 mx-3 rounded-sm '>
                <FaUserCheck className='text-gray-400' size={15}/>
                <input type='text ' className='ml-2 outline-none' placeholder='eg Felix Kiprotich'  />
                </div>
            </label>
            <label htmlFor='username' className='flex  w-full   flex-col'>
                <span className='ml-3 lg:ml-0 mb-2 text-[12px] lg:text-[9px] text-gray-400'>Enter your password</span>
                <div className='bg-zinc-800 items-center  lg:w-[350px] text-[11px] p-2.5 lg:p-2 flex  lg:-mx-0 mx-3 rounded-sm '>
                <TbLockPassword className='text-gray-400' size={15}/>
                <input type='text ' className='ml-2 outline-none' placeholder='..................'  />
                </div>
            </label>
            <div className='flex  w-full   flex-col mt-4'>
            <button className='bg-emerald-400 flex justify-center font-bold items-center w-full  lg:w-[350px] mx-3 text-[11px] p-2.5 lg:p-2 flex lg:-mx-0  rounded-sm '>Sign in ......</button>
            </div>
        </form>

        </div>
        <div className='flex flex-col items-center'>
        <DotLottieReact
      src="https://lottie.host/00a8ab11-c159-49c4-b6c5-0bd614de820f/omqsv0Wi5B.lottie"
      loop
      autoplay
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
    </div>
      
    </div>
  )
}

export default Home
