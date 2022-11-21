<template>
  <!-- Header -->
  <Header />

  <router-view></router-view>
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
