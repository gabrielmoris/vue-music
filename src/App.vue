<template>
  <!-- Header -->
  <Header />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <!-- Player -->
  <AppPlayer />
  <!-- Auth Modal -->
  <Auth />
</template>

<script>
import Header from "@/components/Header.vue";
import Auth from "@/components/Auth.vue";
import AppPlayer from "@/components/Player.vue";
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import { auth } from "./includes/firebase";

export default {
  name: "app",
  components: {
    Header,
    Auth,
    AppPlayer,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
