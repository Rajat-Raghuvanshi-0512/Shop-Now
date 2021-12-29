import './App.css';
import React, { useContext } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Login from './components/Authenticate/Login';
import { History } from './components/History/History';
import NavMini from './components/Navbar/NavMini';
import SignUp from './components/Authenticate/SignUp';
import Services from './components/Services/Services';
import GiftCard from './components/Vouchers/GiftCard';
import LoadingBar from 'react-top-loading-bar'
import Product from './components/Cards/Product';
import Cart from './components/Cart/Cart';
import Context from './Context/Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavMiniRoute = () => {
  return (
    <>
      <Route exact path='/category/fresh'>
        <Home limit={10} />
      </Route>
      <Route exact path='/category/electronics'>
        <Home category='electronics' />
      </Route>
      <Route exact path='/history'>
        <History />
      </Route>
      <Route exact path='/services'>
        <Services />
      </Route>
      <Route exact path='/voulchers/giftcard'>
        <GiftCard />
      </Route>
      <Route exact path='/category/wclothing'>
        <Home category={`women's clothing`} />
      </Route>
      <Route exact path='/category/mclothing'>
        <Home category={`men's clothing`} />
      </Route>
      <Route exact path='/category/jewelery'>
        <Home category='jewelery' />
      </Route>
      <Route exact path='/products/:id'>
        <Product />
      </Route>
    </>
  )
}

const App = () => {
  const { progress } = useContext(Context)
  return (
    <>
      <Navbar />
      <NavMini />
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={2.7}
      />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/history'>
          <History />
        </Route>
        <Route exact path='/upload'>
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <NavMiniRoute />
      </Switch>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
