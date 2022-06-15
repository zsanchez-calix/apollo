import { atom } from "recoil";

export const storesFilter = atom({
  key: "storesFilter",
  default: {
    allStores: true,
    store_id: null,
    location: null,
    stock_count: null,
    item_price: null,
  },
});

export const stores = atom({
  key: "stores",
  default: [],
});
