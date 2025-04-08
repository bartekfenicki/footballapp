<template>
  <div v-if="players" class="container">
    <h2>Players</h2>

    <!-- Tabs -->
    <div class="tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = tab"
        :class="{ active: activeTab === tab }"
      >
        {{ tab }}
      </button>
    </div>

    <!-- All Players List -->
    <div v-if="activeTab === 'All Players'">
      <h3>All Players</h3>
      <ul class="player-list">
        <li v-for="player in players" :key="player.id" class="player-card">
          <strong>{{ player.name }}</strong> <br>
          - {{ player.position }} <br>
          - {{ player.assists }} Assists <br>
          - {{ player.nationality }} <br>
          - {{ player.current_club }} <br>
        </li>
      </ul>
    </div>

    <!-- Search by Position -->
    <div v-if="activeTab === 'Position'">
      <h3>Filter by Position</h3>
      <select v-model="selectedPosition" class="input-field">
        <option value="">All Positions</option>
        <option value="Goalkeeper">Goalkeeper</option>
        <option value="Defender">Defender</option>
        <option value="Midfielder">Midfielder</option>
        <option value="Forward">Forward</option>
        <option value="Striker">Striker</option>
      </select>
      <ul class="player-list">
        <li v-for="player in filteredPlayersPosition" :key="player.id" class="player-card">
          <strong>{{ player.name }}</strong> <br>
          - {{ player.position }} <br>
          - {{ player.nationality }} <br>
          - {{ player.current_club }} <br>
        </li>
      </ul>
    </div>

    <!-- Search by Nationality -->
    <div v-if="activeTab === 'Nationality'">
      <h3>Filter by Nationality</h3>
      <input type="text" v-model="selectedNationality" class="input-field" placeholder="Enter Nationality">
      <ul class="player-list">
        <li v-for="player in filteredPlayersNationality" :key="player.id" class="player-card">
          <strong>{{ player.name }}</strong> <br>
          - {{ player.position }} <br>
          - {{ player.nationality }} <br>
          - {{ player.current_club }} <br>
        </li>
      </ul>
    </div>

    <!-- Search by Club -->
    <div v-if="activeTab === 'Club'">
      <h3>Filter by Club</h3>
      <input type="text" v-model="selectedClub" class="input-field" placeholder="Enter Club">
      <ul class="player-list">
        <li v-for="player in filteredPlayersClub" :key="player.id" class="player-card">
          <strong>{{ player.name }}</strong> <br>
          - {{ player.nationality }} <br>
          - {{ player.current_club }} <br>
          - Previous: {{ player.previous_clubs.join(", ") }} <br>
        </li>
      </ul>
    </div>

    <!-- Filter by Goals & Assists -->
    <div v-if="activeTab === 'Goals & Assists'">
      <h3>Filter by Goals & Assists</h3>
      <input type="number" v-model="numberGoals" class="input-field" placeholder="Min Goals">
      <input type="number" v-model="numberAssists" class="input-field" placeholder="Min Assists">
      <ul class="player-list">
        <li v-for="player in filteredPlayersGoalsandAssists" :key="player.id" class="player-card">
          <strong>{{ player.name }}</strong> <br>
          - {{ player.goals }} Goals <br>
          - {{ player.assists }} Assists <br>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import playersData from "@/players.js";

export default {
  setup() {
    const players = ref(playersData);
    const selectedPosition = ref("");
    const selectedNationality = ref("");
    const selectedClub = ref("");
    const numberGoals = ref(0);
    const numberAssists = ref(0);
    const activeTab = ref("All Players"); // Default active tab

    const tabs = ["All Players", "Position", "Nationality", "Club", "Goals & Assists"];

    const filteredPlayersPosition = computed(() => {
      return selectedPosition.value
        ? players.value.filter(player => player.position === selectedPosition.value)
        : players.value;
    });

    const filteredPlayersNationality = computed(() => {
      return selectedNationality.value
        ? players.value.filter(player => player.nationality.toLowerCase().includes(selectedNationality.value.toLowerCase()))
        : players.value;
    });

    const filteredPlayersClub = computed(() => {
      return selectedClub.value
        ? players.value.filter(player =>
            player.current_club.toLowerCase().includes(selectedClub.value.toLowerCase()) ||
            player.previous_clubs.some(club => club.toLowerCase().includes(selectedClub.value.toLowerCase()))
          )
        : players.value;
    });

    const filteredPlayersGoalsandAssists = computed(() => {
      return players.value.filter(player =>
        player.goals >= numberGoals.value && player.assists >= numberAssists.value
      );
    });

    return {
      players,
      selectedPosition,
      selectedNationality,
      selectedClub,
      numberGoals,
      numberAssists,
      activeTab,
      tabs,
      filteredPlayersPosition,
      filteredPlayersNationality,
      filteredPlayersClub,
      filteredPlayersGoalsandAssists
    };
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
  text-align: center;
}

h2 {
  margin-bottom: 15px;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.tabs button {
  padding: 10px 20px;
  border: none;
  background-color: #eee;
  cursor: pointer;
  margin: 0 5px;
  transition: 0.3s;
}

.tabs button.active {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.player-list {
  list-style-type: none;
  padding: 0;
}

.player-card {
  background: #f9f9f9;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}
</style>

