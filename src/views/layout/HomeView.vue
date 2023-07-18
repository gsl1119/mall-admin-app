<template>
  <div class="home">
    <LeftMenu></LeftMenu>
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <SilderNav ></SilderNav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SilderNav from './components/SilderNav.vue';
import LeftMenu from './components/LeftMenu.vue';

export default {
  components: {
    SilderNav,
    LeftMenu,
  },
  data() {
    return {
    };
  },

};
</script>
<style lang="less">
@import url("@/assets/css/home.less");
</style>
