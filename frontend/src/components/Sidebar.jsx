import { Link, useNavigate, useLocation } from "react-router-dom"

export default function Sidebar(){

  const navigate = useNavigate()
  const location = useLocation()

  function handleLogout(){
    localStorage.removeItem("isAdminLoggedIn")
    localStorage.removeItem("adminRole")
    navigate("/admin/login")
  }

  const linkClass = (path) =>
    `block px-4 py-3 rounded-lg transition ${
      location.pathname === path
        ? "bg-red-600 text-white"
        : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white"
    }`

  return(

    <aside className="w-64 min-h-screen bg-black border-r border-zinc-800 p-6 text-white">

      <h2 className="text-2xl font-bold mb-8">
        Admin Panel
      </h2>

      <nav className="space-y-3">

        <Link to="/admin/dashboard" className={linkClass("/admin/dashboard")}>
          Dashboard
        </Link>

        <Link to="/admin/vehicles" className={linkClass("/admin/vehicles")}>
          Manage Vehicles
        </Link>

        <Link to="/admin/add-vehicle" className={linkClass("/admin/add-vehicle")}>
          Add Vehicle
        </Link>

        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-3 rounded-lg bg-zinc-900 text-zinc-300 hover:bg-red-700 hover:text-white transition"
        >
          Log Out
        </button>

      </nav>

    </aside>

  )

}