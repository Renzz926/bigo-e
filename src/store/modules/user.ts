import pinia from "@/store";

interface State {
  isLogin: boolean;
  token: string;
}

const useUserStore = defineStore("user", {
  state: (): State => {
    return {
      isLogin: false,
      token: "",
    };
  },
  persist: {
    storage: localStorage,
    paths: ["isLogin", "token"],
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(pinia);
}

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

export default useUserStore;
