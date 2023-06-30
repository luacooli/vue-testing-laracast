<template>
  <div id="app">
    <CouponCode />
  </div>
</template>

<script>
import CouponCode from "@/components/CouponCode.vue";

export default {
  name: "App",
  components: {
    CouponCode,
  },
};
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
