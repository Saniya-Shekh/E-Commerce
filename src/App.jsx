import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-18">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
