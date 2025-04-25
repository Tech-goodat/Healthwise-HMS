import React from 'react'
import NavBar from './NavBar'
import { RiCalendarScheduleFill } from "react-icons/ri";
import { GoPersonFill } from "react-icons/go";
import { MdStickyNote2 } from "react-icons/md";

const DashBoard = () => {
    const user= sessionStorage.getItem('username')
    console.log (user)
  return (
    <div className='w-full h-screen flex flex-col'>
        <NavBar />

        <div className='flex lg:grid lg:grid-cols-3 w-full flex-col  gap-2 items-center mt-[30px] lg:items-start'>
            <div className='flex w-full col-span-3 lg:ml-[50px] items-center flex-col '>
            <h1 className='text-[23px] lg:text-[23px] font-bold text-center lg:text-left w-full'>Welcome, <span className='text-gray-400'>{user} 👋</span></h1>
            <p className='text-[13px] lg:text-[10px] text-gray-400 text-center lg:text-left w-full'>
              Start your day by managinf your clients and programs
            </p>
            
            </div>
            <div className='col-span-3 flex w-full lg:ml-[50px] lg:mr-[50px] lg:w-[1160px] flex-col gap-5 lg:grid lg:grid-cols-3'>
                <div className='flex flex-col bg-zinc-800 shadow-lg w-full bg-gradient-to-l from-amber-200 to-red-200 h-[140px] p-5 rounded-md'>
                <div className='flex w-full items-center py-2 px-4'><RiCalendarScheduleFill size={50} className='text-stone-600' /><span className='ml-6 font-bold text-3xl text-stone-600'>45</span></div>
                <h1 className='px-4 text-stone-600 font-bold'>Number of enrolled clients</h1>
                </div>
                <div className='flex flex-col bg-zinc-800 shadow-lg w-full bg-gradient-to-l from-emerald-200 to-teal-200 h-[140px] p-5 rounded-md'>
                <div className='flex w-full items-center py-2 px-4'><GoPersonFill  size={50} className='text-stone-600' /><span className='ml-6 font-bold text-3xl text-stone-600'>300</span></div>
                <h1 className='px-4 text-stone-600 font-bold'>Number of clients</h1>
                </div>
                <div className='flex flex-col bg-zinc-800 shadow-lg w-full bg-gradient-to-l from-rose-200 to-fuchsia-200 h-[140px] p-5 rounded-md'>
                <div className='flex w-full items-center py-2 px-4'><MdStickyNote2  size={50} className='text-stone-600' /><span className='ml-6 font-bold text-3xl text-stone-600'>20</span></div>
                <h1 className='px-4 text-stone-600 font-bold'>Number of programs</h1>
                </div>
            </div>
          </div>
      
    </div>
  )
}

export default DashBoard
