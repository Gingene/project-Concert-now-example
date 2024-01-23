<template lang="">
  <div class="mb-4">concerts component</div>
  <Button @click="getConcertMethod">抓資料</Button>
  <div class="mb-4">
    {{ getConcerts }}
  </div>
  <Button variant="destructive"> Destructive </Button>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useConcertStore } from "@/stores/concert";
import { Button } from "@/components/ui/button";

export default {
  components: { Button },
  inject: ["http", "path"],
  methods: {
    ...mapActions(useConcertStore, ["getConcertMethod"]),
  },
  computed: {
    ...mapState(useConcertStore, ["getConcerts"]),
  },
};
</script>
<style lang=""></style>
