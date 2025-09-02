import car from "../assets/car.png";
import specials from "../data/specialsData";
import FadeUpOnScroll from "./FadeUpOnScroll";
import { NavLink } from "react-router-dom";


export default function Specials() {
  return (
    <section className="specials ">
      <div className="container specials-body">
        <div className="card-title">
          <FadeUpOnScroll>
            <h2 className="specials-title">This week's specials!</h2>
          </FadeUpOnScroll>
          <NavLink to="/orderOnline">
            <button className="btn-primary">Order Online</button>
          </NavLink>
        </div>
        {specials.map((dish) => (
          <div className="card-item" key={dish.id}>
            <img className="card-image" src={dish.image} alt={dish.name} />
            <div className="card-content">
              <div className="image-caption">
                <h3>{dish.name}</h3>
                <h4>{dish.price}</h4>
              </div>
              <div>
                <p>{dish.description}</p>
              </div>
              <div className="card-footer">
                <h3>Order Delivery</h3>
                <img src={car} alt="small car icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
