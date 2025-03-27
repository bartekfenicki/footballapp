<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="logo">My Logo</div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/tic-tac-toe">Tic Tac Toe</RouterLink>
        <RouterLink to="/guessingGame">Guess The Player</RouterLink>
        <RouterLink to="/cluesGame">Guess the Clues</RouterLink>
        <RouterLink to="/footdle">Footdle</RouterLink>
        <RouterLink to="/careerPath">Career Path</RouterLink>
      </nav>
    </aside>
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  transition: background 0.3s;
}

nav a:hover {
  background-color: #34495e;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #ecf0f1;
  overflow-y: auto;
}
</style>

