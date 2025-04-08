<template>
  <div class="game-container">
    <h1>Guess the Football Player</h1>

    <!-- Input Field -->
    <AutocompleteInput v-if = "!gameWon"
  v-model="userGuess"
  :suggestions="playerNames"
  @submitted="checkGuess"
    />

    <!-- Display Guess Feedback in a Table -->
    <div v-if="guessHistory.length > 0" class="guess-table">
      <div class="guess-row header">
        <div>Name</div>
        <div>Nationality</div>
        <div>Club</div>
        <div>Position</div>
        <div>Goals</div>
        <div>Assists</div>
        <div>League Titles</div>
        <div>Champions Leagues</div>
      </div>

      <div v-for="(guess, index) in guessHistory" :key="index" class="guess-row">
        <div class="name">{{ guess.name }}</div>
        <div :class="getMatchClass(guess.nationality, correctPlayer.nationality)">{{ guess.nationality }}</div>
        <div :class="getMatchClass(guess.current_club, correctPlayer.current_club)">{{ guess.current_club }}</div>
        <div :class="getMatchClass(guess.position, correctPlayer.position)">{{ guess.position }}</div>
        <div :class="getNumberClass(guess.goals, correctPlayer.goals)">{{ guess.goals }} ({{ getHigherLowerText(guess.goals, correctPlayer.goals) }})</div>
        <div :class="getNumberClass(guess.assists, correctPlayer.assists)">{{ guess.assists }} ({{ getHigherLowerText(guess.assists, correctPlayer.assists) }})</div>
        <div :class="getTrophyClass(guess.trophies.league_titles, correctPlayer.trophies.league_titles)">{{ guess.trophies.league_titles }} ({{ getHigherLowerText(guess.trophies.league_titles, correctPlayer.trophies.league_titles) }})</div>
        <div :class="getTrophyClass(guess.trophies.champions_leagues, correctPlayer.trophies.champions_leagues)">{{ guess.trophies.champions_leagues }} ({{ getHigherLowerText(guess.trophies.champions_leagues, correctPlayer.trophies.champions_leagues) }})</div>
      </div>
    </div>

    <!-- Correct Answer Display -->
    <div v-if="gameWon" class="winner">
      🎉 Correct! The player was <strong>{{ correctPlayer.name }}</strong>
      <button @click="startNewGame">Play Again</button>
    </div>
  </div>
</template>

<script>
import playersData from "@/players.js";
import AutocompleteInput from "./autoInput.vue";

export default {
  components: {
    AutocompleteInput
  },
  data() {
    return {
      players: playersData,
      correctPlayer: {},
      userGuess: "",
      guessHistory: [],
      gameWon: false,
      filteredSuggestions: []
    };
  },
  computed: {
    playerNames() {
      return this.players.map(player => `${player.name}`);
    }
  },
  methods: {
    startNewGame() {
      this.correctPlayer = this.players[Math.floor(Math.random() * this.players.length)];
      this.userGuess = "";
      this.guessHistory = [];
      this.gameWon = false;
      this.filteredSuggestions = [];
    },

    checkGuess() {
      if (this.gameWon) return;
      const guessedPlayer = this.players.find(p => p.name.toLowerCase() === this.userGuess.toLowerCase());

      if (!guessedPlayer) return;

      this.guessHistory.unshift(guessedPlayer);

      if (guessedPlayer.name === this.correctPlayer.name) {
        this.gameWon = true;
      }

      this.userGuess = "";
      this.filteredSuggestions = [];
    },
    getMatchClass(guess, correct) {
      return guess === correct ? "match" : "wrong";
    },

    getNumberClass(guess, correct) {
      if (guess === correct) return "match";
      return "higher-lower";
    },

    getTrophyClass(guess, correct) {
      if (guess === correct) return "match";
      if (guess > correct || guess < correct) return "higher-lower";
      return "wrong";
    },

    getHigherLowerText(guess, correct) {
      if (guess === correct) return "✅";
      return guess > correct ? "⬇️" : "⬆️" ;
    }
  },
  mounted() {
    this.startNewGame();
  }
};
</script>

<style scoped>
.game-container {
  text-align: center;
  padding: 20px;
  max-width: 700px;
  margin: auto;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  color: #000;
}

.input-container {
  position: relative;
  width: 80%;
  margin: auto;
  color: #000;
}

.guess-input {
  padding: 10px;
  width: 100%;
  color: #000;
}

.suggestions-list {
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

.suggestions-list li {
  padding: 5px;
  cursor: pointer;
}

.suggestions-list li:hover {
  background: #ddd;
}

.guess-table {
  margin-top: 15px;
  width: 100%;
  border-collapse: collapse;
}

.guess-row {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

.header {
  font-weight: bold;
  background: #ddd;
}

.match {
  background-color: #4CAF50;
  color: white;
}

.wrong {
  background-color: #FF5252;
  color: white;
}

.higher-lower {
  background-color: #FFC107;
  color: black;
}

.winner {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
</style>

