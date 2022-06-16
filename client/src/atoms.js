import { atom } from "recoil";

export const storesFilter = atom({
  key: "storesFilter",
  default: {
    allStores: true,
    location: "",
    item: "carrots",
    price: 100
  }
});
