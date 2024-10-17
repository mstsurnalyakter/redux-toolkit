"use client"

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';

function removeUserPage(props) {
    const userData = useSelector((data)=>data.users);
    const distcph = useDispatch()
    console.log(userData);

    const handleRemoveUser = id =>{
        distcph(removeUser(id))
    }

    return (
        <div className='p-24'>
            <h1>Remove User Page</h1>
            <div className='grid grid-cols-1 gap-10'>
                {
                    userData?.map(user=><div className='bg-green-500'>
                        <h2>{user?.name}</h2>
                        <button className='bg-red-500 p-2' onClick={()=>handleRemoveUser(user.id)} >Remove User</button>
                    </div>)
                }
            </div>
        </div>
    );
}

export default removeUserPage;