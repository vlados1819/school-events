import { BrowserRouter, Routes, Route } from "react-router"
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import EventDetails from './pages/EventDetails.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import Admin from './pages/Admin.jsx'
import NotFound from "./pages/NotFound.jsx"
import { EventProvider } from "./EventContext.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"

function App() {
  return (
      <EventProvider>
      <BrowserRouter basename="/school-events/">
      <ScrollToTop />
        <Header />
        <span className="shape1">&#128187;</span>
            <span className="shape2">&#128197;</span>
            <span className="shape3">&#128218;</span>
            <span className="shape4">&#128208;</span>
            <span className="shape5">&#128214;</span>
            <span className="shape6">&#128206;</span>
            <span className="shape7">&#128210;</span>
        <Routes>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<EventDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </EventProvider>
  )
}

export default App
