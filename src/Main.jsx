import React from 'react'
import './index.css'
function Main() {
  const currentTime = new Date().getHours()
  let greeting
  let color = {}
  if (currentTime <= 12) {
    greeting = 'Good Morning'
    color.color = 'rgb(236 235 225 / 88%)'
    document.body.style.background = '#008000a3'
  } else if (currentTime > 12 && currentTime < 17) {
    greeting = 'Good Afternoon'
    color.color = '#58dfb5ad'
    document.body.style.background = '#ee904ae0'
  } else if (currentTime >= 17 && currentTime < 20) {
    greeting = 'Good Evening'
    color.color = 'rgb(83 82 77)'
    document.body.style.background = 'rgb(141 139 131)'
  } else {
    greeting = 'Good Night'
    color.color = '#000'
    document.body.style.background = '#8e93d5'
  }
  return (
    <React.Fragment>
      <div>
        <h1>
          Hello Sir,<span style={color}>{greeting}</span>
        </h1>
      </div>
    </React.Fragment>
  )
}
export default Main
