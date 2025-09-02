
import specials from "../data/specialsData";
import FadeUpOnScroll from "./FadeUpOnScroll";
import ItemModal from "./ItemModal";



export default function Features({ specials, onOpen }) {
const inStock = true;


  return (
    <section className="features specials">
      <div className="container specials-body">
        <div className="card-title">
          <FadeUpOnScroll>
            <h2 className="specials-title features-title">Featured items</h2>
          </FadeUpOnScroll>
        </div>
        {specials.map((dish) => (
          <div className="card-item" key={dish.id}>
            <img className="card-image" src={dish.image} alt={dish.name} />
            <div className="card-content">
              <div className="image-caption">
                <h3>{dish.name}</h3>
                <h4>{dish.price}</h4>
              </div>
              <div className="feature-add-cart-btn">
                <button
                  type="button"
                  className="btn-primary btn-oo-features"
                  onClick={() => onOpen?.(dish)}
                  aria-label={`Customize and Add ${dish.name} to cart`}
                  disabled={!inStock}
                >
                  {inStock ? "Add item" : "Out of stock"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
