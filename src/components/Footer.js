import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="wrapper_footer">
                    <div className="footer_link">
                        <div className="footer_link-container">
                            <div className="link_left">
                                <ul>
                                    <li>Home</li>
                                    <li>Collection</li>
                                    <li>Our Shop</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className="link_center">
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-instagram-square"></i>
                            </div>
                            <div className="logo">
                                happy days
                            </div>
                            <div className="link_right">
                                <ul>
                                    <li>Shipping & Returns</li>
                                    <li>Store Policy</li>
                                    <li>Payment Methods</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer_inforCustomer"></div>
                </div>
            </div>
        );
    }
}

export default Footer;