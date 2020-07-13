import React from 'react';
//import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
//import HomePage from './Pages/HomePage/HomePage';
//import About  from './Pages/About/About';
//import Contact from './Pages/Contact/Contact'
//import Cart from './Pages/Cart/Cart'
import Footer from './Components/Footer/Footer';
import routes from './Routes/routes';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
         {/* <Navbar />
         <HomePage />
         <About />
         <Contact />
         <Cart />
         <Footer /> */}
    <Router>
      <Navbar />
      <Switch>
        {
          routes.map((route, k) => {
            return <Route path={route.path} exact={route.exact} component={route.component} key={route.name}
            />
          })
        }
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
