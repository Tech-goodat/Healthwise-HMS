import React, { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const ProgramsForm = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        description: '',
        target_audience: '',
        slogan: '',
        program_type: '', 
        contact_email: '',
        program_manager: '',

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleProgramCreation = (e) => {
        e.preventDefault();
        fetch('https://healthwise-5j1x.onrender.com/program', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to create program!');
            }
            return res.json();
        })
        .then((data) => {
            alert('Program created successfully!');
            setData(data)
            navigate('/dashboard');
        })
        .catch(err => console.log(err));
    };

    return (
        <div className='flex flex-col lg:grid lg:grid-cols-3 items-center justify-center h-full'>
            <div className='col-span-2 flex w-full px-4 flex-col items-center lg:items-start lg:ml-[100px] h-full'>
                <Link to='/dashboard'>
                    <div className='flex justify-center lg:justify-start w-full mt-[40px] items-center'>
                        <img src='/betterlogo.png' alt='logo' className='w-[30px] h-auto' />
                        <span className='text-[13px] ml-2 font-bold'>Health<span className='text-gray-400'>Wise</span></span>
                    </div>
                </Link>
                <div className='flex w-full flex-col gap-2 items-center mt-[30px] lg:items-start'>
                    <h1 className='text-[23px] lg:text-[23px] font-bold text-center lg:text-left w-full'>Create a New Program</h1>
                    <p className='text-[13px] lg:text-[10px] text-gray-400 text-center lg:text-left w-full'>
                        Please fill in the details to create a new program.
                    </p>
                </div>
                <form onSubmit={handleProgramCreation} className='flex w-full max-w-[600px] flex-col gap-4 mt-[30px]'>

                    {/* Program Name */}
                    <label htmlFor='program_name' className='flex flex-col w-full'>
                        <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Program Name</span>
                        <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center rounded-sm'>
                            <FaCloudUploadAlt className='text-gray-400' size={15} />
                            <input type='text' name='program_name' value={data.program_name} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='Program Name' />
                        </div>
                    </label>

                    {/* Program Description */}
                    <label htmlFor='program_description' className='flex flex-col w-full'>
                        <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Program Description</span>
                        <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center rounded-sm'>
                            <FaCloudUploadAlt className='text-gray-400' size={15} />
                            <textarea name='program_description' value={data.program_description} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='Describe the program' />
                        </div>
                    </label>

                   

                    {/* Target Audience */}
                    <label htmlFor='target_audience' className='flex flex-col w-full'>
                        <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Target Audience</span>
                        <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center rounded-sm'>
                            <FaCloudUploadAlt className='text-gray-400' size={15} />
                            <input type='text' name='target_audience' value={data.target_audience} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='eg. Adults, Children' />
                        </div>
                    </label>



                    {/* Contact Email */}
                    <label htmlFor='contact_email' className='flex flex-col w-full'>
                        <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Contact Email</span>
                        <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center rounded-sm'>
                            <FaCloudUploadAlt className='text-gray-400' size={15} />
                            <input type='email' name='contact_email' value={data.contact_email} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='Contact email address' />
                        </div>
                    </label>

                    {/* Slogan */}
                    <label htmlFor='slogan' className='flex flex-col w-full'>
                        <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Go by slogan</span>
                        <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center rounded-sm'>
                            <FaCloudUploadAlt className='text-gray-400' size={15} />
                            <input type='text' name='slogan' value={data.slogan} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='Slogan' />
                        </div>
                    </label>
                     {/* program manager */}
                     <label htmlFor='program manager' className='flex flex-col w-full'>
                        <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Program manager</span>
                        <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center rounded-sm'>
                            <FaCloudUploadAlt className='text-gray-400' size={15} />
                            <input type='text' name='program_manager' value={data.program_manager} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='program manager name eg. John Doe' />
                        </div>
                    </label>
                     {/* program type */}
                     <label htmlFor='program type' className='flex flex-col w-full'>
                        <span className='mb-2 text-[12px] lg:text-[9px] text-gray-400'>Program type</span>
                        <div className='bg-zinc-800 p-2.5 text-[11px] flex items-center rounded-sm'>
                            <FaCloudUploadAlt className='text-gray-400' size={15} />
                            <input type='text' name='program_type' value={data.program_type} onChange={handleInputChange} className='ml-2 outline-none bg-transparent text-white w-full' placeholder='eg. Online, In-person' />
                        </div>
                    </label>

                    {/* Button */}
                    <div className='w-full mt-4'>
                        <button className='bg-emerald-400 mb-5 cursor-pointer font-bold text-[11px] p-2.5 w-full rounded-sm'>
                            Create Program
                        </button>
                    </div>
                </form>
            </div>
            <div className='mt-2 lg:mt-0 lg:h-full'>
                <img src='/doctor.jpg' alt='background' className='w-full h-full object-cover' />
            </div>
        </div>
    );
};

export default ProgramsForm;
