import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "./pages/About";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={Index} />
        <Route path="/about" children={About} />
        <Route path="*" children={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
