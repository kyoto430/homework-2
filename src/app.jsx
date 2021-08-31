import React, { useState } from 'react'
import Counters from './components/counters'
import NavBar from './components/navBar'

function App() {
  const initialState = [
    { value: 0, id: 1, name: 'Ложка' },
    { value: 4, id: 2, name: 'Вилка' },
    { value: 0, id: 3, name: 'Тарелка' },
    { value: 0, id: 4, name: 'Стартовый набор минималиста' },
    { value: 0, id: 5, name: 'Ненужные вещи' },
  ]
  const [counters, setCounters] = useState(initialState)
  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId)
    setCounters(newCounters)
  }
  const handleReset = () => setCounters(initialState)
  const handleDecrement = (counterId) => {
    const newArray = counters.map((count) =>
      count.id === counterId && count.value > 0 ? (count.value -= 1) : count
    )
    setCounters(newArray)
  }
  const handleIncrement = (counterId) => {
    counters.map((count) =>
      count.id === counterId ? (count.value += 1) : count
    )
    setCounters([...counters])
  }
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </div>
  )
}

export default App
