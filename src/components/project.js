import React from "react"
import cover from "../images/gatsby-astronaut.png"

const Project = (props) => {
  const coverStyle = {
    backgroundImage: `url(${cover})`
  }

  return (
    <div className="row-outer">
      <article className="row">
        <a href={props.url} className="block-link">g</a>
        <div href={props.url} className={`cover ${props.slug}`} style={coverStyle}></div>
        <div className="copy">
          <h1><a href={props.url}>{props.title}</a></h1>
          <p>{props.description}</p>
        </div>
      </article>
    </div>
  )
}

export default Project