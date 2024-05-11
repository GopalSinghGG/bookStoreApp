// eslint-disable-next-line no-unused-vars
import React from 'react'
import list from '../../public/list.json'
import Card from './Card'
import {Link} from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h2 className='text-2xl  md:text-4xl'>  We're delighted to have you <span className='text-pink-500'> here! :)</span></h2>
        <p className='mt-12'>Its book information is collected from the Library of Congress, other libraries, and Amazon.com, as well as from user contributions through a wiki-like interface.[4] If books are available in digital form, a button labeled "Read" appears next to its catalog listing.</p>
       <Link to="/">
       <button className='bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
       </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item)=>(
            
            <Card key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    
    </>
  )
}

export default Course