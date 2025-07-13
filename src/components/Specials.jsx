import React from "react";

export default function Specials() {
  return (
    <section className="specials ">
      <div className="container container-body">
        <h2>This week's specials!</h2>
        <button>Order Online</button>
        <div className="cards">
          <div className="card-item">
            <img src="/src/assets/greekSalad.jpg" alt="Special 1" />
            <div className="card-content">
              <div className="flex">
                <h3>Greek Salad</h3>
                <h4>$12.99</h4>
              </div>    
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
              <div className="card-footer">
                <h3>Order Delivery</h3>
                <img src="/src/assets/car.png" alt="" />
              </div>  
            </div>
          </div>
          <div className="card-item">
            <img src="/src/assets/greekSalad.jpg" alt="Special 1" />
            <div className="card-content">
              <div className="flex">
                <h3>Greek Salad</h3>
                <h4>$12.99</h4>
              </div>    
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
              <div className="card-footer">
                <h3>Order Delivery</h3>
                <img src="/src/assets/car.png" alt="" />
              </div>  
            </div>
          </div>
          <div className="card-item">
            <img src="/src/assets/greekSalad.jpg" alt="Special 1" />
            <div className="card-content">
              <div className="flex">
                <h3>Greek Salad</h3>
                <h4>$12.99</h4>
              </div>        
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
              <div className="card-footer">
                <h3>Order Delivery</h3>
                <img src="/src/assets/car.png" alt="" />
              </div>  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
