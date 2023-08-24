import React from "react";
import "./Header.scss"; // css file
import devxLogo from "../../../assets/logos/logo.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const loginPage = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="container-width ptb16 ">
        <div className="display-flex-spacebewtween">
          <div>
            <img src={devxLogo} alt="logo" className="width80" />
          </div>
          <div className="display-flex-row flex-gap alignCenter">
            <div className="clr_033A66 fontWeight600">Home</div>
            <div className="clr_033A66 fontWeight600">API Hub</div>
            <div className="clr_033A66 fontWeight600">Dev playground</div>
            <div className="clr_033A66 fontWeight600">Architecture</div>
            <div className="clr_033A66 fontWeight600">POC</div>
            <div className="clr_033A66 fontWeight600">Resources</div>
            <div>
              <Button
                variant="contained"
                disableElevation
                className="font14 textTransform bgclr_00ADEE"
                onClick={() => {
                  loginPage();
                }}
              >
                Login/Signup
              </Button>
            </div>
          </div>
        </div>
      </div>
      <hr className="container-width clr_0077BD opacity" />
    </div>
  );
};

export default Header;
