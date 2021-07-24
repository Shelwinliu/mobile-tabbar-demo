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
  props: {
    path: String
  },
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    itemClick() {
      console.log('1')
      this.$route.replace(path)
    }
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
