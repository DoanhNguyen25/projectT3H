import React, { Component } from 'react';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Carousel } from 'react-bootstrap'
import Modal from '../Modal';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    componentDidMount() {
        window.addEventListener('click', this.outsideClick);
    }
    outsideClick = (x) => {
        if (x.target.className === "modal display_block") {
            this.setState({ show: false })
        }
    }
    showModal = () => {
        this.setState({ show: true })
    }

    closeModal = () => {
        this.setState({ show: false })
    }
    render() {
        return (
            <>
                {/*============== phần slider ===================*/}
                <div className="wrapper_slider">
                    <Carousel style={{ zIndex: "1" }}>
                        <Carousel.Item>
                            <img
                                className=""
                                src="https://i.imgur.com/XNQSx0z.jpg"
                                alt="First slide"
                                style={{ width: "100%", height: "35rem", objectFit: "cover" }}
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
                                style={{ width: "100%", height: "35rem", objectFit: "cover" }}
                            />

                            <Carousel.Caption className="silder_caption">
                                <h3 style={{ fontSize: "5rem", fontWeight: "10" }} >New Collection</h3>
                                <button style={{ background: "transparent", border: " 0.5px solid white", color: "white", padding: "0.5rem", borderRadius: "2px" }}>Shop Now</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className=""
                                src="https://i.imgur.com/bjAfMRA.jpg"
                                alt="Third slide"
                                style={{ width: "100%", height: "35rem", objectFit: "cover" }}
                            />

                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* ============kết thúc phần sliders */}
                {/*=================== phần new arrivals =======================*/}
                <div className="wrapper_products">
                    <h3 style={{ textAlign: "center", paddingTop: "1rem" }}>New Arrivals</h3>
                    <div className="wrapper_products-product">
                        <div className="product">
                            <div className="product_image">
                                <img src="" alt="" />
                                <div className="product_image-quickView">Quick View</div>
                            </div>
                            <div className="product_btn">
                                <div style={{ margin: "10px 0 0 0" }}>
                                    <span>I'm a product</span><br />
                                    <span>$99.9</span><br /><br />
                                </div>
                                <button className="btn_deco" onClick={this.showModal}>Add to Cart</button>
                                <Modal show={this.state.show} closeBtn={this.closeModal}></Modal>
                            </div>
                        </div>

                        <div className="product">
                            <div className="product_image">
                                <img src="" alt="" />
                                <div className="product_image-quickView">Quick View</div>
                            </div>
                            <div className="product_btn">
                                <div style={{ margin: "10px 0 0 0" }}>
                                    <span>I'm a product</span><br />
                                    <span>$99.9</span><br /><br />
                                </div>
                                <button className="btn_deco" onClick={this.showModal}>Add to Cart</button>
                                <Modal show={this.state.show} closeBtn={this.closeModal}></Modal>
                            </div>
                        </div>

                        <div className="product">
                            <div className="product_image">
                                <img src="" alt="" />
                                <div className="product_image-quickView">Quick View</div>
                            </div>
                            <div className="product_btn">
                                <div style={{ margin: "10px 0 0 0" }}>
                                    <span>I'm a product</span><br />
                                    <span>$99.9</span><br /><br />
                                </div>
                                <button className="btn_deco" onClick={this.showModal}>Add to Cart</button>
                                <Modal show={this.state.show} closeBtn={this.closeModal}></Modal>
                            </div>
                        </div>

                        <div className="product">
                            <div className="product_image">
                                <img src="" alt="" />
                                <div className="product_image-quickView">Quick View</div>
                            </div>
                            <div className="product_btn">
                                <div style={{ margin: "10px 0 0 0" }}>
                                    <span>I'm a product</span><br />
                                    <span>$99.9</span><br /><br />
                                </div>
                                <button className="btn_deco" onClick={this.showModal}>Add to Cart</button>
                                <Modal show={this.state.show} closeBtn={this.closeModal}></Modal>
                            </div>
                        </div>
                    </div><br /><br /><br /><br />
                    <button style={{ width: "8%", margin: "0 auto", borderStyle: "none", padding: "0.5rem", backgroundColor: "black", color: "white", cursor: "pointer" }}>Shop All</button>
                </div>
                {/* ============kết thúc phần new arrivals================= */}
                {/* ========footer========== */}
                {/* <div className="wrapper_footer">
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
                </div> */}
            </>
        );
    }
}

export default Home;