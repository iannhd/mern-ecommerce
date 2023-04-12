import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import NavBar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
        <NavBar/>
        <Routes>
            <Route path='/cart' exact element={<Cart/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/not-found' element={<NotFound/>}/>
            {/* <Route path='*' element={<Navigate to="/not-found" replace/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
