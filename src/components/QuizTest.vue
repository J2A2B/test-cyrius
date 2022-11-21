<template>
  <div class="entry-quiz">
    <h1 id="user-text">{{ titleQuiz }}</h1>
    <div v-if="!displayTextEnd">
      <template v-for="(question, i) in data.questions">
        <AskQuestion
          v-if="i === data.questionIndex"
          :key="i"
          :index="i"
          :question="question"
          @emitAnswer="triggerAnswer"
        />
      </template>
    </div>
    <div v-else>
      <p id="success-message" v-if="isCorrectAnswer" class="success">
        {{ WORDINGPAGE.success }}
      </p>
      <p id="error-message" v-else class="error">
        {{ WORDINGPAGE.error }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, reactive, computed } from "vue";
import AskQuestion from "./AskQuestion.vue";

interface Question {
  text: string;
  answer: boolean | null;
  correctAnswer: boolean;
}
interface Value {
  index: number;
  answer: boolean | null;
}
interface WordingPage {
  success: string;
  error: string;
}

const WORDINGPAGE: WordingPage = {
  success: "Bravo tout juste !",
  error: "Raté ! Tu as fait des erreurs",
};
const data = reactive<{ questions: Question[]; questionIndex: number }>({
  questions: [
    {
      text: "La couleur du soleil est jaune",
      answer: null,
      correctAnswer: true,
    },
    {
      text: "La couleur du ciel est rouge pale",
      answer: null,
      correctAnswer: false,
    },
    {
      text: "Le président Françasi s'appelle Marc",
      answer: null,
      correctAnswer: false,
    },
  ],
  questionIndex: 0,
});
defineProps({
  titleQuiz: { type: String, default: "" },
});
const triggerAnswer = (value: Value) => {
  data.questions[value.index].answer = value.answer;
  data.questionIndex++;
};
const displayTextEnd = computed<boolean>(() =>
  data.questions.every((el) => el.answer !== null)
);
const isCorrectAnswer = computed<boolean>(() =>
  data.questions.every((el) => el.answer === el.correctAnswer)
);
</script>

<style>
.entry-quiz {
  border-radius: 5px;
  border: 1px solid grey;
  width: fit-content;
  margin: auto;
  padding-bottom: 20px;
  padding-right: 50px;
  padding-left: 50px;
}
.success {
  border-radius: 5px;
  padding: 5px;
  background-color: green;
  color: white;
}
.error {
  border-radius: 5px;
  padding: 5px;
  background-color: red;
  color: white;
}
</style>
