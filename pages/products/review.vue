<template>
    <div>
        <h1>4/5 star</h1>
        <client-only>
            <lazy-component />
        </client-only>
    </div>
</template>
<script setup>
const lazyComponent = defineAsyncComponent(() => import('@/components/ProductReview.vue'))
</script>