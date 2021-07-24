<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="./assets/logo.png" alt="" />
        <img slot="item-icon-active" src="./assets/search.png" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/catergory">
        <img slot="item-icon" src="./assets/logo.png" alt="" />
        <img slot="item-icon-active" src="./assets/search.png" alt="" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="./assets/logo.png" alt="" />
        <img slot="item-icon-active" src="./assets/search.png" alt="" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="./assets/logo.png" alt="" />
        <img slot="item-icon-active" src="./assets/search.png" alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from '@/components/tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  },
};
</script>

<style scoped>
</style>
