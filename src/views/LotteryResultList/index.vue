<template>
  <div class="wrapper-3">
    <div class="lottery-header">
      <span class="result-title"> 开奖结果 </span>
      <div class="filter-section">
        <span class="filter-all"> 全部 </span>
        <img
          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/iFiYT5U7dWEAAAAAHOAAAAgAejH3AQBr/original"
          class="filter-icon"
        />
      </div>
    </div>
    <div class="lottery-content">
      <div class="game-info">
        <div class="game-tags">
          <div @click="active = 'GREEDY'" :class="`game-tag-2 ${active === 'GREEDY' ? 'active' : ''}`">GREEDY</div>
          <div @click="active = 'CAT OR DOG'" :class="`game-tag-2 ${active === 'CAT OR DOG' ? 'active' : ''}`">
            CAT OR DOG
          </div>
          <div
            @click="active = 'Ele-Family Games'"
            :class="`game-tag-2 ${active === 'Ele-Family Games' ? 'active' : ''}`"
          >
            Ele-Family Games
          </div>
        </div>
        <div class="update-info">
          <span class="update-label"> 更新： </span>
          <span class="update-time"> 2025年10月11日9:05 </span>
        </div>
      </div>
      <div class="lottery-items">
        <div class="lottery-item-1">
          <div class="filter-section">
            <div class="filter-section">
              <div class="item-time-id-1">
                <span class="item-time-1"> 15:30:22 </span>
                <span class="item-id-1"> G20230512-001 </span>
              </div>
              <img
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/RWUdRY-qSAQAAAAAQDAAAAgAejH3AQBr/original"
                class="item-icon-1"
              />
            </div>
            <span class="item-name-1"> 鸡腿 </span>
          </div>
          <div class="filter-section">
            <span class="item-multiplier-1"> 2.45X </span>
            <span class="item-status-1"> 已开奖 </span>
          </div>
        </div>
        <div class="lottery-item-2">
          <div class="filter-section">
            <div class="filter-section">
              <div class="item-time-id-1">
                <span class="item-time-1"> 15:30:22 </span>
                <span class="item-id-1"> G20230512-001 </span>
              </div>
              <img
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/L6mIS5QCpskAAAAAQEAAAAgAejH3AQBr/original"
                class="item-icon-2"
              />
            </div>
            <span class="item-name-1"> 热狗 </span>
          </div>
          <div class="filter-section">
            <span class="item-multiplier-1"> 2.45X </span>
            <span class="item-status-1"> 已开奖 </span>
          </div>
        </div>
        <div class="lottery-item-3">
          <div class="filter-section">
            <div class="filter-section">
              <div class="item-time-id-1">
                <span class="item-time-1"> 15:30:22 </span>
                <span class="item-id-1"> G20230512-001 </span>
              </div>
              <img
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/Ove0QL1g9FcAAAAAQEAAAAgAejH3AQBr/original"
                class="item-icon-3"
              />
            </div>
            <span class="item-name-1"> 烤串 </span>
          </div>
          <div class="filter-section">
            <span class="item-multiplier-1"> 2.45X </span>
            <span class="item-status-1"> 已开奖 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const active = ref("GREEDY");
</script>

<style scoped lang="scss">
.wrapper-3 {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 10px 0 12px;
  background-color: #f6f6f6;
}

.lottery-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 2px;
  margin-left: 2px;
}

.result-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.filter-section {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.filter-all {
  font-size: 14px;
  color: #999;
  white-space: nowrap;
}

.filter-icon {
  flex-shrink: 0;
  width: 14px;
  height: 15px;
  margin-left: 4px;
  border-radius: 3px;
}

.lottery-content {
  display: flex;
  flex-direction: column;
  padding: 18px 8px 12px;
  margin-top: 8px;
  margin-right: 2px;
  background-color: #fff;
  border-radius: 6px;
}

.game-info {
}

.game-tags {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .active {
    font-weight: 600;
    color: #ff5b2b;

    &::after {
      position: absolute;
      bottom: -8px;
      left: calc(50% - 6px);
      width: 14px;
      height: 8px;
      content: "";
      background: url("../../assets/images/icon_1.png") no-repeat center;
      background-size: 100% 100%;
    }
  }
}

.game-tag-2 {
  flex-shrink: 0;
  position: relative;
  font-size: 15px;
  color: #666;
  white-space: nowrap;
}

.update-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-top: 16px;
}

.update-label {
  font-size: 12px;
  color: #999;
  white-space: nowrap;
}

.update-time {
  margin-left: 14px;
  font-size: 12px;
  color: #999;
  white-space: nowrap;
}

.lottery-items {
  display: flex;
  flex-direction: column;
  gap: 18;
  margin-top: 12px;
}

.lottery-item-1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #ededed;
}

.item-time-id-1 {
  display: flex;
  flex-direction: column;
}

.item-time-1 {
  font-size: 12px;
  font-weight: 700;
  color: #333;
}

.item-id-1 {
  margin-top: 2px;
  margin-left: 2px;
  font-size: 12px;
  color: #999;
  white-space: nowrap;
}

.item-icon-1 {
  flex-shrink: 0;
  width: 34px;
  height: 32px;
  margin-left: 34px;
  border-radius: 17px;
}

.item-name-1 {
  margin-left: 8px;
  font-size: 12px;
  color: #333;
  white-space: nowrap;
}

.item-multiplier-1 {
  font-size: 12px;
  color: #333;
  white-space: nowrap;
}

.item-status-1 {
  margin-left: 26px;
  font-size: 12px;
  color: #ff5b2b;
  white-space: nowrap;
}

.lottery-item-2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  margin-right: 2px;
  border-bottom: 1px solid #ededed;
}

.item-icon-2 {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  margin-left: 34px;
  border-radius: 17px;
}

.lottery-item-3 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0 0;
  margin-right: 2px;
}

.item-icon-3 {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  margin-left: 35px;
  border-radius: 17px;
}
</style>
