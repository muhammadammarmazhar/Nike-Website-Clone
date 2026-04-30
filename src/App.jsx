import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/eg/home'
import Findastore from './pages/eg/findastore'
import Help from './pages/eg/help'
import Joinus from './pages/eg/joinus'
import Signin from './pages/eg/signin'
import Terms from './pages/eg/terms'
import Contactus from './pages/eg/contactus'
import Careers from './pages/eg/careers'
import Investors from './pages/eg/investors'
import Privacy from './pages/eg/privacy'
import World from './pages/eg/world'
import UsaHome from './pages/usa/home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/eg" element={<Home />} />
          <Route path="/eg/find-a-store" element={<Findastore />} />
          <Route path="/eg/help" element={<Help />} />
          <Route path="/eg/join-us" element={<Joinus />} />
          <Route path="/eg/sign-in" element={<Signin />} />
          <Route path="/eg/terms" element={<Terms />} />
          <Route path="/eg/contact-us" element={<Contactus />} />
          <Route path="/eg/careers" element={<Careers />} />
          <Route path="/eg/investors" element={<Investors />} />
          <Route path="/eg/privacy" element={<Privacy />} />
          <Route path="/eg/world" element={<World />} />
          <Route path="/" element={<UsaHome />} />

          {/* add redirection to /eg for / route */}
          {/* <Route path="/" element={<Navigate to="/eg" replace />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
