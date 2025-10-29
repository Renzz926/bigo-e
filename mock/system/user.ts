import { MockMethod } from "vite-plugin-mock";
import { resultSuccess } from "../_utils";

enum Api {
  GET_USER = "/system/user/1",
}

const Result = {
  GET_USER: {
    id: "1",
    params: {},
    status: "0",
    sort: 0,
    remark: "超级管理员",
    createTime: [2022, 11, 29, 10, 10, 3],
    code: "001",
    userName: "admin",
    nickName: "admin",
    userType: "00",
    phone: "",
    email: "",
    sex: "2",
    avatar: "https://images.gitee.com/uploads/images/2021/1101/141155_f3dfce1d_7382127.jpeg",
    profile: "这个人很懒，暂未留下什么",
    password: "$2a$10$7JB720yubVSZvUI0rEqK/.VqGOZTH.ulu33dHOiBE8ByOhJIrdAu2",
    loginIp: "",
    postIds: ["1"],
    notAdmin: false,
    admin: true,
  },
};

export default [
  {
    url: "/dev-api" + Api.GET_USER,
    timeout: 100,
    method: "get",
    response: () => {
      return resultSuccess(Result.GET_USER);
    },
  },
] as MockMethod[];
