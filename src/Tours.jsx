import React, { useState } from 'react'

function Tours({name,image,info,price,id,removeItem}) {
  const [readmore,setReadmore] = useState(false)
  return (
    <article id={id} className=' w-100% flex flex-col items-center mt-6 mx-4 bg-neutral-50 shadow hover:shadow-lg duration-100 rounded-xl relative'>
      <img src={image} alt="" className='h-72 w-full rounded-t-xl' />
      <h2 className='my-6 font-medium text-2xl'>{name}</h2>
      <p className='mx-4'>{readmore? info :info.substring(0,100)}...<button onClick={()=>{setReadmore(!readmore)}} className='text-green-600'>{readmore?'showless':'readmore'}</button></p>
      <p className='absolute bg-green-600 right-0 rounded-tr-xl p-3 font-bold'>$ {price}</p>
      <button onClick={()=>{removeItem(id)}} className='border w-11/12 my-4 border-green-600 rounded-md text-green-600 duration-300 hover:text-white hover:bg-green-600'>Not Interested</button>
    </article>
  )
}

export default Tours