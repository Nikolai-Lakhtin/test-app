import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Aboutepage from './pages/Aboutpage'
import Homepage from './pages/Homepage'
import Blogpage from './pages/Blogpage'
import Notfound from './pages/Notfoundpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
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
      <section className='route__block'>
        <Link to="/aboute" className="route-link">Aboute</Link>
        <Link to="/blog" className="route-link">Blog</Link>
        <Link to="/" className="route-link">Home</Link>
      </section>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/aboute' element={<Aboutepage />} />
        <Route path='/blog' element={<Blogpage />} />
        <Route path='*' element={<Notfound />}/>
      </Routes>
    </>
  )
}

export default App
