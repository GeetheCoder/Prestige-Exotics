import { useState } from "react"

export default function AdminLogin(){

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  function login(e){
    e.preventDefault()

    fetch("/api/login",{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({username,password})
    })
  }

  return(

    <div className="flex justify-center items-center h-screen">

      <form onSubmit={login} className="border p-8 rounded">

        <h1 className="text-2xl mb-6">Admin Login</h1>

        <input
          placeholder="Username"
          className="border p-2 mb-4 w-full"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="bg-black text-white px-4 py-2 w-full">
          Login
        </button>

      </form>

    </div>
  )
}