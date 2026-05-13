<template>
    <div>
        <header style="background-color: blue;">
            <h2>
                side header for all pages, you can add navigation links here
            </h2>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/products">Products</NuxtLink>
        </header>
        <main>
            <slot />
        </main>
        <Footer/>
    </div>
</template>