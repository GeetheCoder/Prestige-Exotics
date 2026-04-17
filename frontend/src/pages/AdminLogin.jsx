import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function AdminLogin(){

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const navigate = useNavigate()

  async function login(e){
    e.preventDefault()
    setError("")

    try{
      const res = await fetch("http://localhost:8080/api/auth/login",{
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body:JSON.stringify({ username, password })
      })

      const data = await res.json()

      if(res.ok && data.success){
        localStorage.setItem("isAdminLoggedIn","true")
        localStorage.setItem("adminRole", data.role || "ADMIN")
        navigate("/admin/dashboard")
      }else{
        setError(data.message || "Login failed")
      }
    }catch(err){
      setError("Unable to connect to server")
    }
  }

  return(
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')"
      }}
    >
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
          value={username}
          className="w-full p-3 mb-4 rounded bg-zinc-800 border border-zinc-700"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-full p-3 mb-6 rounded bg-zinc-800 border border-zinc-700"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded">
          Login
        </button>

        {error && (
          <p className="text-red-400 text-sm mt-4 text-center">{error}</p>
        )}

        <div className="text-center mt-6 text-sm text-zinc-400">
          <Link to="/" className="hover:text-red-500">
            ← Back to Home
          </Link>
        </div>
      </form>
    </div>
  )
}