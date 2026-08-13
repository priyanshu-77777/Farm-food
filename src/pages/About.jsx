
import "./About.css";

function About() {
  return (
    <div className="about-container">

      <h1 className="about-title">
        About Farm Food
      </h1>

      <p className="about-intro">
        Farm Food helps people discover healthy Himalayan food products
        and supports local producers through a digital platform for
        product promotion and marketing.
      </p>

      <div className="about-section">
        <h2>The Problem</h2>

        <p>
          Many local Himalayan food products are not well known outside
          their region. Because of limited promotion and marketing,
          people are often unaware of these healthy and traditional
          food products.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Solution</h2>

        <p>
          Farm Food provides a platform where Himalayan food products
          can be displayed and promoted. It helps people discover
          healthy food products while supporting local producers.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>

        <p>
          To promote nutritious and traditional Himalayan food products
          and connect them with a wider audience through technology.
        </p>
      </div>

      <div className="about-section">
        <h2>Products We Promote</h2>

        <ul>
          <li>Millet-based snacks</li>
          <li>Natural fruit juices</li>
          <li>Traditional pickles</li>
          <li>Organic jams and honey</li>
          <li>Healthy food products</li>
        </ul>
      </div>
     
    </div>
  );
}

export default About;