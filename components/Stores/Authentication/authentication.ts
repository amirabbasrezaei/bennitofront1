import create from "zustand";
import { persist, devtools } from "zustand/middleware";

interface userInfoType {
  verifyType: string;
  userInfo: object;
  showForgetPass: boolean;
  setUserInfo: (e: any) => void;
  setShowForgetPass: (e?:boolean) => void
}

const useUserInfo = create<userInfoType>()((set) => ({
  verifyType: "",
  userInfo: {},
  setUserInfo: (e) =>
    set(({ userInfo }) => ({ userInfo: { ...userInfo, ...e } })),
    showForgetPass: false,
    setShowForgetPass: (e:boolean) => set(() => ({showForgetPass: e}))
}));

export default useUserInfo;
