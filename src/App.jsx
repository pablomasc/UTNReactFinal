import React from 'react'
import NavBar from './Components/NavBar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListaProductosScr from './Screens/ListaProductos/ListaProductosScr.jsx'
import LoginScr from './Screens/Login/LoginScr.jsx'
import RegistroScr from './Screens/Registro/RegistroScr.jsx'
import DetalleProductoScr from './Screens/DetalleProducto/DetalleProductoScr.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='fondo'>
          <h1>App Evaluación Final React</h1>
          <NavBar />
          <Routes>
            <Route path='/' element={<ListaProductosScr />} />
            <Route path='/login' element={<LoginScr />} />
            <Route path='/registro' element={<RegistroScr />} />
            <Route path='/producto/:id' element={<DetalleProductoScr />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
