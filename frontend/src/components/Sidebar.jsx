import { Link } from "react-router-dom"

export default function Sidebar() {

  return (

    <aside className="w-64 bg-black text-white min-h-screen p-6">

      <h2 className="text-xl font-bold mb-6">
        Admin Panel
      </h2>

      <nav className="space-y-4">

        <Link to="/admin/dashboard">
          Dashboard
        </Link>

        <Link to="/admin/vehicles">
          Vehicles
        </Link>

      </nav>

    </aside>

  )

}