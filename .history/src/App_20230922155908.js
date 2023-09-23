import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import './App.css'
import Add_a_FreeProduct from "./Pages/Add_a_FreeProduct/Add_a_FreeProduct";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
      <div className="fixed bottom-[225px] right-0">
        <Add_a_FreeProduct />
      </div>
    </div>
  );
}

export default App;
