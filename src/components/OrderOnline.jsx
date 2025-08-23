import menu from "../data/menuData";
import MenuCard from "./MenuCard";
import Features from "./Features"
export default function Menu() {
  const sections = menu.reduce((acc, item) => {
    (acc[item.category] ||= []).push(item);
    return acc;
  }, {});


  const slug = (s) =>
    s
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");

  const order = ["Appetizers", "Entrees", "Desserts"];
  const entries = order
    .filter((cat) => sections[cat])
    .map((cat) => [cat, sections[cat]]);

  return (
    <div className="menuItems">
      <div className="btn-on-right">
        <button class="cart-btn">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
      <div className="">
        <Features />
      </div>
      <div className="container orderOnline-nav">
        <ul>
          {order.map((cat) => (
            <li key={cat}>
              <a href={`#${cat.toLowerCase()}`}>{cat}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="underline-menu-title"></div>
      <div className="container menu-content">
        {entries.map(([category, items]) => (
          <section key={category} id={slug(category)} className="menu-section">
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
