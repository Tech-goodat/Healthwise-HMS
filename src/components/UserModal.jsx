import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';

const UserModal = () => {
  const { id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    fetch(`https://healthwise-5j1x.onrender.com/client_profile_by_id/${id}`)
      .then(res => res.json())
      .then(data => setClient(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!client) return <div>Loading...</div>;

  return (
    <div className="w-full max-w-screen overflow-x-hidden">
        <div className='flex flex-col items-center justify-center min-h-screen w-full lg:grid lg:grid-cols-4 lg:gap-5'>
            <div className='col-span-3 flex flex-col items-center '>
                <div className='mt-6 lg:mt-2 flex w-full'>
                <NavBar  />
                </div>
                <div className='flex w-[600px] h-[400px] mt-3 bg-zinc-800 rounded-md flex-col items-center'>
      <h1 className="text-2xl font-bold">{client.username}</h1>
      <p className="mt-2">Email: {client.email}</p>
      <p>Phone: {client.phone_number}</p>
      </div>
      {/* Show other client fields */}
      </div>
      <div className='flex flex-col rounded-lg  lg:mt-0   h-full justify-center items-center '>
        <img src='/sidePic.png' alt='sidePic' className='w-full h-full object-cover' />
      </div>
    </div>
    </div>
  );
};

export default UserModal;
