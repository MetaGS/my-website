import { Switch, Route } from "react-router-dom";

import CheckTransform from "./components/CheckTransform/CheckTransform";
import Navbar from "./components/Navbar";
import "./App.css";
import Main from "./pages/Main";
import AboutMePage from "./pages/AboutMePage/";
import CubeRotate from "./components/RotateCube/RotateCube";
import ProjectPage from "./pages/ProjectPage";
import CreateProject from "./pages/CreateProject";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <div className="App-start">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={AboutMePage} />
        <Route path="/projects/project" component={ProjectPage} />
        <Route path="/projects/:id" component={ProjectPage} />
        <Route path="/create-project" component={CreateProject} />
        {/* <Route path="/contact-me" component={ContactMe} /> */}
        {/* <Route path={"/check"}>
          <CheckTransform />
        </Route> */}
        {/* <Route path={"/rotate"}>
          <CubeRotate />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
