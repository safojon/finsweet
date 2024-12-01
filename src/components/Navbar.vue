<script setup>
import Logo from '@/../public/images/navbar/Logo.svg'
import Arrow from '@/../public/images/navbar/arrow.svg'
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar__box">
        <div class="logo">
            <RouterLink to="/" exact-active-class="router-link-exact-active">
                <img :src="Logo" alt="log" />
            </RouterLink>
        </div>
        <ul class="menu">
          <RouterLink to="/" exact-active-class="router-link-exact-active">
            <li>Home</li>
          </RouterLink>
          <RouterLink to="/service" exact-active-class="router-link-exact-active">
            <li>Service</li>
          </RouterLink>
          <RouterLink to="/company" exact-active-class="router-link-exact-active">
            <li>Company</li>
          </RouterLink>
          <RouterLink to="/career" exact-active-class="router-link-exact-active">
            <li>Career</li>
          </RouterLink>
          <RouterLink to="/blog" exact-active-class="router-link-exact-active">
            <li>Blog</li>
          </RouterLink>
          <RouterLink to="/contact" exact-active-class="router-link-exact-active">
            <li>Contact us</li>
          </RouterLink>
          <button class="nav-btn">
            Clone project
            <img :src="Arrow" alt="arrow" />
          </button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #232536;

  .navbar__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  }

  .menu {
    display: flex;
    gap: 32px;

    a, .router-link-exact-active {
      color: #ffffffae;
      transition: all 0.5s ease;

      &:hover {
        color: #ffff;
      }
    }

    .router-link-exact-active {
      color: white;
    }

    .nav-btn {
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      color: #ffd3af;
      gap: 8px;
      cursor: pointer;
      transition: all 0.5s ease;

      &:hover {
        color: #e49350;
      }
    }
  }
}
</style>
