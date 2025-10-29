import { useUserStoreWithOut } from "@/store/modules/user";

export function getToken(key = "") {
  const userStore = useUserStoreWithOut();
  key = key || userStore.tokenKey;
  return localStorage.getItem(key) || "";
}

export function removeToken(key = "") {
  const userStore = useUserStoreWithOut();
  key = key || userStore.tokenKey;
  return localStorage.removeItem(key);
}
