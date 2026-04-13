import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Docs from './components/Docs'
import Dashboard from './components/Dashboard/Dashboard'
import Overview from './components/Dashboard/Overview'
import Users from './components/Dashboard/Users'
import Settings from './components/Dashboard/Settings'

function App() {
 
  return (
    <>
    <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="overview" element={<Overview/>} />
          <Route path="users" element={<Users/>} />
          <Route path="settings" element={<Settings/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
