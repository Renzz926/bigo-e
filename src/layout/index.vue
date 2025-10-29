<template>
  <div class="app-wrapper">
    <app-main />
  </div>
</template>

<script setup lang="ts">
import AppMain from './components/AppMain.vue';
// import { useAppStore } from '@/store/modules/app';
// import { useSettingsStore } from '@/store/modules/settings';

// const settingsStore = useSettingsStore();
// const theme = computed(() => settingsStore.theme);
// const sidebar = computed(() => useAppStore().sidebar);
// const device = computed(() => useAppStore().device);

// const classObj = computed(() => ({
//   hideSidebar: !sidebar.value.opened,
//   openSidebar: sidebar.value.opened,
//   withoutAnimation: sidebar.value.withoutAnimation,
//   mobile: device.value === 'mobile'
// }));

// const { width } = useWindowSize();
// const WIDTH = 992; // refer to Bootstrap's responsive design

// watchEffect(() => {
//   if (device.value === 'mobile') {
//     useAppStore().closeSideBar({ withoutAnimation: false });
//   }
//   if (width.value - 1 < WIDTH) {
//     useAppStore().toggleDevice('mobile');
//     useAppStore().closeSideBar({ withoutAnimation: true });
//   } else {
//     useAppStore().toggleDevice('desktop');
//   }
// });
</script>

<style lang="scss" scoped>
@use '@/assets/styles/mixin.scss';
@use '@/assets/styles/variables.module.scss' as *;

.app-wrapper {
  @include mixin.clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$base-sidebar-width});
  transition: width 0.28s;
  background: $fixed-header-bg;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.sidebarHide .fixed-header {
  width: 100%;
}

.mobile .fixed-header {
  width: 100%;
}
</style>
