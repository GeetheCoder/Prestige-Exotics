import { BrowserRouter, Routes, Route } from "react-router-dom"

import Index from "./pages/Index"
import Inventory from "./pages/Inventory"
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"
import AdminVehicles from "./pages/AdminVehicles"
import AdminAddVehicle from "./pages/AdminAddVehicle"
import ProtectedRoute from "./components/ProtectedRoute"

function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/admin/login" element={<AdminLogin/>} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/vehicles"
          element={
            <ProtectedRoute>
              <AdminVehicles/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-vehicle"
          element={
            <ProtectedRoute>
              <AdminAddVehicle/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App