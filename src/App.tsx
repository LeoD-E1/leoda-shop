import Home from "./pages/Home";
import Navbar from "./components/Header/Navbar";
import { Switch, Route } from "wouter";
import Products from "./components/Products/Products";
import routes from "./pages";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
