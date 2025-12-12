import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,  
      once: true,    
      offset: 100,   
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
