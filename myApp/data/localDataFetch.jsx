import { atom } from "recoil";

export const localDataFetch = atom({
  key: "localDataFetch", // unique ID for this atom
  default: null, // initial value is null, can be updated when data is fetched
});

export const brandSortedData = atom({
  key: "brandSortedData", // Unique identifier for this atom
  default: [], // Default value (empty array)
});

export const loadingAtom = atom({
  key: "loadingAtom",
  default: false, // Initially not loading
});

export const errorAtom = atom({
  key: "errorAtom",
  default: null, // Initially no error
});
