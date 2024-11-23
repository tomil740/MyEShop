import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShoesPage from "./ShoesPage/components/ShoesPage ";

/*
    this component should controll our navigation between main features / screens while keep track on the 
    needed navigation arguments and mange the navigation itself
*/

function NavigationHoster() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ShoesPage/>,
    },
  ]);

  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default NavigationHoster;
