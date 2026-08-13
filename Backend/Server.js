const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory product data
let products = [
  {
    id: 1,
    name: "Millet Cookies",
    price: 150,
    category: "snacks"
  },
  {
    id: 2,
    name: "Apple Juice",
    price: 120,
    category: "beverages"
  },
  {
    id: 3,
    name: "Apricot Pickle",
    price: 200,
    category: "traditional"
  },
  {
    id: 4,
    name: "Mixed Fruit Jam",
    price: 180,
    category: "jams"
  },
  {
    id: 5,
    name: "Himalayan Honey",
    price: 250,
    category: "natural"
  }
];

// 1. GET all products
app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

// 2. SEARCH products
// IMPORTANT: This must come BEFORE /api/products/:id
app.get("/api/products/search", (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({
      message: "Search query is required"
    });
  }

  const results = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json(results);
});

// 3. GET single product
app.get("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.status(200).json(product);
});

// 4. POST create product
app.post("/api/products", (req, res) => {
  const { name, price, category } = req.body;

  if (!name || price === undefined || !category) {
    return res.status(400).json({
      message: "Name, price and category are required"
    });
  }

  const newProduct = {
    id: products.length > 0
      ? products[products.length - 1].id + 1
      : 1,
    name,
    price,
    category
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

// 5. PUT update product
app.put("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const { name, price, category } = req.body;

  if (!name || price === undefined || !category) {
    return res.status(400).json({
      message: "Name, price and category are required"
    });
  }

  product.name = name;
  product.price = price;
  product.category = category;

  res.status(200).json(product);
});

// 6. DELETE product
app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const productIndex = products.findIndex((item) => item.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  products.splice(productIndex, 1);

  res.status(204).send();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    message: "Internal server error"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});