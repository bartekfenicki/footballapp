<script setup>
import ModelViewer from '@/components/models/modelViewer.vue';
import QuickPlayCard from '@/components/home/quickPlayCard.vue'
</script>

<template>
  <main>
    <div class="top-section">
      <div class="left-box">
          <div class="games-container">
            <QuickPlayCard targetPath="/tic-tac-toe" promptText="FOOTBALL TIC-TAC TOE" />
            <QuickPlayCard targetPath="/cluesGame" promptText="FOOTBALL GUESS CLUES" />
            <QuickPlayCard targetPath="/footdle" promptText="FOOTBALL WORDLE" />
            <QuickPlayCard targetPath="/careerPath" promptText="FOOTBALL CAREER PATH" />
          </div>
      </div>
       <ModelViewer />
    </div>
  </main>
</template>
<style scoped>
.top-section {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.games-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  gap: 10px;
}

</style>
