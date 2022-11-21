import { shallowMount, mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  describe("Template", () => {
    it("should match snapshot", () => {
      const wrapper = shallowMount(App);

      expect(wrapper.element).toMatchSnapshot();
    });
    describe("When the Quiz is open", () => {
      it("should match snapshot", async () => {
        const wrapper = shallowMount(App);

        wrapper.vm.data.isClosed = false;
        await wrapper.vm.$nextTick();

        expect(wrapper.element).toMatchSnapshot();
      });
    });
  });
});
describe("Data", () => {
  it("should set the default Data values", async () => {
    const wrapper = mount(App);

    await expect(wrapper.vm.data.isClosed).toEqual(true);
    await expect(wrapper.vm.buttonText).toEqual("Lancer le Quiz");
  });
});
describe("On click on the button", () => {
  it("should set the data value to true", async () => {
    const wrapper = mount(App);
    await wrapper.find("#press-to-display").trigger("click");

    await expect(wrapper.vm.data.isClosed).toEqual(false);
  });
  it("should set the button text to Fermer le Quiz", async () => {
    const wrapper = mount(App);
    await wrapper.find("#press-to-display").trigger("click");

    await expect(wrapper.vm.buttonText).toEqual("Fermer le Quiz");
  });
});
