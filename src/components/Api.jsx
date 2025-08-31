import React from 'react'
import axios from 'axios'

function Api() {
  const products = () => {
    const api = "https://fakestoreapi.com/products";
    axios.get(api).then(products => {
      console.log(products);
    });
  }

  const addproduct = () => {
    const api = "https://fakestoreapi.com/products";
    axios.get(api).then(products => {
      console.log(products);
    });
  }

  return (
    <div className='p-4 flex gap-4 justify-center '>
        <button onClick={products} className='bg-blue-500 text-white p-2 rounded-md'>products</button>
        <button onClick={addproduct} className='bg-green-500 text-white p-2 rounded-md '>addproduct</button>
    </div>
  )
}

export default Api