<template>
  <svg :class="['svg-icon', $attrs.class]" :style="getStyle" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>
<script setup lang="ts">
import type { CSSProperties } from "vue";
const props = defineProps({
  // 前缀
  prefix: {
    type: String,
    default: "icon",
  },
  // icon名称
  name: {
    type: String,
    required: true,
  },
  // 尺寸
  size: {
    type: [Number, String],
    default: 16,
  },
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);

const getStyle = computed((): CSSProperties => {
  const { size } = props;
  let s = `${size}`;
  s = `${s.replace("px", "")}px`;
  return {
    width: s,
    height: s,
  };
});
</script>

<style lang="scss" scoped>
.svg-icon {
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentcolor;
}
</style>
