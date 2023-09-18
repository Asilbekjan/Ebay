import Navbar from "./Components/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "./Components/Footer";
import { DatePicker } from 'antd';
import './App.css'
import Root from "./Pages/RootPages/Root";
import Products from "./Pages/ProductsPage/Products";
function App() {
  return (
    <div className="App">
      <Navbar/> 
        <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
