<template>
  <div class="wrapper-4">
    <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/HA2ZTZ8BcXgAAAAAgBAAAAgAejH3AQBr/original" class="game-banner-image" />
    <div class="game-section-container">
      <div class="game-list-container">
        <div class="game-category-header">
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/RJ5tS7maHbMAAAAAQBAAAAgAejH3AQBr/original" class="category-icon" />
          <span class="category-title"> 热门游戏 </span>
        </div>
        <div class="game-item-container">
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/oEOnRb1b6BkAAAAAQOAAAAgAejH3AQBr/original" class="game-thumbnail" />
          <div class="game-card-info">
            <div class="game-card-title">GREEDY</div>
            <span class="game-card-description"> 食物主题轮盘游戏 </span>
          </div>
        </div>
        <div class="game-item-container">
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/cZ5NSIMYpL0AAAAAQNAAAAgAejH3AQBr/original" class="game-card-image" />
          <span class="game-card-info">
            <div class="game-card-title">CATOR DOG</div>
            <span class="game-card-description"> 动物拳击对战游戏 </span>
            <div />
          </span>
        </div>
        <div class="game-item-container">
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/5tQaQYerlzwAAAAAQMAAAAgAejH3AQBr/original" class="game-thumbnail" />
          <span class="game-card-info">
            <div class="game-card-title">Ele-Family Games</div>
            <span class="game-card-description"> 足球家庭竞技游戏 </span>
            <div />
          </span>
        </div>
        <div class="download-section-container">
          <div class="game-category-header">
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/QLIoRbYUQQ8AAAAAPVAAAAgAejH3AQBr/original" class="download-icon" />
            <span class="category-title"> 下载链接 </span>
          </div>
          <div class="platform-icons-container">
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/zhE_Q6H5JsEAAAAAQVAAAAgAejH3AQBr/original" class="platform-icon-first" />
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/_U4XSpiSiqoAAAAAQPAAAAgAejH3AQBr/original" class="platform-icon-second" />
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/UYXjRYkt0OQAAAAAQMAAAAgAejH3AQBr/original" class="platform-icon-second" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
.wrapper-4 {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  background-color: #ffffff;
  margin: 0 auto;
  justify-content: space-between;
  padding-bottom: 60px;
}

.game-banner-image {
  border-radius: 6px;
  flex-shrink: 0;
  flex: 24;
  height: 384px;
  margin-right: 16px;
}

.game-section-container {
  border-radius: 11px;
  background-color: #f7f8f9;
  display: flex;
  flex: 7;
  flex-direction: column;
  padding: 16px;
}

.game-category-header {
  align-self: flex-start;
  margin-left: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
}

.category-icon {
  flex-shrink: 0;
  border-radius: 3px;
  width: 18px;
  height: 16px;
}

.category-title {
  color: #333333;
  font-size: 18px;
  margin-left: 6px;
  font-weight: 600;
  white-space: nowrap;
}

.game-item-container {
  width: 100%;
  border-radius: 13px;
  background-color: #ffffff;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  margin-bottom: 10px;
}

.game-thumbnail {
  border-radius: 5px;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
}

.game-info-container {
  margin-left: 5px;
  display: flex;
  flex-direction: column;
}

.game-title {
  color: #333333;
  font-size: 14px;
  margin-left: 2px;
}

.game-description {
  color: #999999;
  font-size: 13px;
  margin-top: 2px;
  white-space: nowrap;
}

.game-list-container {
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.game-card-container {
  border-radius: 14px;
  background-color: #ffffff;
  max-width: 220px;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 54px 6px 8px;
}

.game-card-image {
  border-radius: 4px;
  flex-shrink: 0;
  width: 38px;
  height: 40px;
}

.game-card-info {
  font-size: 14px;
  font-weight: 700;
  margin-left: 2px;
}

.game-card-title {
  width: 100%;
  color: #333333;
}

.game-card-description {
  color: #999999;
}

.game-card-container-secondary {
  border-radius: 9px;
  background-color: #ffffff;
  max-width: 220px;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 30px 6px 8px;
}

.game-card-info-secondary {
  font-weight: 700;
  max-width: 142px;
  margin-left: 2px;
}

.game-card-description-secondary {
  color: #999999;
  font-size: 13px;
}

.download-section-container {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
}

.download-icon {
  border-radius: 10px;
  flex-shrink: 0;
  width: 18px;
  height: 20px;
}

.platform-icons-container {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 5px 2px 6px;
}

.platform-icon-first {
  border-radius: 9px;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
}

.platform-icon-second {
  flex-shrink: 0;
  border-radius: 3px;
  width: 60px;
  height: 60px;
}
</style>
