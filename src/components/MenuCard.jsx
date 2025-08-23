export default function MenuCard({ category, name, price, description, itemImage }) {
  
  return (
    <div className="menu-card">
      <img className="menuImage" src={itemImage} alt={name} />
      <div className="menu-content">
        <div className="menu-details">
          <h4>{name} </h4>
          <h4>{price} </h4>
        </div>
        <p className="desc-font-size">{description}</p>
      </div>
    </div>
  );
}