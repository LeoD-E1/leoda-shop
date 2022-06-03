import Home from "./pages/Visitor/Home";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "wouter";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/:user/home" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/products/:productId" component={Product} />

        {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={DashboardView} />
        <Route path="/customers" component={CustomersView} /> */}
        {/*  Routes of Orders */}
        <Route path="/orders" /* component={Orders } */ />
        <Route path="/orders/:order" /* component={ DetailedOrder } */ />
      </Switch>
    </div>
  );
}

export default App;
