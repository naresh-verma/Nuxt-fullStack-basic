<template>
  <div class="product-page">
    <div class="product-image">
      <img :src="product.image" alt="Product" />
    </div>

    <div class="product-details">
      <h1>{{product.title}}</h1>

      <p class="price">₹{{product.price}}</p>

      <p class="description">
        {{product.description}}
      </p>

      <div class="buttons">
        <button class="buy-btn">Buy Now</button>
        <button class="cart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps(['product']);
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  padding: 40px;
  background: #f5f5f5;
}

/* Main Layout */
.product-page {
  display: flex;
  gap: 40px;

  background: white;
  padding: 30px;
  border-radius: 16px;

  max-width: 1200px;
  margin: auto;
}

/* Product Image */
.product-image {
  flex: 1;
}

.product-image img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
}

/* Product Details */
.product-details {
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-details h1 {
  font-size: 36px;
  margin-bottom: 16px;
}

.price {
  font-size: 28px;
  font-weight: bold;
  color: #111;
  margin-bottom: 20px;
}

.description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 30px;
}

/* Buttons */
.buttons {
  display: flex;
  gap: 16px;
}

button {
  padding: 14px 24px;

  border: none;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.3s;
}

.buy-btn {
  background: black;
  color: white;
}

.buy-btn:hover {
  background: #222;
}

.cart-btn {
  background: #eee;
}

.cart-btn:hover {
  background: #ddd;
}

/* Responsive */
@media (max-width: 768px) {
  .product-page {
    flex-direction: column;
  }

  .product-details h1 {
    font-size: 28px;
  }

  .buttons {
    flex-direction: column;
  }
}
</style>
