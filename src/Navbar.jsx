import React from 'react'

function Navbar() {
  return (
    <div className='w-full px-4 py-3  flex  justify-between items-center'>
        <h3>orange</h3>
        <div className='flex p-2 px-4 bg-orange-600 text-white rounded-md text-sm gap-3 '>
            <h3>favourites</h3>
            <h2>2</h2>
        </div>
    </div>
  )
}

export default Navbar