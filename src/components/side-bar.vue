<script setup>
import { RouterLink } from 'vue-router';
import logoBtn from '@/components/animated-elements/logoBtn.vue'
</script>

<template>
  <div class="layout">
    <aside class="sidebar">
      <logoBtn/>
      <nav>
        <RouterLink class="nav-btn" to="/"> Browse Players </RouterLink>
        <RouterLink class="nav-btn" to="/tic-tac-toe">Tic Tac Toe</RouterLink>
        <RouterLink class="nav-btn" to="/cluesGame">Guess the Clues</RouterLink>
        <RouterLink class="nav-btn" to="/footdle">Footballdle</RouterLink>
        <RouterLink class="nav-btn" to="/careerPath">Career Path</RouterLink>
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
  width: 300px;
  background-color: #1e1e1e;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

nav a {
  text-decoration: none;
  font-size: 1.2rem;
  text-align: center;
  border-radius: 5px;
}


.content {
  flex: 1;
  padding: 20px;
  width: 100%;
  height: 100%;
 /*  --s: 37px;

  --c: #0000, #282828 0.5deg 119.5deg, #0000 120deg;
  --g1: conic-gradient(from 60deg at 56.25% calc(425% / 6), var(--c));
  --g2: conic-gradient(from 180deg at 43.75% calc(425% / 6), var(--c));
  --g3: conic-gradient(from -60deg at 50% calc(175% / 12), var(--c));
  background: var(--g1), var(--g1) var(--s) calc(1.73 * var(--s)), var(--g2),
    var(--g2) var(--s) calc(1.73 * var(--s)), var(--g3) var(--s) 0,
    var(--g3) 0 calc(1.73 * var(--s)) #1e1e1e;
  background-size: calc(2 * var(--s)) calc(3.46 * var(--s)); */
  --color: #37FF8B33;
  background-color: #191a1a;
  background-image: linear-gradient(
      180deg,
      transparent 24%,
      var(--color) 25%,
      var(--color) 26%,
      transparent 27%,
      transparent 74%,
      var(--color) 75%,
      var(--color) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      45deg,
      transparent 24%,
      var(--color) 35%,
      var(--color) 26%,
      transparent 17%,
      transparent 74%,
      var(--color) 75%,
      var(--color) 76%,
      transparent 77%,
      transparent
    );
  background-size: 55px 55px;
  overflow-y: auto;
}

.nav-btn {
  align-items: center;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
  text-transform: uppercase;
  outline: 0;
  border: 0;
  padding: 1rem;
}

.nav-btn:hover {
  color: #37FF8B;
  filter: drop-shadow(0 0 23px #37FF8B)
}

.nav-btn:before {
  background-color: #37FF8B;
  color: #37FF8B;
  content: "";
  display: inline-block;
  height: 1px;
  margin-right: 10px;
  transition: all .42s cubic-bezier(.25,.8,.25,1);
  width: 0;
}

.nav-btn:hover:before {
  background-color: #37FF8B;
  color: #37FF8B;
  width: 3rem;
}


</style>

