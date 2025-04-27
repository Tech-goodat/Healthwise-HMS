import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import { CiSearch, CiCirclePlus } from "react-icons/ci";

const Programmes = () => {
    const user = sessionStorage.getItem('username');

    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        fetchPrograms();
    }, []);

    const fetchPrograms = async () => {
        try {
            const response = await fetch('https://healthwise-5j1x.onrender.com/programs');
            const data = await response.json();
            setPrograms(data);
        } catch (error) {
            console.error('Error fetching programs:', error);
        }
    };

    return (
        <div className="col-span-3 flex w-full lg:ml-[50px] lg:mr-[50px] lg:w-[1160px] flex-col">
            <div className="col-span-2 flex w-full px-2 flex-col items-center lg:items-start h-full">
                <Link to="/dashboard">
                    <div className="flex justify-center lg:justify-start w-full mt-[40px] items-center">
                        <img src="/betterlogo.png" alt="logo" className="w-[30px] h-auto" />
                        <span className="text-[13px] ml-2 font-bold">Health<span className="text-gray-400">Wise</span></span>
                    </div>
                </Link>
            </div>

            <div className="flex w-full flex-col gap-2 items-center mt-[30px] lg:items-start">
                <h1 className="text-[23px] lg:text-[23px] font-bold text-center lg:text-left w-full">Hey <span className="text-gray-400">{user}</span> 👋</h1>
                <p className="text-[13px] lg:text-[10px] text-gray-400 text-center lg:text-left w-full">
                    List of programs, currently up and running.
                </p>
            </div>

            <div className="flex mt-5 justify-center lg:justify-start items-center">
                <span className="mr-2 text-gray-400 text-[11px]">Add new program</span>
                <button className="flex lg:mr-[20px] cursor-pointer lg:mr-[60px] rounded-full text-zinc-900 p-1 bg-emerald-400">
                    <Link to="/programmesform"><CiCirclePlus size={20} /></Link>
                </button>
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mt-6 lg:px-4">
                {programs.map((program) => (
                    <div key={program.id} className="bg-white text-gray-900 rounded-t-lg lg:rounded-lg overflow-hidden shadow-md flex flex-col">
                        <img src="/hospital.jpg" alt="Program Illustration" className="w-full h-32 object-cover" />
                        <div className="p-4 flex flex-col flex-grow">
                            <h2 className="text-[14px] font-bold mb-2">{program.name}</h2>
                            <p className="text-[11px] text-gray-500 mb-1 line-clamp-2">{program.description}</p>
                            <p className="text-[11px] text-gray-400 mb-1 italic">{program.slogan}</p>
                            <p className="text-[11px] text-gray-500 mb-4">Manager: {program.program_manager}</p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programmes;
