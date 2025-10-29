// 校验手机号格式
export const valPhone = (val: string) => /^1[3456789]\d{9}$/.test(val);

// 校验区域验证码 字母+数字 6 必须包含数字加字母
export const valAreaCode = (val: string) => /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6}$/.test(val);
