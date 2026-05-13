<template>
    <div class="card">
        <img :src="product.image" alt="product image" class="thumb">
        <p>
            {{ product.title }}
        </p>
        <Nuxt-link :to="`products/${product.id}`">
            <button> View details</button>
        </Nuxt-link>

    </div>
</template>
<script setup>
const props = defineProps({
    product: {
        type: Object,
        required:true
    }
})
</script>
<style scoped>
.card {
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
}
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

/* Push button to bottom */
.card button {
  padding: 12px 16px;

  border: none;
  border-radius: 8px;

  background: #000;
  color: #fff;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.3s ease;
}
</style>
