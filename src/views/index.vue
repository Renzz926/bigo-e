<template>
  <div :class="$style['wrapper']">
    <div :class="$style['page-content-wrapper']">
      <HeaderNavigation />
      <AnnouncementAlert />
      <GameRecommendationCard />
      <LotteryResultPage />
      <GameAnalyticsDashboard />
      <GameDemoCard />
      <FooterSection />
    </div>
  </div>
</template>

<script lang="ts">
import HeaderNavigation from './HeaderNavigation/index.vue';
import AnnouncementAlert from './AnnouncementAlert/index.vue';
import GameRecommendationCard from './GameRecommendationCard/index.vue';
import LotteryResultPage from './LotteryResultPage/index.vue';
import GameAnalyticsDashboard from './GameAnalyticsDashboard/index.vue';
import GameDemoCard from './GameDemoCard/index.vue';
import FooterSection from './FooterSection/index.vue';

export default {
  components: { HeaderNavigation, AnnouncementAlert, GameRecommendationCard, LotteryResultPage, GameAnalyticsDashboard, GameDemoCard, FooterSection }
};
</script>

<style module scoped>
.wrapper {
  width: 100%;
}

.page-content-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
