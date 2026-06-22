import React,{useState} from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import {Input,Button } from './index'
import { signIn } from '../features/AuthSlice'
import {useDispatch} from 'react-redux'
import authsevice from '../Appwrite/Auth'
import {useForm} from 'react-hook-form'
import Logo from './Logo'


function SignUp() {
  const dispatch =  useDispatch();
   const {register, handleSubmit, formState: {errors}} = useForm();
   const navigate = useNavigate();
   const [error, seterror] = useState();

   const create = async(Data) =>{
        seterror("")
        try {
            const userData = await authsevice.createAccount(Data)
            if (userData) {
                const userData = await authsevice.getAccount()
                if (userData) dispatch(signIn(userData))
                    navigate('/') 
                }
        } catch (error) {
            seterror(error.message)
        }
   }

    return (
        <div className='flex items-center justify-center w-full min-h-screen py-10'>
        <div className={`mx-auto w-full max-w-lg bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-10 border border-slate-700/50 shadow-2xl shadow-blue-500/10`}>
          <div className='mb-2 flex justify-center'>
          <span className='inline-block w-full max-w-[100px]'>
            <Logo width='100%'/>
          </span>
           </div>
           <h2 className='text-center text-2xl font-bold leading-tight text-slate-100'>
           SignUp to your account 
           </h2>
           <p className='mt-2 text-center text-base text-slate-400'>
            Already have any account information?&nbsp;
            <Link
            to='/signIn'
            className='font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200'  
            >
            sign IN   
            </Link>
           </p>
           {error && <p className='text-red-400 mt-8 text-center font-medium'>{error}</p>}

           <form onSubmit={handleSubmit(create)} className='mt-8 '>
           <div className='space-y-5'>
            <Input
            label = "Enter fullName:"
            placeholder= "Enter your Full Name"
            type= "name"
            {...register("name",{
                required: "Name is required", 
            })}
            />
            {errors.name && <p className='text-red-400 text-sm mt-2'>{errors.name?.message}</p>}
             <Input 
         label="Enter Email:"
         placeholder='Enter your email address'
        type="email"
        {...register("email", {
            required: true && "Email is required",
            validate: {
                matchPatern: (value) =>{
                 /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                 .test(value)|| 
                 "Email address must be valid"

                }
            }
        })}
        />
        {errors.email && <p className='text-red-400 text-sm mt-2'>{errors.email?.message}</p>}

<Input 
         label="Enter Password:"
         placeholder='Enter your password'
        type="password"
        {...register("password", {
            required: true && "password is required",
            minLength: 8 && "password 8 to 15 characters",
            maxLength: 15 && "password 8 to 15 characters",
            })}
            />
        {errors.password && <p className='text-red-400 text-sm mt-2'>{errors.password?.message}</p>}
            <Button className='w-full' variant='primary' childern="Create Account" type="submit" ></Button>
            
           </div>
           </form>

           </div>
           </div>
   
  )
}

export default SignUp
