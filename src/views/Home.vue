<template>
  <div class="wrapper">
    <div class="page-content-wrapper">
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

<style scoped lang="scss">
.page-content-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
