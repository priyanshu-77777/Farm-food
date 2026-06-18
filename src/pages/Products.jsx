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
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Our Products
      </h1>

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
        <ProductCard
          image={milletCookies}
          name="Millet Cookies"
          price={150}
        />

        <ProductCard
          image={appleJuice}
          name="Apple Juice"
          price={120}
        />

        <ProductCard
          image={apricotPickle}
          name="Apricot Pickle"
          price={200}
        />

        <ProductCard
          image={mixedFruitJam}
          name="Mixed Fruit Jam"
          price={180}
        />

        <ProductCard
          image={honey}
          name="Himalayan Honey"
          price={250}
        />

        <ProductCard
          image={ragiBiscuits}
          name="Ragi Biscuits"
          price={140}
        />

        <ProductCard
          image={amlaCandy}
          name="Amla Candy"
          price={80}
        />

        <ProductCard
          image={milletEnergyBar}
          name="Millet Energy Bar"
          price={110}
        />
      </div>
    </div>
  );
}

export default Products;