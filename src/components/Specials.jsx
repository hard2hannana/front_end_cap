import React from "react";

export default function Specials() {
  return (
    <main>
      <section className="specials">
        <div className="specials-header">
          <h2>This week's specials!</h2>
          <button>Order Online</button>
        </div>
        <div className="specials-cards">
          <div className="card">
            <img src="/src/assets/greekSalad.jpg" alt="Special 1" />
            <div className="card-text">
              <h3>Greek Salad</h3>
              <h4>$12.99</h4>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <div className="card-footer">
              <h2>Order Delivery</h2>
              <img src="/src/assets/car.png" alt="" />
            </div>
          </div>
          <div className="card">
            <img src="/src/assets/bruchetta.svg" alt="Special 2" />
            <div className="card-text">
              <h3>Bruschetta</h3>
              <h4>$5.99</h4>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
            <div className="card-footer">
              <h2>Order Delivery</h2>
              <img src="/src/assets/car.png" alt="" />
            </div>
          </div>
          <div className="card">
            <img src="/src/assets/lemonDessert.jpg" alt="Special 3" />
            <div className="card-text">
              <h3>Lemon Dessert</h3>
              <h4>$5.00</h4>
            </div>
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <div className="card-footer">
              <h2>Order Delivery</h2>
              <img src="/src/assets/car.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
