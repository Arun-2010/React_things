import React, { use, useRef } from 'react'


function Formhandle() {

  const name = useRef(null);
  const age = useRef(null);
  const handlefunction=(details)=>{
    details.preventDefault();
    console.log(name.current.value, age.current.value);
    // or
   // console.log(age.current.value);
  }


  return (
    <div className='p-4'>
        <form action="" onSubmit={handlefunction}>
      <input   ref={name} className='border border-gray-300 p-2 rounded'    type="name" placeholder="Enter your name" />
      <input   ref={age} className='border border-gray-300 p-2 rounded'    type="age" placeholder="Enter your age" />
      <button  className='bg-blue-500 text-white p-2 rounded' type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Formhandle