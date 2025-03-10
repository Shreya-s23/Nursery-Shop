import plantsData from "../data/plantsData";
import PlantCard from "../components/PlantCard";

const ProductListingPage = ({ addToCart, cart }) => {
  const getInCart = (id) => cart.some((item) => item.id === id);

  return (
    <div className="product-list">
      {plantsData.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          addToCart={addToCart}
          inCart={getInCart(plant.id)}
        />
      ))}
    </div>
  );
};

export default ProductListingPage;
