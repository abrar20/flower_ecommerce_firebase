import React,{useEffect} from 'react';
import { useDispatch } from "react-redux";
import {Switch,Route} from 'react-router-dom';
import { checkUserSession } from "./redux/User/user.actions";

import './default.scss';
//hoc
import WithAuth from './hoc/withAuth'
import WithAdminAuth from './hoc/withAdminAuth'
//Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout'
//pages
import About from './Pages/About/About';
import Payment from './Pages/Payment/index';
import Dashboard from './Pages/Dashboard/index';
import Order from './Pages/Order/index'
import Recovery from './Pages/Recovery/index';
import Cart from './Pages/Cart/index';
import ProductDetails from './Pages/ProductDetails/index';
import Products from './Pages/Products/index';
import Login from './Pages/Login/index';
import HomePage from './Pages/HomePage/HomePage';
import Registration from './Pages/Registration';
import Admin from './Pages/Admin/index'

function App() {
  const dispatch =useDispatch();
  

  useEffect(()=>{
    dispatch(checkUserSession());
  },[]);
  return (
    
      <Switch>
        <Route exact path="/" render={()=>(
          <MainLayout>
            <HomePage/>
          </MainLayout>
        )}/>
        <Route path="/login" render={()=>(
          <MainLayout>
            <Login/>
          </MainLayout>
        )}/>
        <Route path="/register" render={()=>(
          <MainLayout>
            <Registration/>
          </MainLayout>
        )}/>
        <Route exact path="/products" render={() => (
          <MainLayout>
            <Products />
          </MainLayout>
        )} />
        <Route path="/products/:filterType" render={() => (
          <MainLayout>
            <Products />
          </MainLayout>
        )} />
        <Route path="/product/:productID" render={() => (
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        )} />
        <Route path="/cart" render={() => (
          <MainLayout>
            <Cart />
          </MainLayout>
        )} />
        <Route path="/about" render={() => (
          <MainLayout>
            <About/>
          </MainLayout>
        )} />
        <Route path="/recovery" render={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
        )} />
        <Route path="/dashboard" render={() => (
          <WithAuth>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </WithAuth>
        )} />
        <Route path="/order/:orderID" render={() => (
          <WithAuth>
            <DashboardLayout>
              <Order />
            </DashboardLayout>
          </WithAuth>
        )} />
        <Route path="/payment" render={() => (
          <WithAuth>
            <MainLayout>
              <Payment />
            </MainLayout>
          </WithAuth>
        )} />
        <Route path="/admin" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        )} />
      </Switch>
  );
}

export default App;
