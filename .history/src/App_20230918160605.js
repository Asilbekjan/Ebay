import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
      <Header
    </div>
  );
}

export default App;
