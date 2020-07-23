import React, { Component } from 'react';
import  './style.css';
import  { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:["doanh.", "tuan anh.", "ha.", "ngoc."]
        }
    }
    render() {
        let str = "";
        return (
            <div>
                <header className="wrapper">
                    {/* phần chạy khuyến mãi */}
                    <div className="wrapper_promotion">
                        <p>Tưng Bừng Khuyến Mại</p>  
                    </div>
                    {/* phần menu */}
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
                    {/* phần slider */}
                    <div className="wrapper_slider">
                        <img src="../images/" alt=""/>
                    </div>
                </header>
            </div>
        );
    }
}

export default Home;