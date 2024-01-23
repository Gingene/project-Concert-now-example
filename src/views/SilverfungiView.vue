<template>
  <div class="container px-2 py-4 mx-auto">
    <h1 class="underline py-4">銀光菇分頁font-style-test</h1>
    <TestComponent />
    <CountComponet />
  </div>
</template>
<script>
import TestComponent from "@/components/silverfungi/TestComponent.vue";
import CountComponet from "@/components/silverfungi/CountComponet.vue";

export default {
  components: { TestComponent, CountComponet },
};
</script>
<style lang=""></style>
