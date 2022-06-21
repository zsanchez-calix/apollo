import { atom } from "recoil";

export const storesFilter = atom({
  key: "storesFilter",
  default: {
    location: null,
    item: null,
    price: null
  }
});
