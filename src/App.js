import { Route, Routes } from "react-router-dom";
import Login from "./Component/Pages/Auth/Login";
import Register from "./Component/Pages/Auth/Register";
import RequireAuth from "./Component/Pages/Auth/RequireAuth";
import AddProduct from "./Component/Pages/Dashboard/AddProduct";
import AllOrders from "./Component/Pages/Dashboard/AllOrders";
import Dashboard from "./Component/Pages/Dashboard/Dashboard";
import MakeAdmin from "./Component/Pages/Dashboard/MakeAdmin";
import ManageProduct from "./Component/Pages/Dashboard/ManageProduct";
import MyOrder from "./Component/Pages/Dashboard/MyOrder";
import MyProfile from "./Component/Pages/Dashboard/MyProfile";
import Home from "./Component/Pages/Home/Home";
import Purchase from "./Component/Pages/Purchase/Purchase";
import Footer from "./Component/Shared/Footer";
import Navbar from "./Component/Shared/Navbar";
import NotFound from "./Component/Shared/NotFound";


function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MyOrder />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="allOrders" element={<AllOrders />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="manageProduct" element={<ManageProduct />} />
          <Route path="makeAdmin" element={<MakeAdmin />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
