<template>
  <div id="app">
    

    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from '@/components/MainTabBar'

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>
