"use client"
import React from 'react'
import { useSelector } from 'react-redux';

const DisplayUsers = () => {
  const userData = useSelector((data)=>data.users);
  console.log(userData);
  return (
    <div className="border-2 p-10">
      <h3 className="text-4xl font-bold mb-1">Display Users</h3>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
        {
          userData?.length > 0 && userData.map(user=><div className='border-2 p-5' key={user?.id}>
            <h2>UserId:{user?.id}</h2>
            <h3>User Name:{user?.name}</h3>
          </div>)
        }
      </div>
    </div>
  );
}

export default DisplayUsers