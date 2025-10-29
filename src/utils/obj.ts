// 对象的处理

import { isObject } from "@/utils/is";
export function objHas(obj: any, name: string) {
  return isObject(obj) ? Reflect.has(obj, name) : false;
}
