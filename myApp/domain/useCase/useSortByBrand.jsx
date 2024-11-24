// useFetchAndSortShoes.js (Sorting Hook)
import { useRecoilValue } from "recoil";
import { localDataFetch } from "../../data/localDataFetch"; // Recoil state for raw unsorted data
import { useFetchShoes } from "./useFetchShoes"; // Regular hook for fetching data
import { useEffect,useState } from "react";

export function useSortByBrand() {
  const rawShoesData = useRecoilValue(localDataFetch); // Access raw unsorted data
  const [sortedShoesData, setSortedShoesData] = useState([]); // Local state for sorted data

  // Ensure that we fetch data if rawShoesData is empty or not available
  useEffect(() => {
    if (!rawShoesData || rawShoesData.length === 0) {
      //useFetchShoes(); // Trigger the fetch if raw data is empty
      return; // Exit early if fetch was triggered, we don't need to sort yet
    }
  }, [rawShoesData]); // Only trigger fetch when raw data is empty

  // Sort data whenever rawShoesData changes
  useEffect(() => {
    if (rawShoesData && rawShoesData.length > 0) {
      // Sort the data based on the given sortOrder
      const sortedData = [...rawShoesData].sort((a, b) => {
          return a.brand.localeCompare(b.brand); // Sort alphabetically by brand
      });
      const a = convertToMatchedArray(sortedData);
      setSortedShoesData(a); // Update the sorted data state
    }
  }, [rawShoesData]); // Re-sort every time rawShoesData or sortOrder changes
  // Return the sorted data, along with loading and error states
  return sortedShoesData;
}


function convertToMatchedArray(sortedShoesData) {
  // Initialize an empty array to hold the transformed data
  const matchedArray = [];

  // Iterate over the sorted shoes data
  sortedShoesData.forEach((shoe) => {
    // Find the brand in the matched array
    let brandGroup = matchedArray.find((item) => item.brand === shoe.brand);

    // If the brand group does not exist, create a new one
    if (!brandGroup) {
      brandGroup = { brand: shoe.brand, items: [] };
      matchedArray.push(brandGroup);
    }

    // Add the current shoe to the correct brand's items array
    brandGroup.items.push({
      id: shoe.id,
      name: shoe.name,
      imgUrl: shoe.imgUrl,
      price: shoe.price,
    });
  });

  return matchedArray;
}



