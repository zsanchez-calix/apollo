import { atom } from "recoil";

export const storesFilter = atom({
  key: "storesFilter",
  default: {
    allStores: true,
    location: "",
    item: "",
    price: 0
  }
});
