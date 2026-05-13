<template>
  <div>
    <h1>product home page</h1>
    <p>This page provides information about our company and team.</p>
    <ul class="product-container">
      <li v-for="p in products" :key="p.id">
        <ProductCard :product="p"/>
      </li>
    </ul>
  </div>
</template>
<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>
<style scoped>
.product-container {
  display: grid;

  /* Dynamic responsive columns */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;

  list-style: none;
  padding: 16px;
  margin: 0;
  width: 100vw; 

  box-sizing: border-box;
}

.product-container li {
  background: #eee;
  padding: 16px;
  border-radius: 8px;
}
</style>
