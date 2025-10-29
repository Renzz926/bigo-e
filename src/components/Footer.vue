<template>
  <div class="footer">
    <van-button v-if="showCancel" :type="cancelType" block round v-bind="cancelBtnConfig" @click="onCancel">{{
      cancelTxt
    }}</van-button>
    <van-button :color="color" :disabled="disable" :type="type" v-bind="btnConfig" block round @click="onClick">{{
      txt
    }}</van-button>
  </div>
</template>
<script setup lang="ts">
defineProps({
  showCancel: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "#0071ff",
  },
  cancelTxt: {
    type: String,
    default: "按钮",
  },
  disable: {
    type: Boolean,
    default: false,
  },
  txt: {
    type: String,
    default: "按钮",
  },
  type: {
    type: String,
    default: "primary",
  },
  cancelType: {
    type: String,
    default: "default",
  },
  cancelBtnConfig: {
    type: Object,
    default: () => ({}),
  },
  btnConfig: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["onClick", "onCancel"]);
// 确认按钮
const onClick = () => {
  emit("onClick");
};
// 取消按钮
const onCancel = () => {
  emit("onCancel");
};
</script>
<style lang="scss" scoped>
:deep(.van-button--disabled) {
  background: rgba($color: #000, $alpha: 50%) !important;
  border: none;

  .van-button__text {
    color: #fff;
  }
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  width: 100%;
  height: 63px;
  padding: 0 7.5px;
  background: #fff;

  .van-button {
    height: 38px;
    margin: 0 7.5px;
  }
}
</style>
