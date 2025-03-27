<template>
  <div class="game-container">
    <h3>Guess the Player</h3>

    <!-- Display Remaining Lives -->
    <div class="lives">
      <p>You have <strong>{{ lives }}</strong> lives left.</p>
    </div>

    <!-- Display Clues -->
    <div v-if="gameInProgress">
      <p>Clue 1: <strong>{{ clues[0] }}</strong></p>
      <p v-if="lives <= 4">Clue 2: <strong>{{ clues[1] }}</strong></p>
      <p v-if="lives <= 2">Clue 3: <strong>{{ clues[2] }}</strong></p>

      <!-- Input for Guess -->
      <input class="input" v-model="userGuess" placeholder="Enter player name" />
      <button @click="checkGuess">Submit Guess</button>
    </div>

    <!-- Display Wrong Guesses -->
    <div v-if="wrongGuesses.length > 0" class="wrong-guesses">
      <p>Wrong Attempts:</p>
      <ul>
        <li v-for="(guess, index) in wrongGuesses" :key="index">{{ guess }}</li>
      </ul>
    </div>

    <!-- Display Result -->
    <div v-if="result !== null" class="result">
      <p v-if="result">Correct! You guessed the player.</p>
      <p v-else>Game Over! The correct player was <strong>{{ correctPlayer.name }}</strong>.</p>
    </div>

    <!-- Display Correct Player Info After 5 Guesses -->
    <div v-if="showPlayerInfo" class="player-info">
      <p>Correct Player: <strong>{{ correctPlayer.name }}</strong></p>
      <p>Nationality: {{ correctPlayer.nationality }}</p>
      <p>Current Club: {{ correctPlayer.current_club }}</p>
    </div>

    <!-- Buttons -->
    <div class="buttons">
      <button v-if="!gameInProgress" @click="startNewGame">Play Again</button>
      <button v-if="gameInProgress" @click="restartGame">Restart</button>
    </div>
  </div>
</template>

<script>
import playersData from "@/players.js";

export default {
  data() {
    return {
      players: playersData,
      correctPlayer: null,
      clues: [],
      userGuess: "",
      result: null,
      lives: 5,
      showPlayerInfo: false,
      gameInProgress: false,
      wrongGuesses: [],
    };
  },
  methods: {
    generateRandomPlayer() {
      const randomPlayer = this.players[Math.floor(Math.random() * this.players.length)];
      this.correctPlayer = randomPlayer;
      this.clues = this.generateClues(randomPlayer);
      this.gameInProgress = true;
      this.result = null;
      this.showPlayerInfo = false;
      this.wrongGuesses = [];
      this.lives = 5;
    },

    generateClues(player) {
      return [
        `A player from ${player.nationality}`,
        `Played for ${player.current_club}`,
        `Has won ${player.trophies.length > 0 ? player.trophies.join(", ") : "no major trophies"}`,
      ];
    },

    checkGuess() {
      if (this.userGuess.trim().toLowerCase() === this.correctPlayer.name.toLowerCase()) {
        this.result = true;
        this.showPlayerInfo = true;
        this.gameInProgress = false;
      } else {
        this.lives -= 1;
        this.wrongGuesses.push(this.userGuess);
        if (this.lives === 0) {
          this.result = false;
          this.showPlayerInfo = true;
          this.gameInProgress = false;
        }
      }
      this.userGuess = "";
    },

    restartGame() {
      this.generateRandomPlayer();
    },

    startNewGame() {
      this.generateRandomPlayer();
    },
  },
  mounted() {
    this.startNewGame();
  },
};
</script>

<style scoped>
.game-container {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
}

.lives p {
  font-size: 18px;
  font-weight: bold;
  color: red;
}

.wrong-guesses {
  margin-top: 15px;
}

.wrong-guesses ul {
  list-style: none;
  padding: 0;
}

.wrong-guesses li {
  color: red;
  font-weight: bold;
}

.result {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
}

.player-info {
  margin-top: 15px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}
.input {
  margin: 5px;
}

button:hover {
  background-color: #0056b3;
}
</style>

