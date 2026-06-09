import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { GoogleLogin } from './Pages/Googlelogin'

function App() {

  return (
    <>
    <Routes>
      <Route element={<Home/>} path='/home'/>
      <Route element={<GoogleLogin/>} path='/'/>
    </Routes>
    </>
  )
}

export default App
