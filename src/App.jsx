// import NotFound from './components/NotFound'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Proud from './components/Proud'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        {/* <Route path='*' element={<NotFound/>}/> */}
        <Route path='/' element={<Proud/>}/>
      </Routes>
    </>
  )
}

export default App