<template>
  <div>
    <div class="dashboard">
      <!-- Toolbar -->
      <header class="toolbar">
        <div class="logo">Admin Dashboard</div>
        <Nuxt-link to="/">
          <button>Home</button>
        </Nuxt-link>

        <div class="toolbar-right">
          <input type="text" placeholder="Search..." />

          <div class="profile-dropdown">
            <div class="profile-icon">👤</div>

            <div class="dropdown-menu">
              <a href="#">Profile</a>
              <a href="#">Settings</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Layout -->
      <div class="dashboard-body">
        <!-- Sidebar -->
        <aside class="sidebar">
          <a href="#">Dashboard</a>
          <a href="#">Products</a>
          <a href="#">Orders</a>
          <a href="#">Users</a>
          <a href="#">Analytics</a>
        </aside>

        <!-- Main Content -->
        <main class="content">
          <div class="cards">
            <div class="card">
              <h3>Total Sales</h3>
              <p>₹50,000</p>
            </div>

            <div class="card">
              <h3>Orders</h3>
              <p>120</p>
            </div>

            <div class="card">
              <h3>Users</h3>
              <p>850</p>
            </div>

            <div class="card">
              <h3>Products</h3>
              <p>65</p>
            </div>
          </div>

          <div style="background-color: blueviolet">
            <slot />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script setup>
const { data } = await useAsyncData("posts", () =>
  $fetch("https://jsonplaceholder.typicode.com/posts/1"),
);
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;

  border: none;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.3s;
}

body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
}

/* Toolbar */
.toolbar {
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 24px;

  background: #111;
  color: white;

  z-index: 1000;
}

/* Logo */
.logo {
  font-size: 24px;
  font-weight: bold;
}

/* Toolbar Right */
.toolbar-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Search */
.toolbar input {
  padding: 10px 14px;

  border: none;
  border-radius: 8px;

  width: 250px;
}

/* Profile */
.profile-dropdown {
  position: relative;
}

.profile-icon {
  width: 42px;
  height: 42px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #333;
  border-radius: 50%;

  cursor: pointer;
}

/* Dropdown */
.dropdown-menu {
  position: absolute;

  top: 50px;
  right: 0;

  width: 180px;

  background: white;
  border-radius: 10px;

  overflow: hidden;

  display: none;

  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.dropdown-menu a {
  display: block;

  padding: 14px 16px;

  color: black;
  text-decoration: none;
}

.dropdown-menu a:hover {
  background: #f2f2f2;
}

.profile-dropdown:hover .dropdown-menu {
  display: block;
}

/* Dashboard Body */
.dashboard-body {
  display: flex;
}

/* Sidebar */
.sidebar {
  width: 250px;
  min-height: calc(100vh - 74px);

  background: white;

  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  box-shadow: 2px 0 8px rgba(0,0,0,0.05);
}

.sidebar a {
  text-decoration: none;
  color: #111;

  padding: 12px;
  border-radius: 8px;

  transition: 0.3s;
}

.sidebar a:hover {
  background: #f2f2f2;
}

/* Content */
.content {
  flex: 1;
  padding: 24px;
}

/* Cards Grid */
.cards {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  gap: 20px;
}

/* Card */
.card {
  background: white;

  padding: 24px;

  border-radius: 16px;

  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.card h3 {
  margin-bottom: 12px;
  color: #555;
}

.card p {
  font-size: 28px;
  font-weight: bold;
}

/* Responsive */
@media (max-width: 768px) {

  .toolbar {
    flex-direction: column;
    gap: 16px;
  }

  .dashboard-body {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    min-height: auto;

    flex-direction: row;
    flex-wrap: wrap;
  }

  .toolbar input {
    width: 100%;
  }
}
</style>
