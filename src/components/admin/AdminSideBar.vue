<template>
  <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
    <div class="w-1/2 py-8 flex">
      <img src="https://via.placeholder.com/200x50" alt="" />
    </div>
    <Button
      class="text-lg p-8 text-gray-800 w-full text-left justify-start rounded-none bg-white border-e-4 border-indigo-500/100 hover:text-gray-800 hover:bg-white hover:border-e-4 hover:border-indigo-500/100">
      <span class="material-symbols-outlined pe-6"> location_on </span>
      演唱會資訊管理
    </Button>
    <Button
      v-for="item in sidebarNavItems"
      :key="item.title"
      :class="'bg-white text-lg p-8 text-gray-400 w-full text-left justify-start rounded-none hover:text-gray-800 hover:bg-white hover:border-e-4 hover:border-indigo-500/100'">
      <span class="material-symbols-outlined pe-6"> location_on </span>
      {{ item.title }}
    </Button>
  </nav>
</template>
<script setup>
import { Button } from "@/components/ui/button";
</script>

<script>
export default {
  data() {
    return {
      sidebarNavItems: [
        {
          title: "分析報表",
          href: "",
        },
        {
          title: "會員管理",
          href: "",
        },
        {
          title: "評論管理",
          href: "",
        },
        {
          title: "歌單管理",
          href: "",
        },
        {
          title: "設定",
          href: "",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
