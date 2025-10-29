<template>
  <div :class="$style['wrapper-5']">
    <span :class="$style['download-link-label']"> 下载链接 </span>
    <div :class="$style['link-container']">
      <div :class="$style['link-item']">
        <img
          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/481mS7Omwe0AAAAAQLAAAAgAejH3AQBr/original"
          :class="$style['link-icon']"
        />
        <div :class="$style['link-content']">
          <img
            src="https://mdn.alipayobjects.com/fecodex_image/afts/img/NcWKR4-ZkMcAAAAAMCAAAAgAejH3AQBr/original"
            :class="$style['link-indicator']"
          />
          <span :class="$style['link-text']"> 链接1 </span>
        </div>
      </div>
      <div :class="$style['link-item-2']">
        <img
          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/qy6YSLVt7O4AAAAAQIAAAAgAejH3AQBr/original"
          :class="$style['link-icon-2']"
        />
        <div :class="$style['link-content']">
          <img
            src="https://mdn.alipayobjects.com/fecodex_image/afts/img/NcWKR4-ZkMcAAAAAMCAAAAgAejH3AQBr/original"
            :class="$style['link-indicator']"
          />
          <span :class="$style['link-text']"> 链接2 </span>
        </div>
      </div>
      <div :class="$style['link-item-2']">
        <img
          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/3AzgSbq1cq8AAAAAQHAAAAgAejH3AQBr/original"
          :class="$style['link-icon-2']"
        />
        <div :class="$style['link-content']">
          <img
            src="https://mdn.alipayobjects.com/fecodex_image/afts/img/NcWKR4-ZkMcAAAAAMCAAAAgAejH3AQBr/original"
            :class="$style['link-indicator']"
          />
          <span :class="$style['link-text']"> 链接3 </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style module>
.wrapper-5 {
  display: flex;
  flex-direction: column;
  width: 374px;
  padding: 4px 10px 15px 12px;
  background-color: #f6f6f6;
}

.download-link-label {
  margin-left: 2px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
}

.link-container {
  display: flex;
  flex-direction: row;
  gap: 12;
  align-items: center;
  margin-top: 8px;
  margin-right: 2px;
}

.link-item {
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 2px 12px 2px 4px;
  background-color: #fff;
  border-radius: 6px;
}

.link-icon {
  flex-shrink: 0;
  width: 40px;
  height: 42px;
  border-radius: 5px;
}

.link-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: 4px;
}

.link-indicator {
  flex-shrink: 0;
  width: 14px;
  height: 16px;
  border-radius: 6px;
}

.link-text {
  margin-left: 2px;
  font-size: 12px;
  color: #2b6193;
  white-space: nowrap;
}

.link-item-2 {
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 2px 10px 2px 4px;
  background-color: #fff;
  border-radius: 5px;
}

.link-icon-2 {
  flex-shrink: 0;
  width: 40px;
  height: 42px;
  border-radius: 3px;
}
</style>
