
import image1 from "../assets/restauranfood.jpg";
import FadeUpOnScroll from "./FadeUpOnScroll";
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header className="header">
      <div className="container container-body">
        <main>
          <div className="header-content">
            <FadeUpOnScroll>
              <h1>Little Lemon</h1>
            </FadeUpOnScroll>
            <h2 className="header-subtitle">Chicago</h2>
            <p className="header-para">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <NavLink to="/reservations">
              <button type="button"                   className="hdr-btn btn-primary">
                Reserve a table
              </button>
            </NavLink>
          </div>
        </main>
        <aside>
          <div className="header-image">
            <img src={image1} alt="served appetizers" />
          </div>
        </aside>
      </div>
    </header>
  );
}
