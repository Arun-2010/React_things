// import React from 'react'

// function Card() {

//     const data=[
//         { image:"https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",  name:"ocean",  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, qui.", instock:true },

//         {   image:"https://images.unsplash.com/photo-1566010503302-2564ae0d47b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  name:"clouds",  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, qui." ,intstock:false},

//         {   image:"https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  name:"tree",  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, qui.",instock:true}

//     ]
//   return (


//     <div className='w-full  h-screen bg-zinc-200 flex items-center gap-10 justify-center'>
//         {data.map((ele,index)=>(
//             <div className='w-52  bg-zinc-100 rounded-md overflow-hidden'>
//          <div className='w-full h-32  bg-zinc-300'>

//             <img className='w-full h-full object-cover' src={ele.image} alt="" />
//          </div>
//             <div className='w-full px-2 py-4'>
//                 <h2 className='font-semibold'>{ele.name}</h2>
//                 <p className='text-xs mt-5'>{ele.description}</p>
//                 <button className={`px-2 py-2 ${ele.instock ? "bg-blue-600" : "bg-red-600"} text-xs text-zinc-100 mt-3 rounded-md`}>{ele.instock ? "instock":"outofstock"}</button>


//          </div>

//         </div>
//         )
//     )}

//     </div>


//   )
// }

// export default Card




import React from 'react'

function Card(
  { name, image, skill }
) {
  return (
    <div className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
      <div className='w-full h-32 bg-zinc-300'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div className='w-full px-2 py-4'>
        <h2 className='font-semibold'>{name}</h2>
        <p className='text-xs mt-5'>{skill}</p>
      </div>
    </div>
  )
}

export default Card