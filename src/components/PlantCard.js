const PlantCard = ({ plant, addToCart, inCart }) => (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>₹{plant.price}</p>
      <button onClick={() => addToCart(plant)} disabled={inCart}>
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
  
  export default PlantCard;
  