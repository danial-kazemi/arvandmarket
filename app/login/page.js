
'use client'

import Link from "next/link";
import { useForm } from "react-hook-form";

function LoginPage() {   
  const {register, handleSubmit, formState: {errors}} = useForm();
  function submitHandler ({email, password}) {
  }
  return (
    <main>
        
        <form className="flex flex-col gap-2 mx-auto max-w-screen-md " onSubmit={handleSubmit(submitHandler)}> 
            <h2 className="text-center">Login</h2> 
            <div>
            <input
            {...register("email", { required: true })}
             className="text-black w-full outline-none p-2 rounded-md"             
             type="email"
             name="email"
             placeholder="Email" 
              autoFocus 
                />
                {errors.email && (
                  <div className="text-red-600">Please enter email</div>
                  )}
            </div>
            <div>
            <input 
            {...register("password", { required: true,minLength: {value: 8,message: 'password must be at least 8 characters'} })}
            className="text-black w-full outline-none p-2 rounded-md" 
            type="password" 
            placeholder="Password" 
            />
            {errors.password && (
              <div className="text-red-600">{errors.password.message}</div>
            )}
            </div>
            <button className="bg-slate-600 rounded-md border-none w-full outline-none p-2">Login</button>
            <Link href='register'>Register</Link>
        </form>
    </main>
  )
}

export default LoginPage