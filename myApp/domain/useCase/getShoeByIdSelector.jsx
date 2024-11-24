import { selector } from "recoil";
import { localDataFetch } from "../../data/localDataFetch"; // Recoil state for raw data

// Selector to fetch a specific shoe by itemId
export const getShoeByIdSelector = selector({
  key: "getShoeById",
  get:
    ({ get }) =>
    (itemId) => {
      const shoesData = get(localDataFetch); // Fetch the list of shoes
      return shoesData.find((shoe) => shoe.id == itemId.shoeId); // Return the specific item
    },
});
