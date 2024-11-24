import React, { useEffect,useState } from "react";
import { useShoesViewModel } from "../ShoesViewModel"; // Assuming the hook is in the "hooks" folder
import PreviewContainer from "./PreviewContainer";

const ShoesComponent = () => {
  // Destructure the values returned from the useFetchShoes hook
  const uiState = useShoesViewModel()


  // Handle loading state
  if (uiState.isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (uiState.errorMessage) {
    return <div>Error: {error}</div>;
  }

  // Handle case when shoes data is empty or not available
  if (!uiState.shoesData || uiState.shoesData.length === 0) {
    return <div>No shoes available</div>;
  }

  // Render the list of shoes
  return (
    <div>
      <h1>Shoes List</h1>
      <PreviewContainer shoesData={uiState.shoesData} />
    </div>
  );
};

export default ShoesComponent;
