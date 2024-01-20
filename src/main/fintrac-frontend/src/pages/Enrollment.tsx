import { useState } from 'react'
import { Link } from 'react-router-dom'

function Enrollment() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Enrollment page</h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Link to={`/`}>Home</Link>
    </>
  )
}

export default Enrollment