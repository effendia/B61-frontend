type Props = {
  name: string;
  price: number;
  image: string;
  isAdded: boolean;
  onToggle: () => void;
};

function ProductCard({ name, price, image, isAdded, onToggle }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img src={image} alt={name} width={150} />
      <h3>{name}</h3>
      <p>Rp {price}</p>
      <button onClick= {onToggle}
      style={{
         backgroundColor: isAdded ? "gray" : "blue",
         color: "white",
         padding: "8px",
         cursor: "pointer",
      }}
      >
        {isAdded ? "Added" : "Add to Cart" }
        </button>
    </div>
  );
}

export default ProductCard;
