import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";

const UserModal = () => {
  const { id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    fetch(`https://healthwise-5j1x.onrender.com/client_profile_by_id/${id}`)
      .then(res => res.json())
      .then(data => setClient(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!client) return <div className='flex flex-col w-full h-screen items-center justify-center' > <span class="loader"></span></div>;

  return (
    <div className="w-full max-w-screen overflow-x-hidden">
        <div className='flex flex-col items-center justify-center min-h-screen w-full lg:grid lg:grid-cols-4 lg:gap-5'>
            <div className='col-span-3 flex h-screen  flex-col items-center '>
               
                <div className='flex w-[600px] h-screen lg:h-[600px] lg:mt-5 lg:mb-6  bg-zinc-800 rounded-md flex-col items-center'>
      <h1 className="text-2xl mt-5 mb-4 font-bold">{client.username} 👍</h1>
      <img src='/usericon.png' alt='user' className='w-[250px] lg:w-[220px] h-auto  object-cover' />
      <div className='flex flex-col  lg:ml-[100px] ml-[300px] items-center h-full  w-full'>
      <p className="mt-2 w-full flex font-bold text-[15px] text-gray-400"> About {client.username}</p>
      <p className='flex w-full items-center text-[12px] text-gray-400'><MdMarkEmailRead size={20} className='mr-2'/> {client.email} | 
      <p className='ml-2 flex'><FaPhoneVolume size={20}/> {client.phone_number}   , <span className='ml-4'>{client.gender}</span></p></p>
      <p className='flex w-full text-gray-400 text-[14px] mt-4 lg:mt-0 font-bold'>Medical History</p>
      <p className='text-white flex w-full text-[11px] '>{client.medical_history}</p>
      <p className='flex w-full text-gray-400 text-[14px] mt-4 lg:mt-1 font-bold'>Family Medical History</p>
      <p className='text-white flex w-full text-[11px] '>{client.family_medical_history}</p>
   
      </div>
      <button className='lg:w-[500px] w-[300px] cursor-pointer mb-6 lg:mb-[40px] mt-2 p-1.5 rounded-sm text-[12px] bg-emerald-400'>Enrol {client.username} to a program</button>
      </div>
      {/* Show other client fields */}
      </div>
      <div className='hidden lg:flex flex-col rounded-lg  lg:mt-0   h-full justify-center items-center '>
        <img src='/sidePic.png' alt='sidePic' className='w-full lg:h-screen object-cover' />
      </div>
    </div>
    </div>
  );
};

export default UserModal;
