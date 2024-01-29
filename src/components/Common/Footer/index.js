import React from "react";
import  "./styles.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import TwitterIcon from "@mui/icons-material/Twitter";
import { RWebShare } from "react-web-share";
// import { APP_URL } from "../../constants";
function Footer() {

  const APP_URL = "https://crypto-tracker-sg.vercel.app/";
  return (
    <div className="footer">
      <div id="footer" className="footer-wrapper">
      <h1 className="heading-footer">CryptoTracker.</h1>
      <div className="socials">
        <a href="https://www.instagram.com/sanjughosh0_0/">
          <InstagramIcon className="socialIcons" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100010224462223">
          <FacebookIcon className="socialIcons"/>
        </a>
        {/* <a href="www.twitter.com">
          <TwitterIcon className="socialIcons" />
        </a> */}
        <a href="mailto: soumikbuie2001@gmail.com">
          <EmailIcon className="socialIcons" />
        </a>
        <RWebShare
          data={{
            text: "Checkout my crypto tracker made using React!",
            url: APP_URL,
            title: "Crypto Tracker",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <InsertLinkIcon className="socialIcons" />
        </RWebShare>
      </div>
    </div>
    </div>
    
  );
}

export default Footer;
