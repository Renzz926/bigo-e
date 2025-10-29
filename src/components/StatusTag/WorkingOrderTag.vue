<template>
  <div v-if="workingOrderNos && workingOrderNos.length > 0" class="working-order-tags">
    <el-tag
      v-for="(orderNo, index) in workingOrderNos"
      :key="index"
      size="small"
      effect="plain"
      class="working-order-tag"
    >
      {{ orderNo }}
    </el-tag>
  </div>
  <span v-else class="text-gray-400">-</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  workingOrderNo?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  workingOrderNo: null
})

/**
 * 解析工作订单号JSON字符串
 * @param workingOrderNoJson 工作订单号JSON字符串
 * @returns 工作订单号数组
 */
function parseWorkingOrderNos(workingOrderNoJson: string): string[] {
  if (!workingOrderNoJson) {
    return []
  }
  
  try {
    const parsed = JSON.parse(workingOrderNoJson)
    if (Array.isArray(parsed)) {
      return parsed
    }
    return []
  } catch (error) {
    console.error('解析工作订单号失败:', error)
    return []
  }
}

const workingOrderNos = computed(() => {
  if (!props.workingOrderNo) return []
  return parseWorkingOrderNos(props.workingOrderNo)
})
</script>

<style scoped>
/* 工作订单标签样式美化 - 与化学分析页面保持一致 */
.working-order-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
}

.working-order-tag {
  margin: 0;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  border: none;
}

.working-order-tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.4);
}
</style>
