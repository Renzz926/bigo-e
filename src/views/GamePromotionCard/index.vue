<template>
  <div class="wrapper-2">
    <div class="promotion-container">
      <div class="brand-header">
        <img
          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/4Yq1Qpk3CzgAAAAAQBAAAAgAejH3AQBr/original"
          class="brand-logo"
        />
        <span class="brand-name"> BIGO&ELE </span>
      </div>
      <div class="promotion-content">
        <van-swipe class="my-swipe" :autoplay="2000" indicator-color="#FF5B2B">
          <van-swipe-item v-for="(item, index) in 4" :key="index">
            <div class="txt1">
              {{ $t("views.promo.swipeTitle") }}
              <div class="btn">{{ $t("views.promo.limitedEvent") }}</div>
            </div>
            <div class="txt2">
              {{ $t("views.promo.swipeSubtitle") }}
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="food-theme-section">
      <img
        src="https://mdn.alipayobjects.com/fecodex_image/afts/img/BjLAR70KgkkAAAAAQCAAAAgAejH3AQBr/original"
        class="food-theme-image"
      />
      <span class="food-theme-description">{{ $t("views.promo.foodThemeNotice") }}</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.wrapper-2 {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
}

.promotion-container {
  display: flex;
  flex-direction: column;
}

.brand-header {
  display: flex;
  align-items: center;
  align-self: flex-start;
  height: 44px;
  margin-left: 15px;
  font-size: 20px;
  font-weight: 600;
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

.my-swipe .van-swipe-item {
  height: 160px;
  background: url("../../assets/images/banner.png") no-repeat center;
  background-size: cover;
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100px;
    left: 0;
    bottom: 0;
    background: url("../../assets/images/mask.png") no-repeat center;
    background-size: 100% 100%;
    z-index: 2;
  }
  .txt1 {
    position: absolute;
    bottom: 52px;
    left: 10px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    z-index: 3;
    display: flex;
  }
  .txt2 {
    position: absolute;
    bottom: 17px;
    left: 10px;
    font-size: 12px;
    color: #fff;
    z-index: 3;
    max-width: 80%;
  }
  .btn {
    // z-index: 4;
    // position: absolute;
    // bottom: 52px;
    padding:0 18px 0 4px;
    margin-left: 4px;
    // right: 128px;
    width: auto;
    height: 20px;
    background: url("../../assets/images/btn.png") no-repeat center;
    background-size: 100% 100%;
    font-size: 10px;
    display: flex;
    align-items: center;
    color: #fff;
  }
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

.food-theme-section {
  display: flex;
  align-items: center;
  padding: 5px 5px 5px 14px;
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
  font-size: 14px;
  color: #ff5b2b;
}
</style>
