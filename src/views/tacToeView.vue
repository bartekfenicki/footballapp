<template>
  <div class="game-container">
    <div v-if="!gameStarted" class="setup">
      <h2>Football Tic Tac Toe Setup</h2>
      <div>
        <label>Player 1 Name:</label>
        <input v-model="player1.name" type="text" placeholder="Enter name" />
      </div>
      <div>
        <label>Player 2 Name:</label>
        <input v-model="player2.name" type="text" placeholder="Enter name" />
      </div>
      <button @click="startGame">Start Game</button>
    </div>

    <div v-else class="game">
      <h2>{{ currentPlayer.name }}'s turn</h2>
      <p>Time left: {{ timer }}s</p>
      <div class="board">
        <div
          v-for="(cell, index) in board"
          :key="index"
          class="cell"
        >
          <div class="cell-clue">{{ getCategory(index) }}</div>
          <auto-input
            v-if="!winner && !cell.played"
            :suggestions="playerNames"
            v-model="cell.input"
            @submitted="name => makeMove(index, name)"
          />
          <div v-else class="cell-value">{{ cell.played }}</div>
        </div>
      </div>
      <p v-if="winner && winner !== 'Draw'">Winner: {{ winner }}</p>
      <p v-if="winner === 'Draw'">It's a Draw!</p>
      <button v-if="winner" @click="resetGame">Restart</button>
    </div>
  </div>
</template>

<script>
import { ref, onUnmounted, onMounted, computed } from 'vue';
import playersData from '@/players.js';
import AutoInput from '@/components/autoInput.vue';

export default {
  components: { AutoInput },
  setup() {
    const player1 = ref({ name: '', symbol: 'P1' });
    const player2 = ref({ name: '', symbol: 'P2' });
    const currentPlayer = ref(player1.value);
    const gameStarted = ref(false);
    const winner = ref(null);
    const timer = ref(15);
    const board = ref([]);
    const shuffle = (arr) => {
      return [...arr].sort(() => Math.random() - 0.5);
    };
    let interval;

    onMounted(() => {
      playersData
    })
    const rowCategories = ref([]); // clubs
    const colCategories = ref([]); // nationalities
    const playerNames = computed(() => playersData.map(p => p.name));
    const getPlayerByName = name => playersData.find(p => p.name === name);
    const usedPlayers = ref(new Set());
    const pairToPlayers = new Map();
      for (const player of playersData) {
        const clubs = [player.current_club, ...player.previous_clubs];
        for (const club of clubs) {
          const key = `${club}|||${player.nationality}`;
          if (!pairToPlayers.has(key)) {
            pairToPlayers.set(key, []);
          }
          pairToPlayers.get(key).push(player.name);
        }
      }
      console.log(pairToPlayers)
    const allClubs = [...new Set(playersData.flatMap(p => [p.current_club, ...p.previous_clubs]))];
    const allNations = [...new Set(playersData.map(p => p.nationality))];

    const clubsForNation = allNations.reduce((acc, nation) => {
      acc[nation] = [...new Set(
        playersData
          .filter(p => p.nationality === nation)
          .flatMap(p => [p.current_club, ...p.previous_clubs])
      )];
      return acc;
    }, {});
    console.log(clubsForNation)

    const nationsForClub = allClubs.reduce((acc, club) => {
      acc[club] = [...new Set(
        playersData
          .filter(p => [p.current_club, ...p.previous_clubs].includes(club))
          .map(p => p.nationality)
      )];
      return acc;
    }, {});
    console.log(nationsForClub)

    const clubsSharing3OrMoreNations = [];
    const clubs = Object.keys(nationsForClub);
    for (let i = 0; i < clubs.length; i++) {
      const clubA = clubs[i];
      const nationsA = new Set(nationsForClub[clubA]);

      for (let j = i + 1; j < clubs.length; j++) {
        const clubB = clubs[j];
        const nationsB = new Set(nationsForClub[clubB]);

        // Count shared nationalities
        const sharedCount = [...nationsA].filter(nat => nationsB.has(nat)).length;

        if (sharedCount >= 3) {
          // Add clubA and clubB if not already added
          if (!clubsSharing3OrMoreNations.includes(clubA)) clubsSharing3OrMoreNations.push(clubA);
          if (!clubsSharing3OrMoreNations.includes(clubB)) clubsSharing3OrMoreNations.push(clubB);
        }
      }
    }
    console.log(clubsSharing3OrMoreNations);


    const nationalitiesSharing3OrMoreClubs = [];
    const nations = Object.keys(clubsForNation);
    for (let i = 0; i < nations.length; i++) {
      const natA = nations[i];
      const clubsA = new Set(clubsForNation[natA]);

      for (let j = i + 1; j < nations.length; j++) {
        const natB = nations[j];
        const clubsB = new Set(clubsForNation[natB]);

        // Count shared clubs
        const sharedCount = [...clubsA].filter(club => clubsB.has(club)).length;

        if (sharedCount >= 3) {
          if (!nationalitiesSharing3OrMoreClubs.includes(natA)) nationalitiesSharing3OrMoreClubs.push(natA);
          if (!nationalitiesSharing3OrMoreClubs.includes(natB)) nationalitiesSharing3OrMoreClubs.push(natB);
        }
      }
    }
    console.log(nationalitiesSharing3OrMoreClubs);

    function generateValidCategories() {
      const maxAttempts = 1000;
      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const testRows = shuffle(clubsSharing3OrMoreNations).slice(0, 3);
        const testCols = shuffle(nationalitiesSharing3OrMoreClubs).slice(0, 3);
        const usedPlayers = new Set();
        let isValidGrid = true;

        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 3; c++) {
            const key = `${testRows[c]}|||${testCols[r]}`;
            const players = shuffle(pairToPlayers.get(key) || [])
            const availablePlayers = players.filter(p => !usedPlayers.has(p));
            if (availablePlayers.length === 0) {
              isValidGrid = false;
              break;
            }
            // Assign the first available player to this cell
            usedPlayers.add(availablePlayers[0]);
          }
          if (!isValidGrid) break;
        }

        if (isValidGrid) {
          rowCategories.value = testRows;
          colCategories.value = testCols;
          return;
        }
      }

      alert("Couldn't generate a valid 3x3 grid. Add more player diversity.");
      gameStarted.value = false;
    }




    const getCategory = index => {
      const row = Math.floor(index / 3);
      const col = index % 3;
      const colVal = colCategories.value[col] || '?';
      const rowVal = rowCategories.value[row] || '?';
      return `${colVal} | ${rowVal}`;
    };

    const startGame = () => {
      if (!player1.value.name || !player2.value.name) {
        alert('Both players must enter names.');
        return;
      }
      if (!playersData) {
      alert("Not enough player data loaded to start the game.");
      return;
}
      generateValidCategories();
      board.value = Array.from({ length: 9 }, () => ({ input: '', played: null }));
      currentPlayer.value = player1.value;
      gameStarted.value = true;
      startTimer();
    };

    const startTimer = () => {
      clearInterval(interval);
      timer.value = 15;
      interval = setInterval(() => {
        timer.value--;
        if (timer.value === 0) {
          switchTurn();
        }
      }, 1000);
    };

    const switchTurn = () => {
      currentPlayer.value =
        currentPlayer.value === player1.value ? player2.value : player1.value;
      startTimer();
    };

    const makeMove = (index, name) => {
      const cell = board.value[index];
      if (cell.played || winner.value) return;

      const player = getPlayerByName(name);
      if (!player) {
        alert('Invalid player');
        return;
      }
      if (usedPlayers.value.has(name)) {
        alert('This player has already been used in another cell.');
        return;
      }

      const row = Math.floor(index / 3);
      const col = index % 3;
      const validClub = [player.current_club, ...player.previous_clubs].includes(rowCategories.value[row]);
      const validNationality = player.nationality === colCategories.value[col];

      if (validClub && validNationality) {
        cell.played = name;
        usedPlayers.value.add(name);
        clearInterval(interval);
        if (checkWinner()) {
          winner.value = currentPlayer.value.name;
        } else if (board.value.every(c => c.played)) {
          winner.value = 'Draw';
        } else {
          switchTurn();
        }
      } else {
        alert('Player does not match category requirements.');
      }
    };

//     function getCombinations(arr, k) {
//   const results = [];
//   const combo = [];

//   const dfs = (start) => {
//     if (combo.length === k) {
//       results.push([...combo]);
//       return;
//     }

//     for (let i = start; i < arr.length; i++) {
//       combo.push(arr[i]);
//       dfs(i + 1);
//       combo.pop();
//     }
//   };

//   dfs(0);
//   return results;
// }

    const checkWinner = () => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      return lines.some(([a, b, c]) => {
        return (
          board.value[a].played &&
          board.value[a].played === board.value[b].played &&
          board.value[a].played === board.value[c].played
        );
      });
    };

    const resetGame = () => {
      board.value = [];
      winner.value = null;
      usedPlayers.value.clear();
      gameStarted.value = false;
      clearInterval(interval);
    };

    onUnmounted(() => clearInterval(interval));

    return {
      player1,
      player2,
      currentPlayer,
      gameStarted,
      board,
      winner,
      timer,
      playerNames,
      startGame,
      resetGame,
      makeMove,
      getCategory,
      usedPlayers
    };
  }
};
</script>

<style scoped>
.game-container {
  max-width: 600px;
  margin: auto;
  font-family: Arial, sans-serif;
  text-align: center;
}
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 20px;
}
.cell {
  border: 1px solid #ccc;
  padding: 10px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  border-radius: 8px;
}
.cell-clue {
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 6px;
}
.cell-value {
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;
}
.setup input,
button {
  margin: 10px 0;
}
</style>
