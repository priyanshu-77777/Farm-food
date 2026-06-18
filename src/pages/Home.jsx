import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import "./Home.css";

import milletCookies from "../assets/millet-cookies.jpg";
import appleJuice from "../assets/apple-juice.jpg";
import apricotPickle from "../assets/apricot-pickle.jpg";
import mixedFruitJam from "../assets/mixed-fruit-jam.jpg";
import honey from "../assets/himalayan-honey.webp";
import ragiBiscuits from "../assets/ragi-biscuits.png";
import amlaCandy from "../assets/amla-candy.webp";
import milletEnergyBar from "../assets/millet-energy-bar.webp";

function Home() {
  return (
    <>
      

      <section className="hero">
        <h1>Farm Food</h1>

        <p>
          Discover healthy Himalayan snacks, juices, and traditional
          pickles made from locally sourced ingredients.
        </p>

        <button className="btn">
          Explore Products
        </button>
      </section>
       <h2 style={{ textAlign: "center" }}>
        Featured Products </h2>

      

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

         </>
  );
}

export default Home;