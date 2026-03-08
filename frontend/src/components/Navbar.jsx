import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="bg-black text-white p-6 flex justify-between items-center">

      <h1 className="text-2xl font-bold tracking-wide">
        Prestige Exotics
      </h1>

      <nav className="space-x-6 text-lg">

        <Link className="hover:text-red-500" to="/">
          Home
        </Link>

        <Link className="hover:text-red-500" to="/inventory">
          Inventory
        </Link>

        <Link className="hover:text-red-500" to="/admin/login">
          Admin
        </Link>

      </nav>

    </header>
  )
}