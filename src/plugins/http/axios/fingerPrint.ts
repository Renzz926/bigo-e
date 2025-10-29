// 异步加载FingerprintJS
(async () => {
  // 加载FingerprintJS模块
  const FP = await import("@fingerprintjs/fingerprintjs");

  // 初始化FingerprintJS
  const fp = await FP.load();

  // 获取访问者的指纹
  const result = await fp.get();

  // result.visitorId为用户的唯一指纹
  window.visitorId = result.visitorId;
})();
