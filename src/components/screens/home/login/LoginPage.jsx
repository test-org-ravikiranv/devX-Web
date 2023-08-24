import React, { useEffect } from "react";
import "./LoginPage.scss";
import Grid from "@mui/material/Grid";
import devxLogo from "../../../../assets/logos/logo-white.png";
import arrow from "../../../../assets/logos/dot-arrow.png";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  let page = window.location.pathname;
  page = page.replace(/[/]/g, "");
  console.log(page);
  const navigate = useNavigate();

  const forgotPassword = () => {
    navigate("/forgotPassword");
  };

  const backToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <Grid container className="gridHeight">
        <Grid item xs={6} className="left">
          <div className="p20">
            <img src={devxLogo} alt="logo" className="ml30 logo" />
          </div>
          <div>
            <img src={arrow} alt="arrow" className="arrow" />
          </div>
          <div className="left-center">
            <h2 class="clr_ffffff font30">
              Discover and connect to DevX of APIs.
            </h2>
            <p class="clr_ffffff font18 txtPadding">
              Learn in-demand skills, build solutions with real sample code, and
              connect with a LTTS community of developers.
            </p>
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          className={page === "signup" ? "signup-right-center" : "right-center"}
        >
          {page === "login" ? (
            <div class="roundBox">
              <h2>Login</h2>
              <p className="clr_808285 font14">
                Access your account by entering your email and password!
              </p>
              <div>
                <InputLabel className="inputColor" shrink>
                  Email*
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  className="inputWidth"
                />
              </div>
              <div className="mt16">
                <InputLabel className="inputColor" shrink>
                  Password*
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  className="inputWidth"
                />
              </div>
              <p
                className="clr_0077BD font12 cursorPointer"
                onClick={() => {
                  forgotPassword();
                }}
              >
                Forgot Password?
              </p>
              <div>
                <Button
                  variant="contained"
                  disableElevation
                  className="font14 textTransform bgclr_00ADEE inputWidth"
                  onClick={() => {
                    navigate("/projectDetails");
                  }}
                >
                  Login
                </Button>
              </div>
              <p
                className="clr_0077BD font12 cursorPointer"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Don't have an account? Sign Up
              </p>
            </div>
          ) : page === "forgotPassword" ? (
            <div class="roundBox">
              <h2>Reset Password</h2>
              <p className="clr_808285 font14">
                Reset your password now to regain access to your account.
              </p>
              <div>
                <InputLabel className="inputColor" shrink>
                  Old Password*
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  className="inputWidth"
                />
              </div>
              <div className="mt16">
                <InputLabel className="inputColor" shrink>
                  Password*
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  className="inputWidth"
                />
              </div>

              <div className="mt16">
                <InputLabel className="inputColor" shrink>
                  Confirm Password*
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  className="inputWidth"
                />
              </div>

              <div className="mt20">
                <Button
                  variant="contained"
                  disableElevation
                  className="font14 textTransform bgclr_00ADEE inputWidth"
                  // onClick={() => {
                  //   loginPage();
                  // }}
                >
                  Change
                </Button>
              </div>
              <p
                className="back font14 textCenter cursorPointer"
                onClick={() => {
                  backToLogin();
                }}
              >
                Back
              </p>
            </div>
          ) : (
            <div class="roundBox">
              <h2>Sign Up</h2>
              <p className="clr_808285 font14">
                Are you ready to experience something new? Let's get started!
              </p>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                <Grid item xs={6}>
                  <InputLabel className="inputColor" shrink>
                    Name*
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel className="inputColor" shrink>
                    PS Number*
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel className="inputColor" shrink>
                    Role*
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel className="inputColor" shrink>
                    Location*
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
              <div>
                <InputLabel className="inputColor mt8" shrink>
                  Email*
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  className="inputWidth"
                />
              </div>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                <Grid item xs={6}>
                  {/* <Item>1</Item> */}
                  <InputLabel className="inputColor mt8" shrink>
                    Password*
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel className="inputColor mt8" shrink>
                    Confirm Password*
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>

              <div className="mt20">
                <Button
                  variant="contained"
                  disableElevation
                  className="font14 textTransform bgclr_00ADEE inputWidth"
                  // onClick={() => {
                  //   loginPage();
                  // }}
                >
                  Sign Up
                </Button>
              </div>
              <p
                className="back font14 textCenter cursorPointer"
                onClick={() => {
                  backToLogin();
                }}
              >
                Already have an account? Login
              </p>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
