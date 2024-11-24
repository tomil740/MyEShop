import { atom } from "recoil";
import ShoesItem from "../../domain/models/ShoesItem";


export class ItemUiStateModule {
  theItem;

  constructor() {
    this.theItem = new ShoesItem({
      itemId: "-1",
      name: "Nike Air Max 2021",
      brand: "Nike",
      imgUrl: "https://example.com/nike_air_max.jpg",
      price: 150,
    });
  }
}

// Define the counter state as an atom
export const itemUiState = atom({
  key: "itemUiState", // Unique ID (important)
  default: new ItemUiStateModule(),
});
