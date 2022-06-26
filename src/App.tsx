import { Switch, Route } from "wouter";
import routes from "./pages";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} component={route.component} />
          ))}
        </Switch>
      </QueryClientProvider>
    </div>
  );
}

export default App;
