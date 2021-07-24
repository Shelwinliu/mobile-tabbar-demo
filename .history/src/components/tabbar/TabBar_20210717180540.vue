<template>
    <div id="tabbar">
      <slot></slot>
      <v-slot></v-slot>
    </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {};
  },
  components: {},
};
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
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1);
}

</style>
