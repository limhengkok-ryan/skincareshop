import { useSearchParams, useNavigate } from "react-router-dom";
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

  return (
    <div className="recommendations-container">
      <h2 className="recommendations-title">We Recommend</h2>
      {product && recommendation && (
        <div className="recommendation-card">
          <img src={product.image} alt={recommendation} className="recommendation-image" />
          <p className="recommendation-name">{recommendation}</p>
          <p className="recommendation-price">${product.price}</p>
        </div>
      )}
      <button onClick={() => navigate('/')} className="home-btn">Home</button>
    </div>
  );
}
