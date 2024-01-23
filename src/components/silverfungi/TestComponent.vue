<template>
  <div class="lg:mt-4 mb-4">{{ title }}</div>
  <div>
    <h2 class="bg-teal-500">演唱會</h2>
    <div class="flex">
      <div class="card md:columns-4 gap-[24px]">
        <img
          src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="card1" />
        <img
          src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="card1" />
        <img
          src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="card1" />
        <img
          src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="card1" />
      </div>
    </div>
    <p>
      <button class="btn btn-blue" @click="getConcertMethod">獲得演唱會資料</button>
    </p>
    {{ concerts }}
  </div>
  <div>
    <h2>表演者</h2>
    <p><button class="btn btn-red" @click="getSingleArtist">獲得單一表演者資料</button></p>
    <div>
      {{ artist }}
    </div>
  </div>
  <div>
    <h2>表演者</h2>
    <p><button class="btn btn-green" @click="getSingleArtist">綠色按鈕</button></p>
    {{ artist }}
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { useConcertStore } from "@/stores/concert";

export default {
  name: "TestComponent",
  data() {
    return {
      title: "測試用標題",
      artist: {},
    };
  },
  methods: {
    // getConcerts() {
    //   this.loading("找資料中");
    //   this.http
    //     .get(this.path.concerts)
    //     .then((res) => {
    //       this.concerts = res.data;
    //       this.removeLoading();
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       this.removeLoading();
    //     });
    // },
    ...mapActions(useConcertStore, ["getConcertMethod"]),

    async getSingleArtist() {
      try {
        const res = await this.http.get(`${this.path.artists}/1`);
        this.artist = res.data;
        // console.log(a);
      } catch (err) {
        // console.log(err);
      }
    },
  },
  computed: {
    ...mapState(useConcertStore, ["concerts"]),
  },
  inject: ["http", "path", "loading", "removeLoading"],
  mounted() {
    // console.log(this.http);
    // console.log(this.path);
    // this.getConcerts();
    // this.getSingleArtist();
  },
};
</script>
<style lang=""></style>
