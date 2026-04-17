import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Index() {
  const [featuredCars, setFeaturedCars] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/api/cars")
      .then((res) => res.json())
      .then((data) => setFeaturedCars(data.slice(0, 3)))
      .catch((err) => console.error("Error loading featured cars:", err))
  }, [])

  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center max-w-3xl">
          <h1 className="text-6xl font-bold mb-6">
            Prestige Exotics
          </h1>

          <p className="text-xl mb-8">
            Ferrari • Lamborghini • McLaren • Porsche
          </p>

          <Link to="/inventory">
            <button className="bg-red-600 px-10 py-4 rounded-lg hover:bg-red-700">
              Browse Inventory
            </button>
          </Link>
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-2">
            Featured Collection
          </h2>

          <p className="text-center text-gray-400 mb-12">
            Explore our handpicked selection of exotic automobiles
          </p>

          {featuredCars.length === 0 ? (
            <p className="text-center text-zinc-400">
              No featured vehicles available.
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
                >
                  <img
                    src={`http://localhost:8080${car.image}`}
                    alt={`${car.year} ${car.make} ${car.model}`}
                    className="h-60 w-full object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-bold">
                      {car.year} {car.make} {car.model}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      In Stock
                    </p>

                    <div className="flex justify-between mt-4">
                      <span className="text-red-500 font-bold">
                        ${Number(car.price).toLocaleString()}
                      </span>

                      <span className="bg-green-700 text-sm px-3 py-1 rounded">
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 text-center border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-6">
          Specializing in Exotic Excellence
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          At Prestige Exotics, we represent the pinnacle of automotive artistry.
          Our curated collection features the world's most sought-after supercars
          from Ferrari, Lamborghini, McLaren, Porsche, Aston Martin and Bugatti.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-3xl text-red-500 font-bold">10+</h3>
            <p className="text-gray-400">Exotic Vehicles</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-3xl text-red-500 font-bold">25+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-3xl text-red-500 font-bold">1000+</h3>
            <p className="text-gray-400">Satisfied Clients</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold mb-4">Prestige Exotics</h3>
            <p className="text-gray-400">
              The world's premier destination for exotic and luxury automobiles.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Information</h3>
            <p className="text-gray-400">123 Luxury Lane, Beverly Hills</p>
            <p className="text-gray-400">(310) 555-CARS</p>
            <p className="text-gray-400">sales@prestigeexotics.com</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Hours</h3>
            <p className="text-gray-400">Mon – Fri: 9am – 7pm</p>
            <p className="text-gray-400">Sat: 10am – 6pm</p>
            <p className="text-gray-400">Sun: By Appointment</p>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-10">
          © 2026 Prestige Exotics
        </div>
      </footer>
    </div>
  )
}