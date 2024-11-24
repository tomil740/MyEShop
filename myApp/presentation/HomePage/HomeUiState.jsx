import { atom } from "recoil";

export class HomeUiStateModel {
  shoesData;

  constructor() {
    this.shoesData = [];
  }
}

// Define the counter state as an atom
export const homeUiState = atom({
  key: "HomeUiState", // Unique ID (important)
  default: new HomeUiStateModel(),
});
