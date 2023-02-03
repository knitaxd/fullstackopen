import React, { useState } from 'react'

const History = ({allClicks}) => {
  if(allClicks.length === 0){
    return (
      <div>The App is used by pressing the buttons</div>
    )  
  }
  return (
    <div>
      button press history: {allClicks}
    </div>
  )

}

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}


export const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const [allClicks, setAllClicks] = useState([])

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setClicks({...clicks,left: clicks.left + 1 })
  
  }
  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setClicks({...clicks, right: clicks.right + 1 })
  }

  return (
    <div>
      {clicks.left}
      <Button onClick={handleLeftClick} text='Left'/>
      <Button onClick={handleRightClick} text='Right'/>
      {clicks.right}
      <History allClicks={allClicks.join(' ')}/>
    </div>
  )
}
