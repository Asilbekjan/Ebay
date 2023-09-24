import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import './App.css'
import Add_a_FreeProduct from "./Pages/Add_a_FreeProduct/Add_a_FreeProduct";
import Salom from "./Components/salom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
      <div className="fixed bottom-[50px] z-50  right-[50px]">
        <Add_a_FreeProduct />
      </div>
    </div>
  );
}

export default App;
