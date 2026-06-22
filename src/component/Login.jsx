import React,{useState} from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import {Input,Button } from './index'
import { signIn as authSignIn } from '../features/AuthSlice'
import {useDispatch} from 'react-redux'
import authsevice from '../Appwrite/Auth'
import {useForm} from 'react-hook-form'
import Logo from './Logo'
import Swal from 'sweetalert2'


export default function Login() {
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, seterror]= useState("")
    const navigate = useNavigate()

    const signIn = async (Data)=>{
        seterror("")
        try {
            const section = await authsevice.signIn(Data)
            if (section) {
              Swal.fire({
                title: "LogedIn Success!",
                text: "You are loged in!",
                icon: "success",
              
              });              
            const userData = await authsevice.getAccount()  
            if (userData) dispatch(authSignIn(userData))
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
       SignIn to your account 
       </h2>
       <p className='mt-2 text-center text-base text-slate-400'>
        Don&apos;t have any account information?&nbsp;
        <Link
        to='/signUp'
        className='font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200'  
        >
        sign up    
        </Link>
       </p>
       {error && <p className='text-red-400 mt-8 text-center font-medium'>{error}</p>}
       <form onSubmit={handleSubmit(signIn)} className='mt-8'>
        <div className='space-y-5'>
        <Input 
         label="Enter Email:"
         placeholder='Enter your email address'
        type="email"
        {...register("email", {
            required: true,
            validate: {
                matchPatern: (value) =>{
                 /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                 .test(value)|| 
                 "Email address must be valid"

                }
            }
        })}
        />
        <Input 
         label="Enter Password:"
         placeholder='Enter your password'
        type="password"
        {...register("password", {
            required: true,
            })}
            />

            <Button className='w-full' variant='primary' childern="sign in" type="submit"></Button>
        </div>
       </form>
    </div>
    </div>
  )
}
