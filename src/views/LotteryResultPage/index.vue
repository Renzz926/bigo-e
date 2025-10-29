<template>
  <div class="wrapper-5">
    <div class="lottery-header">
      <div class="headerBg"></div>
      <span class="lottery-status-label">
        <span class="lottery-status-text">开奖</span>
        <span class="result-status-text">结果</span>
      </span>
    </div>
    <div class="lottery-main-content">
      <div class="lottery-section">
        <div class="lottery-sub-section">
          <div class="game-header">
            <span class="game-name"> GREEDY </span>
            <span class="game-percentage"> 61% </span>
          </div>
          <div class="pro66"></div>
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/Wb0KT7TA8m0AAAAASPAAAAgAejH3AQBr/original" class="game-detail-icon" />
          <div class="game-header">
            <span class="game-name"> CAT OR DOG </span>
            <span class="game-percentage"> 42% </span>
          </div>
          <div class="pro44"></div>
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/_B8dRKbHangAAAAASOAAAAgAejH3AQBr/original" class="game-detail-icon" />
          <div class="game-header">
            <span class="game-name"> Ele-FamilyGames </span>
            <span class="game-percentage"> 35% </span>
          </div>
          <div class="pro33"></div>
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/nTptSZj62XQAAAAAR4AAAAgAejH3AQBr/original" class="game-detail-icon" />
        </div>
        <div class="lottery-results-section">
          <div class="results-header">
            <div class="game-header">
              <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/_pwsQKAL4_sAAAAAM4AAAAgAejH3AQBr/original" class="result-icon" />
              <span class="result-game-name"> GREEDY </span>
            </div>
            <div class="game-header">
              <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/WZ3SSa4Y600AAAAAJFAAAAgAejH3AQBr/original" class="result-icon" />
              <span class="result-game-name-second"> CAT OR DOG </span>
            </div>
            <div class="game-header">
              <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/QUrZR7fIanwAAAAAMVAAAAgAejH3AQBr/original" class="result-icon" />
              <span class="result-game-name-third"> Ele-Family Games </span>
            </div>
          </div>
          <span class="latest-result-text"> GREEDY最新开奖结果 </span>
          <div class="lottery-header">
            <span class="update-time-prefix"> （最后更新： </span>
            <span class="update-time-value"> 2025年10月11日9:05) </span>
          </div>
          <div class="result-table-header">
            <span class="issue-number-header"> 期号 </span>
            <span class="draw-time-header"> 开奖时间 </span>
            <span class="draw-result-header"> 开奖结果 </span>
            <span class="multiplier-header"> 倍率 </span>
            <span class="status-header"> 状态 </span>
          </div>
          <div class="result-table-row">
            <div class="previous-page-icon"></div>
            <div class="result-table-cell">
              <span class="issue-number-second"> G20230512-001 </span>
              <span class="draw-time"> 15:30:22 </span>
              <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/wC5YSb7hRQkAAAAAQDAAAAgAejH3AQBr/original" class="draw-result-image" />
              <span class="draw-result-text"> 鸡腿 </span>
              <span class="multiplier-value"> 2.45X </span>
              <a class="result-status-link"> 已开奖 </a>
            </div>
            <div class="next-page-icon"></div>
          </div>
          <div class="result-table-row-second">
            <span class="issue-number-second"> G20230512-002 </span>
            <span class="draw-time-second"> 15:30:22 </span>
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/3NZVSIShhVMAAAAAQEAAAAgAejH3AQBr/original" class="draw-result-image" />
            <span class="draw-result-text-second"> 烤串 </span>
            <span class="multiplier-value-second"> 3.20X </span>
            <a class="result-status-link"> 已开奖 </a>
          </div>
          <div class="result-table-row-third">
            <span class="issue-number-second"> G20230512-003 </span>
            <span class="draw-time-third"> 15:30:22 </span>
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/Fd2IQKf17YsAAAAAQEAAAAgAejH3AQBr/original" class="draw-result-image" />
            <span class="draw-result-text-second"> 热狗 </span>
            <span class="multiplier-value"> 1.80X </span>
            <a class="result-status-link-third"> 已开奖 </a>
          </div>
        </div>
      </div>
      <div class="bottom-image"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.wrapper-5 {
  width: 100%;
  background-color: #fff5e6;
  padding: 40px 0;
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

.header-progress {
  width: 112px;
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
.pro66 {
  width: 270px;
  height: 8px;
  margin: 12px 0;
  background: url('../../assets/images/p66.png') no-repeat center;
  background-size: 100% 100%;
}
.pro44 {
  width: 270px;
  height: 8px;
  margin: 12px 0;
  background: url('../../assets/images/p44.png') no-repeat center;
  background-size: 100% 100%;
}
.pro33 {
  width: 270px;
  height: 8px;
  margin: 12px 0;
  background: url('../../assets/images/p33.png') no-repeat center;
  background-size: 100% 100%;
}
.lottery-icon {
  border-radius: 5px;
  flex-shrink: 0;
  width: 10px;
  margin-left: 10px;
  height: 10px;
}

.warning-progress {
  width: 74px;
  margin-left: 28px;
}

.lottery-main-content {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.lottery-section {
  position: relative;
  z-index: 9;
  border-radius: 9px;
  background-color: #ffffff;
  width: 100%;
  display: flex;
  padding: 20px 20px 0;
}

.lottery-sub-section {
  width: 270px;
  margin-right: 40px;
}

.game-header {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.game-name {
  color: #333333;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
}

.game-percentage {
  color: #ff5b2b;
  font-size: 14px;
}

.game-progress {
  width: 268px;
  margin-top: 2px;
}

.game-details-container {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
}

.game-detail-item {
  margin-left: 2px;
  display: flex;
  flex-direction: column;
}

.game-detail-icon {
  border-radius: 12px;
  flex-shrink: 0;
  width: 270px;
  height: 80px;
  margin-bottom: 20px;
}

.game-detail-text {
  margin-top: 18px;
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.game-detail-title {
  color: #333333;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
}

.game-detail-percentage {
  color: #ff5b2b;
  font-size: 14px;
  margin-left: 150px;
  white-space: nowrap;
}

.game-detail-progress {
  width: 268px;
  margin-top: 4px;
}

.game-detail-icon-second {
  border-radius: 6px;
  flex-shrink: 0;
  width: 270px;
  height: 80px;
}

.game-detail-percentage-second {
  color: #ff5b2b;
  font-size: 14px;
  margin-left: 106px;
  white-space: nowrap;
}

.game-detail-progress-second {
  width: 268px;
  margin-top: 4px;
  margin-left: 2px;
}

.additional-icon {
  border-radius: 7px;
  flex-shrink: 0;
  width: 268px;
  height: 80px;
  margin-top: 8px;
  margin-left: 2px;
}

.lottery-results-section {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 20px;
}

.results-header {
  margin: 0 0 0 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 10px;
  border-bottom: 2px solid #d8d8d8;
}

.result-icon {
  border-radius: 7px;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
}

.result-game-name {
  color: #ff5b2b;
  font-size: 18px;
  font-weight: 600;
}

.result-icon-second {
  border-radius: 8px;
  flex-shrink: 0;
  width: 15px;
  margin-left: 164px;
  height: 16px;
}

.result-game-name-second {
  color: #676767;
  font-size: 18px;
  margin-left: 6px;
  white-space: nowrap;
}

.result-icon-third {
  border-radius: 6px;
  flex-shrink: 0;
  width: 15px;
  margin-left: 122px;
  height: 15px;
}

.result-game-name-third {
  color: #676767;
  font-size: 18px;
  margin-left: 6px;
  white-space: nowrap;
}

.latest-result-text {
  color: #333333;
  font-size: 16px;
  margin-top: 34px;
  align-self: center;
}

.update-time-prefix {
  color: #aaaaaa;
  font-size: 13px;
  white-space: nowrap;
}

.update-time-value {
  color: #aaaaaa;
  font-size: 13px;
  margin-left: 12px;
  white-space: nowrap;
}

.result-table-header {
  margin-top: 24px;
  align-self: flex-start;
  margin-left: 148px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.issue-number-header {
  color: #676767;
  font-size: 13px;
  white-space: nowrap;
}

.draw-time-header {
  color: #676767;
  font-size: 13px;
  margin-left: 100px;
  white-space: nowrap;
}

.draw-result-header {
  color: #676767;
  font-size: 13px;
  margin-left: 74px;
  white-space: nowrap;
}

.multiplier-header {
  color: #676767;
  font-size: 13px;
  margin-left: 108px;
  white-space: nowrap;
}

.status-header {
  color: #676767;
  font-size: 13px;
  margin-left: 110px;
  white-space: nowrap;
}

.result-table-row {
  margin-top: 16px;
  display: flex;
  flex-direction: row;
}

.previous-page-icon {
  width: 28px;
  height: 28px;
  margin-top: 5px;
  background: url('../../assets/images/icon_arrow.png') no-repeat center;
  transform: rotate(180deg);
  background-size: 100% 100%;
  filter: grayscale(1);
}

.result-table-cell {
  border-radius: 9px;
  background-color: #f7f8f9;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 22px 18px 20px;
  margin-left: 68px;
}

.draw-time {
  color: #333333;
  font-size: 14px;
  margin-left: 58px;
  white-space: nowrap;
}

.draw-result-image {
  border-radius: 17px;
  flex-shrink: 0;
  width: 32px;
  margin-left: 70px;
  height: 32px;
}

.draw-result-text {
  color: #333333;
  font-size: 13px;
  margin-left: 8px;
  white-space: nowrap;
}

.multiplier-value {
  color: #333333;
  font-size: 14px;
  margin-left: 98px;
  white-space: nowrap;
}

.result-status-link {
  color: #ff5b2b;
  font-size: 14px;
  margin-left: 96px;
  white-space: nowrap;
}

.next-page-icon {
  width: 28px;
  margin-left: 50px;
  height: 28px;
  margin-top: 6px;
  background: url('../../assets/images/icon_arrow.png') no-repeat center;
  background-size: 100% 100%;
}

.result-table-row-second {
  margin-top: 20px;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.issue-number-second {
  color: #333333;
  font-size: 13px;
  white-space: nowrap;
}

.draw-time-second {
  color: #333333;
  font-size: 13px;
  margin-left: 60px;
  white-space: nowrap;
}

.draw-result-text-second {
  color: #333333;
  font-size: 14px;
  margin-left: 8px;
  white-space: nowrap;
}

.multiplier-value-second {
  color: #333333;
  font-size: 14px;
  margin-left: 96px;
  white-space: nowrap;
}

.result-table-row-third {
  border-radius: 6px;
  background-color: #f7f8f9;
  margin-top: 20px;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 18px 18px 20px;
}

.draw-time-third {
  color: #333333;
  font-size: 13px;
  margin-left: 62px;
  white-space: nowrap;
}

.result-status-link-third {
  color: #ff5b2b;
  font-size: 14px;
  margin-left: 98px;
  white-space: nowrap;
}

.bottom-image {
  position: absolute;
  z-index: 1;
  bottom: -40px;
  right: -120px;
  width: 180px;
  background: url('../../assets/images/icon_smell.png') no-repeat center;
  background-size: 100% 100%;
  height: 120px;
}
</style>
