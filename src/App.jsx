
import { Routes,Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Home } from './pages/Home'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { Services } from './Components/Services'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
