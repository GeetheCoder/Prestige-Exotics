import { useState } from "react"
import { Link } from "react-router-dom"

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

    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
        "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')"
      }}
    >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <form
        onSubmit={login}
        className="relative bg-zinc-900 p-10 rounded-xl shadow-xl w-full max-w-md text-white"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          Admin Login
        </h1>

        <input
          placeholder="Username"
          className="w-full p-3 mb-4 rounded bg-zinc-800 border border-zinc-700"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-zinc-800 border border-zinc-700"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded">
          Login
        </button>

        <div className="text-center mt-6 text-sm text-zinc-400">
          <Link to="/" className="hover:text-red-500">
            ← Back to Home
          </Link>
        </div>

      </form>

    </div>

  )

}