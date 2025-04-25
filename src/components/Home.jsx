import React, { useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { Link } from 'react-router-dom';



const Home = () => {
    const [data, setData] = useState({
        
        email: '',
        password: ''
    })

    const handleInputChange =(e)=>{
        const {name, value} = e.target
        setData({...data, [name]: value})

    }
    const handleLogin=(e)=>{
        e.preventDefault()
        fetch('http://127.0.0.1:5555/doc_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            alert('Sign in Successfull')
        })
        .catch(err=>console.log(err))
    }

  return (
    <div className='w-full max-w-screen overflow-x-hidden'>
      <div className='flex flex-col items-center justify-center min-h-screen w-full lg:grid lg:grid-cols-2 lg:gap-5'>
        
        {/* Left Section */}
        <div className='flex w-full px-4 flex-col items-center lg:items-start lg:ml-[100px] h-full'>
          
          {/* Logo */}
          <div className='flex justify-center lg:justify-start w-full mt-[40px] items-center'>
            <img src='/betterlogo.png' alt='logo' className='w-[30px] h-auto' />
            <span className='text-[13px] ml-2 font-bold'>Health<span className='text-gray-400'>Wise</span></span>
          </div>

          {/* Greeting */}
          <div className='flex w-full flex-col gap-2 items-center mt-[30px] lg:items-start'>
            <h1 className='text-[23px] lg:text-[18px] font-bold text-center lg:text-left w-full'>Hello there,.....</h1>
            <p className='text-[13px] lg:text-[10px] text-gray-400 text-center lg:text-left w-full'>
              Sign in to get access to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className='flex w-full max-w-[350px] flex-col gap-4 mt-[30px]'>
            
            {/* Email */}
            <label htmlFor='email' className='flex flex-col w-full'>
              <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Your email address</span>
              <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center rounded-sm'>
                <MdOutlineEmail className='text-gray-400' size={15} />
                <input type='text' name='email' value={data.email} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='example@gmail.com' />
              </div>
            </label>

            {/* Username */}
            <label htmlFor='username' className='flex flex-col w-full'>
              <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Enter your username</span>
              <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center rounded-sm'>
                <FaUserCheck className='text-gray-400' size={15} />
                <input type='text' name='username' /*value={data.username} onChange={handleInputChange}*/ className='ml-2 outline-none bg-transparent text-white w-full' placeholder='eg Felix Kiprotich' />
              </div>
            </label>

            {/* Password */}
            <label htmlFor='password' className='flex flex-col w-full'>
              <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Enter your password</span>
              <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center rounded-sm'>
                <TbLockPassword className='text-gray-400' size={15} />
                <input type='password' name='password' value={data.password} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='..................' />
              </div>
            </label>

            {/* Button */}
            <div className='w-full mt-4'>
              <button className='bg-emerald-400 cursor-pointer font-bold text-[11px] p-2.5 w-full rounded-sm'>
                Sign in ......
              </button>
              <p className='flex text-[11px] text-gray-400 mt-4 justify-center lg:justify-start'>Don't have an account ? <Link className='ml-2 cursor-pointer' to='/sign up'>Create account</Link></p>
            </div>
          </form>

          {/* Copyright */}
          <div className='flex w-full justify-center lg:justify-start items-center mt-[45px]'>
            <p className='text-[9px] hidden lg:flex text-gray-400'>
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex flex-col rounded-lg  lg:mt-0 bg-indigo-50 lg:h-screen h-full justify-center items-center p-4'>
          <DotLottieReact
          className='w-100% lg:w-[850px] max-w-500px h-auto object-cover'
            src="https://lottie.host/00a8ab11-c159-49c4-b6c5-0bd614de820f/omqsv0Wi5B.lottie"
            loop
            autoplay
            // style={{ width: "100%", maxWidth: "500px", height: "auto", objectFit: "cover" }}
          />
           <p className='text-[9px] lg:hidden flex text-zinc-900'>
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
        </div>

      </div>
    </div>
  )
}

export default Home
