import { ResultEnum } from "@/enums/httpEnum";

export function resultSuccess<T = Recordable>(data?: T, { msg = "ok" } = {}) {
  return {
    code: ResultEnum.SUCCESS,
    data,
    msg,
    type: "success",
  };
}

export function resultError(msg = "Request failed", { code = ResultEnum.ERROR, data = null } = {}) {
  return {
    code,
    data,
    msg,
    type: "error",
  };
}

export interface requestParams {
  method: string;
  body: any;
  headers?: { authorization?: string };
  query: any;
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({ headers }: requestParams): string | undefined {
  return headers?.authorization;
}
