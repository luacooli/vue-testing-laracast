<template>
  <div id="app">
    <Reminders />
  </div>
</template>

<script>
import Reminders from '@/components/Reminders.vue'

export default {
  name: 'App',
  components: {
    Reminders
  }
}
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
