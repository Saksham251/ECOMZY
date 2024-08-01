import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
  <div>
    <div className="bg-slate-900">
      <NavBar/>
    </div>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
    </Routes>
  </div>)
};

export default App;
