<template>
 <div>
   <div id="tabbar">
      <div class="tab-bar-item">
        <img src="../../assets/logo.png" alt="">
        <div>首页</div>
        </div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
    </div>
 </div>
</template>

<script>
 export default {
   name: 'TabBar',
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style scoped>
  @import "../../assets/css/base.css";

#tabbar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(207, 203, 203);
  box-shadow: 0 -3px 1px rgba(100, 100, 100, .1);
}
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
