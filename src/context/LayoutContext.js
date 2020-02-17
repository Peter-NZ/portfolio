import React from "react";

const layoutContext = React.createContext({
  sidenavOpen: true,
  toggleSidenav: () => {
      console.log('test');
  }
});

export default layoutContext;