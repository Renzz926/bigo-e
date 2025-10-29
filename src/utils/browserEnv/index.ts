// 判断浏览器是否为微信环境
export function isWechatEnv() {
  const ua = navigator.userAgent.toLowerCase();

  const isWXWork = ua.match(/wxwork/i) == "wxwork";

  const isWeixin = !isWXWork && ua.match(/MicroMessenger/i) == "micromessenger";
  return isWeixin;
}
