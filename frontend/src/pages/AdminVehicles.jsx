import Sidebar from "../components/Sidebar"
import { useEffect, useState } from "react"

export default function AdminVehicles(){

  const [cars,setCars] = useState([])
  const [editingId,setEditingId] = useState(null)
  const [editForm,setEditForm] = useState({
    make:"",
    model:"",
    year:"",
    price:"",
    image:"",
    status:"Available"
  })

  useEffect(()=>{
    loadCars()
  },[])

  function loadCars(){
    fetch("http://localhost:8080/api/cars")
      .then(res=>res.json())
      .then(data=>setCars(data))
  }

  function startEdit(car){
    setEditingId(car.id)

    setEditForm({
      make:car.make,
      model:car.model,
      year:car.year,
      price:car.price,
      image:car.image,
      status:car.status || "Available"
    })
  }

  function cancelEdit(){
    setEditingId(null)
  }

  async function saveEdit(id){
    await fetch(`http://localhost:8080/api/cars/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        ...editForm,
        year:Number(editForm.year),
        price:Number(editForm.price)
      })
    })

    setEditingId(null)
    loadCars()
  }

  async function deleteCar(id){
    const confirmDelete = window.confirm("Delete vehicle?")
    if(!confirmDelete) return

    await fetch(`http://localhost:8080/api/cars/${id}`,{
      method:"DELETE"
    })

    loadCars()
  }

  function statusBadge(status){
    const s = (status || "Available").toLowerCase()

    if(s === "sold"){
      return "bg-red-600/20 text-red-400"
    }

    if(s === "reserved"){
      return "bg-yellow-600/20 text-yellow-400"
    }

    return "bg-green-600/20 text-green-400"
  }

  return(
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar/>

      <main className="p-10 w-full">
        <h1 className="text-3xl mb-6">Manage Vehicles</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {cars.map(car=>(
            <div
              key={car.id}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-800"
            >
              <img
                src={`http://localhost:8080${car.image}`}
                alt={`${car.make} ${car.model}`}
                className="w-full h-40 object-cover rounded mb-4"
              />

              {editingId === car.id ? (
                <div className="space-y-3">
                  <input
                    value={editForm.make}
                    onChange={(e)=>setEditForm({...editForm, make:e.target.value})}
                    className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
                  />

                  <input
                    value={editForm.model}
                    onChange={(e)=>setEditForm({...editForm, model:e.target.value})}
                    className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
                  />

                  <input
                    type="number"
                    value={editForm.year}
                    onChange={(e)=>setEditForm({...editForm, year:e.target.value})}
                    className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
                  />

                  <input
                    type="number"
                    value={editForm.price}
                    onChange={(e)=>setEditForm({...editForm, price:e.target.value})}
                    className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
                  />

                  <select
                    value={editForm.status}
                    onChange={(e)=>setEditForm({...editForm, status:e.target.value})}
                    className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
                  >
                    <option value="Available">Available</option>
                    <option value="Reserved">Reserved</option>
                    <option value="Sold">Sold</option>
                  </select>

                  <div className="flex gap-2">
                    <button
                      onClick={()=>saveEdit(car.id)}
                      className="bg-green-600 px-3 py-1 rounded"
                    >
                      Save
                    </button>

                    <button
                      onClick={cancelEdit}
                      className="bg-gray-600 px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold">
                      {car.year} {car.make} {car.model}
                    </h2>

                    <span className={`px-3 py-1 rounded-full text-sm ${statusBadge(car.status)}`}>
                      {car.status || "Available"}
                    </span>
                  </div>

                  <p className="text-red-400 font-semibold mt-2">
                    ${Number(car.price).toLocaleString()}
                  </p>

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={()=>startEdit(car)}
                      className="bg-blue-600 px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={()=>deleteCar(car.id)}
                      className="bg-red-600 px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}