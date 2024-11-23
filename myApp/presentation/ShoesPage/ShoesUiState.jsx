import { atom } from "recoil";

export class ShoesUiStateModule {
  shoesItems;

  constructor() {
    this.shoesItems = [];
  }
}

// Define the counter state as an atom
export const shoesUiState = atom({
  key: "ShoesUiState", // Unique ID (important)
  default: new ShoesUiStateModule(),
});




