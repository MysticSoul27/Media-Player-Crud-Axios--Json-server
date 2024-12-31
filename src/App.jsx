import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  return (
    <>
      {/* <h1>Media Player</h1> */}
      {/* Path for landing ,home and history */}
      {/* header */}
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/History' element={<History />} />
      </Routes>

      {/* footer */}

      <Footer />
    </>
  )
}

export default App
