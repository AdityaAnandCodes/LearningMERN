import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const [users,setUsers] = useState([{
        Name: "adi" , Email:"agsgagsafsg", Age:20
    }])
  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-gray-900 p-10">
  <div className="bg-white w-50 rounded-lg p-3 min-h-80 w-full">
    <div className='flex justify-between'>
        <Link to="/create" className="bg-green-500 font-semibold rounded p-2 px-4 mb-4 inline-block">
      Add+
    </Link>
    </div>
    <table className="table-fixed w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
          <th className="px-4 py-2 border border-gray-300 text-left">Email</th>
          <th className="px-4 py-2 border border-gray-300 text-left">Age</th>
          <th className="px-4 py-2 border border-gray-300 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="px-4 py-2 border border-gray-300">{user.Name}</td>
            <td className="px-4 py-2 border border-gray-300">{user.Email}</td>
            <td className="px-4 py-2 border border-gray-300">{user.Age}</td>
            <td className="px-4 py-2 border border-gray-300">
              <div className="flex gap-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded">
                  <Link to="/update">
      Edit
    </Link>
                </button>
                <button className="bg-red-500 hover:bg-red-700 p-2 rounded text-white font-bold">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

  )
}

export default Users