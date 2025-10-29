<template>
  <el-tag
    v-if="qualityStatus"
    :type="getQualityTagType(qualityStatus)"
    size="small"
    class="status-tag"
  >
    {{ getQualityStatusLabel(qualityStatus) }}
  </el-tag>
  <span v-else class="text-gray-400">-</span>
</template>

<script setup lang="ts">
import { getQualityTagType, getQualityStatusLabel } from '@/api/lab/analysis/LabStatusUtils'

interface Props {
  qualityStatus?: string | null
}

withDefaults(defineProps<Props>(), {
  qualityStatus: null
})
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
