import './App.css';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import NavBar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
