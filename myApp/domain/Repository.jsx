import {useSetRecoilState } from "recoil";
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