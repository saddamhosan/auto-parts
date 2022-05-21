import { Route, Routes } from "react-router-dom";
import Home from "./Component/Pages/Home/Home";
import Navbar from "./Component/Shared/Navbar";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
