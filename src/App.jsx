import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Specials from "./components/Specials";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import About from "./components/About";

export default function App() {
  return (
    
    <Router basename="/front_end_cap">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Specials />
              <Reviews />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        {/* Add more routes here if you want */}
      </Routes>
      <Footer />
    </Router>
    
  );
}
