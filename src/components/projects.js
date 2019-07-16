import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "./project"

const Projects = () => {
  const projects = useStaticQuery(
    graphql`
      query ProjectsData {
        allProjectsJson {
          nodes {
            title
            slug
            description
            url
          }
        }
      }
    `
  ).allProjectsJson.nodes

  return (
    <div className="wrapper" key="projectsListing">
      {projects.map(project => (
        <Project {...project} key={project.slug} />
      ))}
    </div>
  )
}

export default Projects
