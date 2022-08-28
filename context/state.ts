import { atom } from "recoil";

const tabsState = atom({
  key: "tabsActive",
  default: 0,
});

export { tabsState };
