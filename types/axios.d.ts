export type ErrorMessageMode = "none" | "modal" | "message" | undefined;

export interface RequestOptions {
  // Splicing request parameters to url
  joinParamsToUrl?: boolean;
  // Format request parameter time
  formatDate?: boolean;
  // 是否处理请求结果
  isTransformResponse?: boolean;
  // Whether to return native response headers 是否返回原生响应头
  // For example: use this attribute when you need to get the response headers
  isReturnNativeResponse?: boolean;
  // Whether to join url
  joinPrefix?: boolean;
  // Interface address, use the default apiUrl if you leave it blank
  apiUrl?: string;
  // 请求拼接路径
  urlPrefix?: string;
  // Error message prompt type
  errorMessageMode?: ErrorMessageMode;
  // Whether to add a timestamp
  joinTime?: boolean;
  ignoreCancelToken?: boolean;
  // Whether to send token in header
  withToken?: boolean;
  // 请求重试机制
  retryRequest?: RetryRequest;
  // 自定义 token
  token?: string;
  // 请求类型
  responseType?: string;
  // 返回数据字段
  returnKey?: string;
  // loading flag
  hideLoading?: boolean;
}

export interface RetryRequest {
  isOpenRetry: boolean;
  count: number;
  waitTime: number;
}

export interface Result<T = any> {
  code: number;
  type: "success" | "error" | "warning";
  msg: string;
  message: string;
  status: number;
  data: T;
  content?: string;
}

// multipart/form-data: upload file
export interface UploadFileParams {
  // Other parameters
  data?: Recordable;
  // File parameter interface field name
  name?: string;
  // file name
  file: File | Blob;
  // file name
  filename?: string;
  [key: string]: any;
  xObsAcl?: string;
}
