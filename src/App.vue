<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "@/assets/css/reset.css";
export default {
  name: "App",
};
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
