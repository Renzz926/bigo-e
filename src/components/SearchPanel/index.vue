<template>
  <div class="search-panel">
    <el-form
      ref="formRef"
      :model="searchForm"
      :inline="false"
      label-width="auto"
      class="search-form"
    >
      <div class="search-form-content">
        <slot name="search-items" :search-form="searchForm">
          <!-- 默认搜索项 -->
          <el-form-item
            v-for="item in defaultSearchItems"
            :key="item.prop"
            :label="item.label"
            :prop="item.prop"
            class="search-form-item"
          >
            <!-- 输入框 -->
            <el-input
              v-if="item.type === 'input'"
              v-model="searchForm[item.prop]"
              :placeholder="item.placeholder"
              :type="item.inputType || 'text'"
              :maxlength="item.maxlength"
              :show-word-limit="item.showWordLimit"
              :clearable="item.clearable !== false"
              :disabled="item.disabled"
              class="search-input"
            />

            <!-- 选择器 -->
            <el-select
              v-else-if="item.type === 'select'"
              v-model="searchForm[item.prop]"
              :placeholder="item.placeholder"
              :clearable="item.clearable !== false"
              :filterable="item.filterable !== false"
              :multiple="item.multiple"
              :disabled="item.disabled"
              class="search-select"
            >
              <el-option
                v-for="option in item.options"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              />
            </el-select>

            <!-- 日期选择器 -->
            <el-date-picker
              v-else-if="item.type === 'date'"
              v-model="searchForm[item.prop]"
              :placeholder="item.placeholder"
              type="date"
              :format="item.format"
              :value-format="item.valueFormat"
              :clearable="item.clearable !== false"
              :disabled="item.disabled"
              class="search-date-picker"
            />

            <!-- 日期范围选择器 -->
            <el-date-picker
              v-else-if="item.type === 'daterange'"
              v-model="searchForm[item.prop]"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :format="item.format || 'YYYY-MM-DD'"
              :value-format="item.valueFormat || 'YYYY-MM-DD'"
              :clearable="item.clearable !== false"
              :disabled="item.disabled"
              class="search-date-range-picker"
            />

            <!-- 数字输入框 -->
            <el-input-number
              v-else-if="item.type === 'number'"
              v-model="searchForm[item.prop]"
              :placeholder="item.placeholder"
              :min="item.min"
              :max="item.max"
              :precision="item.precision"
              :step="item.step"
              :disabled="item.disabled"
              class="search-number"
            />

            <!-- 开关 -->
            <el-switch
              v-else-if="item.type === 'switch'"
              v-model="searchForm[item.prop]"
              :active-text="item.activeText"
              :inactive-text="item.inactiveText"
              :disabled="item.disabled"
              class="search-switch"
            />

            <!-- 单选框组 -->
            <el-radio-group
              v-else-if="item.type === 'radio'"
              v-model="searchForm[item.prop]"
              :disabled="item.disabled"
              class="search-radio-group"
            >
              <el-radio
                v-for="option in item.options"
                :key="option.value"
                :label="option.value"
                class="search-radio"
              >
                {{ option.label }}
              </el-radio>
            </el-radio-group>

            <!-- 复选框组 -->
            <el-checkbox-group
              v-else-if="item.type === 'checkbox'"
              v-model="searchForm[item.prop]"
              :disabled="item.disabled"
              class="search-checkbox-group"
            >
              <el-checkbox
                v-for="option in item.options"
                :key="option.value"
                :label="option.value"
                class="search-checkbox"
              >
                {{ option.label }}
              </el-checkbox>
            </el-checkbox-group>

            <!-- 自定义插槽 -->
            <slot
              v-else-if="item.type === 'custom'"
              :name="`custom-${item.prop}`"
              :search-form="searchForm"
              :item="item"
            />
          </el-form-item>
        </slot>
      </div>

      <!-- 搜索操作按钮 -->
      <div class="search-form-actions">
        <el-button
          type="primary"
          icon="Search"
          @click="handleSearch"
          class="search-btn"
        >
          搜索
        </el-button>
        <el-button
          icon="Refresh"
          @click="handleReset"
          class="reset-btn"
        >
          重置
        </el-button>
        <slot name="extra-actions" />
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, defineEmits, defineExpose } from 'vue';

interface SearchItemOption {
  value: any;
  label: string;
}

interface SearchItem {
  prop: string;
  label: string;
  placeholder: string;
  type: 'input' | 'select' | 'date' | 'daterange' | 'number' | 'switch' | 'radio' | 'checkbox' | 'custom';
  required?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  filterable?: boolean;
  multiple?: boolean;
  inputType?: string;
  maxlength?: number;
  showWordLimit?: boolean;
  options?: SearchItemOption[];
  format?: string;
  valueFormat?: string;
  min?: number;
  max?: number;
  precision?: number;
  step?: number;
  activeText?: string;
  inactiveText?: string;
}

interface Props {
  defaultSearchItems?: SearchItem[];
  initialValues?: Record<string, any>;
}

interface Emits {
  (e: 'search', form: Record<string, any>): void;
  (e: 'reset'): void;
}

const props = withDefaults(defineProps<Props>(), {
  defaultSearchItems: () => [],
  initialValues: () => ({})
});

const emit = defineEmits<Emits>();

const formRef = ref();
const searchForm = reactive({ ...props.initialValues });

const handleSearch = () => {
  emit('search', { ...searchForm });
};

const handleReset = () => {
  formRef.value?.resetFields();
  // 重置为初始值
  Object.keys(searchForm).forEach(key => {
    searchForm[key] = props.initialValues[key] || '';
  });
  emit('reset');
};

const getFormData = () => ({ ...searchForm });

const setFormData = (data: Record<string, any>) => {
  Object.assign(searchForm, data);
};

const clearForm = () => {
  Object.keys(searchForm).forEach(key => {
    searchForm[key] = '';
  });
};

defineExpose({
  getFormData,
  setFormData,
  clearForm,
  reset: handleReset,
  formRef
});
</script>

<style scoped>
.search-panel {
  margin-bottom: 16px;
}

.search-form {
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.search-form-content {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-end;
}

.search-form-item {
  margin-bottom: 0;
  flex: 0 0 auto;
  min-width: 200px;
}

/* 多语言label支持 */
.search-form-item :deep(.el-form-item__label) {
  white-space: normal;
  word-break: break-word;
  hyphens: auto;
  line-height: 1.4;
  margin-right: 8px;
  font-weight: 500;
  color: #606266;
}

.search-input,
.search-select,
.search-date-picker,
.search-date-range-picker,
.search-number {
  width: 100%;
  min-width: 180px;
}

.search-switch {
  margin-left: 0;
}

.search-radio-group,
.search-checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.search-radio,
.search-checkbox {
  margin-right: 0;
}

.search-form-actions {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
}

.search-btn,
.reset-btn {
  flex-shrink: 0;
  min-width: 80px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .search-form-content {
    flex-direction: column;
    align-items: stretch;
  }

  .search-form-item {
    min-width: auto;
    width: 100%;
  }

  .search-form-actions {
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
  }

  .search-btn,
  .reset-btn {
    width: 100%;
  }
}

/* 确保长文本label不会破坏布局 */
.search-form-item :deep(.el-form-item__label) {
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  max-width: none;
  overflow: visible;
}

/* 输入框对齐 */
.search-form-item :deep(.el-form-item__content) {
  display: flex;
  align-items: flex-start;
}
</style>
