<template>
  <div>
    <h1>product home page</h1>
    <p>This page provides information about our company and team.</p>
    <NuxtLink to="/">
      <button>Go to Home Page</button>
    </NuxtLink>
    <br/>
    <NuxtLink to="/products/about">
      <button>Go to product About Page</button>
    
    </NuxtLink>
    <br/>
    <NuxtLink to="/products/1">
      <button>Dynamic</button>
    </NuxtLink>
    <NuxtLink to="/products/2">
      <button>Dynamic</button>
    </NuxtLink>
    <br />
    <NuxtLink to="/products/review">
      <button>Review</button>
    </NuxtLink>
  </div>
</template>

