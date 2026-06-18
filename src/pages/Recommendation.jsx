import "./Recommendation.css";
import { useState } from "react";

function Recommendation() {
  const [category, setCategory] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = () => {
    if (category === "snacks") {
      setRecommendations([
        "Millet Cookies",
        "Ragi Biscuits",
        "Millet Energy Bar",
      ]);
    }

    else if (category === "beverages") {
      setRecommendations([
        "Apple Juice",
      ]);
    }

    else if (category === "traditional") {
      setRecommendations([
        "Apricot Pickle",
        "Mixed Fruit Jam",
        "Himalayan Honey",
      ]);
    }
  };

  return (
   <div className="recommendation-container">
      <h1>Product Recommendations</h1>

      <p>
        Select a category to discover suitable products.
      </p>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Choose Category</option>
        <option value="snacks">Healthy Snacks</option>
        <option value="beverages">Beverages</option>
        <option value="traditional">Traditional Foods</option>
      </select>

      <br /><br />

      <button onClick={getRecommendations}>
        Get Recommendations
      </button>

      <div className="recommendation-list">
        {recommendations.map((item, index) => (
          <div key={index} className="recommendation-item">✓ {item}</div>
        ))}
      </div>
    </div>
  );
}

export default Recommendation;