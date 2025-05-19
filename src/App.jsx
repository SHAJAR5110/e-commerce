import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import NoPage from "./Pages/Nopage/NoPage";
import ProductInfo from "./Pages/productInfo/ProductInfo";
import ScrollTop from "./Components/scrollTop/ScrollTop";
import CartPage from "./Pages/cart/CartPage";
import AllProduct from "./Pages/allProduct/AllProduct";
import Signup from "./Pages/registration/Signup";
import Login from "./Pages/registration/Login";
import UserDashboard from "./Pages/user/UserDashboard";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import AddProductPage from "./Pages/admin/AddProductPage";
import UpdateProductPage from "./Pages/admin/UpdateProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./Pages/category/CategoryPage";
function App() {
  return (
    <div>
      <MyState>
        <Router>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/allproduct" element={<AllProduct />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category/:categoryname" element={<CategoryPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRouteForUser>
                  <UserDashboard />
                </ProtectedRouteForUser>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRouteForAdmin>
                  <AdminDashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="addproduct"
              element={
                <ProtectedRouteForAdmin>
                  <AddProductPage />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="updateproduct/:id"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProductPage />
                </ProtectedRouteForAdmin>
              }
            />
          </Routes>
          <Toaster />
        </Router>
      </MyState>
    </div>
  );
}

export default App;
