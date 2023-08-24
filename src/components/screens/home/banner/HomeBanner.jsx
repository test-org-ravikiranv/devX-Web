import React from "react";
import "./HomeBanner.scss";
import { Button } from "@mui/material";

const HomeBanner = () => {
  return (
    <div className="display-flex-column homebanner" style={{ height: "100%" }}>
      <div className="font34 fontWeight700 clr_033A66">Discover thousands</div>
      <div className="font34 fontWeight700 clr_033A66">of LTTS APIs</div>
      <div className="clr_808285 pt10 fontWeight500">
        Real sample code, and connect with a
      </div>
      <div className="clr_808285 fontWeight500">
        LTTS community of developers.
      </div>
      <div className="mt30 pt12">
        <Button
          variant="contained"
          disableElevation
          className="font14 textTransform bgclr_00ADEE width12"
        >
          Discover more
        </Button>
      </div>
    </div>
  );
};

export default HomeBanner;
