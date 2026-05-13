<template>
  <div>
    <h1>Admin Dashboard</h1>
    <ul>
      <li>{{ data.title }}</li>
      <li>{{ data.body }}</li>
    </ul>

    <nav>
      <NuxtLink to="/admin">
        <button>Admin</button>
      </NuxtLink>
      <NuxtLink to="/">
        <button>Home</button>
      </NuxtLink>
    </nav>
    <div style="background-color: blueviolet">
      <slot />
    </div>
  </div>
</template>
<script setup>
const { data } = await useAsyncData("posts", () =>
        $fetch("https://jsonplaceholder.typicode.com/posts/1"),
      );
</script>