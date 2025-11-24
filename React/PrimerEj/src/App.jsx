import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimerEj from './PrimerEj'
import Ej2 from './Ej2'
import Ej3 from './Ej3'
import Ej4 from './Ej4'
import Ej5 from './Ej5'
import Ej6 from './Ej6'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrimerEj></PrimerEj>
      <Ej2></Ej2>
      <Ej3></Ej3>
      <Ej4></Ej4>
      <Ej5></Ej5>
      <Ej6></Ej6>
    </>
  )
}

export default App
