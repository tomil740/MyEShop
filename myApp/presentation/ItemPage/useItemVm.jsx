import { useRecoilState, useRecoilValue } from "recoil";
import { itemUiState } from "./ItemUiState";
import { useGetShoeById } from "../../domain/useCase/useGetShoeById";
import { useCallback } from "react";
import { useInsertShoe } from "../../domain/useCase/useInsertShoe";
import { useNavigate } from "react-router-dom";


export function useItemVm() {
  const [uiState, setUiState] = useRecoilState(itemUiState);
  const navigate = useNavigate();
  const { insertShoe, loading1, error1, success } = useInsertShoe();

  //navigate back on success action.
  if (success) {
    navigate('/');
  }

  // useCallback ensures stable reference of getShoeByIdFun
  const getShoeByIdFun = useCallback(
    async (shoeId) => {
      // Fetch the shoe by ID
      const { shoe, error, loading } = useGetShoeById(shoeId.shoeId);

      if (loading) return; // Don't update the UI if still loading

      if (error) {
        console.error(error); // Handle error in the component or view model
        return;
      }

      // Only update the UI state if the shoe is different
      //todo //this method is bad , anything that undifne can cause infinte loop!
      if (
        !uiState.theItem ||
        uiState.theItem.id !== shoe.id ||
        uiState.theItem.name !== shoe.name ||
        uiState.theItem.brand !== shoe.brand ||
        uiState.theItem.imgUrl !== shoe.imgUrl ||
        uiState.theItem.price !== shoe.price
      ) {


        // Update Recoil state

        setUiState({
          ...uiState,
          theItem: shoe,
        });
      }
    },
    [uiState, setUiState]
  );

  return { uiState, getShoeByIdFun, insertShoe };
}

