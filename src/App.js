import React, { Component } from 'react';
import './App.css';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { button, Carousel } from 'react-bootstrap'
import { Modal, Button } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

  render() {
    return (
      <div>
        <div className="wrapper">
          {/* ===================phần chạy khuyến mãi =======================*/}
          <div className="wrapper_promotion">
            <p>Tưng Bừng Khuyến Mại</p>
          </div>
          {/*======================= phần menu ================*/}
          <nav className="wrapper_menu">
            <h3>happy kids</h3>
            <div className="wrapper_menu-nav">
              <div className="menu-nav_login">
                <UserOutlined /> LogIn
                  </div>
              <nav className="menu-nav_dir">
                <ul className="menu-nav_dir-submenu">
                  <li>Home</li>
                  <li>Shop Colection</li>
                  <li>Our Story</li>
                  <li>Contact</li>
                </ul>
              </nav>
              <div className="menu-nav_cart">
                <ShoppingCartOutlined />
              </div>
            </div>
          </nav>
          {/*============== phần slider ===================*/}
          <div className="wrapper_slider">
            <Carousel >
              <Carousel.Item>
                <img
                  className=""
                  src="https://i.imgur.com/XNQSx0z.jpg"
                  alt="First slide"
                  style={{width:"100%",height:"35rem", objectFit:"cover"}}
                />
                <Carousel.Caption>
                  {/* <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=""
                  
                  src="https://i.imgur.com/XobVoWT.jpg"

                  alt="Third slide"
                  style={{width:"100%",height:"35rem", objectFit:"cover"}}
                />

                <Carousel.Caption className="silder_caption">
                  <h3 style={{fontSize:"5rem",fontWeight:"10"}} >New Collection</h3>
                  <button style={{background:"transparent", border:" 0.5px solid white", color:"white", padding:"0.5rem", borderRadius:"2px"}}>Shop Now</button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=""
                  src="https://i.imgur.com/bjAfMRA.jpg"
                  alt="Third slide"
                  style={{width:"100%",height:"35rem", objectFit:"cover"}}
                />

                <Carousel.Caption>
              
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          {/*=================== phần new arrivals =======================*/}
          <div className="wrapper_products">
                  <h3 style={{textAlign:"center", paddingTop:"2rem"}}>New Arrivals</h3>
                  <div className="wrapper_products-product">
                    <div className="product">
                      <div className="product_image">
                        <img src="" alt=""/>
                        <div className="product_image-quickView">hello xin chào tất cả các bạn</div>
                      </div>
                      <div className="product_btn">
                        <span>I'm a product</span><br/>
                        <span>$99.9</span>
                        
                      </div>
                    </div>
                    <div className="product"></div>
                    <div className="product"></div>
                    <div className="product"></div>
                  </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


