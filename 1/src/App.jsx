import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
    <div>
      <h1>Hello React!</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        click: {count}
      </button>
    </div>
      </main>
  )
}

export default App
