<template>
  <div id="app">
    

    <router-view></router-view>
  </div>
</template>

<script>
import TabBarItem from '@/components/tabbar/TabBarItem'

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
