<template>
  <div class="lg:mt-4 bg-[#1fb6ff] mb-4">{{ title }}</div>
  <div>
    <h2>演唱會</h2>
    <p><button class="bg-green p-4 bg-opacity-50 rounded-lg" @click="getConcerts">獲得演唱會資料</button></p>
    {{ concerts }}
  </div>
  <div>
    <h2>表演者</h2>
    <p><button class="bg-green p-4 bg-opacity-50 rounded-lg" @click="getSingleArtist">獲得單一表演者資料</button></p>
    {{ artist }}
  </div>
</template>
<script>
export default {
  name: "TestComponent",
  data() {
    return {
      title: "測試用標題",
      concerts: [],
      artist: {},
    };
  },
  methods: {
    getConcerts() {
      this.http
        .get(this.path.concerts)
        .then((res) => {
          this.concerts = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async getSingleArtist() {
      try {
        const res = await this.http.get(`${this.path.artists}/1`);
        this.artist = res.data;
      } catch (err) {
        // console.log(err);
      }
    },
  },
  inject: ["http", "path"],
  mounted() {
    // console.log(this.http);
    // console.log(this.path);
    // this.getConcerts();
    // this.getSingleArtist();
  },
};
</script>
<style lang=""></style>
