import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { useFetchShoes } from "../../domain/useCase/useFetchShoes";
import { shoesUiState } from "./ShoesUiState";


export function useShoesViewModel() {
  // Call the custom hook to fetch shoes data and manage global state (from Recoil)
  const { shoesData, loading, error, retryFetch } = useFetchShoes();
  const [uiState, setUiState] = useRecoilState(shoesUiState);

  useEffect(() => {
    // Only update the uiState if there is an actual change in the data
    const newShoesData = shoesData[0];
    const newIsLoading = loading[0];
    const newErrorMessage = error[0];

    // Check if the current UI state is different from the new data
    if (
      uiState.shoesData !== newShoesData ||
      uiState.isLoading !== newIsLoading ||
      uiState.errorMessage !== newErrorMessage
    ) {
      setUiState({
        shoesData: newShoesData, // Update shoes data in the ViewModel state
        isLoading: newIsLoading, // Update loading state
        errorMessage: newErrorMessage, // Update error message
      });
    }
  }, [shoesData, loading, error, uiState, setUiState]); // Adding uiState and setUiState to deps

  useEffect(()=>{
    retryFetch();
  },[])


  // Return the updated UI state to the component
  return uiState;
}
 
