<template>
  <div class="wrapper-5">
    <span class="download-link-label"> {{ $t("views.download.title") }} </span>
    <div class="link-container">
      <div class="link-item">
        <img
          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/481mS7Omwe0AAAAAQLAAAAgAejH3AQBr/original"
          class="link-icon"
        />
        <div class="link-content">
          <img
            src="https://mdn.alipayobjects.com/fecodex_image/afts/img/NcWKR4-ZkMcAAAAAMCAAAAgAejH3AQBr/original"
            class="link-indicator"
          />
          <span class="link-text"> {{ $t("views.download.link1") }} </span>
        </div>
      </div>
      <div class="link-item-2">
        <img
          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/qy6YSLVt7O4AAAAAQIAAAAgAejH3AQBr/original"
          class="link-icon-2"
        />
        <div class="link-content">
          <img
            src="https://mdn.alipayobjects.com/fecodex_image/afts/img/NcWKR4-ZkMcAAAAAMCAAAAgAejH3AQBr/original"
            class="link-indicator"
          />
          <span class="link-text"> {{ $t("views.download.link2") }} </span>
        </div>
      </div>
      <div class="link-item-2" style="margin-right: 0">
        <img
          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/3AzgSbq1cq8AAAAAQHAAAAgAejH3AQBr/original"
          class="link-icon-2"
        />
        <div class="link-content">
          <img
            src="https://mdn.alipayobjects.com/fecodex_image/afts/img/NcWKR4-ZkMcAAAAAMCAAAAgAejH3AQBr/original"
            class="link-indicator"
          />
          <span class="link-text"> {{ $t("views.download.link3") }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
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
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  overflow-x: auto;
}

.link-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px 4px 4px;
  background-color: #fff;
  margin-right: 10px;
  border-radius: 6px;
}

.link-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
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
  flex-direction: row;
  align-items: center;
  padding: 4px 8px 4px 4px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 5px;
}

.link-icon-2 {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 3px;
}
</style>
