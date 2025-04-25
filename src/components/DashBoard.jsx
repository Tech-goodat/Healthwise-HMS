import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { RiCalendarScheduleFill } from "react-icons/ri";
import { GoPersonFill } from "react-icons/go";
import { MdStickyNote2 } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';


// Function to get initials
const getInitials = (username) => {
    if (!username) return "";
    const names = username.split(" ");
    if (names.length === 1) return names[0][0]?.toUpperCase();
    return names[0][0]?.toUpperCase() + names[1][0]?.toUpperCase();
};

const DashBoard = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('http://127.0.0.1:5555/clients')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const user = sessionStorage.getItem('username');

    return (
        <div className='w-full h-screen flex flex-col overflow-x-hidden'>
            <NavBar />
            <div className='flex lg:grid lg:grid-cols-3 w-full flex-col gap-2 items-center mt-[30px] lg:items-start'>
                <div className='flex w-full col-span-3 lg:ml-[50px] items-center flex-col'>
                    <h1 className='text-[23px] lg:text-[23px] font-bold text-center lg:text-left w-full'>
                        Welcome, <span className='text-gray-400'>{user} 👋</span>
                    </h1>
                    <p className='text-[13px] lg:text-[10px] text-gray-400 text-center lg:text-left w-full'>
                        Start your day by managing your clients and programs
                    </p>
                </div>

                <div className='col-span-3 flex w-full lg:ml-[50px] lg:mr-[50px] lg:w-[1160px] flex-col gap-5 lg:grid lg:grid-cols-3'>
                    <div className='flex flex-col bg-gradient-to-l from-amber-200 to-red-200 h-[140px] p-5 rounded-md'>
                        <div className='flex w-full items-center py-2 px-4'>
                            <RiCalendarScheduleFill size={50} className='text-stone-600' />
                            <span className='ml-6 font-bold text-3xl text-stone-600'>45</span>
                        </div>
                        <h1 className='px-4 text-stone-600 font-bold'>Number of enrolled clients</h1>
                    </div>

                    <div className='flex flex-col bg-gradient-to-l from-emerald-200 to-teal-200 h-[140px] p-5 rounded-md'>
                        <div className='flex w-full items-center py-2 px-4'>
                            <GoPersonFill size={50} className='text-stone-600' />
                            <span className='ml-6 font-bold text-3xl text-stone-600'>300</span>
                        </div>
                        <h1 className='px-4 text-stone-600 font-bold'>Number of clients</h1>
                    </div>

                    <div className='flex flex-col bg-gradient-to-l from-rose-200 to-fuchsia-200 h-[140px] p-5 rounded-md'>
                        <div className='flex w-full items-center py-2 px-4'>
                            <MdStickyNote2 size={50} className='text-stone-600' />
                            <span className='ml-6 font-bold text-3xl text-stone-600'>20</span>
                        </div>
                        <h1 className='px-4 text-stone-600 font-bold'>Number of programs</h1>
                    </div>
                </div>

                <div className='flex mt-4 col-span-3 w-full items-center justify-between'>
                    <div></div>
                    <div className='flex items-center justify-center'>
                        <span className='mr-2 text-gray-400 text-[14px]'>Add new user</span>
                        <button className='flex mr-[20px] cursor-pointer lg:mr-[60px] rounded-full text-zinc-900 p-2 bg-emerald-400'>
                            <Link to='/client form'><CiCirclePlus size={20} /></Link>
                        </button>
                    </div>
                </div>

                <div className='col-span-3 w-full overflow-x-auto mt-4 px-4 lg:px-[50px]'>
                    <table className="table-auto w-full text-gray-400 border border-gray-900 shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-black text-left">
                            <tr>
                                <th className="px-4 py-2 text-[9px] rounded-tl-lg">Username</th>
                                <th className="px-4 py-2 text-[9px]">Email address</th>
                                <th className="px-4 py-2 text-[9px]">Phone number</th>
                                <th className="px-4 py-2 text-[9px]">Gender</th>
                                <th className="px-4 py-2 text-[9px]">Age</th>
                                <th className="px-4 py-2 text-[9px] rounded-tr-lg">Created at</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((client, index) => (
                                <tr
                                    key={client.id}
                                    className={`border-b border-gray-700 ${
                                        index === data.length - 1 ? 'rounded-b-lg' : ''
                                    }`}
                                >
                                    <td className="px-4 py-2 text-[10px] flex items-center gap-2">
                                        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-lime-300 text-black text-[11px] font-bold">
                                            {getInitials(client.username)}
                                        </div>
                                        {client.username}
                                    </td>
                                    <td className="px-4 py-2 text-[10px]">{client.email}</td>
                                    <td className="px-4 py-2 text-[10px]">{client.phone_number}</td>
                                    <td className="px-4 py-2 text-[10px]">{client.gender}</td>
                                    <td className="px-4 py-2 text-[10px]">{client.age}</td>
                                    <td className="px-4 py-2 text-[10px]">{client.created_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
