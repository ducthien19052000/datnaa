import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../pages/layout/Main";
import MainAdmin from "../pages/layout/MainAdmin";
import CategoryAdmin from "../pages/view/Admin/Category/index.jsx";
import Dashboard from "../pages/view/Admin/Dasboard";
import Food from "../pages/view/Admin/Food";
import Invoice from "../pages/view/Admin/Invoice";
import Login from "../pages/view/Admin/Login";
import Checkout from "../pages/view/Main/Checkout";
import FoodDetail from "../pages/view/Main/FoodDetail";
import Home from "../pages/view/Main/Home";
import Product from "../pages/view/Main/Product";
import Category from "../pages/view/Main/ProductCategory";
import OAuth2RedirectHandler from "../pages/view/Main/User/OAuth2/OAuth2RedirectHandler";
import PrivateRoute from "./PrivateRouter";

const Routers = () => {
  // if(isLogin){
  //     setCheck(true)
  // }
  // else(setCheck(false))

  return (
    <Router>
      <Switch>
        <Route path="/admin/login">
          <Login />
        </Route>
        <Route path="/admin/:path?/:path?" exact>
          <MainAdmin>
            <Switch>
              <Route path="/admin/" exact>
               <Dashboard/>
            
              </Route>
              <Route path="/admin/food" exact>
                
                <Food />
              </Route>

              <Route path="/admin/category">
                <CategoryAdmin />
              </Route>
              <Route path="/admin/invoice">
                <Invoice />
              </Route>
            </Switch>
          </MainAdmin>
        </Route>
        <Route>
          <Main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/product">
                <Product />
              </Route>
              <Route path="/food/:id">
                <FoodDetail />
              </Route>
              <PrivateRoute
                path="/checkout"
                component={Checkout}
              ></PrivateRoute>
              <Route path="/category/:id">
                <Category />
              </Route>
              <Route
                path="/oauth2/redirect"
                component={OAuth2RedirectHandler}
              ></Route>
            </Switch>
          </Main>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;
