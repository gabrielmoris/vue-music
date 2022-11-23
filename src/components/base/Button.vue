<template>
  <button @click="clickMe" type="button">Press me!</button>
  <h1 v-if="happy">{{ happy }}</h1>
</template>

<script>
export default {
  name: "BaseButton",
  data() {
    return {
      happy: "",
    };
  },
  methods: {
    clickMe() {
      this.happy += "😊";
    },
  },
};
</script>
