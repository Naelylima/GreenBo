import { useState } from 'react'
import NavBar from './componentes/nav'
import Slide from './componentes/slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Slide/>
    
    </>
  )
}

export default App
