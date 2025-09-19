import React, { useState } from 'react'
import axios from 'axios'

function Api() {
  const [data, setData] = useState([]);

  const products = () => {
    const api = "https://fakestoreapi.com/products";
    axios.get(api).then(products => {
      console.log(products);
      setData(products.data);
    });
  }

  const addproduct = () => {
    const api = "https://fakestoreapi.com/products";
    axios.get(api).then(products => {
      console.log(products);
    });
  }

  return (
    <>
    <div className='p-4 flex gap-4 justify-center '>
        <button onClick={products} className='bg-blue-500 text-white p-2 rounded-md'>products</button>
        <button onClick={addproduct} className='bg-green-500 text-white p-2 rounded-md '>addproduct</button>
    </div>

    <hr />
    <ul>
      {data.length > 0 ? (
          data.map((p) => (
              <li className="rounded-md bg-pink-500 flex gap-2 p-2">{p.title}</li>
          ))
      ) : (
          <li>No products found</li>
      )}
     </ul>

    </>
    
  )
}

export default Api