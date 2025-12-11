<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
=======
// import NotFound from './components/NotFound'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
>>>>>>> c43d33c311b853ef0bc1156234008d2e522b2107

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
=======
      <Routes>
        {/* <Route path='*' element={<NotFound/>}/> */}
        <Route path="/" element={<Home />} />
>>>>>>> c43d33c311b853ef0bc1156234008d2e522b2107
      </Routes>
    </>
  );
};

<<<<<<< HEAD
export default App    
=======
export default App;
>>>>>>> c43d33c311b853ef0bc1156234008d2e522b2107
