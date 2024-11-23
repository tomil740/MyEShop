import { useRecoilState, useSetRecoilState } from "recoil";
import { localDataFetch, loadingAtom, errorAtom } from "../data/localDataFetch";


class Repository {
  constructor() {}

  async fetchAPIData(){
    const response = await fetch(
      "https://673b0d30339a4ce4451a586f.mockapi.io/MyShop/shoesItems"
    ); // Replace with actual API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    return await response.json(); // Return parsed JSON data
  }

  async getFetchedData(apiRequest){
    const userData = useRecoilState(localDataFetch);
    const setLoading = useSetRecoilState(loadingAtom);
    const setError = useSetRecoilState(errorAtom);

    try {
      // 1. Set loading state to true before making the API call
      setLoading(true);
      setError(null); // Clear previous error messages

      // 2. Fetch the data from the remote source (API call)
      let data = userData[0];
      if(apiRequest){
        data = await this.fetchAPIData();
      }

      // 3. Update the Recoil atom with the fetched data
      userData[1](data);

      // 4. Set loading state to false after data is fetched
      setLoading(false);

      return data; // Return the fetched data to the use case
    } catch (error) {
      // Handle any errors that occurred during the fetch process
      setError(error.message);
      setLoading(false); // Stop loading
      throw error; // Re-throw error to be handled by the use case or UI layer
    }

  }

  updateItemById(id){
    //
  }

  deleteItemById(id){
    //
  }

}

const repository = new Repository();
export default repository;