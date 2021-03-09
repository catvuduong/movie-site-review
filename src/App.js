import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./pages/page-not-found";
import { routeAdmin, routesHome } from "./routes";
import HomeTemplate from './templates/home-template';
import AdminTemplate from './templates/admin-template';
import Admin from './pages/admin/admin';

const showMenuHome = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  };
};

const showMenuAdmin = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <AdminTemplate
          key={index} path={item.path} exact={item.exact} Component={item.component}
        ></AdminTemplate>
      );
    });
  };
};

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Navbar /> */}
        <Switch>
          {showMenuHome(routesHome)}
          {showMenuAdmin(routeAdmin)}
          <Route path="/admin" component={Admin}></Route>
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
