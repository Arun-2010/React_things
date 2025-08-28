import React from 'react'
import { useForm } from 'react-hook-form'

function Formhandle() {

    const { register, handleSubmit } = useForm();
  return (
    <div className='p-4'>
        <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
            <input  {...register("name")} type="text"  placeholder='name'/>
            <input {...register('age')} type="age"  placeholder='age'/>
            <input type="submit" />

        </form>
    </div>
  )
}

export default Formhandle