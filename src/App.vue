<template>
  <header class="container mx-auto flex justify-between p-4">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="logo">
      <RouterLink to="/">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
      </RouterLink>
    </div>

    <nav>
      <RouterLink to="/" class="px-4">Home</RouterLink>
      <RouterLink to="/about" class="px-4">About</RouterLink>
      <RouterLink to="/silverfungi" class="px-4">銀光菇</RouterLink>
      <RouterLink to="/concerts" class="px-4">演唱會</RouterLink>
      <RouterLink to="/login" class="px-4">登入</RouterLink>
      <RouterLink to="/shadcn" class="px-4">Shadcn</RouterLink>

    </nav>
  </header>
  <div class="loading d-none" ref="loadingDom">
    <div class="loading-window">
      <p class="mb-4">請稍後...</p>
      <div class="flex justify-center">
        <img src="/images/loading.svg" alt="loading" />
      </div>
    </div>
  </div>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  components: { RouterLink, RouterView },
  methods: {
    loading(msg) {
      this.$refs.loadingDom.classList.remove("d-none");
      this.$refs.loadingDom.childNodes[0].childNodes[0].textContent = msg;
    },
    removeLoading() {
      this.$refs.loadingDom.classList.add("d-none");
    },
  },
  provide() {
    return {
      loading: this.loading,
      removeLoading: this.removeLoading,
    };
  },
};
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1056;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #eee;
  opacity: 0.5;
  z-index: -1;
}

.loading-window {
  color: #055160;
  background-color: #cff4fc;
  border-color: #b6effb;
  width: 80%;
  padding: 1.5rem;
}

.loading-window p {
  text-align: center;
  font-size: 1.5rem;
}

.d-none {
  display: none;
}
</style>
