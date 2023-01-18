import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from './Component/footer/Footer'
import { Navbar } from './Component/navbar/Navbar'

import Contacts from './pages/contacts/Contacts'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'

import ScrollToTop from './utils/scrollToTop'

import './styles/main.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/My-Portfolio/" element={<Home />} />
          <Route path="/My-Portfolio/projects" element={<Projects />} />
          <Route path="/My-Portfolio/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
