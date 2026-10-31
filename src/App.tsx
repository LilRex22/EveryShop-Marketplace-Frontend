import { Home } from "./pages/Home"
import { Products } from "./pages/Explore_products"
import { Login } from "./pages/Login"
import { Layout } from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
