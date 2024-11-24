import { Link } from "react-router";
import { useHomeViewModel } from "../useHomeViewModel";
import BrandsGrid from './BrandsGrid';


const HomePage = () => {
  // Destructure the values returned from the useFetchShoes hook
  const uiState = useHomeViewModel();

  // Handle case when shoes data is empty or not available
  if (!uiState.shoesData || uiState.shoesData.length === 0) {
    return <div>No shoes available</div>;
  }

  // Render the list of shoes
  return (
    <div>
      <h1>Shoes List</h1>
      <BrandsGrid data={uiState.shoesData} />
    </div>
  );
};

export default HomePage;
