import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//componets
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import Auth from './components/auth/auth';
import Footer from './components/Footer';



function App({click}) {
  
  const [sideToggle, setSideToggle] = useState(false);


  return (
    <Router>
      {/* Navbar
     Sidedrawer
     Backdrop
     Productscreen
     CartScreen */}
      <Navbar click={() => setSideToggle(true)} show={sideToggle} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
