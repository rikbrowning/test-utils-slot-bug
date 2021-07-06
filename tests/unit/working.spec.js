import { shallowMount } from "@vue/test-utils";
import Working from "@/components/Working.vue";

describe("Working.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Working, {
      propsData: { msg },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
