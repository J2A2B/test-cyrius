import { shallowMount, mount } from "@vue/test-utils";
import QuizTest from "@/components/QuizTest.vue";

describe("QuizTest.vue", () => {
  describe("Template", () => {
    it("should match snapshot", async () => {
      const wrapper = shallowMount(QuizTest);

      expect(wrapper.element).toMatchSnapshot();
    });
  });
  describe("Data", () => {
    it("should set the default Data values", async () => {
      const wrapper = mount(QuizTest);

      expect(wrapper.vm.data.questionIndex).toEqual(0);
      expect(wrapper.vm.data.questions).toEqual([
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
      ]);
    });
    describe("When all Datas are filled wrong", () => {
      it("should display the error message", async () => {
        const wrapper = mount(QuizTest);
        const expectedQuestions = [
          {
            text: "La couleur du soleil est jaune",
            answer: false,
            correctAnswer: true,
          },
          {
            text: "La couleur du ciel est rouge pale",
            answer: true,
            correctAnswer: false,
          },
          {
            text: "Le président Françasi s'appelle Marc",
            answer: false,
            correctAnswer: false,
          },
        ];
        wrapper.vm.data.questions = expectedQuestions;
        await wrapper.vm.$nextTick();
        expect(wrapper.find("p#error-message").text()).toEqual(
          "Raté ! Tu as fait des erreurs"
        );
      });
    });
    describe("When all Datas are filled good", () => {
      it("should display the success message", async () => {
        const wrapper = mount(QuizTest);
        const expectedQuestions = [
          {
            text: "La couleur du soleil est jaune",
            answer: true,
            correctAnswer: true,
          },
          {
            text: "La couleur du ciel est rouge pale",
            answer: false,
            correctAnswer: false,
          },
          {
            text: "Le président Françasi s'appelle Marc",
            answer: false,
            correctAnswer: false,
          },
        ];
        wrapper.vm.data.questions = expectedQuestions;
        await wrapper.vm.$nextTick();
        expect(wrapper.find("p#success-message").text()).toEqual(
          "Bravo tout juste !"
        );
      });
    });
  });
  describe("Props", () => {
    describe("When the props titleQuiz is filled", () => {
      it("should display the title of the quiz", async () => {
        const titleQuiz = "My title";
        const wrapper = shallowMount(QuizTest, {
          props: {
            titleQuiz,
          },
        });
        expect(wrapper.find("h1#user-text").text()).toEqual(titleQuiz);
      });
    });
  });
});
