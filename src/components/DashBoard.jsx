import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { RiCalendarScheduleFill } from "react-icons/ri";
import { GoPersonFill } from "react-icons/go";
import { MdStickyNote2 } from "react-icons/md";
import { CiCirclePlus, CiSearch } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';

// Function to get initials
const getInitials = (username) => {
    if (!username) return "";
    const names = username.split(" ");
    if (names.length === 1) return names[0][0]?.toUpperCase();
    return names[0][0]?.toUpperCase() + names[1][0]?.toUpperCase();
};

const DashBoard = () => {
    const [data, setData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch('https://healthwise-5j1x.onrender.com/clients')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
    }, []);

    const user = sessionStorage.getItem('username');

    // function to handle search input change
    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term.trim() === "") {
            setSearchResults([]);
            return;
        }

        fetch(`https://healthwise-5j1x.onrender.com/client_search/${term}`)
            .then((response) => response.json())
            .then((data) => setSearchResults(data))
            .catch((error) => console.log(error));
    };

    // function to handle clicking on a search result
    const handleUserClick = (id) => {
        navigate(`/client/${id}`);
    };

    return (
        <div className='w-full h-screen flex flex-col overflow-x-hidden relative'>
            <NavBar />
            <div className='flex lg:grid lg:grid-cols-3 w-full flex-col gap-2 items-center mt-[30px] lg:items-start'>
                <div className='flex w-full col-span-3 lg:ml-[50px] items-center flex-col'>
                    <h1 className='text-[23px] font-bold text-center lg:text-left w-full'>
                        Welcome, <span className='text-gray-400'>{user} 👋</span>
                    </h1>
                    <p className='text-[13px] lg:text-[10px] text-gray-400 text-center lg:text-left w-full'>
                        Start your day by managing your clients and programs
                    </p>
                </div>

                {/* Statistics Cards */}
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

                {/* Search and Add User */}
                <div className='flex mt-4 col-span-3 w-full items-center justify-between'>
                    <div className='flex items-center lg:ml-[50px] ml-[20px] relative'>
                        <form>
                            <div className='flex items-center justify-center text-[11px] text-white rounded-sm bg-zinc-800'>
                                <CiSearch size={15} className='ml-2' /> 
                                <input 
                                    type='text' 
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    placeholder='Search user ...' 
                                    className='outline-none p-2 bg-zinc-800'
                                />
                            </div>
                        </form>

                        {/* Modal for search results */}
                        {searchResults.length > 0 && (
                            <div className='absolute top-[50px] w-full bg-white shadow-lg rounded-md z-50 max-h-[200px] overflow-y-auto'>
                                {searchResults.map((client) => (
                                    <div
                                        key={client.id}
                                        onClick={() => handleUserClick(client.id)}
                                        className='p-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2'
                                    >
                                        <div className='w-7 h-7 flex items-center justify-center rounded-full bg-lime-300 text-black text-[11px] font-bold'>
                                            {getInitials(client.username)}
                                        </div>
                                        <span className='text-sm text-gray-800'>{client.username}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className='flex items-center justify-center'>
                        <span className='mr-2 text-gray-400 text-[14px]'>Add new user</span>
                        <button className='flex mr-[20px] cursor-pointer lg:mr-[60px] rounded-full text-zinc-900 p-2 bg-emerald-400'>
                            <Link to='/client form'><CiCirclePlus size={20} /></Link>
                        </button>
                    </div>
                </div>

                {/* Clients Table */}
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
