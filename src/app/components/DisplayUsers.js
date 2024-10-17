"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';

const DisplayUsers = () => {
  const userData = useSelector((data)=>data.users);
  const dispatch =useDispatch()
  console.log(userData);
  return (
    <div className="border-2 p-10">
      <h3 className="text-4xl font-bold mb-1">Display Users</h3>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
        {
          userData?.length > 0 && userData.map(user=><div className='border-2 p-5' key={user?.id}>
           <div>
           <h2>UserId:{user?.id}</h2>
           <h3>User Name:{user?.name}</h3>
           </div>
           <button onClick={()=>dispatch(removeUser(user?.id))}  className='bg-red-500 px-2 text-white  py-2'>Remove</button>
          </div>)
        }
      </div>
    </div>
  );
}

export default DisplayUsers