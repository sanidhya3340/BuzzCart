import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


//  Routing
import PrivateRoute from './components/routing/PrivateRoute';

//screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from "./screens/LoginScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SportsScreen from "./screens/SportsScreen";
import ShoesScreen from "./screens/ShoesScreen";
import FashonScreen from "./screens/FashonScreen";
import ElectronicsScreen from "./screens/ElectronicsScreen";



//componets
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import Footer from './components/Footer';



function App({click}) {
  
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} show={sideToggle} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <PrivateRoute exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route exact path="/passwordreset" component={ResetPasswordScreen} />
          {/* <Route exact path="/" component={HomeScreen} /> */}
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/sports" component={SportsScreen} />
          <Route exact path="/shoes" component={ShoesScreen} />
          <Route exact path="/fashon" component={FashonScreen} />
          <Route exact path="/electronics" component={ElectronicsScreen} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
