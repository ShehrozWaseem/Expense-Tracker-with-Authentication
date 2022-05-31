import React from 'react'
import './card.css'

function Card(props) {
    const classes = 'cardcss ' + props.className;
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card