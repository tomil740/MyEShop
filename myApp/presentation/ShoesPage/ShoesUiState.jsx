import { atom } from "recoil";

export class ShoesUiStateModule {
  shoesData;
  isLoading;
  errorMessage;

  constructor(initStateArg) {
    let initState = initStateArg;
    if(initState == null || initState == undefined){
      initState = { shoesData : [], loading : false, error: "" }
    }
    this.shoesData = initState.shoesData;
    this.isLoading = initState.loading;
    this.errorMessage = initState.error;
  }
}

// Define the counter state as an atom
export const shoesUiState = atom({
  key: "ShoesUiState", // Unique ID (important)
  default: new ShoesUiStateModule(),
});




