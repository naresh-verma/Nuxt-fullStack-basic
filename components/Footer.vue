<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Company -->
      <div class="footer-section">
        <h3>MyShop</h3>

        <p>
          Modern ecommerce platform with premium products and fast delivery
          services.
        </p>
      </div>

      <!-- Links -->
      <div class="footer-section">
        <h4>Quick Links</h4>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <!-- Support -->
      <div class="footer-section">
        <h4>Support</h4>

        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>

      <!-- Social -->
      <div class="footer-section">
        <h4>Follow Us</h4>

        <div class="social-icons">
          <a href="#">🌐</a>
          <a href="#">📘</a>
          <a href="#">📷</a>
          <a href="#">🐦</a>
        </div>
      </div>
    </div>

    <!-- Bottom -->
    <div class="footer-bottom">© 2026 MyShop. All Rights Reserved.</div>
  </footer>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Footer */
.footer {
  background: #111;
  color: white;

  padding-top: 60px;

  margin-top: 60px;
}

/* Footer Container */
.footer-container {
  max-width: 1200px;

  margin: auto;

  padding: 0 24px 40px;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  gap: 40px;
}

/* Section */
.footer-section h3,
.footer-section h4 {
  margin-bottom: 20px;
}

/* Paragraph */
.footer-section p {
  color: #bbb;
  line-height: 1.7;
}

/* List */
.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 12px;
}

/* Links */
.footer-section a {
  text-decoration: none;
  color: #bbb;

  transition: 0.3s;
}

.footer-section a:hover {
  color: white;
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 16px;
}

.social-icons a {
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #222;

  border-radius: 50%;

  font-size: 18px;

  transition: 0.3s;
}

.social-icons a:hover {
  background: #333;
}

/* Footer Bottom */
.footer-bottom {
  text-align: center;

  padding: 20px;

  border-top: 1px solid #222;

  color: #999;
}

/* Responsive */
@media (max-width: 768px) {
  .footer {
    text-align: center;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>
