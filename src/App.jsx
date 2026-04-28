import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Findastore from './pages/findastore'
import Help from './pages/help'
import Joinus from './pages/joinus'
import Signin from './pages/signin'
import Terms from './pages/terms'
import Contactus from './pages/contactus'
import Careers from './pages/careers'
import Investors from './pages/investors'
import Privacy from './pages/privacy'
import World from './pages/world'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-a-store" element={<Findastore />} />
          <Route path="/help" element={<Help />} />
          <Route path="/join-us" element={<Joinus />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/world" element={<World />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
