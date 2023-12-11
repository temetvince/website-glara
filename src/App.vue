<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="spacer"></div>
  <div class="spacer2">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/repeaters">Repeaters</RouterLink>
      <RouterLink to="/members">Members</RouterLink>
    </nav>
  </div>

  <div class="spacer3"></div>
  <div class="main">
    <RouterView />
  </div>

  <div class="spacer3"></div>
  <h3 class="spacer2">©2024 GLARA in partnership with TALARC Post 178</h3>
  <div class="spacer"></div>
</template>

<style scoped>
.main {
  width: 100%;
  flex: 55;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/tower.jpeg');
  background-size: cover;
  overflow: auto;
}

.spacer {
  width: 100%;
  flex: 1;
  background-color: var(--secondary-color);
}

.spacer2 {
  width: 100%;
  flex: 4;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--secondary-color);
}

.spacer3 {
  width: 100%;
  flex: 1;
  background-color: var(--secondary-color);
}

nav {
  width: 100%;
  font-size: var(--text-md);
  text-align: center;
  display: flex;
  justify-content: center;
}

nav a.router-link-exact-active {
  color: var(--secondary-color);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--secondary-color);
}

nav a:first-of-type {
  border: 0;
}
</style>
