import { useRecoilState } from "recoil";
import { localDataFetch, loadingAtom, errorAtom } from "../../data/localDataFetch";
import { useEffect,useState } from "react";
import repository from "../Repository";


export function useFetchShoes() {
  const shoesData = useRecoilState(localDataFetch);
  const loading = useRecoilState(loadingAtom);
  const error = useRecoilState(errorAtom);

  // State to manage retry attempts
  const [retryCount, setRetryCount] = useState(0);

  const fetchData = async () => {
    try {
      loading[1](true);
      error[1](null); // Clear previous errors

      const data = await repository.fetchAPIData();
      shoesData[1](data); // Store the fetched data

      loading[1](false);
    } catch (error) {
      error[1](error.message);
      loading[1](false);
    }
  };

  // Fetch data on mount or when retry count changes
  useEffect(() => {
    fetchData(); // Trigger fetch when component mounts or retry count changes
  }, [retryCount]); // Only re-run when retryCount changes

  // Function to manually retry fetching data
  const retryFetch = () => {
    setRetryCount((prev) => prev + 1); // Increment retry count to trigger the useEffect
  };
  // Only fetch if raw data is empty (this ensures it doesn't re-fetch unnecessarily)
  if (!shoesData || shoesData.length === 0) {
    fetchData();
  }

  // Expose Recoil state for the UI to use
  return { shoesData, loading, error, retryFetch };
}
