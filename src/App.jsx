import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Catalog from './catalog'
import Register from './register'
import Login from '/login'
import Review from '/review'
import Navigation from '/navigation'

function App() {

  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation/>} />
      <Route index element={<Home/>} />
      <Route path='/catalog' element={<Catalog/>} />
      <Route path='/register' element={<register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/review' element={<Review/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
