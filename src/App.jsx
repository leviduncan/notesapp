import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>COUNT {count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          ADD 1
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          MINUS 1
        </button>
      </div>
      <p className="read-the-docs">
        This super duper app helps you to count up by 1 unit.
      </p>
    </>
  )
}

export default App
