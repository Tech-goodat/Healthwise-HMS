
import React, { use, useState } from 'react'
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { LiaAudioDescriptionSolid } from "react-icons/lia";
import { FaCloudUploadAlt } from "react-icons/fa";

const ClientSignUpForm = () => {
    const navigate=useNavigate()
    const user=sessionStorage.getItem('username')
        const [data, setData] = useState({
                
                email: '',
                username:'',
                phone_number:'',
                gender:'',
                age:'',
                date_of_birth:'',
                address:'',
                occupation:'',
                emergency_contact:'',
                primary_care_provider:'',
                insurance_policy_number:'',
                insurance_provider:'',
                allergies:'',
                current_medications:'',
                medical_history:'',
                family_medical_history:'',


            })
        
            const handleInputChange =(e)=>{
                const {name, value} = e.target
                setData({...data, [name]: value})
        
            }
            const handleLogin=(e)=>{
                e.preventDefault()
                fetch('https://healthwise-5j1x.onrender.com/client_signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res=>{
                  if(!res.ok){
                    throw new Error('Missing or invalid details!')
                  }
                  return  res.json()
                })
                .then(data=>{
                    console.log(data)
                    alert('Account created successfully !')
                    navigate('/dashboard')
                })
                .catch(err=>console.log(err))
            }
  return (
   <div className='flex flex-col lg:grid lg:grid-cols-3 items-center justify-center h-full '>
         <div className='col-span-2 flex w-full px-4 flex-col items-center lg:items-start lg:ml-[100px] h-full'>
          <Link to='/dashboard'>
         <div className='flex justify-center lg:justify-start w-full mt-[40px] items-center'>
               <img src='/betterlogo.png' alt='logo' className='w-[30px] h-auto' />
               <span className='text-[13px] ml-2 font-bold'>Health<span className='text-gray-400'>Wise</span></span>
             </div>
             </Link>
             <div className='flex w-full flex-col gap-2 items-center mt-[30px] lg:items-start'>
               <h1 className='text-[23px] lg:text-[23px] font-bold text-center lg:text-left w-full'>Hey <span className='text-gray-400'>{user}</span> 👋</h1>
               <p className='text-[13px] lg:text-[10px] text-gray-400 text-center lg:text-left w-full'>
                 Take time to keenly fill the form to create a new user.
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
                         <label htmlFor='gender' className='flex flex-col w-full'>
                           <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Add your gender</span>
                           <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center justify-center rounded-sm'>
                             <LiaAudioDescriptionSolid className='text-gray-400' size={15} />
                             <input type='text' name='gender' value={data.gender} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white items-center flex w-full' placeholder='eg Male' />
                           </div>
                         </label>
                         <h1 className='mt-4'>Medical information</h1>
                         <label htmlFor='family_medical_history' className='flex flex-col w-full'>
                           <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>describe your family medical history</span>
                           <div className='flex w-full gap-3 items-center'>
                           <div className='bg-zinc-800 p-2.5 text-[11px] w-[300px] flex items-center rounded-sm'>
                             <FaUserCheck className='text-gray-400' size={15} />
                             <input type='text' name='family_medical_history' value={data.family_medical_history} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='eg Diabetes, Hypertension, Cancer' />
                           </div>
                           <div className='bg-zinc-800 p-2.5 text-[11px] w-[300px] flex items-center rounded-sm'>
                             <FaUserCheck className='text-gray-400' size={15} />
                             <input type='text' name='age' value={data.age} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='eg 25' />
                           </div>
                           </div>
                         </label>
                         <label htmlFor='medical_history' className='flex flex-col w-full'>
                           <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Describe your medical history</span>
                           <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center rounded-sm'>
                             <TbLockPassword className='text-gray-400' size={15} />
                             <textarea type='text' name='medical_history' value={data.medical_history} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='Describe your medical history' />
                           </div>
                         </label>

                         

                         <label htmlFor='date_of_birth' className='flex flex-col w-full'>
                           <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Your Date of Birth</span>
                           <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center rounded-sm'>
                             <MdOutlineEmail className='text-gray-400' size={15} />
                             <input type='text' name='date_of_birth' value={data.date_of_birth} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='mm/dd/yyyy' />
                           </div>
                         </label>
             
                         {/* Username */}
                         <label htmlFor='address' className='flex flex-col w-full'>
                           <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Add your home address</span>
                           <div className='flex w-full gap-3 items-center'>
                           <div className='bg-zinc-800 p-2.5 text-[11px] w-[300px] flex items-center rounded-sm'>
                             <FaUserCheck className='text-gray-400' size={15} />
                             <input type='text' name='address' value={data.address} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='eg Embakasi, Nairobi, Kenya' />
                           </div>
                           <div className='bg-zinc-800 p-2.5 text-[11px] w-[300px] flex items-center rounded-sm'>
                             <FaUserCheck className='text-gray-400' size={15} />
                             <input type='text' name='occupation' value={data.occupation} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='eg Medical doctor' />
                           </div>
                           </div>
                         </label>
             
                         {/* Password */}
                         <label htmlFor='emergency contact' className='flex flex-col mt-5 l w-full'>
                           <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Add an emergency contact</span>
                           <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center justify-center rounded-sm'>
                             <LiaAudioDescriptionSolid className='text-gray-400' size={15} />
                             <input type='text' name='emergency_contact' value={data.emergency_contact} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white items-center flex w-full' placeholder='eg +234 456 768 986' />
                           </div>
                         </label>
                         <label htmlFor='primary_care_provider' className='flex flex-col w-full'>
                           <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>*For doctor only</span>
                           <div className='flex w-full gap-3 items-center'>
                           <div className='bg-zinc-800 p-2.5 text-[11px] w-[300px] flex items-center rounded-sm'>
                             <FaUserCheck className='text-gray-400' size={15} />
                             <input type='text' name='primary_care_provider' value={data.primary_care_provider} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='eg Add your name here' />
                           </div>
                           <div className='bg-zinc-800 p-2.5 text-[11px] w-[300px] flex items-center rounded-sm'>
                             <FaUserCheck className='text-gray-400' size={15} />
                             <input type='text' name='insurance_provider' value={data.insurance_provider} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='eg NHIF / SHA' />
                           </div>
                           </div>
                         </label>
                         <label htmlFor='insurance policy number' className='flex flex-col w-full'>
                           <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Insurance policy number</span>
                           <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center rounded-sm'>
                             <TbLockPassword className='text-gray-400' size={15} />
                             <input type='text' name='insurance_policy_number' value={data.insurance_policy_number} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='Insurance policy number' />
                           </div>
                         </label>
                         <label htmlFor='allergies' className='flex flex-col w-full'>
                           <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Your allergies (if any)</span>
                           <div className='flex w-full gap-3 items-center'>
                           <div className='bg-zinc-800 p-2.5 text-[11px] w-[300px] flex items-center rounded-sm'>
                             <FaUserCheck className='text-gray-400' size={15} />
                             <input type='text' name='allergies' value={data.allergies} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='eg peanuts, latex, etc' />
                           </div>
                           <div className='bg-zinc-800 p-2.5 text-[11px] w-[300px] flex items-center rounded-sm'>
                             <FaUserCheck className='text-gray-400' size={15} />
                             <input type='text' name='current_medication' value={data.current_medication} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='eg on going medication' />
                           </div>
                           </div>
                         </label>
             
                         {/* Button */}
                         <div className='w-full mt-4'>
                           <button className='bg-emerald-400 mb-5 cursor-pointer font-bold text-[11px] p-2.5 w-full rounded-sm'>
                             Complete user registration
                           </button>
                           
                         </div>
                       </form>
   
         </div>
         <div className='mt-2 lg:mt-0 lg:h-full'>
           <img src='/Illustration.jpg' alt='background' className='w-full h-full  object-cover' />
         </div>
       
       </div>
  )
}

export default ClientSignUpForm
