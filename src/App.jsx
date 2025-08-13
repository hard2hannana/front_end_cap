import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Specials from "./components/Specials";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Login from "./components/Login";
import Menu from "./components/Menu";
import ScrollToTop from "./components/ScrollTop.jsx";

export default function App() {
  return (
    <Router basename="/front_end_cap">
      <ScrollToTop />
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
        <Route path="/login" element={<Login />} />
        <Route path="menu" element={<Menu />} />
        {/* Add more routes here if you want */}
      </Routes>
      <Footer />
    </Router>
  );
}
