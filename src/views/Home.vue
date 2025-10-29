<!-- <template>
  <div class="container">12313</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  font-size: 20px;
}
</style> -->
<template>
  <div :class="$style['wrapper']">
    <div :class="$style['page-content-wrapper']">
      <GamePromotionCard />
      <LotteryResultList />
      <StrategyGuideCard />
      <DownloadLinkSection />
    </div>
  </div>
</template>

<script>
import GamePromotionCard from "./GamePromotionCard/index.vue";
import LotteryResultList from "./LotteryResultList/index.vue";
import StrategyGuideCard from "./StrategyGuideCard/index.vue";
import DownloadLinkSection from "./DownloadLinkSection/index.vue";

export default {
  components: { GamePromotionCard, LotteryResultList, StrategyGuideCard, DownloadLinkSection },
};
</script>

<style module>
.wrapper {
  padding: 45px 2px 84px 0;
}

.page-content-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
