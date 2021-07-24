<template>
  <div class="tab-bar-item">
      <!-- <img src="../assets/logo.png" alt="" />
      <div>首页</div>
    </div>
    <div class="tab-bar-item">
      <img src="../assets/logo.png" alt="" />
      <div>分类</div>
    </div>
    <div class="tab-bar-item">
      <img src="../assets/logo.png" alt="" />
      <div>购物车</div>
    </div>
    <div class="tab-bar-item">
      <img src="../assets/logo.png" alt="" />
      <div>我的</div> -->
      <slot name="item-icon"></slot>
      <slot name=""></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  vertical-align: middle;
}
</style>
