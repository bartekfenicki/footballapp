<template>
  <div class="input-container">
    <!-- Input Field -->
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
  gap: 5px;
}

.guess-input {
  flex: 1;
  padding: 10px;
  color: #000;
}

.suggestions-list {
  position: absolute;
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
  padding: 5px;
  cursor: pointer;
}

.suggestions-list li:hover {
  background: #ddd;
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
.submit-btn{
  width: 200px;
  margin: 0 auto;
}

.btn:hover {
  background-color: #218838;
}
</style>
