import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import './App.css'

const msg = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore iste possimus culpa provident a dolorum, non eligendi itaque accusantium quam dolores earum, minima soluta alias sit necessitatibus. Harum, necessitatibus.'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={msg}/>
      <ItemCount initial={1} stock={5} onAdd={() => console.log("agregado")} />
      
    </div>
  )
}

export default App