<template>
  <div>
    <div class="lang-switch" @click="showPicker = true">
      <span class="lang-trigger">{{ currentLabel }}</span>
    </div>

    <van-popup v-model:show="showPicker" position="bottom" round>
      <van-picker
        :title="$t('common.language')"
        :confirm-button-text="$t('common.confirm')"
        :cancel-button-text="$t('common.cancel')"
        :columns="pickerColumns"
        :default-index="defaultIndex"
        @confirm="onConfirmPicker"
        @cancel="onCancelPicker"
      />
    </van-popup>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import useLocale from "./i18n/useLocale";

const { currentLocale, changeLocale, t } = useLocale();

const langCodes = ["zh-cn", "zh-tw", "en", "en-my", "vi", "in-id", "th", "pt-br"] as const;
const langOptions = computed(() => langCodes.map((code) => ({ code, label: t(`language.${code}`) as string })));

const showPicker = ref(false);
const selectedLang = ref<string>((localStorage.getItem("language") as string) || (currentLocale.value as string));
const currentLabel = computed(
  () => langOptions.value.find((i) => i.code === selectedLang.value)?.label || selectedLang.value
);
const pickerColumns = computed(() => langOptions.value.map((i) => ({ text: i.label, value: i.code })));
const defaultIndex = computed(() =>
  Math.max(
    0,
    langOptions.value.findIndex((i) => i.code === selectedLang.value)
  )
);

const onConfirmPicker = (value: any, index: number) => {
  // Vant v4 emits (selectedValue, selectedIndex) or an object with selectedValues
  let code = value;
  if (value && typeof value === "object") {
    if (Array.isArray(value.selectedValues)) code = value.selectedValues[0];
    else if ("value" in value) code = (value as any).value;
    else if ("code" in value) code = (value as any).code;
  }
  if (typeof code !== "string") {
    const col = pickerColumns.value[index];
    code = col?.value || selectedLang.value;
  }
  selectedLang.value = code;
  changeLocale(code as any);
  showPicker.value = false;
};

const onCancelPicker = () => {
  showPicker.value = false;
};
</script>

<style scoped>
.lang-switch {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
}

.lang-trigger {
  display: inline-block;
  padding: 6px 8px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 14px;
  font-size: 12px;
  color: #333;
}
</style>
