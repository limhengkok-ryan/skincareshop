import { useSearchParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../Recommendations.css";

const productData: { [key: string]: { image: string; price: number } } = {
  "Hydrating Serum": { image: "Image/Hydrating Serum.png", price: 45 },
  "Acne Control Treatment": { image: "Image/Acne Control Treatment.png", price: 55 },
  "Soothing Cleanser": { image: "Image/Soothing Cleanser.png", price: 35 },
  "Anti-Aging Cream": { image: "Image/Anti-Aging Cream.png", price: 65 },
};

export default function Recommendations() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;
  const { addToCart } = cartContext;

  const answers = JSON.parse(searchParams.get("answers") || "[]");
  let recommendation = "";

  if (answers.length > 0) {
    const firstAnswer = answers[0];
    if (firstAnswer === "Dryness") {
      recommendation = "Hydrating Serum";
    } else if (firstAnswer === "Acne") {
      recommendation = "Acne Control Treatment";
    } else if (firstAnswer === "Redness") {
      recommendation = "Soothing Cleanser";
    } else if (firstAnswer === "Fine Lines") {
      recommendation = "Anti-Aging Cream";
    }
  }

  const product = recommendation ? productData[recommendation] : null;

  const handleAddToCart = () => {
    if (product && recommendation) {
      addToCart({
        name: recommendation,
        price: product.price,
        image: product.image
      });
      alert(`${recommendation} added to cart!`);
    }
  };

  return (
    <div className="recommendations-container">
      <h2 className="recommendations-title">We Recommend</h2>
      {product && recommendation && (
        <div className="recommendation-card">
          <img src={product.image} alt={recommendation} className="recommendation-image" />
          <p className="recommendation-name">{recommendation}</p>
          <p className="recommendation-price">${product.price}</p>
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      )}
      <div className="recommendations-actions">
        <button onClick={() => navigate(-1)} className="back-btn">Back</button>
        <button onClick={() => navigate('/')} className="home-btn">Home</button>
      </div>
    </div>
  );
}
