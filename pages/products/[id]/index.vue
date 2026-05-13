<template>
    <div>

        <ProductDescription :product="p"/>
        <div class="button-container">
            <NuxtLink to="/products">
                <button class="go-back">Go to product Page</button>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const {id} = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

const { data: p } = await useFetch(uri, {key: id});

if(!p.value) {
    throw createError({
        statusCode: 400,
        message: 'product Not Found'
    })
} 
</script>
<style scoped>
.button-container {
    display: flex;
    justify-content: end;
    margin-right: 100px;
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

.go-back {
  background: black;
  color: white;
  
}
</style>