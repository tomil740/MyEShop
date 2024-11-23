import { useState } from "react"
import shoesVm from "../shoesVm"


function ShoesPage(){

  const vm = useState(new shoesVm())[0]
  const uiState = useState(vm.uiState);

  return (
    <section>
      <h1>The ui state is</h1>
      <button onClick={()=>{vm.getAlldata()}}>get data</button>
    </section>
  )
}
export default ShoesPage;