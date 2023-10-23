import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Blog from './components/views/Blog/Blog';
import CartPage from './components/views/CartPage/CartPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import SearchPage from './components/views/SearchPage/SearchPage';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={'/register'} component={RegisterPage} />
          <Route exact path={'/login'} component={LoginPage} />
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/shop/:categoryId'} component={ProductList} />
          <Route exact path={'/blog'} component={Blog} />
          <Route exact path={'/product/:productId'} component={ProductPage} />
          <Route exact path={'/cart'} component={CartPage} />
          <Route exact path={'/search'} component={SearchPage} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
