import { defineStore } from "pinia";
import { http, path } from "../api";

export const useConcertStore = defineStore("concerts", {
  state: () => ({
    concerts: null,
  }),
  actions: {
    async getConcertMethod() {
      const res = await http.get(path.concerts);
      console.log(res);
      this.concerts = res.data;
      console.log(this.concerts);
      // localStorage.setItem('concerts', JSON.stringify(res.data))
    },
  },
  getters: {
    getConcerts: (state) => state.concerts,
  },
});
