import { shallowMount, mount } from "@vue/test-utils";
import AskQuestion from "@/components/AskQuestion.vue";

describe("QuizTest.vue", () => {
  describe("Template", () => {
    it("should match snapshot", async () => {
      const wrapper = shallowMount(AskQuestion);

      expect(wrapper.element).toMatchSnapshot();
    });
  });
  describe("Props", () => {
    describe("When the props question is filled", () => {
      it("should display the title of the question", async () => {
        const question = {
          text: "Question title",
          answer: true,
          correctAnswer: true,
        };
        const wrapper = mount(AskQuestion, {
          props: {
            question,
          },
        });
        expect(wrapper.find("h2#question-text").text()).toEqual(question.text);
      });
    });
  });
  describe("events", () => {
    describe("on click", () => {
      it("should emit click with a true answer", () => {
        const question = {
          text: "Question title",
          answer: true,
          correctAnswer: true,
        };
        const wrapper = mount(AskQuestion, {
          props: { question, index: 1 },
        });

        wrapper.vm.respondAnAnswer(true);

        const expectedEmittedValue = {
          answer: true,
          index: 1,
        };
        expect(wrapper.emitted().emitAnswer[0]).toEqual([expectedEmittedValue]);
      });
      it("should emit click with a false answer", () => {
        const question = {
          text: "Question title",
          answer: false,
          correctAnswer: true,
        };
        const wrapper = mount(AskQuestion, {
          props: { question, index: 1 },
        });

        wrapper.vm.respondAnAnswer(false);

        const expectedEmittedValue = {
          answer: false,
          index: 1,
        };
        expect(wrapper.emitted().emitAnswer[0]).toEqual([expectedEmittedValue]);
      });
    });
  });
});
