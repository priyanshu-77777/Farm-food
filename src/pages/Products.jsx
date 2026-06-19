
import "./Products.css";
import { useState } from "react";
import ProductCard from "../Components/ProductCard";


import milletCookies from "../assets/millet-cookies.jpg";
import appleJuice from "../assets/apple-juice.jpg";
import apricotPickle from "../assets/apricot-pickle.jpg";
import mixedFruitJam from "../assets/mixed-fruit-jam.jpg";
import honey from "../assets/himalayan-honey.webp";
import ragiBiscuits from "../assets/ragi-biscuits.png";
import amlaCandy from "../assets/amla-candy.webp";
import milletEnergyBar from "../assets/millet-energy-bar.webp";

function Products() {
  const [search, setSearch] = useState("");

  const products = [
    { image: milletCookies, name: "Millet Cookies", price: 150 },
    { image: appleJuice, name: "Apple Juice", price: 120 },
    { image: apricotPickle, name: "Apricot Pickle", price: 200 },
    { image: mixedFruitJam, name: "Mixed Fruit Jam", price: 180 },
    { image: honey, name: "Himalayan Honey", price: 250 },
    { image: ragiBiscuits, name: "Ragi Biscuits", price: 140 },
    { image: amlaCandy, name: "Amla Candy", price: 80 },
    { image: milletEnergyBar, name: "Millet Energy Bar", price: 110 }
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Our Products
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <p
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "gray",
        }}
      >
        Explore our healthy Himalayan food products.
      </p>
      <div className="products-container">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
     
    </div>
  );
}

export default Products;