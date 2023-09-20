import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

import './App.css'
import Loading from "./Pages/Loading/Loading";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
      {/* <Loading/> */}
    </div>
  );
}

export default App;
