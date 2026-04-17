import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

export default function Index() {

  return (

    <div className="bg-black text-white">

      <Navbar/>

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

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">

              <img
                src="https://images.unsplash.com/photo-1542362567-b07e54358753"
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  2022 Ferrari F8 Tributo
                </h3>

                <p className="text-gray-400 text-sm">
                  Grigio Silverstone
                </p>

                <div className="flex justify-between mt-4">

                  <span className="text-red-500 font-bold">
                    $298,000
                  </span>

                  <span className="bg-green-700 text-sm px-3 py-1 rounded">
                    Available
                  </span>

                </div>

              </div>

            </div>

            {/* Card 2 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">

              <img
                src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6e3"
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  2024 McLaren Artura
                </h3>

                <p className="text-gray-400 text-sm">
                  Ceramic Grey
                </p>

                <div className="flex justify-between mt-4">

                  <span className="text-red-500 font-bold">
                    $237,000
                  </span>

                  <span className="bg-green-700 text-sm px-3 py-1 rounded">
                    Available
                  </span>

                </div>

              </div>

            </div>

            {/* Card 3 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">

              <img
                src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  2023 Ferrari 488 GTB
                </h3>

                <p className="text-gray-400 text-sm">
                  Rosso Corsa Red
                </p>

                <div className="flex justify-between mt-4">

                  <span className="text-red-500 font-bold">
                    $329,000
                  </span>

                  <span className="bg-green-700 text-sm px-3 py-1 rounded">
                    Available
                  </span>

                </div>

              </div>

            </div>

          </div>

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
            <h3 className="text-3xl text-red-500 font-bold">150+</h3>
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
            <p className="text-gray-400">
              123 Luxury Lane, Beverly Hills
            </p>
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