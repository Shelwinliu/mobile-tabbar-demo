<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>

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
