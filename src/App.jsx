import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Catalog from './components/Catalog';
import Logout from './components/Logout';
import Navbar from './components/Navbar';


// 👇 Comment or add these only if the components exist
// import Catalog from './components/Catalog';
// import Review from './components/Review';
// import Navigation from './components/Navigation';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
        {/* Optional: Add <Navigation /> here if it's a persistent nav bar */}
        {/* <Navigation /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          {/* Uncomment these if you have the components */}
          {/* <Route path='/catalog' element={<Catalog />} /> */}
          {/* <Route path='/review' element={<Review />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
