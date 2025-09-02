import menu from "../data/menuData";
import OrderMenuCard from "./OrderMenuCard";
import specials from "../data/specialsData";
import Features from "./Features"
import ItemModal from "./ItemModal";
import { useState } from "react";


export default function Menu({ addToCart }) {
  const sections = menu.reduce((acc, item) => {
    (acc[item.category] ||= []).push(item);
    return acc;
  }, {});

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const confirmAdd = (item, qty) => {
    addToCart?.(item, qty);
    closeModal();
  };

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
        <Features specials={specials} onOpen={openModal} />
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
                <OrderMenuCard
                  key={`${category}-${item.id}`}
                  item={item}
                  onOpen={openModal}
                />
              ))}
            </div>
            <ItemModal
              item={selectedItem}
              isOpen={isModalOpen}
              initialQty={1}
              onConfirm={confirmAdd}
              onClose={closeModal}
            />
          </section>
        ))}
      </div>
    </div>
  );
}
