import dayjs from "dayjs";

/**
 * 格式化年月日
 * @param {*} val
 */
export function formatTimeToDate(val: number | string) {
  return formatTime(val, "YYYY年MM月DD日");
}

/**
 * 格式化时分秒
 * @param {*} val
 */
export function formatTimeToSecond(val: number | string) {
  return formatTime(val, "HH:mm:ss");
}

/**
 * 格式化年月日 时分秒
 * @param {*} val
 */
export function formatTimeToDateSecond(val: number | string) {
  return formatTime(val, "YYYY-MM-DD HH:mm:ss");
}

/**
 * 格式化年月日 时分
 * @param {*} val
 */
export function formatTimeToDateMinute(val: number | string) {
  return formatTime(val, "YYYY-MM-DD HH:mm");
}

/**
 * 格式化时分
 * @param {*} val
 */
export function formatTimeToMinute(val: number | string) {
  return formatTime(val, "HH:mm");
}

/**
 * 自定义时间转换
 * @param {*} val
 * @param {*} layout
 * @param {*} defaultPlaceHolder
 */
export function formatTime(val: number | string, layout: string | undefined, defaultPlaceHolder = "-") {
  if (!val || val === defaultPlaceHolder) {
    return defaultPlaceHolder;
  }
  const m = dayjs.unix(Number(val) / 1000); // 时间戳为秒
  return m.isValid() ? m.format(layout) : defaultPlaceHolder;
}

/**
 * 格式化金额（千分位）
 * @param {*} val
 * @param {*} defaultPlaceHolder
 */
export function formatAmount(val: number | string, defaultPlaceHolder = "-") {
  if (!val || val === defaultPlaceHolder) {
    return defaultPlaceHolder;
  }
  const reg = /(\d{1,3})(?=(?:\d{3})+(?!\d))/g;
  return String(val)?.replace(reg, "$1,");
}
