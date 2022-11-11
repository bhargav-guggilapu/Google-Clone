import Home from "./components/Home";
import Search from "./components/Search";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/tooble" exact>
          <Home />
        </Route>
        <Route path="/tooble/search/:query/:index" exact>
          <Search />
        </Route>
        <Route path="*">
          <Redirect to="/tooble" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
