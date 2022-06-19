import Navbar from "./components/Header/Navbar";
import { Switch, Route } from "wouter";
import routes from "./pages";

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
