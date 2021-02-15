import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/* Google Search HomePage*/}
          <Route path="/search">
            <SearchPage />
           </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      {/* Search Page with the results */}
    </div>
  );
}

export default App;
