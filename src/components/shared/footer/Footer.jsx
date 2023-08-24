import React from "react";
import devxLogo from "../../../assets/logos/logo-white.png";
import linkedIn from "../../../assets/icons/linkedIn.png";
import twitter from "../../../assets/icons/twitter.png";
import youtube from "../../../assets/icons/youtube.png";
import "./Footer.scss";

const Footer = () => {
  const sectionOne = () => {
    return (
      <div>
        <img src={devxLogo} alt="logo" className="width80" />

        <div className="mt30 pt10 clr_ffffff fontWeight700 font14">
          Follow Us
        </div>
        <div className="mt16 display-flex-spacebewtween">
          <img src={linkedIn} alt="icon" />
          <img src={twitter} alt="icon" />
          <img src={youtube} alt="icon" />
        </div>
      </div>
    );
  };

  const sectionTwo = () => {
    return (
      <div>
        <div className="clr_ffffff pb12 font14">Enterprise</div>
        <div className="clr_F8C300 pb12 font14">Build APIs</div>
        <div className="clr_F8C300 pb12 font14">Public API Hub</div>
        <div className="clr_F8C300 pb12 font14">Private API Hub</div>
        <div className="clr_F8C300 pb12 font14">API Hub for Business</div>
        <div className="clr_F8C300 pb12 font14">API Hub for Enterpirse</div>
      </div>
    );
  };

  const sectionThree = () => {
    return (
      <div>
        <div className="clr_ffffff pb12 font14">Enterprise</div>
        <div className="clr_F8C300 pb12 font14">Build APIs</div>
        <div className="clr_F8C300 pb12 font14">Public API Hub</div>
        <div className="clr_F8C300 pb12 font14">Private API Hub</div>
        <div className="clr_F8C300 pb12 font14">API Hub for Business</div>
        <div className="clr_F8C300 pb12 font14">API Hub for Enterpirse</div>
      </div>
    );
  };

  const sectionFour = () => {
    return (
      <div>
        <div className="clr_ffffff pb12 font14">Resources</div>
        <div className="clr_F8C300 pb12 font14">Ebooks & Guides</div>
        <div className="clr_F8C300 pb12 font14">Whitepages & Reports</div>
        <div className="clr_F8C300 pb12 font14">Videos</div>
        <div className="clr_F8C300 pb12 font14">Webinars</div>
        <div className="clr_F8C300 pb12 font14">Learn</div>
      </div>
    );
  };

  const sectionFive = () => {
    return (
      <div>
        <div className="clr_ffffff pb12 font14">Company</div>
        <div className="clr_F8C300 pb12 font14">About Us</div>
        <div className="clr_F8C300 pb12 font14">Contact</div>
        <div className="clr_F8C300 pb12 font14">Help Center</div>
        <div className="clr_F8C300 pb12 font14">Terms of Use</div>
        <div className="clr_F8C300 pb12 font14">Privacy Policy</div>
      </div>
    );
  };

  return (
    <div className="pt30 pb20 bgclr_033A66">
      <div className="container-width80 ">
        <div className="display-flex-spacebewtween">
          {sectionOne()}
          {sectionTwo()}
          {sectionThree()}
          {sectionFour()}
          {sectionFive()}
        </div>
        <hr className="clr_0077BD opacity" />

        <div className="textCenter pt10 font14 clr_ffffff fontWeight400">
          © 2023 L&T Technology Services Limited. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
