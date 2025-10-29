<template>
  <div :class="$style['wrapper-3']">
    <div :class="$style['lottery-header']">
      <span :class="$style['result-title']"> 开奖结果 </span>
      <div :class="$style['filter-section']">
        <span :class="$style['filter-all']"> 全部 </span>
        <img
          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/iFiYT5U7dWEAAAAAHOAAAAgAejH3AQBr/original"
          :class="$style['filter-icon']"
        />
      </div>
    </div>
    <div :class="$style['lottery-content']">
      <div :class="$style['game-info']">
        <div :class="$style['game-tags']">
          <span :class="$style['game-tag-1']"> GREEDY </span>
          <span :class="$style['game-tag-2']"> CAT OR DOG </span>
          <span :class="$style['game-tag-2']"> Ele-Family Games </span>
        </div>
        <div :class="$style['update-info']">
          <span :class="$style['update-label']"> 更新： </span>
          <span :class="$style['update-time']"> 2025年10月11日9:05 </span>
        </div>
      </div>
      <div :class="$style['lottery-items']">
        <div :class="$style['lottery-item-1']">
          <div :class="$style['filter-section']">
            <div :class="$style['filter-section']">
              <div :class="$style['item-time-id-1']">
                <span :class="$style['item-time-1']"> 15:30:22 </span>
                <span :class="$style['item-id-1']"> G20230512-001 </span>
              </div>
              <img
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/RWUdRY-qSAQAAAAAQDAAAAgAejH3AQBr/original"
                :class="$style['item-icon-1']"
              />
            </div>
            <span :class="$style['item-name-1']"> 鸡腿 </span>
          </div>
          <div :class="$style['filter-section']">
            <span :class="$style['item-multiplier-1']"> 2.45X </span>
            <span :class="$style['item-status-1']"> 已开奖 </span>
          </div>
        </div>
        <div :class="$style['lottery-item-2']">
          <div :class="$style['filter-section']">
            <div :class="$style['filter-section']">
              <div :class="$style['item-time-id-1']">
                <span :class="$style['item-time-1']"> 15:30:22 </span>
                <span :class="$style['item-id-1']"> G20230512-001 </span>
              </div>
              <img
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/L6mIS5QCpskAAAAAQEAAAAgAejH3AQBr/original"
                :class="$style['item-icon-2']"
              />
            </div>
            <span :class="$style['item-name-1']"> 热狗 </span>
          </div>
          <div :class="$style['filter-section']">
            <span :class="$style['item-multiplier-1']"> 2.45X </span>
            <span :class="$style['item-status-1']"> 已开奖 </span>
          </div>
        </div>
        <div :class="$style['lottery-item-3']">
          <div :class="$style['filter-section']">
            <div :class="$style['filter-section']">
              <div :class="$style['item-time-id-1']">
                <span :class="$style['item-time-1']"> 15:30:22 </span>
                <span :class="$style['item-id-1']"> G20230512-001 </span>
              </div>
              <img
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/Ove0QL1g9FcAAAAAQEAAAAgAejH3AQBr/original"
                :class="$style['item-icon-3']"
              />
            </div>
            <span :class="$style['item-name-1']"> 烤串 </span>
          </div>
          <div :class="$style['filter-section']">
            <span :class="$style['item-multiplier-1']"> 2.45X </span>
            <span :class="$style['item-status-1']"> 已开奖 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style module>
.wrapper-3 {
  display: flex;
  flex-direction: column;
  width: 374px;
  padding: 10px 10px 10px 12px;
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
  color: #333;
  white-space: nowrap;
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
  padding: 18px 4px 12px;
  margin-top: 8px;
  margin-right: 2px;
  background-color: #fff;
  border-radius: 6px;
}

.game-info {
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-left: 5px;
}

.game-tags {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.game-tag-1 {
  font-size: 14px;
  font-weight: 700;
  color: #ff5b2b;
  white-space: nowrap;
}

.game-tag-2 {
  font-size: 14px;
  font-weight: 700;
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
  padding: 2px 5px 5px;
  margin-top: 12px;
}

.lottery-item-1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-color: #f2f2f2;
  border-bottom-style: solid;
  border-bottom-width: 2;
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
  margin-right: 2px;
  border-color: #f2f2f2;
  border-bottom-style: solid;
  border-bottom-width: 2;
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
