import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './Cabecera.jsx'
import Pie from './Pie.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecera simple = {false} titulo = {"nuevo titulo"}></Cabecera>
      <h1>Prueba de uso de React</h1>
      
      <ListaCompra></ListaCompra>
    </>
  )
}

export default App
