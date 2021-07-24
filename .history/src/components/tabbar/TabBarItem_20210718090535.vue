<template>
  <div class="tab-bar-item" @click="itemClick">
      <slot name="item-icon"></slot>
      <div :class="{active: isActive}" >
        <slot name="item-text"></slot>
      </div>
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
.active {
  color: red;
}
</style>
