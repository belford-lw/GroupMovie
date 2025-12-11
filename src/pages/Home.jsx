import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Static from '../components/Static'
import Proud from '../components/Proud'
import Movice from "../components/Movice";


const Home = () => {
  return (
    <>
        <Hero/>
        <Movice />
        <Card/>
        <Proud/>
        <Static/>
        <Footer/>   
    </>
  );
};

export default Home;
