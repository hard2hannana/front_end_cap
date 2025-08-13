import menu from "../data/menuData";
import MenuCard from "./MenuCard";
import FadeUpOnScroll from "./FadeUpOnScroll";
import interior from "../assets/classy-interior.png"

export default function Menu() {
  const sections = menu.reduce((acc, item) => {
    (acc[item.category] ||= []).push(item);
    return acc;
  }, {});

  const order = ["Appetizers", "Entrees", "Desserts"];
  const entries = order
    .filter(cat => sections[cat])
    .map(cat => [cat, sections[cat]]);

  return (
    <div className="menuItems">
      <img src={interior} alt="classy restaurant interior" />
      <div className="container menu-content">
        <FadeUpOnScroll>
          <h1 className="menu-title">Our menu</h1>
        </FadeUpOnScroll>
        <div className="underline-menu-title"></div>
        {entries.map(([category, items]) => (
          <section key={category}>
            <h2 className="menu-header">{category}</h2>
            <div className="menu-grid">
              {items.map((item) => (
                <MenuCard key={`${category}-${item.id}`} {...item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
