import { atom } from "recoil";
// import { BlogPost } from "./types";

const tabsState = atom({
  key: "tabsActive",
  default: 0,
});

export { tabsState };
