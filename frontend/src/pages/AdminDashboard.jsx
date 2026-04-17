import Sidebar from "../components/Sidebar"

export default function AdminDashboard() {

  return (

    <div className="flex">

      <Sidebar/>

      <main className="p-10 w-full">

        <h1 className="text-3xl font-bold mb-6">
          Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-white shadow p-6 rounded">
            Total Vehicles
          </div>

          <div className="bg-white shadow p-6 rounded">
            Available
          </div>

          <div className="bg-white shadow p-6 rounded">
            Sold
          </div>

        </div>

      </main>

    </div>

  )

}