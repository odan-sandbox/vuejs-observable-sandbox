<template>
  <div id="app">
    <div>
      <button @click="click">click me!</button>
    </div>
    <div v-if="hasError">{{ errorMessage }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  methods: {
    click() {
      throw new Error("Error! yabai!");
    }
  },
  computed: {
    hasError() {
      return this.$error.hasError;
    },
    errorMessage() {
      return this.$error.message;
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
