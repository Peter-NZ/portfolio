import React from "react";

const layoutContext = React.createContext({
  sidenavOpen: true,
  toggleSidenav: () => {}
});

export default layoutContext;