import React from "react";
import Header from "../../../shared/header/Header";
import ProjectHeader from "../../../shared/project-header/ProjectHeader";

const ProjectDetailPage = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="container-width ptb16">
        <ProjectHeader></ProjectHeader>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
