<template>
  <FakeComponent>
    <TestComponent :msg="msg" slot="test">
      <div>
        default slot of test component
      </div>
    </TestComponent>
    <div>
      default slot of fake component
    </div>
  </FakeComponent>
</template>

<script>
import TestComponent from "./TestComponent.vue";
import FakeComponent from "./FakeComponent.vue";
export default {
  name: "Working",
  props: {
    msg: String,
  },
  components: {
    FakeComponent,
    TestComponent,
  },
};
</script>
