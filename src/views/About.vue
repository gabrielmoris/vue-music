<template>
  <div class="about p-20 text-3xl">
    <h1 v-icon-secondary="{ icon: 'headphones-alt', right: true }">
      {{ $t("about.text") }}
    </h1>
  </div>
</template>

<script>
//Example of using a directive locally instead of globally in main.js (instead of using modifiers I use object syntax)
import IconSecondary from "@/directives/icon-secondary";

export default {
  name: "About",
  directives: {
    "icon-secondary": IconSecondary,
  },
};
</script>
