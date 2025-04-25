import React from 'react'

const NavBar = () => {
    const user=sessionStorage.getItem('username')
  return (
    <div className='flex p-2 w-full items-center justify-between bg-black'>
        <div className='flex gap-3 mr-4 items-center'><img  src='/betterlogo.png' alt='logo' className='w-[30px] ml-4 h-auto'/>
        <p className='text-[13px]'>Health<span className='text-gray-400'>Wise</span></p></div>
        
        <div className='flex gap-3 mr-4 items-center'>
            <img src='/logo.png' className='w-[30px] bg-white rounded-full h-auto'/>
          < h1 className='text-[13px]'> {user}</h1>
        </div>
      
    </div>
  )
}

export default NavBar
