<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <div v-if="!gameStarted" key="welcome" class="welcome-container">
        <h1 class="title">The Footballdle</h1>
        <p class="rules-heading">Here are the rules:</p>
        <ul class="rules-list">
          <li>Firstly you have to blind guess the football player.</li>
          <li>After each guess you answer will be displayed with 6 characteristics of a player</li>
          <li>You will be able to see what characteristics match the correct player.</li>
          <li>Use your football knowledge to guess as fast as possible!</li>
        </ul>
        <startGameBtn @click="startGame" />
      </div>
    </transition>
  </div>
     <transition name="slide">
      <footdle v-if="showGame" key="game" />
    </transition>
</template>

<script>
import { ref } from "vue";
import footdle from "../components/games/football-dle.vue";
import startGameBtn from "@/components/animated-elements/startGameBtn.vue";

export default {
  name: "footballdleView",
  components: {
    footdle,
    startGameBtn
  },
  setup() {
    const gameStarted = ref(false);
    const showGame = ref(false);

    const startGame = () => {
      gameStarted.value = true;
      setTimeout(() => {
        showGame.value = true;
      }, 1000);
    };

    return { gameStarted, showGame, startGame };
  },
};
</script>


<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-container {
  text-align: center;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  animation: fadeIn 1s ease-in-out;
  --darker: #1e1e1e;
  --semidark: #2c2c2c;
  --lightgray: #e8e8e8;
  --unit: 10px;
  background-color: var(--darker);
  box-shadow: 0 0 var(--unit) var(--darker);
  border: calc(var(--unit) / 2) solid var(--darker);
  border-radius: var(--unit);
  position: relative;
  padding: var(--unit);
  overflow: hidden;
}
.welcome-container:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background: linear-gradient(144deg, #37FF8B, #000 50%, #37FF8B);
  filter: blur(20px);
  pointer-events: none;
  animation: keyframes-intro 1s ease-in forwards;
}
@keyframes keyframes-intro {
  100% {
    ransform: translate(-100%);
    opacity: 0;
  }
}


.title {
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.rules-heading {
  font-size: 18px;
  color: #fff;
  margin-top: 10px;
}

.rules-list {
  margin: 20px auto;
  list-style: none;
  padding: 0;
  max-width: 400px;
  text-align: left;
}

.rules-list li {
  background: #f4f4f4;
  padding: 12px;
  margin: 5px 0;
  border-radius: 8px;
  font-size: 16px;
  color: #444;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Start Button */
.start-btn {
  background: linear-gradient(135deg, #28a745, #218838);
  color: white;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease;
  margin-top: 20px;
}

.start-btn:hover {
  background: linear-gradient(135deg, #218838, #1e7e34);
  transform: scale(1.05);
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Slide Transition */
.slide-enter-active {
  animation: slideIn 0.5s ease-in-out;
}
@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Initial Fade-In Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>


