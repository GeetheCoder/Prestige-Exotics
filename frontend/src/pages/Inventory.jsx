import { useEffect, useState } from "react"

export default function Inventory(){

  const [cars,setCars] = useState([])

  useEffect(()=>{

    fetch("http://localhost:8080/api/cars")
      .then(res=>res.json())
      .then(data=>setCars(data))

  },[])

  return(

    <div>

      <h1 className="text-3xl p-6">Inventory</h1>

      <div className="grid grid-cols-3 gap-6 p-6">

        {cars.map(car=>(
          <div className="border rounded p-4">

            <h2>{car.make} {car.model}</h2>

            <p>{car.year}</p>

            <p>${car.price}</p>

          </div>
        ))}

      </div>

    </div>

  )
}