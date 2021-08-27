import React, { useState } from 'react'
import Counter from './counter'

const Counters = () => {
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
    counters.map((count) =>
      count.id === counterId && count.value > 0 ? (count.value -= 1) : count
    )
    setCounters([...counters])
  }
  const handleIncrement = (counterId) => {
    counters.map((count) =>
      count.id === counterId ? (count.value += 1) : count
    )
    setCounters([...counters])
  }
  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          {...counter}
        />
      ))}
    </div>
  )
}

export default Counters
