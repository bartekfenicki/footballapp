<template>
  <div class="game-container">
    <div v-if="!gameStarted" class="setup">
      <h2>Player Setup</h2>
      <div>
        <label>Player 1 Name: </label>
        <input v-model="player1.name" type="text" placeholder="Enter name" />
      </div>
      <div>
        <label>Player 2 Name: </label>
        <input v-model="player2.name" type="text" placeholder="Enter name" />
      </div>
      <div>
        <label>Player 1 Symbol: </label>
        <select v-model="player1.symbol">
          <option value="X">X</option>
          <option value="O">O</option>
        </select>
      </div>
      <button @click="startGame">Start Game</button>
    </div>

    <div v-else class="game">
      <h2>{{ currentPlayer.name }}'s turn ({{ currentPlayer.symbol }})</h2>
      <p>Time left: {{ timer }}s</p>
      <div class="board">
        <div v-for="(cell, index) in board" :key="index" class="cell" @click="makeMove(index)">
          {{ cell }}
        </div>
      </div>
      <p v-if="winner">Winner: {{ winner }}</p>
      <p v-if="winner === 'Draw'">It's a Draw!</p>
      <button v-if="winner" @click="resetGame">Restart</button>
    </div>
  </div>

</template>

<script>
import { ref, onUnmounted } from "vue";
export default {

  setup() {
    const player1 = ref({ name: "", symbol: "X" });
    const player2 = ref({ name: "", symbol: "O" });
    const currentPlayer = ref(player1.value);
    const gameStarted = ref(false);
    const board = ref(Array(9).fill(""));
    const winner = ref(null);
    const timer = ref(10);
    let interval;

    const startGame = () => {
      if (!player1.value.name || !player2.value.name) {
        alert("Both players must enter names.");
        return;
      }
      player2.value.symbol = player1.value.symbol === "X" ? "O" : "X";
      currentPlayer.value = player1.value;
      gameStarted.value = true;
      startTimer();
    };

    const startTimer = () => {
      clearInterval(interval);
      timer.value = 10;
      interval = setInterval(() => {
        timer.value--;
        if (timer.value === 0) {
          switchTurn();
        }
      }, 1000);
    };

    const switchTurn = () => {
      currentPlayer.value = currentPlayer.value === player1.value ? player2.value : player1.value;
      startTimer();
    };

    const makeMove = (index) => {
      if (board.value[index] || winner.value) return;
      board.value[index] = currentPlayer.value.symbol;
      if (checkWinner()) {
        winner.value = currentPlayer.value.name;
        clearInterval(interval);
      } else if (!board.value.includes("")) {
        winner.value = "Draw";
        clearInterval(interval);
      } else {
        switchTurn();
      }
    };

    const checkWinner = () => {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
      return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board.value[a] && board.value[a] === board.value[b] && board.value[a] === board.value[c];
      });
    };

    const resetGame = () => {
      board.value = Array(9).fill("");
      winner.value = null;
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
      startGame,
      makeMove,
      resetGame,


    };
  }
};
</script>

<style>
.players {
  display: flex;
}
.players h3 {
  margin: 10px 0px;
  color: #e9700e;
}
.game-container {
  text-align: center;
  font-family: Arial, sans-serif;
}
.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
  justify-content: center;
  margin-top: 20px;
}
.cell {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  font-size: 24px;
  cursor: pointer;
  background-color: lightgray;
}
.cell:hover {
  background-color: gray;
}
</style>

