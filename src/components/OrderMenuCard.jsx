export default function OrderMenuCard({ item, onOpen }) {
  const { id, name, price, description, image, inStock = true } = item;

  return (
    <div className="menu-card" data-id={id}>
      <img className="menuImage" src={image} alt={name} />
      <div className="menu-content">
        <div className="menu-details">
          <h4>{name} </h4>
          <h4>{price} </h4>
        </div>
        <p className="desc-font-size">{description}</p>
      </div>
      <div className="item-add-cart-btn">
        <button
          type="button"
          className="btn-primary btn-oo-item"
          onClick={() => onOpen?.(item)}
          aria-label={`Customize and Add ${name} to cart`}
          disabled={!inStock}
        >
          {inStock ? "Add item" : "Out of stock"}
        </button>
      </div>
    </div>
  );
}
