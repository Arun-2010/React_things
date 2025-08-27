import React from 'react'

function Prop() {
  return (
    <div className='w-60  bg-zinc-100 p-4  rounded-md flex gap-4 pb-10 relative'>
        <div className='w-20 h-20 bg-orange-500 rounded-md'> </div>
            <div className=''>
            <h3 className='text-2xl leading-none font-semibold'>song name</h3>
            <h2 className='text-sm'>artist name</h2>
          
          
        </div>
        <button className='px-4 py-3 bg-orange-500 absolute bottom-0 whitespace-nowrap left-1/2 -translate-x-1/2 translate-[50%] text-white text-xs rounded-full'>add to fav</button>
    </div>
  )
}

export default Prop