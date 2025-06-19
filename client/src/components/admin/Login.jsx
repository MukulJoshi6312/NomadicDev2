import React, { useState } from 'react'

import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useAppContext } from '../../context/AppContext.jsx';
import toast from 'react-hot-toast';
import { data } from 'react-router-dom';


const Login = () => {
  
    const {axios,setToken} = useAppContext()
    

    const[showPassword,setShowPassword] = useState(false);
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
          const {data} = await axios.post("/api/admin/login",{email,password});
          if(data.success){
            setToken(data.token);
            localStorage.setItem('token',data.token);
            axios.defaults.headers.common['Authorization'] = data.token;
            toast.success("Login Successfully")
          }else{
             toast.error(data.message)
          }
        }catch(error){
            toast.error(error.message)
        }
    }
    
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
            <div className='w-full py-6 text-center'>
                <h1 className='text-3xl font-bold'><span className='text-primary'>Admin</span> Login</h1>
                <p className='font-light'>Enter your credentials to access the admin panel</p>
            </div>
            <form onSubmit={handleSubmit} className='w-full mt-6 sm:max-w-md text-gray-600'>
                <div className='flex flex-col w-full'>
                    <label >Email</label>
                    <input type="email" required placeholder='your email id'
                    className='border-b-2 border-gray-300 p-2 mb-6 outline-none w-full '
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <label >Password</label>
                    <div className='flex items-center relative'>
                    <input type={showPassword ? 'text' : "password"} required placeholder='your password'
                    className='border-b-2 border-gray-300 p-2 mb-6 outline-none w-full '
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    />
                    <div className='absolute right-2 bottom-1/2 cursor-pointer hover:bg-gray-300 rounded-full p-1.5 transition-all'
                    onClick={()=>setShowPassword(!showPassword)}
                    >
                    {showPassword  ? <FaRegEyeSlash size={18}  /> : <FaRegEye size={18}/>}

                    </div>
                    </div>
                </div>
                <button type='submit'
                className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all select-none'>
                        Login
                </button>
            </form>

        </div>
      </div>
    </div>
  )
}

export default Login
