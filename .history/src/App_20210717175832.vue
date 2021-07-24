<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/logo.png" alt="" />
        <div slot="">分类</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "@/components/TabBarItem";

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
