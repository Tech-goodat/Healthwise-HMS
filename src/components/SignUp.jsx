import React, { useState } from 'react'
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { LiaAudioDescriptionSolid } from "react-icons/lia";
import { FaCloudUploadAlt } from "react-icons/fa";




const SignUp = () => {
    const navigate=useNavigate()
    const [data, setData] = useState({
            
            email: '',
            password: '',
            username:'',
            phone_number:'',
            description:'',
            profile_picture:'/betterlogo.png',
            department:'',
        })
    
        const handleInputChange =(e)=>{
            const {name, value} = e.target
            setData({...data, [name]: value})
    
        }
        const handleLogin=(e)=>{
            e.preventDefault()
            fetch('https://healthwise-5j1x.onrender.com/doc_signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res=>{
              if (!res.ok){
                throw new Error(alert('missing or invalid credentials'));
              }
              return res.json()
            })
            .then(data=>{
                console.log(data)
                alert('Account created successfully !')
                sessionStorage.setItem('token', data.access_token)
                sessionStorage.setItem('username', data.username)
                navigate('/dashboard')
            })
            .catch(err=>console.log(err))
        }
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-3 items-center justify-center h-full '>
      <div className='col-span-2 flex w-full px-4 flex-col items-center lg:items-start lg:ml-[100px] h-full'>
      <div className='flex justify-center lg:justify-start w-full mt-[40px] items-center'>
            <img src='/betterlogo.png' alt='logo' className='w-[30px] h-auto' />
            <span className='text-[13px] ml-2 font-bold'>Health<span className='text-gray-400'>Wise</span></span>
          </div>
          <div className='flex w-full flex-col gap-2 items-center mt-[30px] lg:items-start'>
            <h1 className='text-[23px] lg:text-[23px] font-bold text-center lg:text-left w-full'>Welcome 👋</h1>
            <p className='text-[13px] lg:text-[10px] text-gray-400 text-center lg:text-left w-full'>
              Create an account to get started
            </p>
            <h1>Personal information</h1>
          </div>
           <form onSubmit={handleLogin} className='flex  w-full max-w-[600px] flex-col gap-4 mt-[30px]'>
                      
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
                        <div className='flex w-full gap-3 items-center'>
                        <div className='bg-zinc-800 p-2.5 text-[11px] w-[300px] flex items-center rounded-sm'>
                          <FaUserCheck className='text-gray-400' size={15} />
                          <input type='text' name='username' value={data.username} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='eg Felix Kiprotich' />
                        </div>
                        <div className='bg-zinc-800 p-2.5 text-[11px] w-[300px] flex items-center rounded-sm'>
                          <FaUserCheck className='text-gray-400' size={15} />
                          <input type='text' name='phone_number' value={data.phone_number} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='eg +254 712 345 678' />
                        </div>
                        </div>
                      </label>
          
                      {/* Password */}
                      <label htmlFor='password' className='flex flex-col w-full'>
                        <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>\describe yourself in detail</span>
                        <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center justify-center rounded-sm'>
                          <LiaAudioDescriptionSolid className='text-gray-400' size={15} />
                          <textarea type='text' name='description' value={data.description} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white items-center flex w-full' placeholder='Describe yourself in detail' />
                        </div>
                      </label>
                      <label htmlFor='username' className='flex flex-col w-full'>
                        <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Add your department</span>
                        <div className='flex w-full gap-3 items-center'>
                        <div className='bg-zinc-800 p-2.5 text-[11px] w-[300px] flex items-center rounded-sm'>
                          <FaUserCheck className='text-gray-400' size={15} />
                          <input type='text' name='department' value={data.department} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='eg Radiology department' />
                        </div>
                        <div className='bg-zinc-800 p-2.5 text-[11px] w-[300px] flex items-center rounded-sm'>
                          <FaCloudUploadAlt  className='text-gray-400' size={15} />
                          <button    className='ml-2 outline-none bg-transparent text-white w-full' >Upload profile picture</button>
                        </div>
                        </div>
                      </label>
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
                          Create account........
                        </button>
                        <p className='flex text-[11px] text-gray-400 mt-4 mb-4 justify-center lg:justify-start'>Already have an account ? <Link className='ml-2 cursor-pointer' to='/'>Sign in !</Link></p>
                      </div>
                    </form>

      </div>
      <div className='mt-2 lg:mt-0 lg:h-full'>
        <img src='/background.png' alt='background' className='w-full h-full  object-cover' />
      </div>
    
    </div>
  )
}

export default SignUp
