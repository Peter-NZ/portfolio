import React from "react";
import { Route } from "react-router-dom";
import * as Pages from "./components/Sections";
import { routeContext as RouteContext } from "./context/RouteContext";
const Routes = () => {
  return (
    <RouteContext.Consumer>
      {(value) => (
        <React.Fragment>
          <Route path={value.routePaths.home} exact component={Pages.Home}></Route>
          <Route path={value.routePaths.about} exact component={Pages.About}></Route>
          <Route
            path={value.routePaths.projects}
            exact
            component={Pages.Projects}
          ></Route>
          <Route
            path={value.routePaths.skills}
            exact
            component={Pages.Skills}
          ></Route>
          <Route
            path={value.routePaths.contact}
            exact
            component={Pages.Contact}
          ></Route>
        </React.Fragment>
      )}
    </RouteContext.Consumer>
  );
};

export default Routes;
