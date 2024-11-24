import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { homeUiState } from "./HomeUiState";
import { useSortByBrand } from "../../domain/useCase/useSortByBrand";
import { useFetchShoes } from "../../domain/useCase/useFetchShoes";

export function useHomeViewModel() {
  // Call the custom hook to fetch shoes data and manage global state (from Recoil)
  useFetchShoes();
  const shoesData  = useSortByBrand();
  //todo need to set matched ui state...
  const [uiState, setUiState] = useRecoilState(homeUiState);

  useEffect(() => {
    // Only update the uiState if there is an actual change in the data
    const newShoesData = shoesData;

    // Check if the current UI state is different from the new data
    if (
      uiState.shoesData !== newShoesData 
    ) {
      setUiState({
        shoesData: newShoesData, // Update shoes data in the ViewModel state
      });
    }
  }, [shoesData,uiState, setUiState]); // Adding uiState and setUiState to deps


  // Return the updated UI state to the component
  return uiState;
}
