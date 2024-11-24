import {  useItemVm } from "../useItemVm"
import { useParams } from "react-router-dom";
import ShoeForm from "./ShoeForm";


function ItemPage({isNewItem}){
  const { uiState, getShoeByIdFun, insertShoe } = useItemVm();
  const shoeId = useParams();
      getShoeByIdFun(shoeId);

  // Check if item data is available
  if (!uiState.theItem) {
    return <div>Loading...</div>;
  }

    const { theItem } = uiState;

  const builderForm = isNewItem ? (
    <ShoeForm initState={{}} onSubmit={insertShoe} isNewItem={true} />
  ) : (
    <ShoeForm initState={theItem} onSubmit={insertShoe} isNewItem={false} />
  );

  // Display the item details
  return <div>
    {builderForm}
    </div>;
}
export default ItemPage