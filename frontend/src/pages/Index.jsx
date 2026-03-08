import { Link } from "react-router-dom"

export default function Index() {
  return (
    <div>

      <header className="flex justify-between p-6 bg-black text-white">
        <h1 className="text-2xl font-bold">Prestige Exotics</h1>

        <nav className="space-x-6">
          <Link to="/inventory">Inventory</Link>
          <Link to="/admin/login">Admin</Link>
        </nav>
      </header>

      <section className="text-center p-20 bg-gray-900 text-white">

        <h2 className="text-5xl font-bold">
          Luxury Exotic Vehicles
        </h2>

        <p className="mt-4">
          Ferrari • Lamborghini • McLaren
        </p>

        <Link to="/inventory">
          <button className="mt-6 bg-red-600 px-6 py-3 rounded">
            Browse Inventory
          </button>
        </Link>

      </section>

    </div>
  )
}