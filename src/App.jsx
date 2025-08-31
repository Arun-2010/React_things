import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import Nav from './components/Nav'
import Routing from './utils/Routing'
import Api from './components/Api'
// import Card from './Card'
// import State from './components/State'
// import Statehook from './components/Statehook'
// import Props from './components/Props'
// import Prop from './components/Prop'
// import Navbar from './Navbar'
// import Formhandle from './components/Formhandle'  
// import CArd from './components/CArd'
// import CArds from './components/CArds'
// import Form from './components/Form'


// function App() {
//   const data=[

//     {name:"Arun",img:"https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",skill:"React"},
//     {name:"John",img:"https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",skill:"JavaScript"},
//     {name:"Jane",img:"https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png",skill:"Python"}
//   ]
  
//   return (
//     <div>
//       {data.map((item, index) => (
//         <Card key={index} name={item.name} image={item.img} skill={item.skill} />
//       ))}
//     </div>

//   )
// }

// export default App



function App() {
  return (

    <>
      <Api />

    </>
    
  )
}

export default App