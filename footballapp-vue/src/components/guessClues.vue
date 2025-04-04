<template>
  <div class="game-container">
    <h3 class="title">Guess the Player</h3>

    <div class="info-box">
      <p><strong>Nationality:</strong> {{ correctPlayer.nationality }}</p>
        <p><strong>Age:</strong> {{ correctPlayer.age }}</p>

        <p v-for="(clue, index) in revealedClues" :key="index" class="clue">Clue {{ index + 1 }}: {{ clue }}</p>

    </div>

    <AutocompleteInput v-if = "!gameWon"
  v-model="userGuess"
  :suggestions="playerNames"
  @submitted="checkGuess"
    />

    <p class="lives">Lives left:</p>
<div class="lives-container">
  <div
    v-for="(life, index) in livesArray"
    :key="index"
    class="life"
    :class="{ faded: life === false }"
  >
    <div class="football-icon"></div>
  </div>
</div>

    <div class="wrong-guesses">
      <p v-if="wrongGuesses.length">Wrong Guesses:</p>
      <ul>
        <li v-for="guess in wrongGuesses" :key="guess">{{ guess }}</li>
      </ul>
    </div>

    <div v-if="gameWon" class="win-container">
      <p class="win-message">🎉 You Win! 🎉</p>
      <div class="correct-player-box">
        <p>Correct Player:</p>
        <h2>{{ correctPlayer.firstName }} {{ correctPlayer.lastName }}</h2>
      </div>
      <button @click="startNewGame" class="play-again">Play Again</button>
    </div>

    <div v-if="gameOver && !gameWon">
      <p class="result">Game Over! The correct player was: <strong>{{ correctPlayer.firstName }} {{ correctPlayer.lastName }}</strong></p>
      <button @click="startNewGame">Play Again</button>
    </div>
    <button v-if="!gameOver && !gameWon" @click="restartGame">Restart</button>
  </div>
</template>

<script>
import playersData from "@/playersClues.js";
import AutocompleteInput from "./autoInput.vue";

export default {
  components: {
    AutocompleteInput
  },
  data() {
    return {
      players: playersData,
      correctPlayer: {},
      revealedClues: [],
      userGuess: "",
      wrongGuesses: [],
      lives: 6,
      gameOver: false,
      gameWon: false,
      filteredSuggestions: [],
    };
  },
  computed: {
    playerNames() {
      return this.players.map(player => `${player.firstName} ${player.lastName}`);
    }
  },
  methods: {
    startNewGame() {
      this.correctPlayer = this.players[Math.floor(Math.random() * this.players.length)];
      this.revealedClues = [];
      this.userGuess = "";
      this.wrongGuesses = [];
      this.lives = 6;
      this.gameOver = false;
      this.gameWon = false;
      this.filteredSuggestions = [];
      this.livesArray = [true, true, true, true, true, true];
    },
    restartGame() {
      this.startNewGame();
    },
    checkGuess() {
      if (
        this.userGuess.trim().toLowerCase() === this.correctPlayer.firstName.toLowerCase() ||
        this.userGuess.trim().toLowerCase() === this.correctPlayer.lastName.toLowerCase() ||
        this.userGuess.trim().toLowerCase() === `${this.correctPlayer.firstName.toLowerCase()} ${this.correctPlayer.lastName.toLowerCase()}`
      ) {
        this.gameWon = true;
        return;
      } else {
        this.wrongGuesses.push(this.userGuess);
        this.lives -= 1;
        this.livesArray[this.lives] = false;
        if (this.revealedClues.length < 5) {
          this.revealedClues.push(this.correctPlayer.clues[this.revealedClues.length]);
        }
        if (this.lives <= 0) {
          this.gameOver = true;
        }
      }
      this.userGuess = "";
      this.filteredSuggestions = [];
    },
    filterSuggestions() {
        if (this.userGuess.length === 0) {
        this.filteredSuggestions = [];
        return;
      }
      const input = this.userGuess.toLowerCase();
      this.filteredSuggestions = this.players
        .filter(player =>
          player.firstName.toLowerCase().startsWith(input) ||
          player.lastName.toLowerCase().startsWith(input)
        )
        .map(player => `${player.firstName} ${player.lastName}`);
    },
    selectSuggestion(name) {
      this.userGuess = name;
      this.filteredSuggestions = [];
    }
  },
  mounted() {
    this.startNewGame();
  }
};
</script>

<style scoped>
.game-container {
  max-width: 450px;
  margin: auto;
  text-align: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 24px;
  margin-bottom: 15px;
  color: #000;
}
.info-box {
  background: #e3f2fd;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  color: #000;
}

.suggestions {
  position: absolute;
  width: 100%;
  padding: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
  max-height: 150px;
  overflow-y: auto;
  z-index: 10;
  list-style: none;
}

.suggestions li {
  padding: 5px;
  cursor: pointer;
}

.suggestions li:hover {
  background: #ddd;
}

.lives {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
}

.low-lives {
  color: red;
}

.wrong-guesses ul {
  list-style: none;
  padding: 0;
}

.wrong-guesses li {
  color: red;
  font-weight: bold;
  animation: fadeIn 0.5s;
}

.button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s;
}

.button:hover {
  background-color: #0056b3;
}

.secondary {
  background-color: #6c757d;
}

.clue {
  color: darkblue;
  font-style: italic;
}

.result {
  font-size: 18px;
  font-weight: bold;
  color: red;
}

.win-container {
  background: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  animation: fadeIn 1s ease-in-out;
}

.win-message {
  font-size: 24px;
  font-weight: bold;
  color: green;
  animation: bounce 1s ease-in-out infinite alternate;
}

.correct-player-box {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  animation: popUp 0.5s ease-in-out;
}

.play-again {
  animation: pulse 1.5s infinite;
}

.input-container {
  position: relative;
}

.input-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

@keyframes bounce {
  0% { transform: translateY(0); }
  100% { transform: translateY(-5px); }
}

@keyframes popUp {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
.lives-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 10px 20px 10px;
}

.life {
  width: 40px;
  height: 40px;
  background-image: url('../assets/icons/football.png');
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease-in-out;
}

.life.faded {
  opacity: 0;
}

.football-icon {
  width: 100%;
  height: 100%;
  background-image: url('../assets/icons/football.png');
  background-size: cover;
  background-position: center;
  pointer-events: none; /* Prevent click */
}

</style>






@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

