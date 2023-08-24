import React from "react";
import Grid from "@mui/material/Grid";
import ellipse from "../../../assets/icons/ellipse.svg";
import Team from "../../../assets/icons/team.svg";
import Domain from "../../../assets/icons/domain.svg";
import Calender from "../../../assets/icons/calender.svg";
import Verified from "../../../assets/icons/verified.svg";

const ProjectHeader = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <div className="display-flex-row alignCenter">
          <img src={ellipse} className="width7 pr10" />
          <div>
            <div className="clr_033A66">Supply chain management</div>
            <div className="clr_808285 font14">
              Real sample code, and connect with a LTTS community of developers.
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={4}>
        <Grid container className="pt8">
          <Grid item xs={3}>
            <div className="display-flex-row alignCenter">
              <img src={Team} />
              <div className="font10">By AiKno Team</div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="display-flex-row alignCenter">
              <img src={Domain} />
              <div className="font10">Supply Chain</div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="display-flex-row alignCenter">
              <img src={Calender} />
              <div className="font10">1 months ago</div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="display-flex-row alignCenter">
              <img src={Verified} />
              <div className="font10">Verified</div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectHeader;
