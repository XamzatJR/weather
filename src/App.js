import React from 'react'
import Days from './components/Days/Days'
import Header from './components/Header/Header'
import Today from './components/Today/Today'
import TodayInfo from './components/TodayInfo/TodayInfo'

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Today />
        <TodayInfo />
        <Days />
      </main>
    </div>
  )
}

export default App
