import React from "react"

const Project = (props) => {
  return (
    <div className="row-outer">
      <article className="row">
        <a href={props.url} className="block-link">g</a>
        <div href={props.url} className={`cover ${props.slug}`}></div>
        <div className="copy">
          <h1><a href={props.url}>{props.title}</a></h1>
          <p>{props.description}</p>
        </div>
      </article>
    </div>
  )
}

export default Project