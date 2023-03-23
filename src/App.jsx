import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Link to="/scalar-degrees">Scalar Degree Exercise</Link>
      </div>
    </div>
  )
}

export default App
