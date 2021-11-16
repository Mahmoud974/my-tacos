import React from "react";

import { Switch, Route } from "react-router-dom";
import { ContextProvider } from "./components/Mycontext";

import Viandes from "./pages/Viandes";
import Sauces from "./pages/Sauces";
import Extra from "./pages/Extra";
import MyTacos from "./pages/MyTacos";

const App = () => {
  return (
    <ContextProvider>
      <Switch>
        <div className="bg-gray-800 h-screen flex items-center justify-center mx-auto ">
          <Route exact path="/" component={MyTacos} />
          <Route exact path="/viandes" component={Viandes} />
          <Route exact path="/sauces" component={Sauces} />
          <Route exact path="/extras" component={Extra} />
        </div>
      </Switch>
    </ContextProvider>
  );
};

export default App;
