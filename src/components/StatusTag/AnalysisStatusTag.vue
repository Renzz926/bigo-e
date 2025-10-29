<template>
  <el-tag
    v-if="props.status"
    :type="getTagType()"
    size="small"
    class="status-tag"
  >
    {{ getTagLabel() }}
  </el-tag>
  <span v-else class="text-gray-400">-</span>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Props {
  status?: string | null
  hasWarningDetails?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  status: null,
  hasWarningDetails: false
})

/**
 * 获取标签类型
 */
function getTagType(): 'success' | 'warning' | 'danger' | 'info' {
  try {
    const value = props.status
    const hasWarningDetails = props.hasWarningDetails
    
    switch (value) {
      case '0': // 待确认
        return 'warning';
      case '1': // 已确认
        // 如果有标黄的合格明细，已确认状态也显示为黄色
        return hasWarningDetails ? 'warning' : 'success';
      case '2': // 已报废
        return 'danger';
      case '3': // 待配置
        return 'info';
      default:
        return 'info';
    }
  } catch (error) {
    console.error('getTagType 执行出错:', error);
    return 'info';
  }
}

/**
 * 获取标签文本
 */
function getTagLabel(): string {
  try {
    const value = props.status
    
    switch (value) {
      case '0':
        return t('common.statusPending');
      case '1':
        return t('common.statusConfirmed');
      case '2':
        return t('lab.chemicalAnalysis.statusScrapped');
      case '3':
        return t('lab.chemicalAnalysis.statusPendingConfig');
      default:
        return props.status || '';
    }
  } catch (error) {
    console.error('getTagLabel 执行出错:', error);
    return props.status || '';
  }
}
</script>

<style scoped>
/* 美化状态标签 - 与化学分析页面保持一致 */
.status-tag {
  border-radius: 6px;
  font-weight: 500;
  font-size: 12px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.status-tag.el-tag--success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.status-tag.el-tag--warning {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
}

.status-tag.el-tag--danger {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
}

.status-tag.el-tag--info {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
}
</style>