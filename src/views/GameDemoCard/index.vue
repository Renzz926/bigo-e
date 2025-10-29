<template>
  <div class="wrapper-7">
    <div class="lottery-header">
      <div class="headerBg"></div>
      <span class="lottery-status-label">
        <span class="lottery-status-text">游戏</span>
        <span class="result-status-text">演示</span>
      </span>
    </div>
    <div class="game-actions-section">
      <div class="action-button-container">
        <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/sg64T60Jbq8AAAAAXxAAAAgAejH3AQBr/original" class="action-icon" />
        <ElButton size="large" round class="try-play-button"> 前往试玩 </ElButton>
      </div>
      <div class="action-button-container">
        <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/AQCeToEbzZMAAAAAeRAAAAgAejH3AQBr/original" class="action-icon-2" />
        <ElButton size="large" round class="try-play-button"> 前往试玩 </ElButton>
      </div>
      <div class="action-button-container">
        <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/SzrGTKpyeB4AAAAAYXAAAAgAejH3AQBr/original" class="action-icon-3" />
        <ElButton size="large" round class="try-play-button-3"> 前往试玩 </ElButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      rateModel1: 2
    };
  }
};
</script>

<style scoped lang="scss">
.wrapper-7 {
  background-image: url('../../assets/images/bg.png');
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 570px;
  padding: 40px;
}
.lottery-header {
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  .headerBg {
    position: absolute;
    top: calc(50% - 16px);
    left: calc(50% - 176px);
    width: 362px;
    height: 29px;
    background: url('../../assets/images/title_bg.png') no-repeat center;
    background-size: 100% 100%;
  }
}
.lottery-status-label {
  margin-left: 12px;
  white-space: nowrap;
  font-weight: 600;
  font-size: 25px;
}

.lottery-status-text {
  color: #333333;
}

.result-status-text {
  color: #ff5b2b;
}
.menu-icon {
  color: #ff7640;
  font-size: 6px;
  width: 6px;
  height: 6px;
}

.game-thumbnail {
  border-radius: 5px;
  flex-shrink: 0;
  width: 10px;
  margin-left: 14px;
  height: 10px;
}

.game-rating-icon {
  border-radius: 5px;
  flex-shrink: 0;
  width: 10px;
  margin-left: 15px;
  height: 10px;
}

.game-rating {
  font-size: 5px;
  margin-left: 2px;
}

.game-actions-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.action-button-container {
  display: flex;
  flex-direction: column;
}

.action-icon {
  border-radius: 22px;
  flex-shrink: 0;
  width: 304px;
  height: 302px;
}

.try-play-button {
  background-color: #ff5b2b;
  border: none;
  font-size: 14px;
  color: #ffffff;
  min-width: 110px;
  height: 40px;
  margin-top: 20px;
  align-self: center;
}

.action-icon-2 {
  border-radius: 22px;
  flex-shrink: 0;
  width: 482px;
  height: 360px;
}

.action-icon-3 {
  border-radius: 21px;
  flex-shrink: 0;
  width: 304px;
  height: 304px;
}

.try-play-button-3 {
  background-color: #ff5b2b;
  border: none;
  font-size: 14px;
  color: #ffffff;
  min-width: 110px;
  height: 40px;
  margin-top: 18px;
  align-self: center;
}
</style>
