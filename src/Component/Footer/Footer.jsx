import React from 'react'

const Footer = () => {
  return (
    <div>
        <p>i am dennis </p>
        <table className='w-screen h-full justify-center items-center flex'>
          <thead className='bg-black text-white mr-4 py-[0.5rem] px-[1rem]'>
<td className='p-2 text-black bg-white mr-4 mt-2'>FirstName</td>
<td className='p-2 text-black bg-white mr-4 mt-2'>Lastname</td>
<td className='p-2 text-black bg-white mr-4 mt-2'>Email</td>
<td className='p-2 text-black bg-white mr-4 mt-2'>Edit</td>
<td className='p-2 text-black bg-white mr-4 mt-2'>Delete</td>
<tbody>
    <tr>
        <td className='p-2 text-black bg-white mr-4 mt-2'>benard</td>
        <td className='p-2 text-black bg-white mr-4 mt-2'>thome</td>
        <td className='p-2 text-black bg-white mr-4 mt-2'>benard@gmail.com</td>
        <td className='p-2 text-black bg-white mr-4 mt-2'><button className='bg-green-700 p-3 mt-2'>EDIT</button></td>
        <td><button className='bg-red-700 p-3 mt-2'>DELETE</button></td>
    </tr>
    <tr>
        <td className='p-2 text-black bg-white mr-4 mt-2'>moses</td>
        <td className='p-2 text-black bg-white mr-4 mt-2'>matheka</td>
        <td className='p-2 text-black bg-white mr-4 mt-2'>moses@gmail.com</td>
        <td><button className='bg-green-700 p-3 mt-2'>EDIT</button></td>
        <td><button className='bg-red-700 p-3 mt-2'>DELETE</button></td>
    </tr>
    <tr>
        <td className='p-2 text-black bg-white mr-4 mt-2'>rachael</td>
        <td className='p-2 text-black bg-white mr-4 mt-2'>ndunge</td>
        <td className='p-2 text-black bg-white mr-4 mt-2'>rachael@gmail.com</td>
        <td className='bg-green-700 p-3 mt-2'><button>EDIT</button></td>
        <td ><button className='bg-red-700 p-3 mt-2'>DELETE</button></td>
    </tr>
    <tr>
        <td className='p-2 text-black bg-white mr-4 mt-2'>ivy</td>
        <td className='p-2 text-black bg-white mr-4 mt-2'>nzisa</td>
        <td className='p-2 text-black bg-white mr-4 mt-2'>ivy@gmail.com</td>
        <td className='bg-green-700 p-3 mt-2'><button>EDIT</button></td>
        <td><button className='bg-red-700 p-3 mt-2'>DELETE</button></td>
    </tr>
</tbody>


          </thead>
        </table>
        <button> click me</button>
    </div>
  )
}

export default Footer