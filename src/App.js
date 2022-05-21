import { Route, Routes } from "react-router-dom";
import Home from "./Component/Pages/Home/Home";
import Purchase from "./Component/Pages/Purchase/Purchase";
import Navbar from "./Component/Shared/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="purchase/:id" element={<Purchase />} />
      </Routes>
    </div>
  );
}

export default App;
