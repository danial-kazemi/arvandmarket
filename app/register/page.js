'use client'
function page() {
    const registerFormOnSubmitHandler = (e)=> {
        e.preventDefault();
        console.log('on submit');        
    }
  return (
    <div className="container mx-auto flex justify-center ">
        <form className="flex justify-center gap-2 flex-col md:w-1/2 text-black" onSubmit={ registerFormOnSubmitHandler}>
            <h2 className="text-white font-medium text-center">
                Register
            </h2>
            <input type="text" className="p-2 outline-none rounded-md" name="username" placeholder="Username" required></input>
            <input type="email" className="p-2 outline-none rounded-md" name="email" placeholder="E-mail" required></input>
            <input type="password" className="p-2 outline-none rounded-md" name="password" placeholder="Password" required></input>
            <input type="password" className="p-2 outline-none rounded-md" name="confirmpassword" placeholder="Confirm Password" required></input>
            <button type="submit" className="text-white bg-slate-600 rounded-lg p-2" >CREATE ACCOUNT</button>
        </form>
    </div>
  )
}

export default page