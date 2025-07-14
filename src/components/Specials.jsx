import React from "react";
import car from "../assets/car.png";
import greekSalad from "../assets/greekSalad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemonDessert.jpg";


export default function Specials() {
  return (
    <section className="specials ">
      <div className="container">
        <div className="specials">
          <div className="specials-title">
            <h2>This week's specials!</h2>
            <button>Order Online</button>
          </div>
            <div className="specials-body">
              <div className="cards">
                <div className="card-item">
                  <img src={greekSalad} alt="Greek Salad" />
                  <div className="card-content">
                    <div className="flex">
                      <h3>Greek Salad</h3>
                      <h4>$12.99</h4>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <div className="card-footer">
                      <h3>Order Delivery</h3>
                      <img src={car} alt="small car icon" />
                    </div>
                  </div>
                </div>
                <div className="card-item">
                  <img src={bruchetta} alt="Special 1" />
                  <div className="card-content">
                    <div className="flex">
                      <h3>Greek Salad</h3>
                      <h4>$12.99</h4>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <div className="card-footer">
                      <h3>Order Delivery</h3>
                      <img src={car} alt="small car icon" />
                    </div>
                  </div>
                </div>
                <div className="card-item">
                  <img src={lemonDessert} alt="Special 1" />
                  <div className="card-content">
                    <div className="flex">
                      <h3>Greek Salad</h3>
                      <h4>$12.99</h4>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <div className="card-footer">
                      <h3>Order Delivery</h3>
                      <img src={car} alt="small car icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
