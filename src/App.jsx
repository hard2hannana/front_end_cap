import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Specials from "./components/Specials";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations.jsx";
import ScrollToTop from "./components/ScrollTop.jsx";
import ConfirmedBooking from "./components/ConfirmedBooking.jsx";
import OrderOnline from "./components/OrderOnline.jsx"


export default function App() {
  return (
    <Router basename="/front_end_cap">
      <ScrollToTop />
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
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
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orderOnline" element={<OrderOnline />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        {/* Add more routes here if you want */}
      </Routes>
      <Footer />
    </Router>
  );
}
