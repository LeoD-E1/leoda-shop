import { Switch, Route } from "wouter";
import routes from "./pages";

function App() {
  return (
    <div className="App">
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
