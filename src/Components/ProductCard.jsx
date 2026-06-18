import "./ProductCard.css";

function ProductCard({ image, name, price }) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>₹{price}</p>
    </div>
  );
}

export default ProductCard;