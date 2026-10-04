import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-18">
        <Home></Home>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
