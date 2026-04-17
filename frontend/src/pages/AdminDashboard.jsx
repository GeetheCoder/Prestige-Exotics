import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"

export default function AdminDashboard() {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8080/api/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error loading dashboard data:", err)
        setLoading(false)
      })
  }, [])

  const summary = useMemo(() => {
    const total = cars.length
    const available = cars.filter(
      (car) => (car.status || "Available").toLowerCase() === "available"
    ).length
    const sold = cars.filter(
      (car) => (car.status || "").toLowerCase() === "sold"
    ).length
    const reserved = cars.filter(
      (car) => (car.status || "").toLowerCase() === "reserved"
    ).length

    return { total, available, sold, reserved }
  }, [cars])

  const recentVehicles = useMemo(() => {
    return [...cars].slice(-5).reverse()
  }, [cars])

  const alerts = useMemo(() => {
    const missingImages = cars.filter((car) => !car.image || car.image.trim() === "").length
    const missingPrices = cars.filter(
      (car) => car.price === null || car.price === undefined || Number(car.price) <= 0
    ).length
    const missingStatus = cars.filter((car) => !car.status || car.status.trim() === "").length

    return { missingImages, missingPrices, missingStatus }
  }, [cars])

  return (
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar />

      <main className="p-10 w-full">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        {loading ? (
          <p className="text-zinc-400">Loading dashboard...</p>
        ) : (
          <>
            {/* Section A - Summary Cards */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-4">Inventory Summary</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg">
                  <p className="text-zinc-400 text-sm mb-2">Total Vehicles</p>
                  <h3 className="text-3xl font-bold">{summary.total}</h3>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg">
                  <p className="text-zinc-400 text-sm mb-2">Available</p>
                  <h3 className="text-3xl font-bold text-green-400">{summary.available}</h3>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg">
                  <p className="text-zinc-400 text-sm mb-2">Sold</p>
                  <h3 className="text-3xl font-bold text-red-400">{summary.sold}</h3>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg">
                  <p className="text-zinc-400 text-sm mb-2">Reserved</p>
                  <h3 className="text-3xl font-bold text-yellow-400">{summary.reserved}</h3>
                </div>
              </div>
            </section>

            {/* Section B - Quick Actions */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  to="/admin/add-vehicle"
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-500 hover:bg-zinc-800 transition"
                >
                  <h3 className="text-lg font-semibold mb-2">Add Vehicle</h3>
                  <p className="text-zinc-400 text-sm">
                    Create a new exotic car listing with image upload.
                  </p>
                </Link>

                <Link
                  to="/admin/vehicles"
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-500 hover:bg-zinc-800 transition"
                >
                  <h3 className="text-lg font-semibold mb-2">Manage Vehicles</h3>
                  <p className="text-zinc-400 text-sm">
                    Edit, review, and delete current inventory.
                  </p>
                </Link>

                <Link
                  to="/inventory"
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-500 hover:bg-zinc-800 transition"
                >
                  <h3 className="text-lg font-semibold mb-2">View Inventory</h3>
                  <p className="text-zinc-400 text-sm">
                    Open the public inventory page as customers see it.
                  </p>
                </Link>
              </div>
            </section>

            {/* Section C - Recent Vehicles */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-4">Recent Vehicles</h2>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                {recentVehicles.length === 0 ? (
                  <p className="text-zinc-400">No vehicles added yet.</p>
                ) : (
                  <div className="space-y-4">
                    {recentVehicles.map((car) => (
                      <div
                        key={car.id}
                        className="flex items-center justify-between border-b border-zinc-800 pb-4 last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-center gap-4">
                          {car.image ? (
                            <img
                              src={`http://localhost:8080${car.image}`}
                              alt={`${car.make} ${car.model}`}
                              className="w-20 h-14 object-cover rounded"
                            />
                          ) : (
                            <div className="w-20 h-14 bg-zinc-800 rounded flex items-center justify-center text-xs text-zinc-500">
                              No Image
                            </div>
                          )}

                          <div>
                            <p className="font-semibold">
                              {car.year} {car.make} {car.model}
                            </p>
                            <p className="text-sm text-zinc-400">
                              ${Number(car.price || 0).toLocaleString()}
                            </p>
                          </div>
                        </div>

                        <span className="text-sm px-3 py-1 rounded bg-zinc-800 text-zinc-300">
                          {car.status || "Available"}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* Section D - Alerts */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Alerts</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <p className="text-zinc-400 text-sm mb-2">Missing Images</p>
                  <h3 className="text-3xl font-bold text-yellow-400">{alerts.missingImages}</h3>
                  <p className="text-zinc-500 text-sm mt-2">
                    Vehicles that need an uploaded photo.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <p className="text-zinc-400 text-sm mb-2">Missing Prices</p>
                  <h3 className="text-3xl font-bold text-yellow-400">{alerts.missingPrices}</h3>
                  <p className="text-zinc-500 text-sm mt-2">
                    Vehicles missing a valid price.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <p className="text-zinc-400 text-sm mb-2">Missing Status</p>
                  <h3 className="text-3xl font-bold text-yellow-400">{alerts.missingStatus}</h3>
                  <p className="text-zinc-500 text-sm mt-2">
                    Vehicles without inventory status.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  )
}