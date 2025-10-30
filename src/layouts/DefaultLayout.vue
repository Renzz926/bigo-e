<template>
  <div
    v-if="bodyWidth < 1200"
    :class="{ 'layout-default': true, 'padding-top': page.isNavPage, 'padding-bottom': page.isTabPage }"
  >
    <LayoutKeepLive v-if="page.keepAlive" />
    <router-view v-else />
    <van-tabbar v-if="page.isTabPage" v-model="active">
      <van-tabbar-item replace to="/h5" icon="home-o" name="0">
        <span :class="`bar-name ${active === '0' ? 'active' : ''}`">首页</span>
        <template #icon="{ active }">
          <img :src="active ? tab1 : tab11" alt="" class="bar-icon" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager-o" name="1">
        <span :class="`bar-name ${active === '1' ? 'active' : ''}`">试玩</span>
        <template #icon="{ active }">
          <img :src="active ? tab2 : tab22" alt="" class="bar-icon" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager-o" name="2">
        <span :class="`bar-name ${active === '2' ? 'active' : ''}`">数据</span>
        <template #icon="{ active }">
          <img :src="active ? tab3 : tab33" alt="" class="bar-icon" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager-o" name="3">
        <span :class="`bar-name ${active === '3' ? 'active' : ''}`">赛事</span>
        <template #icon="{ active }">
          <img :src="active ? tab4 : tab44" alt="" class="bar-icon" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import tab1 from "@/assets/images/tab1.png";
import tab11 from "@/assets/images/tab11.png";
import tab2 from "@/assets/images/tab2.png";
import tab22 from "@/assets/images/tab22.png";
import tab3 from "@/assets/images/tab3.png";
import tab33 from "@/assets/images/tab33.png";
import tab4 from "@/assets/images/tab4.png";
import tab44 from "@/assets/images/tab44.png";
const active = ref("0");
const route = useRoute();
const bodyWidth = window.document.body.clientWidth;
const page = computed(() => ({
  isTabPage: route?.meta?.isTabPage || false,
  keepAlive: route?.meta?.keepAlive || false,
  isNavPage: route?.meta?.isNavPage || false,
  title: route?.meta?.title || "",
}));
onMounted(() => {
  if (bodyWidth > 1200) {
    window.location.href = "https://bigo-ele.vercel.app/";
  }
});
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
    font-size: 14px;
    color: #999;
  }

  .active {
    color: #ff5b2b;
  }

  .bar-icon {
    width: 25px;
    height: 24px;
  }
}
</style>
