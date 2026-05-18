import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TermsOfUse from './pages/TermsOfUse'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NFCDevices from './pages/NFCDevices'

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/devices" element={<NFCDevices />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root
