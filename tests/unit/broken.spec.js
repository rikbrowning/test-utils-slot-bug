import { shallowMount } from "@vue/test-utils";
import Broken from "@/components/Broken.vue";

describe("Broken.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Broken, {
      propsData: { msg },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
