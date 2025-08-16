// import React, { useState } from 'react'

// function State() {
//     const[setval,setcore]=useState(0);
//   return (
//     <div>

//         <h1 className='px-6 py-6'>{setval}</h1>
//         <button onClick={()=>setcore(prev=>prev+1)} className='px-6 py-1 bg-blue-600 rounded-md text-white text-mt gap-10'>
//             click me
//             </button>

//             <button onClick={()=>setcore(0)} className='bg-blue-600 px-3 rounded-md text-white '>default</button>
//     </div>
    
//   )
// }

// export default State




import React, { useState } from 'react'

function State() {
    const[val,setval]=useState({name:'arun',isbanned:false});
  return (
    <div className='p-4'>
        <h1>name:{val.name}</h1>
        <h1>isbanned:{val.isbanned.toString()}</h1>
        <button   onClick={()=>setval({...val,isbanned:!val.isbanned,name:' run'})} className='py-2 px-2 bg-blue-600 text-white rounded-md'>change</button>
    </div>
  )
}

export default State