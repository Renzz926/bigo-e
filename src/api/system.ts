import { saasHttp, noProxyHttp } from "@/plugins/http/axios";

// 获取验证码
export const getMessageCode = (data: any) =>
  saasHttp.post({ url: `/auth/front/h5/sms/send`, data }, { hideLoading: true });

// 登录
export const loginAccount = (data: any) =>
  saasHttp.post({ url: `/auth/front/h5/parent/login`, data }, { hideLoading: true });

// 注销账号
export const cancelAccount = () => saasHttp.get({ url: `/account/front/account/signout` }, { hideLoading: true });

// 获取用户信息
export const getUserInfo = () => saasHttp.get({ url: `/account/front/account/info` });
