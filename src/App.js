import React from 'react'
import logo from './logo.svg'
import './App.css'
import Card from './components/Card'

function App () {
  return (
    <div className="App">
      <Card cardValue='SK' />
      <Card cardValue='CA' />
      <Card cardValue='D6' />
      <Card cardValue='H10' />
    </div>
  )
}

export default App
