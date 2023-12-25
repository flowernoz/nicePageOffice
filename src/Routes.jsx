import RooutLayout from "./layout/RooutLayout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Page2 from "./components/Page2/Page2";
import Page3 from "./components/Page3/Page3";
import Page4 from "./components/Page4/Page4";


function Routes() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RooutLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default Routes;
