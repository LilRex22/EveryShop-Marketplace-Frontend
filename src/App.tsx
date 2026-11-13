import { Home } from "./pages/Home"
import { Products } from "./pages/Explore_products"
import { Login } from "./pages/Login"
import { Layout } from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./pages/Signup"
import DashboardLayout from "./components/DashboardLayout"
import { Overview } from "./pages/dashboard/Overview"
import { MyProducts } from "./pages/dashboard/Products"
import { MyShop } from "./pages/dashboard/Shop"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="explore-products" element={<Products />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* dashboard routing */}
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="products" element={<MyProducts />} />
            <Route path="shop" element={<MyShop />} />
            {/* <Route path="enquiries" element={<Enquiries />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
            <Route path="support" element={<Support />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
