import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import VehicleCard from "../components/VehicleCard"

export default function Inventory(){

  const [cars,setCars] = useState([])

  useEffect(() => {

    fetch("http://localhost:8080/api/vehicles")
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(err => console.error(err))

  }, [])

  return(

    <div className="bg-black min-h-screen text-white">

      <Navbar/>

      <div className="max-w-7xl mx-auto p-12">

        <h1 className="text-4xl font-bold mb-10">
          Browse Inventory
        </h1>

        {cars.length === 0 ? (
          <p className="text-zinc-400">
            No vehicles available
          </p>
        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {cars.map(car => (
              <VehicleCard key={car.id} car={car}/>
            ))}

          </div>

        )}

      </div>

    </div>

  )

}