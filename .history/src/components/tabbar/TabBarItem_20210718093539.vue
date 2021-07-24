<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></slot></div>
      <div v-else><slot name="item-icon-active"></slot></slot></div>
      <div :class="{active: isActive}" >
        <slot name="item-text"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default:
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch((err) => err);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path)
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
