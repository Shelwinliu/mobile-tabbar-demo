<template>
  <div id="app">
    <div id="tabbar">
      <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
    </div>
  </div>
</template>

<style>
@import "./assets/css/base.css";

#tabbar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(207, 203, 203);
  box-shadow: 0;
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
</style>
