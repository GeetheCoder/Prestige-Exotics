import { Link } from "react-router-dom"

export default function AdminDashboard(){

  return(

    <div className="flex">

      <aside className="w-64 bg-gray-900 text-white p-6">

        <Link to="/admin/dashboard">Dashboard</Link>

        <Link to="/admin/vehicles" className="block mt-4">
          Vehicles
        </Link>

      </aside>

      <main className="p-10">

        <h1 className="text-3xl mb-6">Dashboard</h1>

        <div className="grid grid-cols-3 gap-6">

          <div className="border p-6">
            Total Vehicles
          </div>

          <div className="border p-6">
            Available
          </div>

          <div className="border p-6">
            Sold
          </div>

        </div>

      </main>

    </div>

  )
}