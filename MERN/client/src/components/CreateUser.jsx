import React from 'react'

const CreateUser = () => {
  return (
    <div className='flex h-dvh bg-gray-900 justify-center items-center p-24'>
        <div className='min-w-72 bg-white rounded p-4'>
            <form className="w-full">
                <h2 className="texl-xl">Add User</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Name' className='block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500' />
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type='text' placeholder='Enter Email' className='block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500' />
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Age</label>
                    <input type='text' placeholder='Enter Age' className='block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500' />
                </div>
                <button className="bg-green-500 p-2 rounded">Submit</button>
            </form>
        </div>

    </div>
  )
}

export default CreateUser