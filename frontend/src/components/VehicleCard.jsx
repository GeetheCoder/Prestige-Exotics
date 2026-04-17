export default function VehicleCard({ car }) {

  return (

    <div className="bg-white shadow-lg rounded-lg overflow-hidden">

      <img
        src={car.image}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        <h2 className="text-xl font-semibold">
          {car.make} {car.model}
        </h2>

        <p className="text-gray-500">
          {car.year}
        </p>

        <p className="text-red-600 font-bold text-lg mt-2">
          ${car.price}
        </p>

      </div>

    </div>

  )

}