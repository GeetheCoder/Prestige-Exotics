export default function VehicleCard({ car }) {

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

  return (
    <div className="bg-zinc-900 shadow-lg rounded-lg overflow-hidden border border-zinc-800">
      <img
        src={`http://localhost:8080${car.image}`}
        alt={`${car.make} ${car.model}`}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-semibold">
            {car.year} {car.make} {car.model}
          </h2>

          <span className={`px-2 py-1 rounded-full text-xs ${statusBadge(car.status)}`}>
            {car.status || "Available"}
          </span>
        </div>

        <p className="text-red-400 font-bold text-lg mt-2">
          ${Number(car.price).toLocaleString()}
        </p>
      </div>
    </div>
  )
}