<template>
  <div :class="{ 'layout-default': true, 'padding-top': page.isNavPage, 'padding-bottom': page.isTabPage }">
    <van-nav-bar v-if="page.isNavPage" :title="page.title" fixed>
      <template #left>
        <van-icon name="arrow-left" color="#000" @click="goBack"></van-icon>
      </template>
    </van-nav-bar>
    <LayoutKeepLive v-if="page.keepAlive" />
    <router-view v-else />
    <van-tabbar v-if="page.isTabPage" route>
      <van-tabbar-item replace to="/home" icon="home-o" name="Home">
        <span class="bar-name">首页</span>
        <template #icon="{ active }">
          <img :src="active ? homeActiveIcon : homeDefaultIcon" alt="" class="bar-icon" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager-o" name="Mine">
        <span class="bar-name">我的</span>
        <template #icon="{ active }">
          <img :src="active ? mineActiveIcon : mineDefaultIcon" alt="" class="bar-icon" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import homeActiveIcon from "@/assets/images/home_icon_active.png";
import homeDefaultIcon from "@/assets/images/home_icon.png";
import mineActiveIcon from "@/assets/images/mine_icon_active.png";
import mineDefaultIcon from "@/assets/images/mine_icon.png";
import LayoutKeepLive from "./components/LayoutKeepLive.vue";

const route = useRoute();
const router = useRouter();

const page = computed(() => ({
  isTabPage: route?.meta?.isTabPage || false,
  keepAlive: route?.meta?.keepAlive || false,
  isNavPage: route?.meta?.isNavPage || false,
  title: route?.meta?.title || "",
}));

const goBack = () => {
  if (route.name === "Order") {
    router.push({ name: "Mine" });
    return;
  }
  router.back();
};
</script>

<style lang="scss" scoped>
.layout-default {
  width: 100%;
  min-height: 100vh;
  background: #f6f8fa;

  &.padding-top {
    padding-top: 46px;
  }

  &.padding-bottom {
    padding-bottom: 50px;
  }

  .bar-name {
    font-size: 10px;
  }

  .bar-icon {
    width: 25px;
    height: 24px;
  }
}
</style>
