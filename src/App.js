import { Switch, Route } from "react-router-dom";

import CheckTransform from "./components/CheckTransform/CheckTransform";
import Navbar from "./components/Navbar";
import "./App.css";
import Main from "./pages/Main/Main";
import CubeRotate from "./components/RotateCube/RotateCube";

function App() {
  return (
    <div className="App-start">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path={"/check"}>
          <CheckTransform />
        </Route>
        <Route path={"/rotate"}>
          <CubeRotate />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
