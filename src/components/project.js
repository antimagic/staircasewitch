import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

const Project = (props) => {
  const images = useStaticQuery(graphql`
    query ProjectImages {
      allFile(filter: {name: {regex: "/project/"}}) {
        nodes {
          publicURL
          name
        }
      }
    }
  `).allFile.nodes

  const cover = images.filter(val => {
    return val.name === `project-${props.slug}`
  })[0]

  const coverStyle = {
    backgroundImage: `url(${cover.publicURL})`
  }

  return (
    <div className="row-outer">
      <article className="row">
        <a href={props.url} className="block-link screenreader-only">{props.title}</a>
        <div href={props.url} className={`cover ${props.slug}`} style={coverStyle}></div>
        <div className="copy">
          <h1><a href={props.url}>{props.title}</a></h1>
          {props.description.split('\n').map((text, i) => {
            return <p key={`${props.slug}-description-${i}`}>{text}</p>
          })}
        </div>
      </article>
    </div>
  )
}

export default Project