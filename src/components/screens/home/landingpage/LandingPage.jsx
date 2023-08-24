import React from "react";
import Header from "../../../shared/header/Header";
import Footer from "../../../shared/footer/Footer";
import HomeBanner from "../banner/HomeBanner";
import sampleImg from "../../../../assets/images/sampleImg.png";
import graphImg from "../../../../assets/images/graph-img.png";
import rightArrow from "../../../../assets/icons/right-arrow.png";
import apihubImg from "../../../../assets/icons/apihub.png";
import playGroundImg from "../../../../assets/icons/playground.png";
import resourcesImg from "../../../../assets/icons/resources.png";
import oneImg from "../../../../assets/icons/one.png";
import twoImg from "../../../../assets/icons/two.png";
import threeImg from "../../../../assets/icons/three.png";
import rightBlueImg from "../../../../assets/icons/right-blue.png";
import circleIcon from "../../../../assets/icons/circle-icon.png";
import "./LandingPage.scss";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";

const LandingPage = () => {
  const sectionOne = () => {
    return (
      <div className=" bg-arrow">
        <Grid container spacing={12}>
          <Grid item xs={6}>
            <div>
              <img src={graphImg} alt="img" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div
              className="display-flex-column pt16"
              style={{ height: "100%" }}
            >
              <div className="font30 fontWeight700 clr_033A66">
                Easy to control with
              </div>
              <div className="font30 fontWeight700 clr_033A66">
                DevX API hub.
              </div>
              <div className="font16 clr_808285 mt20 ptb20">
                id ex. amet, placerat facilisis vitae placerat enim. dolor
                hendrerit nibh non. sit nisi Nunc dignissim, eget placerat Ut
                Quisque est. vitae Lorem Sed ultrices malesuada dolor Vestibulum
                ex placerat. eu diam faucibus enim. Ut ex. nisi quam
              </div>

              <div className="mtb20 ptb20">
                <Button
                  variant="contained"
                  disableElevation
                  className="font14 textTransform bgclr_00ADEE width40"
                >
                  Browse APIs
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  };

  const sectionTwo = () => {
    const title = [
      { key: "Cloud engineering" },
      { key: "Cybersecurity" },
      { key: "Digital marketing" },
      { key: "DevOps" },
      { key: "Engineering Analytics" },
      { key: "Next-Gen Comms" },
      { key: "Security monitoring" },
      { key: "Threat monitoring" },
      { key: "Virtual reality" },
    ];

    return (
      <div className="pb30 width80 marginAuto">
        <div className="font34 fontWeight700 clr_033A66 textCenter pt30">
          Solving problems category
        </div>
        <div className="font34 fontWeight700 clr_033A66 textCenter">
          wise API challenges
        </div>

        <div className="font16 clr_808285 textCenter ptb20 width60 marginAuto">
          Aliquam a augue suscipit luctus neque purus ipsum neque diam dolor
          primis libero tempus, blandit and cursus varius
        </div>

        <div className="mtb30">
          <Grid container spacing={2}>
            {title.map((name, index) => (
              <Grid item xs={4} className="pt10" key={index}>
                <div className="display-flex-spacebewtween bgclr_ffffff p12 category-boxShadow">
                  <div className="clr_033A66">{name.key}</div>
                  <div>
                    <img src={rightArrow} alt="icon" />
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  };

  const sectionThree = () => {
    const title = [
      { name: "API Hub", img: apihubImg, icon: oneImg },
      { name: "Dev Play Ground", img: playGroundImg, icon: twoImg },
      { name: "Resources", img: resourcesImg, icon: threeImg },
    ];

    return (
      <div className="pb30 width80 marginAuto posRelative">
        <div className="font34 fontWeight700 clr_ffffff textCenter pt30">
          Our DevX services
        </div>

        <div className="font16 clr_ffffff textCenter ptb20 width50 marginAuto opacity">
          Aliquam a augue suscipit luctus neque purus ipsum neque diam dolor
          primis libero tempus, blandit and cursus varius
        </div>

        <div className="circlePos">
          <img src={circleIcon} alt="circleIcon" width={65} />
        </div>

        <Grid container spacing={1}>
          {title.map((titleName, index) => (
            <Grid item xs={4} className="pt10">
              <Card sx={{ marginTop: 4.5, position: "relative" }}>
                <div className="imgPos">
                  <img src={titleName.icon} alt="icon" />
                </div>

                <div className="textCenter p30">
                  <img src={titleName.img} alt="icon" width={75} height={70} />
                </div>

                <div className="textCenter font20 fontWeight700 clr_033A66">
                  {titleName.name}
                </div>

                <div className="font16 clr_808285 textCenter ptb20 width80 marginAuto opacity">
                  Aliquam a augue suscipit luctus neque purus ipsum neque diam
                  dolor primis libero tempus, blandit and cursus varius
                </div>

                <div className="display-content-center">
                  <div className="clr_00ADEE font14 fontWeight600 pb30">
                    Discover more
                  </div>
                  <div className="pl10">
                    <img src={rightBlueImg} alt="icon" />
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };

  const sectionFour = () => {
    return (
      <div
        className="ptb30 container-width img-container"
        style={{ paddingBottom: "100px" }}
      >
        <Grid container spacing={12}>
          <Grid item xs={6}>
            <div
              className="display-flex-column pt16"
              style={{ height: "100%" }}
            >
              <div className="font30 fontWeight700 clr_033A66">
                Easy to control with
              </div>
              <div className="font30 fontWeight700 clr_033A66">
                DevX API hub.
              </div>
              <div className="font16 clr_808285 mt20 ptb20">
                id ex. amet, placerat facilisis vitae placerat enim. dolor
                hendrerit nibh non. sit nisi Nunc dignissim, eget placerat Ut
                Quisque est. vitae Lorem Sed ultrices malesuada dolor Vestibulum
                ex placerat. eu diam faucibus enim. Ut ex. nisi quam
              </div>

              <div className="mtb20 ptb20">
                <Button
                  variant="contained"
                  disableElevation
                  className="font14 textTransform bgclr_00ADEE width40"
                >
                  Browse APIs
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="">
              <img src={sampleImg} alt="img" style={{ width: "100%" }} />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  };

  const sectionFive = () => {
    return (
      <div
        className="ptb30 container-width img-container1"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <Grid container spacing={12}>
          <Grid item xs={6}>
            <div className="">
              <img src={sampleImg} alt="img" style={{ width: "100%" }} />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div
              className="display-flex-column pt16"
              style={{ height: "100%" }}
            >
              <div className="font30 fontWeight700 clr_033A66">
                Easy to control with
              </div>
              <div className="font30 fontWeight700 clr_033A66">
                DevX API hub.
              </div>
              <div className="font16 clr_808285 mt20 ptb20">
                id ex. amet, placerat facilisis vitae placerat enim. dolor
                hendrerit nibh non. sit nisi Nunc dignissim, eget placerat Ut
                Quisque est. vitae Lorem Sed ultrices malesuada dolor Vestibulum
                ex placerat. eu diam faucibus enim. Ut ex. nisi quam
              </div>

              <div className="mtb20 ptb20">
                <Button
                  variant="contained"
                  disableElevation
                  className="font14 textTransform bgclr_00ADEE width40"
                >
                  Browse APIs
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  };

  const sectionSix = () => {
    return (
      <div className="container-width p30">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div
              className="display-flex-column pt16"
              style={{ height: "100%" }}
            >
              <div className="font36 fontWeight700 clr_F8C300">
                Starting with DevX
              </div>
              <div className="font36 fontWeight700 clr_ffffff">
                is easy, fast and free APIs
              </div>

              <div className="mt30 clr_ffffff font11">Terms and conditions</div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="mt24 pt24 textRight">
              <Button
                variant="contained"
                disableElevation
                className="font14 textTransform bgclr_F8C300 width40"
              >
                Free Login
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-banner">
        <Header />
        <div className="container-width" style={{ height: window.innerHeight }}>
          <HomeBanner />
        </div>
      </div>

      <div className="container-width">{sectionOne()}</div>
      <div className="bgclr_f6fcff">
        <div className="container-width ">{sectionTwo()}</div>
      </div>
      <div className="bg-blueImg">
        <div className="container-width ">{sectionThree()}</div>
      </div>
      <div>
        <div className="container-width ">{sectionFour()}</div>
      </div>
      <div>
        <div className="container-width ">{sectionFive()}</div>
      </div>
      <div className="gradient">
        <div className="container-width ">{sectionSix()}</div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
