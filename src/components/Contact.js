import React, { Component } from "react";
import "./contact.css";
class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact_shop">
          <h3 className="head">Contact Us</h3>
          <div className="shop_inner_inf">
            <div className="contact_visit">
              <h6>VISIT US</h6>
              <span className="content">
                500 Terry Francois St.<br/>
                San Francisco  CA 94158<br/>
                 123-456-7890 <br/>
              </span>
            </div>
            <div className="contact_time">
                <h6>  OPENING HOURS</h6>
              <span>
                 Mon - Fri: 7am - 10pm ​​<br/>
                 Saturday: 8am - 10pm<br/>
                ​Sunday: 8am - 11pm <br/>
              </span>
            </div>
            <div className="contact_customers">
              <h6>CUSTOMER SERVICE  </h6>
              <span>
                1-800-000-000<br/>
                  123-456-7890 <br/>
                  info@my-domain.com<br/>
            </span>
            </div>
        </div>
            <div className="contact_section">
                <form action="#" >
                    <input style={{marginRight:"35px"}} className="contact_infor " type="text" name="Name" placeholder="Name" required/>
                    <input class="contact_infor" type="email" name="Email" placeholder="Email" required/>
                    <br/>
                    <input class=" subject" type="text" name="Subject" placeholder="Subject" required/>
                    <br />
                    <textarea name="Message" placeholder="Message" required />
                    <br/>
                    <input onClick={this.showModal} className="btn-sm" type="Submit"/>
                </form>
            </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13417.785779016624!2d-117.24515012644628!3d32.78041979553298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80deaa76214d8b9b%3A0x7d7b08c967ffa67!2sMission%20Bay!5e0!3m2!1svi!2s!4v1595696350703!5m2!1svi!2s"
            className="map"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
    </div>
    </div>

     
    );
  }
}

export default Contact;
