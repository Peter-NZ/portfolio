import React from "react";
import Shell from "./Shell/Shell";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Shell />
      </div>
    </BrowserRouter>
  );
}

export default App;
