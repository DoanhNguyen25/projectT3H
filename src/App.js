import React, { Component } from 'react';
import './App.css';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
// import { Carousel } from 'react-bootstrap'
// import Modal from './Modal';
import Contact from './components/Contact';
import Home from './components/Home';
import ShopCollection from './components/ShopCollection';
import OurStory from './components/OurStory';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="wrapper">
          {/* ===================phần chạy khuyến mãi =======================*/}
          <div className="wrapper_promotion">
            <p>Tưng Bừng Khuyến Mại</p>
          </div>
          {/* ================kết thúc phần khuyến mãi */}
          {/*======================= phần menu ================*/}
          <nav className="wrapper_menu">
            <h3>happy kids</h3>
            <div className="wrapper_menu-nav">
              <div className="menu-nav_login">
                <UserOutlined /> LogIn
                  </div>
              <nav className="menu-nav_dir">
                <ul className="menu-nav_dir-submenu">
                  <li>
                    <Link to="/Home">Home</Link>
                  </li>
                  <li>
                    <Link to="/ShopCollection">Shop Colection</Link>
                  </li>
                  <li>
                    <Link to="/OurStory">Our Story</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="menu-nav_cart">
              <ShoppingCartOutlined />
              </div>
            </div>
          </nav>
          {/* ============kết thúc phần menu =============*/}
          
        </div>

        <Switch>
          <Route  exact path='/Home' component={ Home}>
                <Home/>
          </Route>
          <Route path='/ShopCollection' component={ ShopCollection }>
                  <ShopCollection></ShopCollection>
          </Route>
          
          <Route path='/OurStory' component={ OurStory }>
            <OurStory/>
          </Route>
          <Route path='/Contact' component={ Contact }>
            <Contact/>
          </Route>
        

        </Switch>
        <Footer />
      </Router>
      
    );
  }
}

export default App;


