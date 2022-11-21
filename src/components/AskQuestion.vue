<template>
  <div>
    <h2 id="question-text">{{ question.text }}</h2>
    <button id="select-true-answer" @click="respondAnAnswer(true)">
      {{ WORDINGPAGE.true }}
    </button>
    <button id="select-false-answer" @click="respondAnAnswer(false)">
      {{ WORDINGPAGE.false }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, PropType } from "vue";

interface Question {
  text: string;
  answer: boolean | null;
}
interface WordingPage {
  true: string;
  false: string;
}

const WORDINGPAGE: WordingPage = {
  true: "Vrai",
  false: "Faux",
};
const props = defineProps({
  question: { type: Object as PropType<Question>, default: () => ({}) },
  index: { type: Number },
});

const emit = defineEmits(["emitAnswer"]);

const respondAnAnswer = (value: boolean) => {
  emit("emitAnswer", { index: props.index, answer: value });
};
</script>

<style scoped>
button {
  margin: 10px;
  width: 80px;
  padding: 5px;
  border: 2px solid grey;
  border-radius: 3px;
  color: white;
  background-color: black;
}
</style>
