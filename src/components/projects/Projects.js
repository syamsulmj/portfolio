import React from 'react';
import { Row, Col } from 'antd';
import ImageCarousel from './ImageCarousel';
import { getAllProjectInfo } from '../../lib/ProjectsInfo'

const Projects = () => {
  const allProjects = getAllProjectInfo();
  console.log(allProjects);

  return (
    <React.Fragment>
      <div className="projects">
      {allProjects.projects.map((projectRow, index) => (
          <Row className="custom-row" key={index}>
            {projectRow.rows.map((project, i) => (
              <Col span={12} key={i}>
                <ImageCarousel logo={project.toolsLogo} slides={project.projectInfo}/>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Projects;
