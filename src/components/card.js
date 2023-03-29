import React from 'react'

export default function Card(props) {

    let containerStyling = {
        display: "inline-block",
        background: "#d1d1d1",
        margin: "200px 0 0 200px",
        width: "300px",
        height: "300px"
    }

    let textStyle = {
        margin: "30px 0 0 30px"
    }

  return (
    <div style={containerStyling}>
        <h2 style={textStyle}>{props.title}</h2>
        <p style={textStyle}>{props.desc}</p>
    </div>
  )
}
