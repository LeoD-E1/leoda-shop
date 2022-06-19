import Products from "../components/Products/Products";
import Home from "./Home";
import Product from "../components/Product/Product";

declare interface Route {
  path: string;
  component: React.ComponentType<any>;
  subRoutes?: Route[];
}

const routes: Route[] = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/products/:id", component: Product },
  {
    path: "/link01",
    component: Home,
    subRoutes: [{ path: "/link01/sub01", component: Home }],
  },
  { path: "/link02", component: Home },
  {
    path: "/link03",
    component: Home,
    subRoutes: [{ path: "/link03/sub01", component: Home }],
  },
  { path: "/link04", component: Home },
];

export default routes;
