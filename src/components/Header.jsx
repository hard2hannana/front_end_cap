
import image1 from "../assets/restauranfood.jpg";
import FadeUpOnScroll from "./FadeUpOnScroll";

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
                We are a family owned Mediterranean restaurant, focused on traditional
                recipes served with a modern twist.
              </p>
              <button className="hdr-btn">
                Reserve a table
              </button>
          </div>
        </main>
        <aside>
          <div className="header-image">
            <img src={ image1 } alt="served appetizers" />
          </div>
        </aside>
      </div>
    </header>
  );
}
