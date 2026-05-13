<template>
  <div class="toolbar">
    <div class="logo">MyShop</div>

    <div class="toolbar-actions">
      <Nuxt-link to="/">
        <button>Home</button>
      </Nuxt-link>
      <Nuxt-link to="/products">
        <button>Products</button>
      </Nuxt-link>
      <Nuxt-link to="/admin">
        <button>Admin</button>
      </Nuxt-link>

      <!-- Profile Dropdown -->
      <div class="profile-dropdown">
        <div class="profile-icon">👤</div>

        <div class="dropdown-menu">
          <a href="#">Profile</a>
          <a href="#">Orders</a>
          <a href="#">Settings</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Toolbar */
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 24px;

  background: #e9750a;
  color: white;
}

/* Right Side */
.toolbar-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Buttons */
.toolbar button {
  padding: 10px 16px;

  border: none;
  border-radius: 8px;

  background: #333;
  color: white;

  cursor: pointer;
}

/* Profile Dropdown */
.profile-dropdown {
  position: relative;
}

/* Profile Icon */
.profile-icon {
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #333;

  cursor: pointer;
  font-size: 20px;
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;

  top: 50px;
  right: 0;

  width: 180px;

  background: white;
  border-radius: 10px;

  overflow: hidden;

  display: none;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Dropdown Links */
.dropdown-menu a {
  display: block;

  padding: 14px 16px;

  color: #111;
  text-decoration: none;

  transition: 0.3s;
}

.dropdown-menu a:hover {
  background: #f2f2f2;
}

/* Show Dropdown on Hover */
.profile-dropdown:hover .dropdown-menu {
  display: block;
}
</style>
