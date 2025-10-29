<template>
  <div :class="$style['wrapper-2']">
    <div :class="$style['promotion-container']">
      <div :class="$style['brand-header']">
        <img
          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/4Yq1Qpk3CzgAAAAAQBAAAAgAejH3AQBr/original"
          :class="$style['brand-logo']"
        />
        <span :class="$style['brand-name']"> BIGO&ELE </span>
      </div>
      <div :class="$style['promotion-content']">
        <div :class="$style['promotion-container']">
          <div :class="$style['title-section']">
            <span :class="$style['season-title']"> GREEDY新赛季开后 </span>
            <span :class="$style['region-tag']"> SH </span>
            <ElButton size="small" round="round" :class="$style['activity-button']"> 限时活动 </ElButton>
          </div>
          <span :class="$style['promotion-description']">
            全新食物主题轮盘上线，更多倍率奖励等你来赢！首次登录即送500INR 虚拟货币
          </span>
        </div>
        <Indicator :total="5" :current="0" :class="$style['cls-indicator']" />
      </div>
    </div>
    <div :class="$style['food-theme-section']">
      <img
        src="https://mdn.alipayobjects.com/fecodex_image/afts/img/BjLAR70KgkkAAAAAQCAAAAgAejH3AQBr/original"
        :class="$style['food-theme-image']"
      />
      <span :class="$style['food-theme-description']"> 全新食物主题轮盘上线，更多倍率奖励等你来赢 </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style module>
.wrapper-2 {
  display: flex;
  flex-direction: column;
  width: 374px;
  padding-top: 10px;
  padding-right: 2px;
  padding-bottom: 4px;
  background-color: #fff;
}

.promotion-container {
  display: flex;
  flex-direction: column;
}

.brand-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-left: 15px;
}

.brand-logo {
  flex-shrink: 0;
  width: 26px;
  height: 18px;
  border-radius: 3px;
}

.brand-name {
  margin-left: 8px;
  font-size: 18px;
  color: #ff692d;
  white-space: nowrap;
}

.promotion-content {
  display: flex;
  flex-direction: column;
  padding: 80px 28px 8px 12px;
  margin-top: 8px;
  background-image: url("https://mdn.alipayobjects.com/fecodex_image/afts/img/cwE7SqXPvxYAAAAAUPAAAAgAejH3AQBr/original");
  background-size: cover;
}

.title-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-left: 2px;
}

.season-title {
  font-size: 18px;
  color: #fff;
  white-space: nowrap;
}

.region-tag {
  margin-left: 2px;
  font-size: 2px;
  color: #ff2c27;
  white-space: nowrap;
}

.activity-button {
  height: 20px;
  font-size: 12px;
  color: #fff;
  background-color: #ffb135;
  border-color: #526749;
  border-style: solid;
  border-width: 2px;
}

.promotion-description {
  margin-top: 2px;
  font-size: 12px;
  color: #fff;
}

.cls-indicator {
  align-self: center;
  margin-top: 2px;
}

.food-theme-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 12px 4px;
  background-color: #fff5e6;
  border-radius: 2px;
}

.food-theme-image {
  flex-shrink: 0;
  width: 20px;
  height: 18px;
  border-radius: 10px;
}

.food-theme-description {
  margin-left: 8px;
  font-size: 12px;
  color: #ff5b2b;
  white-space: nowrap;
}
</style>
