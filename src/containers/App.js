import React from "react";
import Shell from "./Shell/Shell";
import { BrowserRouter } from "react-router-dom";
import {
  routeContext as RouteContext,
  initialRouteContext,
} from "../context/RouteContext";

function App() {
  return (
    <BrowserRouter>
      <RouteContext.Provider value={initialRouteContext}>
        <div className="App">
          <Shell />
        </div>
      </RouteContext.Provider>
    </BrowserRouter>
  );
}

export default App;
