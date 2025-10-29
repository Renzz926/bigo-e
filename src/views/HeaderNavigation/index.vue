<template>
  <div class="wrapper-2">
    <div class="logo-container">
      <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/RfR6RK5qOa0AAAAAQDAAAAgAejH3AQBr/original" class="logo-image" />
      <span class="logo-text"> BIGO& ELE </span>
    </div>
    <div class="tabs">
      <div @click="handleClick(item.name)" :class="`items ${item.name === active ? 'active' : ''}`" v-for="(item, index) in menus" :key="index">
        {{ item.name }}<el-icon class="dropdown-icon" v-if="item.hasArrow"><ArrowDownBold /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const menus = [
  { name: '首页' },
  { name: '游戏资讯' },
  { name: '数据中心' },
  { name: '体育赛事' },
  { name: '关于我们' },
  { name: 'APP下载' },
  { name: '简体中文', hasArrow: true }
];
const active = ref('首页');

const handleClick = (name: string) => {
  active.value = name;
};
</script>

<style scoped lang="scss">
.wrapper-2 {
  background-color: #ffffff;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 6px;
}

.logo-container {
  display: flex;
  flex-direction: row;
  margin-right: 160px;
  align-items: center;
}
.tabs {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Alibaba PuHuiTi 3;
  font-weight: 400;
  font-size: 16px;
  justify-content: space-between;
  .items {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .active {
    position: relative;
    font-weight: 600;
    font-size: 16px;
    color: #ff5b2b;
    &::after {
      content: '';
      display: block;
      width: 14px;
      height: 6px;
      background: url('../../assets/images/icon1.png') no-repeat center;
      background-size: 100%;
      position: absolute;
      bottom: -10px;
      left: calc(50% - 7px);
    }
  }
}

.logo-image {
  flex-shrink: 0;
  border-radius: 3px;
  width: 36px;
  height: 34px;
}

.logo-text {
  color: #ff642c;
  font-size: 24px;
  font-weight: 700;
  margin-left: 15px;
  white-space: nowrap;
}

.navigation-tabs {
  background-color: #ffffff;
}

.dropdown-icon {
  color: #333333;
  font-size: 12px;
  margin-left: 6px;
}
</style>
