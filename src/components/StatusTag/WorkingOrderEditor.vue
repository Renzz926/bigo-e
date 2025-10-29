<template>
  <div class="working-order-editor">
    <!-- 输入框 -->
    <div class="working-order-input-container">
      <el-input
        v-model="inputValue"
        placeholder=""
        size="small"
        clearable
        @keyup.enter="addWorkingOrder"
        @clear="inputValue = ''"
      >
        <template #append>
          <el-button 
            :disabled="!inputValue.trim()" 
            size="small" 
            type="primary" 
            @click="addWorkingOrder"
          >
            {{ t('common.add') }}
          </el-button>
        </template>
      </el-input>
    </div>

    <!-- 工作订单列表 -->
    <div v-if="workingOrderList.length > 0" class="working-order-tags mt-2">
      <el-tag
        v-for="(orderNo, index) in workingOrderList"
        :key="index"
        closable
        size="small"
        effect="plain"
        class="working-order-tag"
        @close="removeWorkingOrder(index)"
      >
        {{ orderNo }}
      </el-tag>
      
      <!-- 清空全部按钮 -->
      <el-button
        v-if="workingOrderList.length > 1"
        size="small"
        text
        type="danger"
        @click="clearAllWorkingOrders"
      >
        {{ t('common.clearAll') }}
      </el-button>
    </div>

    <!-- 空状态提示 -->
    <div v-else class="empty-state">
      <span class="text-gray-400">{{ t('lab.chemicalAnalysis.noWorkingOrders') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Props {
  modelValue?: string | null // 工作订单JSON字符串
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

// 输入框的值
const inputValue = ref('')

// 工作订单列表
const workingOrderList = ref<string[]>([])

/**
 * 解析工作订单号JSON字符串
 * @param workingOrderNoJson 工作订单号JSON字符串
 * @returns 工作订单号数组
 */
function parseWorkingOrderNos(workingOrderNoJson: string | null): string[] {
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

/**
 * 将工作订单数组转换为JSON字符串
 * @param orders 工作订单数组
 * @returns JSON字符串
 */
function stringifyWorkingOrderNos(orders: string[]): string | null {
  if (!orders || orders.length === 0) {
    return null
  }
  return JSON.stringify(orders)
}

// 监听props变化，更新本地数据
watch(() => props.modelValue, (newValue) => {
  workingOrderList.value = parseWorkingOrderNos(newValue)
}, { immediate: true })

// 添加工作订单
function addWorkingOrder() {
  const orderNo = inputValue.value.trim()
  if (orderNo && !workingOrderList.value.includes(orderNo)) {
    workingOrderList.value.push(orderNo)
    inputValue.value = ''
    emitUpdate()
  } else if (orderNo && workingOrderList.value.includes(orderNo)) {
    // 可以添加提示：工作订单已存在
    console.warn('工作订单已存在:', orderNo)
  }
}

// 删除单个工作订单
function removeWorkingOrder(index: number) {
  workingOrderList.value.splice(index, 1)
  emitUpdate()
}

// 清空所有工作订单
function clearAllWorkingOrders() {
  workingOrderList.value = []
  emitUpdate()
}

// 发出更新事件
function emitUpdate() {
  const jsonString = stringifyWorkingOrderNos(workingOrderList.value)
  emit('update:modelValue', jsonString)
}
</script>

<style scoped>
.working-order-editor {
  width: 100%;
  min-width: 12.5rem; /* 使用rem单位，约200px */
  max-width: 100%; /* 确保不超出容器宽度 */
}

.working-order-input-container {
  margin-bottom: 0.5rem; /* 使用rem单位，约8px */
  width: 100%;
}

.working-order-input-container :deep(.el-input) {
  width: 100%;
}

.working-order-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem; /* 使用rem单位，相对于根字体大小 */
  align-items: center;
  min-height: 2.25rem; /* 使用rem单位 */
  width: 100%;
  max-width: 100%; /* 确保不超出容器宽度 */
}

.working-order-tag {
  margin: 0;
  font-size: 0.75rem; /* 使用rem单位，相对于根字体大小 */
  padding: 0.25rem 0.5rem; /* 使用rem单位 */
  border-radius: 0.375rem; /* 使用rem单位 */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 500;
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  border: none;
  max-width: 100%; /* 确保标签不超出容器 */
  word-break: break-all; /* 允许长文本换行 */
}

.working-order-tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.4);
}

.empty-state {
  text-align: center;
  padding: 0.5rem 0; /* 使用rem单位，约8px */
  font-size: 0.75rem; /* 使用rem单位，约12px */
  color: #999;
}

.mt-2 {
  margin-top: 0.5rem; /* 使用rem单位，约8px */
}
</style>