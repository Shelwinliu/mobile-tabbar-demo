<template>
  <div class="tab-bar-item">
      <slot name="item-icon"></slot>
      <slot class="{isActive: isActive}" name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      isActive: true
    };
  },
  components: {},
};
</script>

<style scoped>
.tab-bar-item {
  margin-top: 3px;
  flex: 1;
  text-align: center;
  height: 49px;
  font-style: 14px;
}
.tab-bar-item img {
  width: 24px;
  vertical-align: middle;
}
</style>
