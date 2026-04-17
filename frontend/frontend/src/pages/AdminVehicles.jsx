import Sidebar from "../components/Sidebar"
import { useEffect,useState } from "react"

export default function AdminVehicles(){

  const [cars,setCars] = useState([])

  useEffect(()=>{

    fetch("/api/cars")
      .then(res=>res.json())
      .then(data=>setCars(data))

  },[])

  return(

    <div className="flex">

      <Sidebar/>

      <main className="p-10 w-full">

        <h1 className="text-3xl mb-6">
          Manage Vehicles
        </h1>

        <table className="w-full border">

          <thead>

            <tr className="bg-gray-200">

              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Price</th>

            </tr>

          </thead>

          <tbody>

            {cars.map(car=>(

              <tr key={car.id}>

                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>${car.price}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </main>

    </div>

  )

}