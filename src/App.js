import './App.css';
import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import {Routes, Route} from "react-router-dom";
import Navbar from './Component/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/product/:slug' element={<ProductDetails/>}/>

    </Routes>

    </>
  );
}

export default App;
