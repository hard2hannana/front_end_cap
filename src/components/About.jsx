import shyTown from "../assets/chicago-burger-company.webp"
import FadeUpOnScroll from "./FadeUpOnScroll";
import interior from "../assets/restaurant_inside.jpg";
import chefs from "../assets/mario-and-adrian.jpg";



export default function About() {
  return (
    <section className="header">
      <div className="about-color-1">
        <div className="container container-body">
          <main className="about-header-content">
            <h1 className="about-h1">Chicago, Illinois</h1>
            <p className="about-para">
              Check us out at our Beautiful Downtown location.
            </p>
          </main>
          <aside>
            <div className="header-image about-header-img">
              <img src={shyTown} alt="served appetizers" />
            </div>
          </aside>
        </div>
      </div>
      <div className="about-color-2">
        <div className="container container-body about-body">
          <div className="about-article-content">
            <h2 className="about-article-title">Little lemon</h2>
            <p className="about-article-para">
              Little Lemon Chicago is a family owned Mediterranean restaurant
              located in the heart of the city. The restaurant is run by brothers
              Mario and Adrian, who have always had a passion for cooking and
              serving delicious food. Growing up in a Mediterranean household they
              decided to bring their family recipes to the masses with a modern
              twist. At Little Lemon, you can expect to find a menu full of
              classic dishes that stand out from the rest. Whether you're looking
              for a quick lunch or a leisurely dinner, Little Lemon Chicago is the
              perfect place to indulge in a delicious meal in a cozy and welcoming
              atmosphere.
            </p>
          </div>
          <div className="aside">
            <div className="about-article-img">
              <img
                src={interior}
                alt="Dining room picture"
                className="about-bg-img"
              />
              <img
                src={chefs}
                alt="Dining room picture"
                className="about-overlay-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
