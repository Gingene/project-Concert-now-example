<template lang="">
  <div>
    <p class="a-b">{{ doubleCount }}</p>
    <button class="btn btn-blue" @click="increment">++</button>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "@/stores/counter";

export default {
  // data() {
  //     return {
  //         ...mapState(useCounterStore, ['count'])
  //     }
  // },
  methods: {
    ...mapActions(useCounterStore, ["increment"]),
  },
  computed: {
    ...mapState(useCounterStore, ["doubleCount"]),
  },
};
</script>
<style lang="scss" scoped>
.a {
  &-b {
    font-size: 2rem;
  }
}
</style>
