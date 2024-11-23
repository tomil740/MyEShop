import getAllShoes from '../../domain/useCase/getAllShoes';
import {shoesUiState} from './ShoesUiState' ;
import { useRecoilState } from "recoil";



class shoesVm {
  uiState;
  setUiState;

  constructor() {
    const a = useRecoilState(shoesUiState);
    this.uiState = a[0];
    this.setUiState = a[1];
  }



  async getAlldata() {
    const a = await getAllShoes(true);
    console.log(a);
    //need to check for errors....
    const b = { ...this.uiState, shoesItems: a };
    this.setUiState(b);
    this.uiState = b;
    
  }
}

export default shoesVm;
