import { Route, Routes } from "react-router-dom";
import Login from "./Component/Pages/Auth/Login";
import Register from "./Component/Pages/Auth/Register";
import RequireAuth from "./Component/Pages/Auth/RequireAuth";
import AddReview from "./Component/Pages/Dashboard/AddReview";
import Dashboard from "./Component/Pages/Dashboard/Dashboard";
import MyOrder from "./Component/Pages/Dashboard/MyOrder";
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
          <Route path="addReview" element={<AddReview />} />
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
