import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import PickCar from "./components/PickCar";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Signin" element={<SignIn />} />
        <Route path="Register" element={<Register />} />
      </Routes>
      
    </>
    
    
  );
}

export default App;