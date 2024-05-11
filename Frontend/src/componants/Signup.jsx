import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
  const {

        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit= (data) => console.log(data);
  return (
  <>
  <div>
  <div id="my_modal_3" className="flex h-screen items-center justify-center">
        <div className="modal-box">
            <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-lg">Signup!</h3>
            <div className='space-y-2 mt-4'>
            <span>Name</span><br/>
            <input type="name" name="" id=""  placeholder='Enter your Name' className='w-80 px-3  py-1 border rounded-md outline-none'
             {...register("name",{required:true})}/><br/>
              {errors.name && <span className='text-red-500 text-sm'>This field is required</span>}
            </div>
            <div className='space-y-2 mt-4'>
            <span>Email</span><br/>
            <input type="email" name="" id=""  placeholder='Enter your email' className='w-80 px-3  py-1 border rounded-md outline-none'
            {...register("email", { required: true })}/><br/>
             {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
            </div>
            <div className='space-y-2 mt-4'>
            <span>Password</span><br/>
            <input type="password" name="password" id=""  placeholder='Enter your Password' className='w-80 px-3  py-1 border rounded-md outline-none'
            {...register("password",{required:true})}/><br/>
             {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
            </div>
            <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 rounded-md text-white px-3 py-1 hover:bg-pink-700'>Signup</button>
                <p>Not registered <Link to={"/"} className='underline text-blue-500 cursor-pointer' >
                Login </Link> </p>
            </div>
            </form>
         
            
        </div>
        </div>
  </div>
  </>
  )
}

export default Signup