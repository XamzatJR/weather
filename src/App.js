import React from 'react'
import Header from './components/Header/Header'
import Today from './components/Today/Today'

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Today />
      </main>
    </div>
  )
}

export default App
