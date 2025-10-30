<template>
  <div class="wrapper-4">
    <div class="strategy-guide-header">
      <span class="hot-strategies-title"> 热门攻略 </span>
      <div class="header-actions">
        <span class="all-strategies-link"> 全部 </span>
        <img
          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/P6f7SYpd1TAAAAAAHJAAAAgAejH3AQBr/original"
          class="arrow-icon"
        />
      </div>
    </div>
    <div class="strategy-list">
      <div class="strategy-item">
        <div class="strategy-content">
          <img
            src="https://mdn.alipayobjects.com/fecodex_image/afts/img/5bApSYFfwk0AAAAAQBAAAAgAejH3AQBr/original"
            class="strategy-thumbnail"
          />
          <div class="strategy-text">
            <span class="strategy-title"> GREEDY食物选择策 </span>
            <span class="strategy-title"> 略</span>
          </div>
        </div>
        <img
          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/BNGfRIuj-m4AAAAAQCAAAAgAejH3AQBr/original"
          class="strategy-bookmark"
        />
      </div>
      <div class="strategy-item-2">
        <div class="strategy-content">
          <img
            src="https://mdn.alipayobjects.com/fecodex_image/afts/img/qToyQ7fls5gAAAAAQBAAAAgAejH3AQBr/original"
            class="strategy-thumbnail"
          />
          <div class="strategy-text">
            <span class="strategy-title-2"> CATOR DOG倍率分 </span>
            <span class="strategy-title-2"> 析</span>
          </div>
        </div>
        <img
          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/Os2-Q5KaF88AAAAAQCAAAAgAejH3AQBr/original"
          class="strategy-bookmark-2"
        />
      </div>
    </div>
    <div class="strategy-list-2">
      <div class="strategy-item">
        <div class="strategy-content-3">
          <img
            src="https://mdn.alipayobjects.com/fecodex_image/afts/img/qToyQ7fls5gAAAAAQBAAAAgAejH3AQBr/original"
            class="strategy-thumbnail"
          />
          <span class="strategy-title-3">
            Ele-Family Games最佳阵容
            <div />
          </span>
        </div>
        <img
          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/f95MSLhISe8AAAAAQCAAAAgAejH3AQBr/original"
          class="strategy-bookmark-3"
        />
      </div>
      <div class="strategy-item-4">
        <div class="strategy-content-4">
          <img
            src="https://mdn.alipayobjects.com/fecodex_image/afts/img/qToyQ7fls5gAAAAAQBAAAAgAejH3AQBr/original"
            class="strategy-thumbnail"
          />
          <span class="strategy-description">
            Ele-Family Games最佳阵容，超详细...
            <div />
          </span>
        </div>
        <img
          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/yHO8TY7IqmYAAAAAQCAAAAgAejH3AQBr/original"
          class="strategy-bookmark-3"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.wrapper-4 {
  display: flex;
  flex-direction: column;
  width: 374px;
  padding: 14px 10px 10px 12px;
  margin-top: 2px;
  background-color: #f6f6f6;
}

.strategy-guide-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 2px;
  margin-left: 2px;
}

.hot-strategies-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.header-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.all-strategies-link {
  font-size: 14px;
  color: #999;
  white-space: nowrap;
}

.arrow-icon {
  flex-shrink: 0;
  width: 14px;
  height: 15px;
  margin-left: 4px;
  border-radius: 3px;
}

.strategy-list {
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  margin-right: 2px;
}

.strategy-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 8px 5px 6px 8px;
  background-color: #fff;
  border-radius: 5px;
}

.strategy-content {
  display: flex;
  flex-direction: row;
  margin-right: 10px;
}

.strategy-thumbnail {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 3px;
}

.strategy-text {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-self: center;
  margin-left: 2px;
}

.strategy-title {
  margin-left: 2px;
  font-size: 12px;
  color: #333;
  white-space: nowrap;
}

.strategy-subtitle {
  margin-top: 2px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
}

.strategy-bookmark {
  flex-shrink: 0;
  align-self: flex-end;
  width: 30px;
  height: 28px;
  border-radius: 14px;
}

.strategy-item-2 {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 8px 6px 6px 8px;
  margin-left: 15px;
  background-color: #fff;
  border-radius: 6px;
}

.strategy-title-2 {
  margin-left: 4px;
  font-size: 12px;
  color: #333;
  white-space: nowrap;
}

.strategy-subtitle-2 {
  margin-top: 2px;
  font-size: 18px;
  color: #333;
}

.strategy-bookmark-2 {
  flex-shrink: 0;
  align-self: flex-end;
  width: 26px;
  height: 26px;
  margin-right: 2px;
  border-radius: 3px;
}

.strategy-list-2 {
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  margin-right: 2px;
}

.strategy-content-3 {
  display: flex;
  flex-direction: row;
  margin-right: 12px;
}

.strategy-title-3 {
  flex: 1;
  align-self: center;
  margin-left: 2px;
  font-size: 12px;
  color: #333;
}

.strategy-bookmark-3 {
  flex-shrink: 0;
  align-self: flex-end;
  width: 30px;
  height: 28px;
  margin-top: 5px;
  border-radius: 3px;
}

.strategy-item-4 {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 8px 5px 6px 8px;
  margin-left: 15px;
  background-color: #fff;
  border-radius: 6px;
}

.strategy-content-4 {
  display: flex;
  flex-direction: row;
  margin-right: 8px;
}

.strategy-description {
  flex: 1;
  align-self: center;
  margin-left: 4px;
  font-size: 12px;
  color: #333;
}
</style>
