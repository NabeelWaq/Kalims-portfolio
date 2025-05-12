import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Testimonials from "./pages/Testimonial";


const App = () => {
  const location = useLocation(); // Hook from React Router to get the current location

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
   <>
  <div className='w-full min-h-screen bg-background text-darkBlue overflow-x-hidden'>
     <NavBar/>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/services" element={<Services/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/testimonials" element={<Testimonials/>} />
     </Routes>
     <Footer/>
    </div>
   </>
  )
}
export default App