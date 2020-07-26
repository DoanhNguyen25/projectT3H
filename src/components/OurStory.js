import React, { Component } from "react";
import anh1 from "../images/anh1.jpg";

class OurStory extends Component {
  render() {
    return (
      <div class="story__container" style={{fontFamily: "'Nunito', sans-serif"}}>
        <img
          src={anh1}
          alt="sneaker"
          style={{ width: "100%", height: "35rem", objectFit: "cover" }}
        />
        <h3 style={{ textAlign: "center", padding: "40px",fontWeight:"200px" }}>Our Story</h3>
        <div className="story-content" style={{width: "60%", textAlign:"center", margin:"20px auto",color:"#777"}}>
          <span >
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me and you can start
            addsting your own content and make changes to the font. Feel free to
            drag and drop me anywhere you like on your page. I’m a great place
            for you to tell a story and let your users know a little more about
            you.
          </span>
          <br/>
          <br/>
          <span>
            ​This is a great space to write long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide. Tell your visitors the story of how you came up with
            the idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </span>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}

export default OurStory;
