import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashbord from "./pages/admin-view/dashbord";
import AdminProduct from "./pages/admin-view/product";
import AdminFeatures from "./pages/admin-view/features";
import AdminOderes from "./pages/admin-view/oderers";

function App() {


  return (
    <div className="flex flex-col overflow-hidden bg-white">
    <h1>Header component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashbord" element={<AdminDashbord/>} />
          <Route path="product" element={<AdminProduct/>} />
          <Route path="features" element={<AdminFeatures/>} />
          <Route path="oderes" element={<AdminOderes/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
