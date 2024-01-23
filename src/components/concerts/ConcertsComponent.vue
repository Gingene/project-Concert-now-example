<template lang="">
  <div>concerts component</div>
  <button @click="getConcertMethod">抓資料</button>
  <div>
    {{ concerts }}
  </div>
  <div>
    {{ getConcerts }}
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useConcertStore } from "@/stores/concert";

export default {
  inject: ["http", "path"],
  methods: {
    // getConcerts() {
    //   this.http(`${this.path.concerts}`).then((res) => {
    //     // console.log(res);
    //     this.concerts = { ...res.data };
    //   });
    // },
    ...mapActions(useConcertStore, ["getConcertMethod"]),
  },
  computed: {
    ...mapState(useConcertStore, ["getConcerts"]),
  },
};
</script>
<style lang=""></style>
