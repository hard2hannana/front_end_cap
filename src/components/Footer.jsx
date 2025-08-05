import footerLogo from "../assets/footerLogo.png";


export default function Footer() {
  return (
    <footer>
      <div className="container flex-container">
        <img src={footerLogo} alt="alternate logo" />
        <div className="navigation">
          <h3 className="foot-title">Navigation</h3>
          <ul className="foot-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        
        <div className="contact">
          <h3 className="foot-title">Contact</h3>
          <ul className="foot-links">
            <li><a href="tel:123-456-7890">123-456-7890</a></li>
            <li><a href="mailto:contact@LittleLemon.com">contact@LittleLemon.com</a></li>
          </ul>
        </div>
        <div className="socials">
          <h3 className="foot-title">Socials</h3>
          <ul className="foot-links">
            <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a></li>
             <li><a href="https://www.x.com/"><i class="fa-brands fa-twitter"></i></a></li>
             <li><a href="https://www.instagram.com/"><i class="fa-brands fa-square-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <p>&copy; 2025 My Website</p>
     
    </footer>
  );
}
