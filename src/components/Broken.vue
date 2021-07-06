<template>
  <FakeComponent>
    <template v-slot:test>
      <TestComponent :msg="msg">
        <div>
          default slot of test component
        </div>
      </TestComponent>
    </template>
    <div>
      default slot of fake component
    </div>
  </FakeComponent>
</template>

<script>
import TestComponent from "./TestComponent.vue";
import FakeComponent from "./FakeComponent.vue";
export default {
  name: "Broken",
  props: {
    msg: String,
  },
  components: {
    FakeComponent,
    TestComponent,
  },
};
</script>
