<template>
  <div
    v-if="bodyWidth < 1200"
    :class="{ 'layout-default': true, 'padding-top': page.isNavPage, 'padding-bottom': page.isTabPage }"
  >
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
    <LayoutKeepLive v-if="page.keepAlive" />
    <router-view v-else />
    <van-tabbar v-if="page.isTabPage" v-model="active">
      <van-tabbar-item replace to="/h5" icon="home-o" name="0">
        <span :class="`bar-name ${active === '0' ? 'active' : ''}`">{{ $t("tab.home") }}</span>
        <template #icon="{ active }">
          <img :src="active ? tab1 : tab11" alt="" class="bar-icon" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager-o" name="1">
        <span :class="`bar-name ${active === '1' ? 'active' : ''}`">{{ $t("tab.trial") }}</span>
        <template #icon="{ active }">
          <img :src="active ? tab2 : tab22" alt="" class="bar-icon" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager-o" name="2">
        <span :class="`bar-name ${active === '2' ? 'active' : ''}`">{{ $t("tab.data") }}</span>
        <template #icon="{ active }">
          <img :src="active ? tab3 : tab33" alt="" class="bar-icon" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager-o" name="3">
        <span :class="`bar-name ${active === '3' ? 'active' : ''}`">{{ $t("tab.event") }}</span>
        <template #icon="{ active }">
          <img :src="active ? tab4 : tab44" alt="" class="bar-icon" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import tab1 from "@/assets/images/tab1.png";
import tab11 from "@/assets/images/tab11.png";
import tab2 from "@/assets/images/tab2.png";
import tab22 from "@/assets/images/tab22.png";
import tab3 from "@/assets/images/tab3.png";
import tab33 from "@/assets/images/tab33.png";
import tab4 from "@/assets/images/tab4.png";
import tab44 from "@/assets/images/tab44.png";
import useLocale from "@/i18n/useLocale";

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
const active = ref("0");
const route = useRoute();
const bodyWidth = window.document.body.clientWidth;
const page = computed(() => ({
  isTabPage: route?.meta?.isTabPage || false,
  keepAlive: route?.meta?.keepAlive || false,
  isNavPage: route?.meta?.isNavPage || false,
  title: route?.meta?.title || "",
}));
onMounted(() => {
  if (bodyWidth > 1200) {
    window.location.href = "https://bigo-ele.vercel.app/";
  }
});
</script>

<style lang="scss" scoped>
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
.van-tabbar {
  padding: 5px 0 12px;
}
.layout-default {
  width: 100%;
  min-height: 100vh;
  background: #f6f8fa;

  &.padding-top {
    padding-top: 46px;
  }

  &.padding-bottom {
    padding-bottom: 64px;
  }

  .bar-name {
    font-size: 14px;
    color: #999;
  }

  .active {
    color: #ff5b2b;
  }

  .bar-icon {
    width: 25px;
    height: 24px;
  }
}
</style>
