<template>
  <div>
    <button id="press-to-display" @click="displayMessage">
      {{ buttonText }}
    </button>
    <QuizTest v-if="!data.isClosed" :title-quiz="WORDINGPAGE.titleQuiz" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from "vue";
import QuizTest from "./components/QuizTest.vue";

interface WordingPage {
  titleQuiz: string;
  closeQuiz: string;
  openQuiz: string;
}

const WORDINGPAGE: WordingPage = {
  titleQuiz: "Mon super Quiz",
  closeQuiz: "Fermer le Quiz",
  openQuiz: "Lancer le Quiz",
};
const data = reactive<{ isClosed: boolean }>({
  isClosed: true,
});

const displayMessage = () => {
  data.isClosed = !data.isClosed;
};
const buttonText = computed<string>(() =>
  data.isClosed ? WORDINGPAGE.openQuiz : WORDINGPAGE.closeQuiz
);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  margin: 10px;
  padding: 10px;
  background-color: #ff3660;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 18px;
}
</style>
