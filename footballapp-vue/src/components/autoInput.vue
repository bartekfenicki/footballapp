<template>
  <div class="input-container">
    <!-- Input Wrapper -->
    <div class="relative w-full">
      <input
        v-model="userInput"
        @input="filterSuggestions"
        @keyup.enter="emitSelection"
        placeholder="Enter player's name"
        class="guess-input"
      />

      <!-- Suggestions List -->
      <ul v-if="filteredSuggestions.length" class="suggestions-list">
        <li
          v-for="(suggestion, index) in filteredSuggestions"
          :key="index"
          @click="selectSuggestion(suggestion)"
        >
          {{ suggestion }}
        </li>
      </ul>
    </div>

    <button class="btn submit-btn" @click="emitSelection">Submit</button>
  </div>
</template>

<script>
export default {
  props: {
    suggestions: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      userInput: this.modelValue,
      filteredSuggestions: []
    };
  },
  watch: {
    modelValue(newValue) {
      this.userInput = newValue;
    }
  },
  methods: {
    filterSuggestions() {
      if (this.userInput.length === 0) {
        this.filteredSuggestions = [];
        return;
      }

      this.filteredSuggestions = this.suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(this.userInput.toLowerCase())
      );
    },
    selectSuggestion(suggestion) {
      this.userInput = suggestion;
      this.filteredSuggestions = [];
      this.$emit("update:modelValue", suggestion);
    },
    emitSelection() {
      this.$emit("update:modelValue", this.userInput);
      this.$emit("submitted", this.userInput);
    }
  }
};
</script>

<style scoped>
.input-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.relative {
  position: relative;
  width: 100%;
}

.guess-input {
  width: 100%;
  padding: 10px;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.suggestions-list {
  position: absolute;
  left: 0;
  top: 100%; /* This ensures the list appears below the input */
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
  max-height: 150px;
  overflow-y: auto;
  z-index: 10;
  list-style: none;
  padding: 0;
}

.suggestions-list li {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}

.suggestions-list li:last-child {
  border-bottom: none;
}

.suggestions-list li:hover {
  background: #f0f0f0;
}

.btn {
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  background-color: #28a745;
  color: white;
  transition: all 0.3s ease;
}

.submit-btn {
  width: 200px;
  margin: 0 auto;
}

.btn:hover {
  background-color: #218838;
}
</style>
