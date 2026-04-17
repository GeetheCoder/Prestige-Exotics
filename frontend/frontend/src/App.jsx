import { BrowserRouter,Routes,Route } from "react-router-dom"

import Index from "./pages/Index"
import Inventory from "./pages/Inventory"
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"
import AdminVehicles from "./pages/AdminVehicles"

function App(){

  return(

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Index/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/vehicles" element={<AdminVehicles/>}/>

      </Routes>

    </BrowserRouter>

  )

}

export default App