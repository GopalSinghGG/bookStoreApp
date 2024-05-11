// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import Courses from '../componants/Courses'

function Course() {
  return (
   <>
   <Navbar/>
    <div className='min-h-screen'>
    <Courses/>
    </div>
    <Footer/>
   </>
  )
}

export default Course