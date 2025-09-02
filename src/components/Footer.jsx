import footerLogo from "../assets/footerLogo.png";
import { NavLink } from "react-router-dom";


export default function Footer() {
  return (
    <footer>
      <div className="container container-foot">
        <img src={footerLogo} alt="alternate logo" />
        <div className="navigation">
          <h3 className="foot-title">Navigation</h3>
          <ul className="foot-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? "active" : undefined}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" end className={({ isActive }) => isActive ? "active" : undefined}>About</NavLink>
            </li>
            <li>
              <NavLink to="/menu" end className={({ isActive }) => isActive ? "active" : undefined}>Menu</NavLink>
            </li>
            <li>
              <NavLink to="/reservations" end className={({ isActive }) => isActive ? "active" : undefined}>Reservations</NavLink>
            </li>
            <li>
              <NavLink to="/orderOnline" end className={({ isActive }) => isActive ? "active" : undefined}>Order online</NavLink>
            </li>
            <li>
              <NavLink to="/login" end className={({ isActive }) => isActive ? "active" : undefined}>Login</NavLink>
            </li>
          </ul>
        </div>
        
        <div className="contact">
          <h3 className="foot-title">Contact</h3>
          <ul className="foot-links">
            <li><a href="tel:123-456-7890">123-456-7890</a></li>
            <li><a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></li>
          </ul>
        </div>
        <div className="socials">
          <h3 className="foot-title">Socials</h3>
          <ul className="foot-links">
            <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a></li>
             <li><a href="https://www.x.com/"><i className="fa-brands fa-twitter"></i></a></li>
             <li><a href="https://www.instagram.com/"><i className="fa-brands fa-square-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <p>&copy; 2025 My Website</p>
     
    </footer>
  );
}
