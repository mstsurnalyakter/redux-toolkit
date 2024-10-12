import React from 'react'

const AddUsers = () => {
  return (
    <div className='border-2 p-10'>
      <h3 className='text-4xl font-bold mb-1'>User List</h3>
      <input className='border-2 w-1/2 border-gray-600 p-5' type='text' placeholder='Add New User' />
      <button className='bg-sky-600 px-5 py-5 text-gray-200'>Add User</button>

    </div>
  )
}

export default AddUsers