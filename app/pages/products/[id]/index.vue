<template>
    <div>
        <h1>product dynamic page {{ productId }}</h1>
        <p>This page provides information about our company and team.</p>
        <NuxtLink to="/products">
        <button>Go to product Page</button>
        </NuxtLink>
    </div>
</template>
<script setup>
import {ref} from 'vue'
const route = useRoute()
const productId = ref(route.params.id)

</script>