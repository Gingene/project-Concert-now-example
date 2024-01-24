<template>
  <section class="container min-h-screen flex flex-col items-center">
    <div class="">
      <div>這裡看不到演唱會資料喔~</div>

      <div>
        <Button>
          <RouterLink to="/"> 點我回首頁 </RouterLink>
        </Button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Button } from "@/components/ui/button";
</script>
<script>
import { RouterLink } from "vue-router";

export default {
  components: { RouterLink },
  props: ["route"],
};
</script>
