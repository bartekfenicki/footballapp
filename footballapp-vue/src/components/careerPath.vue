<template>
  <div class="game-container">
    <h1>Guess the Footballer by Career Path</h1>

    <!-- Lives Display -->
    <div class="lives">{{ lives }} Lives Remaining</div>

    <!-- Club Logos Display -->
    <div class="club-logos">
      <img
        v-for="(club, index) in getClubLogos()"
        :key="index"
        :src="club.image"
        :alt="club.name"
        class="club-logo fade-in"
      />
    </div>

    <!-- Input Field with Autocomplete -->
    <!-- <div v-if="!gameWon" class="input-container">
      <input
        v-model="userGuess"
        @input="filterSuggestions"
        @keyup.enter="checkGuess"
        placeholder="Enter player's name"
        class="guess-input"
      />
      <ul v-if="filteredSuggestions.length" class="suggestions-list">
        <li v-for="(player, index) in filteredSuggestions" :key="index" @click="selectSuggestion(player.name)">
          {{ player.name }}
        </li>
      </ul>

      <button class="btn" @click="checkGuess">Submit</button>
    </div> -->

    <AutocompleteInput v-if = "!gameWon"
  v-model="userGuess"
  :suggestions="playerNames"
  @submitted="checkGuess"
/>


    <!-- Restart Button -->
    <button v-if="!gameWon" @click="startNewGame" class="btn restart-btn">🔄 Restart</button>

    <!-- Game Over Message -->
    <transition name="fade">
      <div v-if="gameOver" class="game-over">
        ❌ Game Over! The correct player was
        <strong>{{ correctPlayer.first_name }} {{ correctPlayer.last_name }}</strong>.
        <button @click="startNewGame" class="btn">Try Again</button>
      </div>
    </transition>

    <!-- Winning Message -->
    <transition name="fade">
      <div v-if="gameWon" class="winner">
        🎉 Correct! The player was
        <strong>{{ correctPlayer.first_name }} {{ correctPlayer.last_name }}</strong>.
        <button @click="startNewGame" class="btn">Play Again</button>
      </div>
    </transition>
  </div>
</template>

<script>
import AutocompleteInput from "@/components/autoInput.vue";
import players from "@/playersCareer.js";

export default {
  components: {
    AutocompleteInput
  },
  data() {
    return {
      players,
      correctPlayer: { previous_clubs: [], current_club: null },
      userGuess: "",
      lives: 4,
      gameOver: false,
      gameWon: false,
    };
  },
  computed: {
    playerNames() {
      return this.players.map(player => `${player.first_name} ${player.last_name}`);
    }
  },
  methods: {
    getClubLogos() {
      if (!this.correctPlayer) return [];
      const previousClubs = this.correctPlayer.previous_clubs ?? []; // Ensure array
      const currentClub = this.correctPlayer.current_club ? [this.correctPlayer.current_club] : [];
      return previousClubs.concat(currentClub);
    },
    startNewGame() {
      this.correctPlayer = this.players[Math.floor(Math.random() * this.players.length)];
      this.userGuess = "";
      this.lives = 4;
      this.gameOver = false;
      this.gameWon = false;
      this.filteredSuggestions = [];
    },
    checkGuess(name) {
      if (this.gameWon || this.gameOver) return;

      const guessedPlayer = this.players.find(
        (p) => p.first_name.toLowerCase() + " " + p.last_name.toLowerCase() === name.toLowerCase()
      );

      if (!guessedPlayer) return;

      if (guessedPlayer.first_name === this.correctPlayer.first_name && guessedPlayer.last_name === this.correctPlayer.last_name) {
        this.gameWon = true;
      } else {
        this.lives--;
        if (this.lives === 0) {
          this.gameOver = true;
        }
      }

      this.userGuess = "";
    }
  },
  mounted() {
    this.startNewGame();
  }
};
</script>


<style>
/* General Styles */
.game-container {
  text-align: center;
  font-family: 'Arial', sans-serif;
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Title */
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

/* Lives Display */
.lives {
  font-size: 18px;
  margin-bottom: 10px;
  color: red;
}

/* Club Logos */
.club-logos {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}
.club-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  transition: transform 0.3s ease;
}
.club-logo:hover {
  transform: scale(1.1);
}

/* Input and Buttons */
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
.btn {
  margin-top: 5px;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  transition: all 0.3s ease;
}
.submit-btn {
  background-color: #28a745;
  color: white;
}
.submit-btn:hover {
  background-color: #218838;
}
.restart-btn {
  background-color: #ffc107;
  color: black;
  margin-top: 15px;
}
.restart-btn:hover {
  background-color: #e0a800;
}

/* Game Over & Winner Screens */
.winner, .game-over {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
  border-radius: 8px;
  animation: popIn 0.5s ease;
}
.winner {
  background-color: #28a745;
  color: white;
}
.game-over {
  background-color: #dc3545;
  color: white;
}

/* Animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
@keyframes popIn {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
.fade-in {
  animation: fadeIn 0.8s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
