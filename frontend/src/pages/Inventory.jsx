import Navbar from "../components/Navbar"
import VehicleCard from "../components/VehicleCard"

export default function Inventory() {

  const cars = [
    {
      id:1,
      make:"Ferrari",
      model:"488",
      year:2022,
      price:"350,000",
      image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    }
  ]

useEffect(() => {

  fetch("http://localhost:8080/api/vehicles")
    .then(res => res.json())
    .then(data => setCars(data))

}, [])

  return (

    <div>

      <Navbar/>

      <div className="p-12">

        <h1 className="text-3xl font-bold mb-8">
          Inventory
        </h1>

        <div className="grid grid-cols-3 gap-8">

          {cars.map(car => (
            <VehicleCard key={car.id} car={car}/>
          ))}

        </div>

      </div>

    </div>

  )

}