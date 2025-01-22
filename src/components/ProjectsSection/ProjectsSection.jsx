import "./ProjectsSection.css";
import ProjectsData from "../../data/projects.json";
import RepoIcon from "../../assets/repo.svg";
import LinkIcon from "../../assets/link.svg";

function ProjectsSection() {
  return (
    <section id="projects-section">
      <h2>Projects</h2>
      <div className="projects-cards-container">
        {ProjectsData.map((project, index) => {
          return (
            <article key={index} className="project-card">
              {/* card's top section */}
              <div className="top-section">
                <h3>{project.project_name}</h3>
                <div className="links">
                  {
                    // links to repos
                    project.repository_links.map((link, index) => {
                      return (
                        <a href={link} key={index} target="_blank">
                          <img src={RepoIcon} alt="github icon" />
                        </a>
                      );
                    })
                  }
                  <a href={project.deployed_version_link} target="_blank">
                    <img src={LinkIcon} alt="app link icon" />
                  </a>
                </div>
              </div>
              {/* card's low section */}
              {/* <div className="low-section"> */}
                <p>{project.description}</p>
                <div className="stack-row">
                  {project.tech_stack.map((stack, stackIndex) => {
                    return <span key={stackIndex}>{stack}</span>;
                  })}
                </div>
              {/* </div> */}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
