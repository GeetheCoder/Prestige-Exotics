import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"

export default function AdminAddVehicle(){

  const [make,setMake] = useState("")
  const [model,setModel] = useState("")
  const [year,setYear] = useState("")
  const [price,setPrice] = useState("")
  const [status,setStatus] = useState("Available")
  const [file,setFile] = useState(null)
  const [message,setMessage] = useState("")
  const navigate = useNavigate()

  async function submitVehicle(e){
    e.preventDefault()
    setMessage("")

    if(!file){
      setMessage("Please select an image")
      return
    }

    const formData = new FormData()
    formData.append("make", make)
    formData.append("model", model)
    formData.append("year", year)
    formData.append("price", price)
    formData.append("status", status)
    formData.append("file", file)

    try{
      const res = await fetch("http://localhost:8080/api/cars/upload",{
        method:"POST",
        body: formData
      })

      if(!res.ok){
        throw new Error("Failed to upload vehicle")
      }

      setMessage("Vehicle added successfully")

      setMake("")
      setModel("")
      setYear("")
      setPrice("")
      setStatus("Available")
      setFile(null)

      setTimeout(() => {
        navigate("/admin/vehicles")
      }, 800)

    }catch(err){
      console.error(err)
      setMessage("Error adding vehicle")
    }
  }

  return(
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar />

      <main className="p-10 w-full">
        <h1 className="text-3xl mb-6">Add Vehicle</h1>

        <form
          onSubmit={submitVehicle}
          className="bg-zinc-900 p-8 rounded-xl max-w-xl space-y-4"
        >
          <input
            placeholder="Make"
            value={make}
            onChange={(e)=>setMake(e.target.value)}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
            required
          />

          <input
            placeholder="Model"
            value={model}
            onChange={(e)=>setModel(e.target.value)}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
            required
          />

          <input
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e)=>setYear(e.target.value)}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
            required
          />

          <select
            value={status}
            onChange={(e)=>setStatus(e.target.value)}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
          >
            <option value="Available">Available</option>
            <option value="Reserved">Reserved</option>
            <option value="Sold">Sold</option>
          </select>

          <input
            type="file"
            accept="image/*"
            onChange={(e)=>setFile(e.target.files[0])}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
            required
          />

          <button className="bg-red-600 px-6 py-3 rounded w-full hover:bg-red-700">
            Save Vehicle
          </button>

          {message && (
            <p className="text-center text-green-400">{message}</p>
          )}
        </form>
      </main>
    </div>
  )
}