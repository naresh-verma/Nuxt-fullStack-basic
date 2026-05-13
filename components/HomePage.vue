<template>
  <div class="home-page">

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Modern Ecommerce Store</h1>

        <p>
          Discover premium products with modern design, fast delivery, and
          amazing offers.
        </p>

        <button>Shop Now</button>
      </div>

      <div class="hero-image">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Product Image"
        />
      </div>
    </section>

    <!-- Accordion Section -->
    <section class="accordion-section">
      <h2>Why Choose Us?</h2>

      <div class="accordion">
        <!-- Item 1 -->
        <div class="accordion-item">
          <button class="accordion-header">Fast Delivery</button>

          <div class="accordion-content">
            <p>We provide super fast and secure delivery across the country.</p>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="accordion-item">
          <button class="accordion-header">Premium Quality</button>

          <div class="accordion-content">
            <p>
              All products are tested and verified for premium quality
              standards.
            </p>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="accordion-item">
          <button class="accordion-header">24/7 Support</button>

          <div class="accordion-content">
            <p>Our support team is available anytime to help customers.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>

</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  color: #111;
}

/* Home Page */
.home-page {
  width: 100%;
}

/* Hero Section */
.hero {
  min-height: 70vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  padding: 20px;

  background: white;
}

/* Hero Content */
.hero-content {
  flex: 1;
}

.hero-content h1 {
  font-size: 56px;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  line-height: 1.6;

  color: #555;

  margin-bottom: 30px;
}

/* Button */
.hero-content button {
  padding: 14px 28px;

  border: none;
  border-radius: 10px;

  background: #111;
  color: white;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.3s;
}

.hero-content button:hover {
  background: #333;
}

/* Hero Image */
.hero-image {
  flex: 1;

  display: flex;
  justify-content: center;
}

.hero-image img {
  width: 100%;
  max-width: 500px;

  border-radius: 20px;

  object-fit: cover;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Accordion Section */
.accordion-section {
  padding: 80px 60px;
}

.accordion-section h2 {
  text-align: center;
  margin-bottom: 40px;

  font-size: 40px;
}

/* Accordion */
.accordion {
  max-width: 800px;
  margin: auto;
}

/* Accordion Item */
.accordion-item {
  background: white;

  margin-bottom: 16px;

  border-radius: 12px;

  overflow: hidden;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

/* Accordion Header */
.accordion-header {
  width: 100%;

  padding: 20px;

  border: none;

  background: white;

  font-size: 18px;
  font-weight: 600;

  text-align: left;

  cursor: pointer;
}

/* Accordion Content */
.accordion-content {
  max-height: 0;

  overflow: hidden;

  transition: 0.3s ease;

  padding: 0 20px;
}

.accordion-content p {
  padding-bottom: 20px;

  color: #555;
  line-height: 1.6;
}

/* Active Accordion */
.accordion-item.active .accordion-content {
  max-height: 200px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;

    text-align: center;

    padding: 40px 20px;
  }

  .hero-content h1 {
    font-size: 40px;
  }

  .accordion-section {
    padding: 60px 20px;
  }

  .accordion-section h2 {
    font-size: 32px;
  }
}
</style>
