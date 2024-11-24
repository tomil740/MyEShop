import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShoesPage from "./ShoesPage/components/ShoesPage ";
import HomePage from "./HomePage/components/HomePage";
import ItemPage from './ItemPage/components/ItemPage';
import MainNavBar from "./MainNavBar";


/*
    this component should controll our navigation between main features / screens while keep track on the 
    needed navigation arguments and mange the navigation itself
*/

function NavigationHoster() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainNavBar />,
      children: [
        
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "shoes",
        element: <ShoesPage />,
      },
      {
        path: "shoes/:shoeId",
        element: <ItemPage isNewItem={false} />,
      },
      {
        path: "shoes/add",
        element: <ItemPage isNewItem={true}/>,
      },
    ]
  
      }  ])

  return (
      <RecoilRoot>
        <RouterProvider router={router}/>
      </RecoilRoot>
  );
}

export default NavigationHoster;
